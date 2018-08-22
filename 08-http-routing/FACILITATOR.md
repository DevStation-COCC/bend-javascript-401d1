# Class 08

## How do I prep for today?
Today is all about the understanding the REST architectural style and the beginning of the build out of a vanilla RESTful API.  This API was designed to be as "vanilla" as possible, to demonstrate the concepts of many of the 3rd party modules and packages that they'll be using in the coming weeks.

The lecture for this day requires **lots and lots** of code. Be sure to build out a demo beforehand (or review the ones in this directory) to help you get started and figure out proper pacing. Students will need to review your lecture videos for this day rather heavily - be sure to screen capture the entire build.

As a primary goal, we will be refactoring the simplistic HTTP server from Class 07. Principally, we will be adding 2 new pieces of architecture:

**Routing Tables and Methods**
This will require you to build out system that allows the developer to declare routes "express-style" and have the server respond to those when called and run the defined function. You'll need to support all of the RESTful verbs.
 - i.e. `router.route.get('/home', (req,res) => { ... })`
 
**A separate API module**
Once you have the routing table and router created, create an api.js module where you'll declare a really simple get and post route for the sole purpose of exercising the system that you've created.

 The sample code in the guide repo provides a fully commented and tested version of this (along with a working server that should be your lecture target)
 
## What changed from yesterday?
No more experimentation with the request/response cycle.  It's time to build something real. 
**You should begin with the Class 07 lecture demo and REFACTOR it in place with these new concepts**

## What might students struggle with today?
Students will struggle with getting all of these pieces of their API put together.  There's lot's of modularization taking place on this day - structring your demos to be built from a non-linear and pragmatic/practical approach will help them when they are studying on their own.  It will also aid in pushing students to not just re-type the lecture demo in a linear fashion but to think about when/how each module was built and when/how it should be integrated.

This day is going to mostly be about the routing code and logic.  Make sure that they fully understand how these routing tables and functions are built, how they work, how they get used on a request, and how an API might define and use them. Understanding of this basic wiring is the most critical part of this week's lecture series.  It might help to have some diagrams of the data/request flow ready to help you explain it.

## What bugs, issues, or surprises have come up in the past for this class?
Lot's of failing tests!  Have your TAs prepped and ready to tackle this.

## General comments
N/A
