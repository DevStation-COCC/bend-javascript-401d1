# Class 16

## How do I prep for today?
Today is all about basic authentication and how we use this type of authentication for "sign up" and "sign in".  Having a solid grasp on `Authorization` headers is vital to the presentation of this content.  You'll also want to review the User model of the demos from previous courses.  These demo's should showcase the inclusion of methods on your data models, for added functionality, such as hashing of a password and the decryption of a hashed password.  Students will be working with token based authorization on the following day and getting a good foundation today will surely help with their understanding of this.

Today is a great opportunity to talk about how ciphers work, how bcrypt work, why we don't save plain text passwords, etc.

When coding this out, use the newly created middleware in the /signin route as your ONLY logic.  The middleware acts as a gateway to the route.  Ony if it can authenticate you, does it ever call `next()` and get into the actual route code.  The route should repond (for now) with "hello" and the token.

Our demo leads you down the road of having some mongoose `.statics` and `.methods` for static and instance methods of your model. This is a great opportunity to recap what that means and how it works. (maybe have a simple Class worked up to demo it)

We will use this middleware gatweay to protect all routes that require security in the future. This is really cool stuff and that "gatekeeper" point needs to be made clearly for students to understand this lesson's takeaway.

Focus on students' understanding of the full authentication cycle:
 - Create Account (POST to the /signup route)
   - User Model "pre-save" hook: hash the given password with bcrypt
   - After saved, check the DB to see the hashed p/w
 - Hit the /signin route with basic auth headers with a missing or invalid user/pass
    - You should be sending  yourself a 401 header with an appropriate message
 - Hit the /signin route with basic auth headers and a valid user/pass
    - User model should do a lookup, compare password, and send back the user
    - Middleware should see the good user and then get a token, attaching it to the req objct.
    - The route should send out that token as plain text and as a cookie
    
    You can demonstrate all of these steps using httpie, postman, or even the browser, by using the included "web-server" demo
     - To use the web-server, fire it up, and browse to localhost:8080
     - In the middelware, change the getAuth() method send the res instead of calling next().
     - Then after you create an account with the form, you can browse to /signin and sign in with the browser and get a token back

## What changed from yesterday? 
It's a new week and time to get their applications to the next level!  As students are getting ramped up for the week, it may be a good idea to set expectations for the progression of the week and the content that is to come.

## What might students struggle with today? 
Students may struggle with getting their authentication middleware to work properly.  Keep an eye on the areas where they use string manipulation, and look out for basic syntax errors and bugs.  Outside of that, if your students have a good grasp on JS fundamentals, this day shouldn't be as intense as they may have expected.

## What bugs, issues, or surprises have come up in the past for this class?
Issues with basic syntax errors are the most common during this day.  Be sure to push students to use the NodeJS debugger and `debug` to provide them with a stack trace to efficiently debug their errors.

## General comments
N/A

