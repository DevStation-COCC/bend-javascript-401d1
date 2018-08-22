![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: HTTP Routing
======

## Submission Instructions
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
* students will learn to use promise constructs to manage asynchronous code
* students will learn to create a vanilla RESTful API with in-memory persistence

#### Feature Tasks
* create the following directories to organize your code:
  * `src`
  * `src/lib`
  * `src/api`
  * `__test__`
* create an HTTP server using the native NodeJS `http` module
* create a custom parser module that:
  * uses promises to parse the JSON body of `POST` and `PUT` requests
  * uses the NodeJS `url` and `querystring` modules to parse the request url
* create a router constructor that allows you to register custom routes for `GET`, `POST`, `PUT`, and `DELETE` requests
* create a router constructor that handles requests to `GET`, `POST`, `PUT`, and `DELETE` using the custom routes defined

## Server Endpoints
### `/api/vi/notes`
**These will be "proof of life" endpoints, to prove server health**

* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request 
 * return a 200 response with the POST'd JSON as the content
 * (Prove that you got the JSON from the POST)
* `PUT` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific resource
  * pass data as stringifed JSON in the body of a **POST** request 
  * return a 200 response with the JSON as the content
  * (Prove that you got the JSON from the PUT)
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific resource
 * return a 200 response, and a message that states "ID: <id>" was requested
 * (Prove that you got the id from the query string)
 * `DELETE` request
  * pass `?id=<uuid>` as a query string parameter to identify a specific resource
  * return a 200 response, and a message that states "ID: <id>" was deleted
  * (Prove that you got the id from the query string)
  
## Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body
