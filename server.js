const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const mongoDB = 'mongodb://localhost/book-search';
mongoose.connect(process.env.MONGODB_URI || mongoDB, { userNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
