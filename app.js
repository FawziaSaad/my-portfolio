/* 
    Filename: app.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Monday, May 22, 2023
*/

// Import required modules and libraries
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Define the port on which the server will run
let port = 3000; 

// Import route handlers for different routes
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

// Create an instance of the Express application
let app = express();

// Configure the view engine and views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Define routes
app.use('/', indexRouter);

//Route handler for handling form submission on the root path
app.post('/', (req, res) => {
  // Redirect the user to the home page
  res.redirect('/');
});

// Error handling middleware
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app module
module.exports = app;
