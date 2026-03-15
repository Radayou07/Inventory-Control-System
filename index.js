const express = require('express');
const  mysql = require('mysql2');
require('dotenv').config();

const app = express

// connect to HTML
app.use(express.static('public'));

// Connect to Database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASWWORD,
    database: process.env.DB_NAME
})

// Check connection
db.connect((err) => {
    if(err) {
        console.log("Connection fail", err.message);
        return;
    }
    console.log("Connection success!")
})

app.length("/product")

