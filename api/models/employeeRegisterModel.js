'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: {
    type: String,
    required: 'Name of Employee'
  },
  address: {
    type: String,
    required: 'Address'
  },
  phone: {
    type: String,
    required: 'Phone Number'
  },
  email: {
    type: String,
    required: 'Email Address'
  },
  job: {
    type: String,
    required: 'Job'
  },
  salary: {
    type: String,
    required: 'Salary'
  }

});

module.exports = mongoose.model('Employees', EmployeeSchema);



