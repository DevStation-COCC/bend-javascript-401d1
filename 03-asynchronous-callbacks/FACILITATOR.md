# Class 03

## How do I prep for today?
Review the `fs` module documentation and be familiar with the `readFile` and `writeFile` methods.  You'll be discussing asynchronous programming concepts and will want to share random "gotchas" that could take place when testing.  For example:
  * what happens when you pass `done` into an `it` (or `test`) block but forget to invoke it?
  * what happens when you don't pass `done` into an `it` (or `test`) block (for async tests)?

Students should have experience working with callback functions by this point.  That said, many will not have an in-depth understanding of them.  Review the callback demos in the **demos** directory and/or create your own.  It's important to discuss callbacks from a vanilla stance so that students fully understand how they work.  Once you've done that, start moving into the "error first" callback pattern.
 
## What changed from yesterday? 
Students will now be using `done` callbacks when testing their asynchronous code.  They will now be required to pass data with callbacks instead of using `return` or `throw`.

## What might students struggle with today? 
Students struggle with the "error first" callback pattern and how to create/handle async functionality.  Spend as much time as you can with these 2 topics.  Conceptually, they should have a solid understanding of callbacks and how to work with asynchronous behavior before going into lab for the day.  Students will struggle testing async code. When checking their code, lookout for missing `done` parameters/invocations and false positives.

## What bugs, issues, or surprises have come up in the past for this class?
Students will use `return` statements and `throw` in async code - they should be using a callback.

## General comments
It's helpful to do a walkthrough of synchronous vs asynchronous code on the whiteboard. Talk about blocking vs non-blocking code and walk students through the basics of the call stack, event loop, and callback queue.  You can even draw or diagram a visualization of this.



