import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const port = 3000;
const db = new pg.Client({
  user: process.env.user,
  host: process.env.host,
  database: process.env.name,
  password: process.env.password,
  port: process.env.port,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function updateList() {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  let items = [];
  result.rows.forEach((node) => {
    items.push({ id: node.id, title: node.title });
  });
  return items;
}
app.get("/", async (req, res) => {
  const x = await updateList();
  console.log(x);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: x,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  if (item == "") {
    res.redirect("/");
  } else {
    try {
      await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
      res.redirect("/");
    } catch (error) {
      console.log(err);
    }
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (error) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = ($1)", [id]);
    res.redirect("/");
  } catch (error) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
