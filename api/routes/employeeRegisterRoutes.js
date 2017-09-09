'use strict';

module.exports = function(app) {
  var employeeRegistry = require('../controllers/employeeRegisterController');

  // employeeRegistry Routes
  app.route('/employee')
    .get(employeeRegistry.list_all_employees)
    .post(employeeRegistry.create_an_employee);

  app.route ('/employee/employeeId')
    .get(employeeRegistry.read_an_employee)
    .put(employeeRegistry.update_an_employee)
    .delete(employeeRegistry.delete_an_employee);
};


