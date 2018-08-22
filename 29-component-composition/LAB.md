![cf](http://i.imgur.com/7v5ASc8.png) 29: To Do
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas 
  
## Learning Objectives  
* Students will learn about composition vs inheritance
* Students will learn to compose react components using props

## Requirements  
 
#### Feature Tasks 
Refactor and add the following components 

###### NoteUpdateForm 
Create a NoteUpdateForm component that inherits a note through props and onSubmit is able to update the App's state with an updated note.

###### Refactor the NoteItem to have the following behavior
If the user double clicks on the notes content it should switch to the Edit View  
* Default view  
  * Display the notes content and a delete button
  * Display a delete button that will remove the Note from the application's state
* Edit View 
  * Show the NoteUpdateForm and a Cancel Button
    * onSubmit or click of the cancel button in NoteUpdateForm it should switch back to the default view

###### App Component Tree
Your components should be nested in the following layout  
``` 
App
  NoteCreateForm
  NoteList
    NoteItem
      NoteUpdateForm
```

#### Test
* Test NoteCreateForm
  * Test your onChange handler
  * Test your onSubmit handler
* Test NoteItem
  * Test the NoteItem's ability to remove a note from the App's state
* Test NoteUpdateForm
  * Test the NoteUpdatesForm's ability to update a note in the App's state

#### Documentation  
Write a description of the project in your README.md
