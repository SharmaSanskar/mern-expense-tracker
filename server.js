const path = require('path');
const express = require('express');
const morgan = require('morgan');
const transRoutes = require('./routes/transRoutes');
const connectDB = require('./db');

// dotenv config
require('dotenv').config();

// Connect to db
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/transactions', transRoutes);

// Production route
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
  app.get('*', (req, res) => res.redirect('/'));
}

// Listening to requests
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
