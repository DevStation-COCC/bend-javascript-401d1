![cf](http://i.imgur.com/7v5ASc8.png) 28: To Do
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust .gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- containing the frontend code
* **src/main.js** -- for appending your app to the DOM
* **src/components/** -- containing your components
* **src/components/app/index.js** -- containing your App component
* **src/components/landing/index.js** -- containing your Landing component
* **src/components/dashboard/index.js** -- containing your Dashboard component
* **src/components/note-create-form/index.js** -- containing your NoteCreateForm component
* **src/components/note-list/index.js** -- containing your Notelist component
* **src/components/note-item/index.js** -- containing your NoteItem component
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
 
#### Feature Tasks 
Create the following components and structure them according to the following diagram.  
``` 
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      Noteitem
```
###### App Component
* The App component should manage the frontend routes and have a navbar
* the `/` route should display the `Landing` component
* the `/dashboard` route should display the `Dashboard` component

###### Landing Component
* The Landing component should display a brief description of the notes app

###### Dashboard Component 
* The Dashboard component should manage the entire **application state**
* The state should contain a notes array
* It should have a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added should have the following data
    * `id`: always should contain the result of `uuid.v1()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* It should have a bound `removeNote(note)` method that removes a note from `state.notes` based on its `id`

###### NoteForm Component
* `onComplete` the NoteForm should add a note to the application state

###### NoteList Component 
* should display an unordered list of NoteItem components

###### NoteItem
* should display the notes content and title
* should display a delete button
  * `onClick` the note should be removed from the application state

#### Test
* Test Dashboard
  * Test the initial state
* Test NoteCreateForm
  * Test the initial state

#### Documentation  
Write a description of the project in your README.md
