# Todo List Application

A simple, elegant todo list web application built with Node.js, Express, and PostgreSQL. This application allows users to create, read, update, and delete todo items with a clean and intuitive interface.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **PostgreSQL**: Database to store the to-do list items.
- **EJS (Embedded JavaScript)**: Templating engine to render HTML pages.

## Features

- Create new todo items
- View all todo items
- Edit existing todo items
- Delete todo items
- Persistent storage using PostgreSQL database
- Clean and responsive interface using EJS templating

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or higher)
- PostgreSQL
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Install dependencies:

```bash
npm i
```

3. Create a `.env` file in the root directory with the following variables:

```env
user=your_postgres_username
host=your_host
name=your_database_name
password=your_postgres_password
port=your_postgres_port
```

4. Set up your PostgreSQL database:

```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);
```

5. Start the server:

```bash
node index.js
```

The application will be available at `http://localhost:3000`

## Dependencies

- express - Web application framework
- body-parser - Request body parsing middleware
- pg - PostgreSQL client for Node.js
- dotenv - Environment variable management
- ejs - Templating engine

## API Endpoints

- `GET /` - Display all todo items
- `POST /add` - Add a new todo item
- `POST /edit` - Update an existing todo item
- `POST /delete` - Delete a todo item
