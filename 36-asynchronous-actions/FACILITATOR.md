# Class 36

## How do I prep for today?
It's time to step up our actions to now include asynchronous action creators for making asynchronous requests!  So far, we've been creating and using simple actions (`{ type: 'SOME_TYPE', payload: data }`) and action creators for return an action (`(data) => { type: 'SOME_TYPE, payload: data }`).  Now, you'll be creating asynchronous action creators that return a function that will dispatch an action on the response of a successful HTTP request.  Be sure to have a solid understanding of this process and review the demos in this directory to properly prepare.

## What changed from yesterday? 
We're making async HTTP requests!

## What might students struggle with today? 
Students will struggle with understanding how asynchronous action creators are created and used.  We've also been introducing many areas of the application that utilize curried functions.  Review this with students, as needed.

## What bugs, issues, or surprises have come up in the past for this class?
Potential async issues.  Have your TAs prepped and on the lookout for this.