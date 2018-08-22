# Class 11

## How do I prep for today?
Today is all about using tools for the creation of a real, modern, robust API as opposed to the vanilla implementations that we used the prior week.  Students should have a decent handle on how the ExpressJS router works at this point as they've already built a vanilla version.  It's a good idea to recap the custom router they created, along with the WRRC (web request response cycle) to ensure that they have a solid understanding of how an API, and it's associated endpoints, are created and used.

A great way to teach this material is to open up the official demo (or solution) code from day 09 and do an in-place refactor and cutover to both Babel and Express.

 - *The `demo/vanilla-server` folder has been included here for this purpose, should you choose to use it* 
 - The `demo/express-server` folder is the target for you to hit during lecture whether or not you do the live refactoring

This gives you an opportunity to revisit all the previous parsing and routing logic and then simply swap it out for the Express equivalents.  The really cool thing to note is that because our vanilla server followed mostly express-like syntax, all of your routes should basically work unchanged once you `app.use()` them.
 
## What changed from yesterday? 
The previous week was primarily about the creation of an HTTP server and API, without the use of a database and 3rd party npm modules or tools.  This week, that changes and their applications should start to take the shape of a "modern" RESTful API that includes modern tools and a real database persistence layer.

Today, we will be focusing a few major areas:

 * Understanding, Installing and Setting up Babel
   * This will require a .babelrc file and requring of `babel-register`
   * Once integrated, you should teach and begin using import/export syntax
     * `import thing from 'module';`
     * `export default thing`
     * `import {thing,stuff} from 'module'`
     * `export {thing,stuff}`
     
 * Converting our Vanilla REST server into Express
   * Don't get too deep in the weeds with middleware
   * ... but do `app.use(express.json())` to replace our custom written parser module.
   * Use express.router() to replace our custom written router module.
   * Teach how express can not only use Query Params but also route params -- in your routes, migrate away from ?id= to using /api/v1/notes/:id

## What might students struggle with today? 
Students from prior 301 courses shouldn't struggle too much during this day.  They've had some experience with creating an Express based API already and should feel like this day is primarily a recap of those concepts.  Test-in students will likely need some additional help during lab, primarily with just understanding the basics of ExpressJS.

## What bugs, issues, or surprises have come up in the past for this class?
No real major issues are normally present during the course of this day - students tend to enjoy the experimentation phase during lab and get really excited about the use of tools, instead of using entirely vanilla NodeJS modules for development.

## General comments
N/A
