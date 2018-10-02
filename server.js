// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 3000;

// Sets up our server to parse our request body for usage
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// -----------------
mongoose.connect("mongodb://user: password1@ds121203.mlab.com:21203/heroku_2z7j0jbv", { useNewUrlParser: true });
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is running: http://localhost:${PORT}`)
})