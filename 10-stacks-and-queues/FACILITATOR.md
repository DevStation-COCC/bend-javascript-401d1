# Stacks and Queues

## How do I prep for today?
Learn about and be comfortable with stacks and queues!
This is a great opportunity for us to reiterate how the Javascript event loop works with a call stack and the callback queue. There are some great illustrations of this, and building both a stack and a queue demonstrate the fundamentals of that system.

In the demos folder, you will find separate demos for both stacks and queues. The lab requires that the students implement these data structures natively (not with arrays or other data strucures, but more like we did the "List" constructor on day 2).  As a stretch goal, they should attempt to implement a stack as a linked list and a queue as a stack to learn composition of data structures. 

That said, OUR implementation in the demo should be with array methods. Why? To cement the equivalence of which array methods (mentally) map to the appropriate stack and queue methods.

The stack demo uses an interface to demonstrate how  you could have one stack Class, but under the hood, you could implement that many ways and the end user of the stack class is none-the-wiser.  This is a great way to introduce the concept of an interface or a facade. (The Queue demo is more straightforward)

You'll also notice a file in the demo folder called 'event-loop.js' ... at the end of your stack and queue demo/explanation session, pull this one out.  It simulates the javascript event loop using the stack and queue constructors you just built.
 
## What changed from yesterday? 

## What might students struggle with today? 
They will definitely want to know WHY these exist as data structures when Arrays already do all of this stuff. Make sure that they know that not only was it not always that way, but by having classes with finely scoped methods like these, end users are put into the proper mindset on their purposeful use.

The students may also press you on how to implement these using linked lists or other compositions. They need to dig in and figure that out!

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

