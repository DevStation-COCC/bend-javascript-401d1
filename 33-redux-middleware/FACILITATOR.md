# Class 33

## How do I prep for today?
Read the Redux middleware documentation and pay close attention to the design of how Redux middleware is structured and used.  You may find that reviewing Express middleware helps as the concepts are closely aligned.  The signature for Redux middleware is as follows: `store => next => action =>`.

## What changed from yesterday?
Students will be using middleware for adding hooks into their Redux workflow.  If you've already created validation for your reducers, you'll want to refactor those into middleware modules that can be imported and used, as needed.

## What might students struggle with today?
Students will struggle with understanding *where* Redux middleware fits into the overall Redux workflow.  Creating a piece of middleware, using it, then diagramming where this middleware is invoked in a conceptual diagram is highly useful for students.

## What bugs, issues, or surprises have come up in the past for this class?
Our curriculm introduces ES6 (and newer) Javascript concepts/syntax periodically throughout our demo builds.  Students may still be struggling with understanding the intricacies of some of these additions - recap them as needed and check for clarification during lecture to assist with this.

