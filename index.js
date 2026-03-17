const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// plug in all routes
app.use('/products', require('./routes/products'));
app.use('/customers', require('./routes/customers'));
app.use('/employees', require('./routes/employees'));
 
app.listen(process.env.PORT || 3000, () => console.log("running!"));
