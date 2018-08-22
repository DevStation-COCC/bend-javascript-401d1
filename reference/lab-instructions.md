# Lab Submission Instructions
* Work in a fork of the daily lab repository
* Work in a branch on your fork
* Create a PR to your master from your working branch.
* Ensure that your repository/branch is connected to travis-ci.com
* Ensure that your repository/branch is connected to a dyno at heroku.com
* Create a README.md that includes:
  * travis badge
  * a summary of the requirements
  * any setup instructions
  * any usage notes
  * ways to test & prove all of the lab requirements
    * postman/API usage instuctions and expectations for backend services
    * step by step intsructions for REACT apps.
* Submit on canvas:
  * a question and observation
  * how long you spent (relative to your estimate)
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

## For ReactJS Applications
To deploy a React App on Heroku, you need to do the following
* Deploy a static express application pointed to your "public" folder
* Add a postinstall build script in your package.json that will build your react app
 * `"postinstall": "npm run build"`
