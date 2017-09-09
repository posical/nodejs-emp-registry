var express = require ('express'),
  app = express(),
  port = 3000;
  mongoose = require('mongoose'),  
  Employee = require('./api/models/employeeRegisterModel'),
  bodyParser = require('body-parser');



var promise = mongoose.connect('mongodb://localhost/Employeedb',{useMongoClient:true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(function(req, res) {
//  res.status(404).send({url: req.originalUrl + ' not found'})
//});

var routes = require('./api/routes/employeeRegisterRoutes');
routes(app);

app.listen(port);

console.log('Employee Registry RESTful API Server started on ' + port);


