![cf](http://i.imgur.com/7v5ASc8.png) 01: Node Ecosystem
=====================================

## Learning Objectives
* Students will be able to setup a NodeJS Package using npm
* Students will be able to create commonjs modules
* Students will be able to to create unit tests for synchronous Javascript code
* Students will be able to use to test driven development methodologies
* Students will be able to connect their github repository to travis-ci for hot build testing
* Students will learn about continuous integration and continuous delivery
* Students will be able to configure TravisCI to run their tests on all pushes to GitHub

## Resources
* Read [about nodejs]
* Skim [libuv docs]
* Skim [about v8]
* Read [what is npm]
* Read [just another guide to ES6]
* Skim [node and es6 docs]
* Read [a gentle intro to tdd in js]
* Read [getting started with nodeJS on travisCI]

## Outline

### Use Your Computer Like A Developer
It's time to unlearn any bad computer usage habits that you may have developed in your pre-programmer years. It is critical that you keep your file system organized. 
Writing code is difficult enough, don't allow your problem to be finding code on the file system. You should come up with a system for naming files - don't deviate from it! Keep all of your projects in one place and always use version control. Use git best practices, even when you are working on personal projects! Use the command line whenever possible.  In the long run, these techniques will save you many hours of time.

### File Naming Tips
Name all of your files using kabob-case ("-" separated words). Don't use uppercase letters, unless you want the file to appear first when you run `ls`. In git projects, it is standard to capitalize **README.md** for this reason.

### NodeJS
NodeJS is an open source framework for writing Javascript on your operating system. It is compromised of the **V8** Javascript runtime and the **NodeAPIs**. V8 supports many features in the latest version of Javascript, called ES6 (or ES2015), which has added many new syntax features and optimizations. **V8** is the Javascript runtime developed for the Chrome browser and is written in C and C++. The Node APIs are written in C, C++, and Javascript. Node was developed to enable developers to easily write code with asynchronous input and output (I/O). In many other languages, asynchronous I/O creates a lot of work for developers and can be error prone. NodeJS uses an event loop driven and non-blocking architecture - this enables NodeJS to have very low overhead when it is not running.

### CommonJS modules
NodeJS supports CommonJS modules.  These modules enables developers with the ability to organize their code into small files that define specific functionality. This plays a huge role in allowing Javascript developers to build large and scalable applications. In a CommonJS module, anything that is assigned to `module.exports` can be accessible to another module through invoking the `require` function. The `require` function expects a relative or absolute path to the module being imported, like `require('./relative/path/to/the/module.js')`. CommonJS modules can not be co-dependent, meaning that if module "A" requires module "B" then "B" can not also require "A".

### Test Driven Development
Test driven development (TDD) is a methodology for writing code. It relies on a very short development cycle, which means that it expects developers to create small and testable features. TDD can speed up development time, validate the integrity of new code, and help developers understand their goals. TDD is broken down into three steps - red, green, and refactor.

###### RED
Make a plan for the code that needs to be written. Write tests that will run your code and check for expected behaviors. At this point, if you run your tests, they should fail (red).

###### GREEN
Write code to pass the specifications of your tests, without making it perfect. If you succeed, when you run your tests, they should pass (green).

###### REFACTOR
Refactor your code for speed, memory optimization, and most importantly **readability**. Your tests should still pass after this step.

### Continuous Integration
Continuous Integration (CI) is the process of regularly merging individually developed features of code into a shared repository as frequently as they are made. In the most basic setup, a team could simply use git to merge code into a master branch. However more advanced CI patterns can be developed. These patterns can automate static analysis (lining), running unit and integration tests, testing platform support, enforcing code reviews, and much more.

### Continuous Delivery
Continuous Delivery (CD) is the process of deploying software in short cycles by ensuring that software can be deployed at any time. CD pairs very will with advanced CI setups that help ensure the core product is always a stable code base.

### TravisCI
Travis CI is a hosted and distributed continuous integration service (CI) that is most often used to build and test software projects hosted on GitHub.

Travis CI is configured by adding a file named `.travis.yml` to the root directory of the repository. This file specifies the programming language used, the desired building and testing environment and various other parameters.

Once you have this file, create an account at travis-ci.com (login with your github account information) and install the "travis-ci" app into your github account when prompted. Travis will automatically pull your code and run your tests on every push.

##### Example .travis.yml

``` javascript
  language: node_js
  node_js:
    - 'stable'
  services:
    - mongodb
  addons:
    apt:
      sources:
        - ubuntu-toolchain-r-test
      packages:
        - gcc-4.8
        - g++-4.8
  env:
    - CXX=g++-4.8
  sudo: required
  before_script: npm i
  script:
    - npm test
    - npm run lint
```

<!--links -->
[about nodejs]: https://nodejs.org/en/about/
[node and es6 docs]: https://nodejs.org/en/docs/es6/
[libuv docs]: https://github.com/libuv/libuv
[about v8]: https://developers.google.com/v8/
[what is npm]: https://docs.npmjs.com/getting-started/what-is-npm
[a gentle intro to tdd in js]: http://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/
[just another guide to ES6]: https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f#.wb7rj1gin
 [getting started with nodeJS on travisCI]: https://docs.travis-ci.com/user/languages/javascript-with-nodejs
