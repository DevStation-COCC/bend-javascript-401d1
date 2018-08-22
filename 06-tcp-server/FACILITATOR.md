# Class 06

## How do I prep for today?
Today is all about the OSI model and working within a TCP layer.  You'll want to be comfortable with both the native NodeJS `net` module as well as node events in order to create a TCP chat server for the daily lecture demo.  You can find several implemetations of this demo in the */demos* directory.

 - `events` - is a multi-file demo that shows how Node events work over multiple files/modules and how you must share a common core to make it all tie in. This is a must-do before you start coding out the chat room. The way this demo works is that the app.js sets up an event "pool" and then all of files require it, and use it's `events` to communicate. The index.js file brings in the listeners and the events.js file and then fires the events found there.  Each of the listener files has some `on()` listeners that respond when they "hear" the events that they care about.  Some of them even fire additional events, which other listeners can hear and respond to. The takeaways here are:
   - Events fired in one "file" or "module" can be heard and responded to in other modules (very cool!)
   - In an event driven system, you don't have to call any methods.  Just shout from the rooftops that something happened and let the magic happen around you.

 - `chatroom` is a simple one-file TCP chat server that you should be easily able to build in class. It creates a simple Socket Pool using a user model, a command parser, and events to deal with commands. It's pretty easy to build this in one segment and talk through all of the concepts.

 - `chatroom-modular` - is a refactoring of the one-file chat room. It's essentially the same code, but we break out the model to a separate file/folder and all of the user actions are also in separate folders. Everything ties into common events and socketpool modules.

 **We recommend that you code out the basic chatroom in class and then if you shred through it and have time, refactor it into the modular version. Likely, you won't have that kind of time. A live refactoring from the one-file chat into the modular version makes for an awesome code-review on the next day, so you may want to simply queue that up instead of a student code review session.**

## What changed from yesterday?
Students have been working with basic NodeJS concepts, async programming, binary data, and file system I/O during the past week.  This week is all about how the internet works, starting with the build of a TCP application, then moving into HTTP based applications for the remainder of the course.  You'll want to discuss how HTTP is built on top of TCP and what processes take place to get data from one communication channel to the other.

## What might students struggle with today?
Students will struggle with getting their applications to run, along with remembering the commands to start, connect, and use their application.  Be sure to discuss the use of `telnet` to connect to their application, including random helper commands - like how to disconnect on the client side.  Students on Windows may have issues with carriage/line returns in their command strings so it's a good idea to bring this up early on, to avoid any confusion during lab.

## What bugs, issues, or surprises have come up in the past for this class?
As pointed out above - lots of little issues will crop up when creating their lab assignment.  Most of these issues are configuration based.

## General comments
This is a fun day for students - get them excited about TCP servers and set their expectations that they'll be working exclusively with HTTP after this lecture/lab.
