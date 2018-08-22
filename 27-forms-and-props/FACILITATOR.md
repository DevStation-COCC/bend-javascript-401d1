# Class 27

## How do I prep for today?
Today is about the proper handling and utilization of `state` and `props` within ReactJS.  State management is a major part of most modern frontend applications and students will often struggle with the differences/uses of `state` vs `props`.  Here's a basic rundown:

**State:**
- can get it's initial value from a parent component
- cannot be changed by a parent component
- can set default values inside a component
- can change inside a component
- can set initial values for child components
- cannot change in child components

**Props:**
- can get it's initial value from a parent component
- can be changed by a parent component
- can set default values inside the component
- cannot change inside the component
- can set initial values for child components
- can change in child components

As you demo and discuss these concepts, also focus on the usage of `<form>`'s within ReactJS. Spend time revewing the basics of vanilla HTML `<form>`'s and how they work.  This will set them up for seeing the advantages of creating modular `<form>` components, for multiple use cases, in a component framework, like ReactJS.

The demo code is presented here twice.
* `/demo/simple` is a basic implementation, with superagent rolled into the app.js and functions that call upon it.
* `/demo/advanced` takes that a step further and introduces a utility file that handles the loading using superagent and also caches data into local storage.
  * this will eventually become the home for future library functions
  
* In the demos, we show the fetching using promises but also have commented code using the `async/await` pattern. This is a great time to introduce (or cement) that pattern if you've not done so already.
  
The 2nd demo might be tough to get to in your initial lecture, but this is a great thing to use as a refactoring target during Code Review during the next lecture.  Using code review to refactor gives you the opportunity to revisit the functionality as well as to talk through opportunities for "engineer-ship"

## What changed from yesterday? 
Today, we begin to work with `<form>`'s.  You may still use the same `webpack.config.js` file from previous demos but be sure to rebuild it with students in order to further their understanding of it.

## What might students struggle with today? 
Students will struggle in lab.  Have your TAs ready to assist!

## What bugs, issues, or surprises have come up in the past for this class?
Webpack compiling issues are common and `state` managament issues will continue to persist.  Spend the time recapping these topics - it's worth it in the longrun!
