![cf](https://i.imgur.com/7v5ASc8.png) 11: Express and Babel
======

### Submission Instructions
 * Work in a fork of this repository
 * Work in a branch on your fork
 * Create a PR to your master from your working branch.
 * Ensure that your repository/branch is connected to travis-ci.com
 * Ensure that your repository/branch is connected to a dyno at heroku.com
 * Heroku and Travis should pick you up and deploy
 * Submit on canvas:
   * a question and observation
   * how long you spent
   * link to your pull request
   * link to your build at travis-ci URL
   * Heroku Server URL
 
 ## Configuration 
 Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
 * **README.md** - contains documentation
 * **.env** - contains env variables (should be git ignored)
 * **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
 * **.eslintrc** - contains the course linter configuratoin
 * **.eslintignore** - contains the course linter ignore configuration
 * **.travis.yml** - contains the course linter ignore configuration
 * **package.json** - contains npm package config
   * create a `lint` script for running eslint (eslint **/*.js)
   * create a `test` script for running tests
   * create a `start` script for running your server
 * **index.js** - the entry point for your application
 * **src/** - contains your core application files and folders
 * **src/app.js** - (or main.js) contains your core application bootstrap
 * **src/lib/** - contains module definitions
 * **\_\_test\_\_/** - contains unit tests

## Learning Objectives  
* students will be able to create a single resource API using the express framework
* students will be able to leverage 3rd party helper modules for debugging, logging, and handling errors

## Requirements

#### Feature Tasks
* implement all code using ES6 Modules (import/export) using Babel
* create an HTTP server using `express`
* create a object constructor that creates a _simple resource_ with at least 3 properties
  * it can **not** have the same properties as the in-class sample code (other than the `id`)
  * a unique `id` property should be included *(node-uuid)*
  * include two additional properties of your choice
* use the JSON parser included with the `body-parser` module as a middleware component to parse the request body on `POST` and `PUT` routes
* use the npm `debug` module to log the methods in your application
* create an `npm` script to automate the `debug` process and start the server
* persist your API data using the storage module and file system persistence

#### Server Endpoints
* **`/api/vi/resource-name`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * pass `/:id` as a route parameter to **GET** a specific resource (as JSON)
* `DELETE` request
 * pass `/:id` as a route parameter to **DELETE** a specific resource (as JSON)
 * this should return a 204 status code with no content in the body

#### Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body
