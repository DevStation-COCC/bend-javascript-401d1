![CF](http://i.imgur.com/7v5ASc8.png) 03: Whiteboard Challenge
===

## Requirements
You're the junior conductor on a commuter train and have been asked by the senior conductor to do a head count of passengers on the train.

Write a function `const traverse = (engine) => {...` which takes the engine as a starting location. Travel from the engine to the caboose and total the number of passengers in each car as your progress. `return` the final total once your traversal is complete.

Each car, including the engine will have the following signature:
``` javascript
{ <engine>
    value: 2,
    next: {  <next car>
        value: 16,
        next: { <next car>
    }
}
```

## Submission Instructions

1. With your assigned partner, pseudocode your solution on the whiteboard. Take a picture of your proposed solution for your repo.
1. Make a new branch and folder in your whiteboard challenge repository on GitHub. The name of the folder should be the same as the name of the challenge.
1. This folder should contain:
	- A file named `solution.js` which contains the JavaScript solution
	- A picture of your pseudocoded solution from the whiteboarding exercise
	- A `README.md` which includes the problem domain
1. Complete the whiteboard challenge in your text editor, and verify that it's functional.
1. Make a pull request from your working branch to your master branch.
1. Submit a link to your PR on Canvas *or* submit a link to your `repo/daily-whiteboarding-directory/solution.js`.