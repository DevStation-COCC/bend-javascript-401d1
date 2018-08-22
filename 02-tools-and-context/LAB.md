![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** - contains your travis testing instructions
* **package.json** - contains npm package config 
  * jest and eslint must be dependencies
  * create a `lint` script for running eslint `"lint": "eslint **/.js"`
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## Feature Tasks

#### List Module
  * implement a List constructor using a constructor, factory, or class
  * implement the length property
  * implement the `push()` and `pop()`, `slice()` methods on the List prototype
  * implement `forEach()`, `map()`, `filter()`, and `reduce()` as pure methods on the List prototype
  * Do not use any built-in array methods to do this
  
#### Stretch Goals
  * implement `shift()`, `unshift()`, and `splice()` as methods on the List prototype
  * Note that for these, because they mutate the list index, you will need to account for re-indexing the keys numerically from 0

## Testing
Create a NodeJS module in the \_\_test\_\_/ directory named `list.test.js` that asserts the correctness of the list module.

Use the `describe` and `it` (or `test`) methods to define descriptive tests and increase readablity
Each `it` callback should aim to test a small, well defined, feature of a function - this may include:
  * tests that ensure the list module functions correctly with error-check parameters
  * tests that the correct errors are thrown with invalid arguments exist
  * tests to ensure that the list module functions return the correct results when invoked with valid arguments

##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.
