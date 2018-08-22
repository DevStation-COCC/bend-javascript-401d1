# Class 12

## How do I prep for today?
This day is all about middleware.  You'll want to have a good grasp on the differences between route, application, custom and 3rd party middleware.  A detailed explanation of how middleware can manipulate parts of the request/response is key to setting students up for using middleware effectively during their lab.

There are 2 demo folders.

 - `middleware` contains a really simplistic server and some external middleware files, along with one middleware declaration in the file. Its good to build this demo from the ground up with all of the middleware functions in the server file.  
 
   - Attach different middleware functions (like logging and somethingElse) to the different routes, so that you can show the progression of them. You can setup one route with none, and another with 2 of them chained, and then switch things around. 
 
   - When you have it all "working" in that you can show a 404 or an error message, and attach the various functions, then break them out into the separate .js files, include them in and attach them by name.  That's a pretty good example of how the main demo works.
 
 - `api-server` contains an updated version of the Vanilla REST server that we built up over the previous classes. It's good to simply start with the previous day's server, and then refactor the application in place.
   - Add error handling middleware
   - Add 404 middleware
   - Split out the /:note bits into a separate middleware file, import it in, and then register it legitimately as a route level middleware on the params.
   
   - The demo also contains a sample test of the modelFinder middleware so that you can show the right way to test out middleware without having to spin up a server.  Note the use of `__mocks__` for mocking out one of our dependencies and also how we wrap the thrown error in our test.
  
   - When you're all finished, the app should be super clean (no more logic in the api file) and the models should be completely dynamic.
   
  - `index.html` is a file that you can throw up onto a live web server out in the world to simulate CORS errors, by tweaking the origin in your app.js ...

## What changed from yesterday?
The same concepts presented yesterday will be used today.  The only major difference is the inclusion of additional 3rd party middleware, and the creation of a custom error-handling middleware module, that can be used at the application level.  Feel free to review the demo's for today gain a better understanding of how this should be presented.

## What might students struggle with today? 
Students will struggle with the "why" behind route level and application level middleware.  They'll also struggle with understanding the handling of errors within the custom error-handling middleware module that you create.  Spend as much time recapping the creation of this file as you deem fit.

## What bugs, issues, or surprises have come up in the past for this class?
Understanding how errors get handled within the error-handling middleware module often causes confusion.  Get as detailed as you need to be during this piece of lecture, it really helps as students start to handle more verbose errors in the coming days.

## General comments
N/A
