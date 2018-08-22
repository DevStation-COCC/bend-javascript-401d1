# Class 17

## How do I prep for today?
Today is all about token based authorization for accessing specific routes of their application.  Be sure to understand the differences between "basic" and "bearer" authorization and their use cases within a modern API.

Understand the demo code. This uses a combination of instance and static methods in the model and a combined auth middleware that handles both Basic and Bearer auth.  Be very aware of how this all wires together.

There's a second web-server demo folder. Once your server demo is up and running, you should be able to fire up the web-server and open it up, and create a user, login, and access a protected resource with it.  It's only a wiring demo, so don't expect fireworks. 

You can also test out your auth endpoints with httpie and postman.

## What changed from yesterday? 
Students have already created a basic authentication module for "sign up" and "sign in".  Today, they'll be creating a token based "bearer" authorization module for accessing routes of their application.  Be sure to detail how this module will be used as a piece of middleware within their routes.

Specifically, the auth middleware will have to handle a new condition to test for "Bearer" in addition to "Basic" authorization headers.  

When caught, call upon a static "authorization" method in the User model, which will validate the token, look up, and return the valid user (or null)


## What might students struggle with today? 
Students will likely struggle with the understanding of how JSON web tokens work, along with how we are using custom methods on our User model for token creation.

Testing servers, especially with auth/auth is a bear. You'll want to revisit mocking and the proper time/scope to introduce end to end testing.

## What bugs, issues, or surprises have come up in the past for this class?
Lot's of random issues with getting authorized into their application and routes!  Be sure to place an emphasis on writing good and meaninful tests to help determine where these issues arise.  Having great hooks in your test file for test data creation and database cleanup are a good idea to emphasise too!

## General comments
N/A
