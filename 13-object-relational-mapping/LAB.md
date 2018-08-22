![CF](http://i.imgur.com/7v5ASc8.png) 13: Single Resource Mongo and Express API
===

## Submission Instructions
Follow the instructions in the "Lab Submission Instructions" document in the course reference folder

## Learning Objectives  
* students will be able to work with the MongoDB database management system
* students will understand the primary concepts of working with a NoSQL database management system
* students will be able to create custom data models *(schemas)* through the use of mongoose.js
* students will be able to use mongoose.js helper methods for interacting with their database persistence layer

## Requirements

#### Feature Tasks
* create an HTTP Server using `express`
* create a resource **model** of your choice that uses `mongoose.Schema` and `mongoose.model`
* use the `body-parser` express middleware to parse the `req` body on `POST` and `PUT` requests
* use the npm `debug` module to log the functions and methods that are being used in your application
* use the express `Router` to create a route for doing **RESTFUL CRUD** operations against your _model_

## Server Endpoints
### `/api/resource-name`
* `POST` request
  * should pass data as stringifed JSON in the body of a post request to create a new resource

### `/api/resource-name/:id`
* `GET` request
  * should pass the id of a resource through the url endpoint to get a resource
    * **this should use `req.params`, not querystring parameters**
* `PUT` request
  * should pass data as stringifed JSON in the body of a put request to overwrite a pre-existing resource
* `PATCH` request
    * should pass data as stringifed JSON in the body of a put request to update a pre-existing resource
* `DELETE` request
  * should pass the id of a resource though the url endpoint to delete a resource
    * **this should use `req.params`**

### Tests
* create a test that will ensure that your API returns a status code of 404 for routes that have not been registered
* create a series of tests to ensure that your `/api/resource-name` endpoint responds as described for each condition below:
  * `GET` - test 200, returns a resource with a valid body
 * `GET` - test 404, respond with 'not found' for valid requests made with an id that was not found
 * `PUT` - test 200, returns a resource with an updated body
 * `PUT` - test 400, responds with 'bad request' if no request body was provided
 * `PUT` - test 404, responds with 'not found' for valid requests made with an id that was not found
 * `POST` - test 400, responds with 'bad request' if no request body was provided
 * `POST` - test 200, returns a resource for requests made with a valid body
