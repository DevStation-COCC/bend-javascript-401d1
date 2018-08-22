![CF](http://i.imgur.com/7v5ASc8.png) 03: Asynchronous Callbacks
===

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Resources
* [fs module docs](https://nodejs.org/api/fs.html)

## Configuration
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** - contains your travis testing instructions
* **package.json** - contains npm package config 
  * jest and eslint must be dependencies
  * create a `lint` script for running eslint `"lint": "eslint **/.js"`
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **data/** - contains the text files used by the program
* **\_\_test\_\_/** - contains unit tests

## Testing
##### File Reader Module Tests
* Use `describe` and `it` (or `test`) methods to define descriptive tests and increase readability
* Each `it` callback should aim to test a small, well defined, feature of a function
* Write tests to ensure that the reader function rejects errors with invalid file paths
* Write tests to ensure that the reader function correctly resolves mapped string data for an array of file paths

## Feature Tasks
##### File Reader Module
In the lib/ directory create a `reader.js` module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.

* The file reader module should have the function signature `(paths, callback) => undefined`
* On failure, the file reader module should invoke the callback with an error `callback(error)`
* On success, the file reader module should invoke the callback with `null` as the first parameter and the result as the second parameter - `callback(null, result)`

##### Stretch
Write the file reader function recursively so that it will be able to support 0 or more paths.

##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.
