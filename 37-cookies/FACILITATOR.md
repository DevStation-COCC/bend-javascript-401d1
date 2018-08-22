# Class 37

## How do I prep for today?
Clone down and prepare the [slugram](https://github.com/slugbyte/sluggram) API.  You'll want to students to do the same.  A strong familiarity with the proper `.env` configuration and how to resolve random CORS issues is key to debugging common issues during the lecture presentation.  You'll be using this API to being the build of the *CFGram* application, which requires sign up and sign in functionality.  Today's lecture focuses on authentication and cookies and how sign up and sign in utilize them.

## What changed from yesterday? 
It's time to create the ability for a user to sign up and sign in.  Creating an `<Auth>` component is a great way to demostrate how this works, along with introducing them to a component that could potentially be "plugged in" other applications that need it.

## What might students struggle with today? 
Students will struggle with CORS issues and basic failure of Webpack compiling (as we've introduced lot's of new loaders).

## What bugs, issues, or surprises have come up in the past for this class?
As noted above, students will have issues getting their applications to properly compile.  Generally, this is due to syntax errors, improper `.babelrc` config options, issues within their `webpack.config.js`, or actual issues with their application code.