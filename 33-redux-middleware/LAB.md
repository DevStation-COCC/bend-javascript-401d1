![cf](http://i.imgur.com/7v5ASc8.png) 33: Budget Tracker
======

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas 

## Learning Objectives
* students will be able to create and implement custom middleware for redux

## Requirements
#### Configuration  
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`
 
#### Feature Tasks
* complete all remaining lab 31 and 32 feature tasks
* add a `logger` middleware to your application's redux store
* add validation to your redux reducers

Decide what validation you want to add to your reducers. Ideas might include:

* Prevent an item from being added if it's over budget.
* Prevent a budget from being created with zero or less dollars.
* Prevent a budget or item from being created without a name.

## Example Validation Middleware
Here's an example validating middleware for an application that implements a
[kanban board](https://leankit.com/learn/kanban/kanban-board/).

This middleware ensures that data attached to the action satisfies requirements,
like having certain properties (id, content, categoryId).

```js
const validateCard = store => next => action => {
  const isCard = action.type && action.type.startsWith('CARD');
    if (isCard) {
      try {
        const card = action.payload;
        const notValid = !card.id || !card.content || !card.categoryID;
        if (notValid) {
          throw new Error('VALIDATION ERROR: card must include id, content, and categoryID');
        } else {
          return next(action);
        }
      } catch (err) {
        console.error(err);
    }
  } else {
    return next(action);
  }
}

export default validateCard;
```
