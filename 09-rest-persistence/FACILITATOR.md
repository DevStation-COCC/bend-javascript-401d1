# Class 09

## How do I prep for today?
Today is all about persistence. You will be starting the REST API with in-memory storage of model data and then adding file system storage of the same model data. The purpose of this day is to help position students for moving into database persistence layers during the following week.  You'll want to be familiar with the `fs` module, and review our internal `storage.js` module (found in the demos directory and an associated app) to gain an understanding of how this is handled.

## What changed from yesterday?
Today we refactor our in-memory `storage.js` module to include a layer of file system persistence.  You'll also be swapping out hardcoded `res` header assignment/etc in each route by creating a `response.js` module that abstracts this into a single line.  You can review our `response.js` file in one of the demos in this directory as well.  Here's an example of what you'll be creating:

```javascript
// instead of creating this everywhere:
res.writeHead(200, {
  'Content-Type': 'application/json'
});

res.send({ someData })

// create something similar to the following:

// response, status code, data
response.sendJSON(res, 200, { dataToSend });
```

## What might students struggle with today? 
Students will be struggling with getting their tasks from the prior day finished so that they can work on the refactoring/file system persistence tasks assigned to them for today.  You'll want to give advice on how to timebox each feature build so that they are efficient and don't get too far behind.

## What bugs, issues, or surprises have come up in the past for this class?
Lot's of testing issues and lot's of unhandled `Promises`'s!  Keep an eye out for these things and discuss them during code review as needed.

## General comments
N/A

