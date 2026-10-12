# Random Employee Data Generator

A simple web application built with **HTML, JavaScript, Node.js, Express, MongoDB, and Mongoose** that generates 10 random employee records whenever the user clicks the **Generate Data** button.

## Features

* Generates 10 random employee records on every button click.
* Randomly selects employee names, cities, and programming languages from predefined arrays.
* Generates random salaries within a specified range.
* Assigns `true` or `false` to `isManager` with a 50% probability for each.
* Deletes existing employee records before inserting new ones.
* Stores employee data in MongoDB.

## Tech Stack

* **Frontend:** HTML, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose

## Employee Data Structure

Each employee record contains the following fields:

| Field       | Type    | Description                                     |
| ----------- | ------- | ----------------------------------------------- |
| `name`      | String  | Employee's name                                 |
| `salary`    | Number  | Random salary between 20,00,000 and 1,00,00,000 |
| `language`  | String  | Programming language                            |
| `city`      | String  | Employee's city                                 |
| `isManager` | Boolean | Randomly assigned `true` or `false`             |

## How It Works

1. The user clicks the **Generate Data** button.
2. The frontend sends a POST request to the Express server.
3. The server deletes all existing records from the `employees` collection.
4. Ten new employee records are generated using random values.
5. Mongoose inserts the records into MongoDB.
6. The server sends a success message to the frontend.

## Setup and Installation

### Prerequisites

* Node.js and npm
* MongoDB running locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd "Exercise 16"
```

### 2. Install dependencies

```bash
npm install
```

If dependencies are not already listed in `package.json`, install them using:

```bash
npm install express mongoose
```

### 3. Start the application

```bash
node script.js
```

### 4. Open the application

Visit:

http://localhost:3000

Click **Generate Data** to create 10 random employee records.

## Database Configuration

* **Database:** `company`
* **Collection:** `employees`
* **MongoDB connection:** `mongodb://127.0.0.1:27017/company`

## Learning Outcomes

* Creating schemas and models using Mongoose.
* Connecting an Express application to MongoDB.
* Implementing GET and POST routes.
* Generating random data using JavaScript.
* Connecting frontend interactions to backend APIs using `fetch()`.
* Inserting and deleting MongoDB documents programmatically.

## Note

This project was built as a learning exercise to understand the interaction between a frontend, backend server, and database.

**Author:** Adarsh
