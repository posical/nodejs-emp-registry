# nodejs-emp-registry
Test Project to create a mock employee registry CRUD
---

Project Description
---
A simple node server using ExpressJS to serve API calls.
The database used is Mongo DB for simplicity.

The API methods are as such:
> POST, GET, PUT, DELETE

In relation to the CRUD functions:
```
Create : POST
Read   : GET
Update : PUT
Delete : DELETE
```

The default fields expected from the API endpoint is as such (6 string fields in total):
> name, address, email, phone, job, salary

```
"name":""
"address":""
"email":""
"phone":""
"job":""
"salary":""
```

File structure
---
* api/
  * controllers/
    * employeeRegisterController.js
   * models/
     * employeeRegisterModel.js
   * routes/
     * employeeRegisterRoutes.js
* .gitignore
* package.json
* README.MD
* server.js


Technology
---
* NodeJS
* ExpressJS
* NPM (Node Package Manager)
* Git
* Mongo DB


Installation
---
> npm install


Starting the server
---
> node server.js


Serving the API endpoint
---
> http://localhost:3000/employee

