# Solution

During the first lecture, we only use the native "assert" library

Therefore, the test cases herein use that as well, asserting in a straight line.

This app does include a .travis.yml file so that we can run live build tests when pushed.  

package.json does a very explicit test run (yuck), as well as to call out a special "lint" test command to enforce that pattern on all commits
