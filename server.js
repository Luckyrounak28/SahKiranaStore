const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: 'sah_kirana' // Create this database in the next step
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Endpoint to handle placing orders
app.post('/placeOrder', (req, res) => {
    const order = req.body;
    const query = 'INSERT INTO orders (user_name, product_name, quantity, price, total_price, user_address, user_contact) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [order.userName, order.productName, order.quantity, order.price, order.totalPrice, order.userAddress, order.userContact], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Order placed successfully', orderId: result.insertId });
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
