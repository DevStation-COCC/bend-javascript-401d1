# Class 07

## How do I prep for today?
Today is all about HTTP servers.  You should have a good handle on how to implement/use the native NodeJS `http` module.  The lecture/lab portion of this day is highly experimental and will require lots of experimentation with the creation of a server, basic `req` methods, and how to capture and modify components of the `request` and `response`.

This will be the first time students are likely to encounter creating Promises. Its recommended that you run through a demonstration of how to create and use promises, how `then()` blocks chain their returns/resolves and how `catch()` intervenes on rejections. There is some demo code in the guide repo for you to play with in class.

The principle takeaway (from a code perspective) from this lecture should be a fully baked parser (as shown in both the demo and the solution code), with ample testing.  Aside from getting a server up and receiving requests, this is the heart of the operation and should be a key focus for the students.  This will be the first time they've written a real "helper module" that has to integrate fully in order for the main application to work.

Note also, that in the next class (Class 08), we will be refactoring this simple web server, building on the core layout, and relying on that parser as a key component. You should plan to code this out in this class, and code-review it in the next lecture before building out a more robust REST API Server.

## What changed from yesterday? 
Today is all HTTP!  No more TCP!

## What might students struggle with today?
Students will struggle with having a good grasp on the conceptual understanding of the web request response cycle.  They may have had prior experience with this in 301 but a recap of this process is highly beneficial.  Let students know that a deep understanding of this process is vital to the creation of a modern RESTful API.

## What bugs, issues, or surprises have come up in the past for this class?
Students have had issues with swapping the `req` and `res` objects in their routes and/or in their route logic, causing incorrect data to be returned when calling the API.  You'll want to keep an eye out for this.

## General comments
N/A
