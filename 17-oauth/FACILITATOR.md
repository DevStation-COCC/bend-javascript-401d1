# Class 41

## How do I prep for today?
Understand the full OAuth flow and the history of this API/Process/Workflow.

Ensure that your .env file is well explained, because you will need to add a bunch of SECRET stuff to it. Important to teach this as you go.

Practice, practice practice. By its nature, OAuth is a 5 step handshake process. The devil is in the details for sure. It's a good idea to build up the demo step by step (log out the result of each promise in the chain).  This does 2 things for you:

- First, it gives you a chance to explain each part of this long process step by step, and see things build up.
- Second, because this process is such a pain, it gives YOU a chance to either force error conditions (to have some teaching moments) or recover from unforseen issues that come up in the process
 
## What changed from yesterday? 
In the last class, we introduced the students to BASIC Authentication, which is a simple username/password combination.  Our server would validate a hashed password, create a token, and send that out as both a cookie and plain text.

In this lecture, we introduce OAuth, which is quite a handshake process, but at the end of the day, we end up in the same place -- a user is "Logged In" to our server and we send back a token.

The principle difference is that in OAuth, we must conflate the login and signup processes.  If a user grants access (i.e. from Google), we may not yet have an account for them on our end, so the login process might beget a signup/create process. 

## What might students struggle with today? 
The length of the process.  Pictures are HUGE. It's actually pretty cool to draw the picture of the process/workflow and then as you code it out, refer back to the picture to remind students of where you currently are in the process.

## What bugs, issues, or surprises have come up in the past for this class?

## General comments
This lab is super fun. Pair up your students and assign each pair a different OAuth provider.  You demo'd google.  Assign groups to Facebook, Github, Yahoo, etc. The next day, have the groups come and present their solutions during code review.  This is a great chance to force them to RTFM and figure this out.  It's also really cool to see that all of the solutions are pretty much the same (it is OAuth, after all)
