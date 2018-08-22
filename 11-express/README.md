![cf](http://i.imgur.com/7v5ASc8.png) 11: Express  & Babel
===

## Learning Objectives
* Students will learn about Express, including routing, parsing, and route parameters
* Students will learn about Transpilation with Babel and ESM
* Students will be able to create fully functional RESTful HTTP servers through the use of Express

## Resources
* Skim [express api docs](http://expressjs.com/en/4x/api.html)
* Read [express routing](http://expressjs.com/en/guide/routing.html)
* Skim [babel api docs](https://babeljs.io/docs/usage/api/)
* Read [es6 features](https://babeljs.io/learn-es2015/)


## Outline

### Express
ExpressJS is a lightweight framework for building web servers. It extends the NodeJS `http` module with a minimal feature set that enables developers to build powerful web applications, and fast. ExpressJS feature set includes routing with url parameters, error handling, a static server, cookie and link helpers, convenience methods for sending `json` and `jsonp`, location and redirect management, request parsing, server side rendering, and a framework for creating robust middleware.

### Babel
Babel is a javascript "transpiler", which allows you to write code in full ES6 syntax and ensure compatability.  Generally, this is used in React (and other) application frameworks for the front-end. 

 - Developers can write code with full ES6 Syntax, such as object deconstruction, array and object spread, arrow functions and import+export
 - When deployed to the browser or compiled by node.js, Babel enabled applications will have their code transpiled down to various compatability modes.
 
 The takeaway? Write modern JS code in the same style in both client and server applications with the full confidence that it will compile and run in every environment.
