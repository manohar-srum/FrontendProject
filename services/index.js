const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'jdbc:mysql://localhost:3306',
  user: 'root',
  password: 'admin',
  database: 'ProductManagementSystem',
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM Product2', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/add-products', (req, res) => {
  const { name, price, quantity, description, category, rating, expirydate } = req.body;
  const sql = `INSERT INTO products (name, price, quantity, description, category, rating, expirydate) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [name, price, quantity, description, category, rating, expirydate], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Product added successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Define API routes for CRUD operations

// Example: Get all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving products');
    } else {
      res.json(result);
    }
  });
});

// Example: Update product by ID
app.put('/products/update', (req, res) => {
  const { name, price, category, description, quantity, rating, expiryDate } = req.body;
  const id = req.params.id;

  db.query(
    'UPDATE products SET name=?, price=?, category=?, description=?, quantity=?, rating=?, expiryDate=? WHERE id=?',
    [name, price, category, description, quantity, rating, expiryDate, id],
    (err, result) => {
      if (err) {
        res.status(500).send('Error updating product');
      } else {
        res.json(result);
      }
    }
  );
});

// Example: Delete product by ID
app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM products WHERE id=?', [id], (err, result) => {
    if (err) {
      res.status(500).send('Error deleting product');
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



