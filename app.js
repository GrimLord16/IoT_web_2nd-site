const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

const app = express();

// Test Database
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log(`Error: ${err}`))

//Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: false }));

// Doge routes
app.use('/doggos', require('./routes/doggos'));

//Checking whether started
app.listen(PORT, console.log(`Server started on port ${PORT}`));

