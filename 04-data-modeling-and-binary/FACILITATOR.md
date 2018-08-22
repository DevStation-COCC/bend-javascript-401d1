# Class 04

## How do I prep for today?
Read the Bitmap File Specification Wikipedia page. For your own study, create a `.bmp` file reader and read, deconstruct, and manipulate parts of the `Buffer` so that you can demonstrate and discuss with students during lecture.  You'll be talking about the native `events` module and will need to prepare demos (or use the demos found in this directory) for creating and emitting events.
 
## What changed from yesterday? 
We are now gathering user input from the command line (`process.argv`) and piping that into our application. If you rebuild the previous lab during code review (optional), you may want to include the usage of `beforeAll`, `beforeEach`, `afterAll`, or `afterEach` as part of your tests.  If you don't get the opportunity to demo these methods today, let students know that we'll be using them often in the very near future.  They may need/want to use them for testing of their bitmap transformer project.

## What might students struggle with today? 
Students will struggle with getting started on their bitmap transformer project. They may need assistance organizing their directory structure, and/or understanding the breakdown of a `.bmp` file.  You can point them in the right direction but do your best to have students research much of this on their own and with their teammates.

## What bugs, issues, or surprises have come up in the past for this class?
Working with `Buffer`, modularizing code, and testing asynchronous behavior are a challenge at this stage of the course.

## General comments
It's easy to provide students with too much starting information for the bitmap transformer lab. On that same note, it's also easy to *not* provide enough information.  Find a balance and **do not** build a demo in lecture that gives students an idea of how to capture and manipulate **all** parts of a `.bmp` file.  You may simply want to focus on reading in a `.bmp` from disk, and capturing basic information from the file header.  Anything more detailed than that may cause them to have to research less, making this project not as effective as it could have been.
