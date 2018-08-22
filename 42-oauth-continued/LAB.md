![cf](http://i.imgur.com/7v5ASc8.png) 42: OAuth Continued
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas 
  
## Learning Objectives  
* Students will learn to add Google OAuth to a react/redux app

## Requirements  
#### Configuration  
* **README.md** -- with documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- containing the frontend code
* **src/main.js** -- renders the app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset 
* **src/style/_base.scss** -- base styles 
* **src/style/_layout.scss** -- layout styles

#### Feature Tasks  

#### backend
* no new backend routes

#### frontend 
* create a token reducer for managing your token
* create an auth actions file for making signup and login requests, storing, and clearing the token in the app state. 
  * remember to remove the cookie when the token is removed from the app state
* create at least the folowing two routes
  * `/landing` - display a login with google anchor
  * `/chat` - display a p tag that says chat 
* add as many other routes or pages as you would like
* create an index.html with an anchor tag pointing to the google authoraztion page 
 * configure the query string with correct key value pairs

#### Documentation  
Write a description of the project in your README.md, including detailed instructions for how to build your app. In your frontend README.md add a code block with your frontend .env vars, and in your backend README.md add a code block with your backend .env vars. 
