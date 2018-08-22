![cf](http://i.imgur.com/7v5ASc8.png) OAuth
===

## Submission Instructions
  * Follow the instructions in the "Lab Instructions" documentation in the reference folder of the class repository
  
## Learning Objectives  
* Students will learn to add OAuth from any provider to an express/mongo app

## Requirements  
- Your instructor will assign you a (not-Google) OAuth provider to integrate with. Sites such as Yahoo, Github, Facebook, and AWS all have OAuth mechanisms that work almost exactly like Google. 

This is a paired lab that will have you integrating OAuth with any provider.

#### backend
* create an account/app/credential on your assigned OAuth Provider
 * configure oauth credentials to support a client app on `http://localhost`
 * configure oauth credentials to support a server redirect uri to `http://localhost:3000/oauth/google/code`
* create a backend route `GET /oauth/google/code` for handling google oauth 

#### frontend 
* create an index.html with an anchor tag pointing to the google authorization page 
* configure the query string with correct key value pairs

#### Documentation  
Write a description of the project in your README.md, including detailed instructions for how to build your app. In your frontend README.md add a code block with your frontend .env vars, and in your backend README.md add a code block with your backend .env vars. 
