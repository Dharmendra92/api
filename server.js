var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
   mongoose = require('mongoose'), //connect to mongoose
   Task = require('./api/models/todoListModel'), //created model loading here
   Product = require('./api/models/product'), //created product model loading here
   Users = require('./api/models/users'),// created user model loading here
   Coupans = require('./api/models/coupans'),// created user model loading here
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds139844.mlab.com:39844/thoughtdbtest'); 

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Accept,Content-Length, X-Requested-With, X-PINGOTHER');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);