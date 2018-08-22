![CF](http://i.imgur.com/7v5ASc8.png) Image Uploads w/ AWS S3
===

## Submission Instructions
  * Follow the instructions in the "Lab Instructions" documentation in the reference folder of the class repository
  

## Learning Objectives  
* students will be able to upload static assets to AWS S3
* students will be able to retrieve a cdn url that contains the previously uploaded static asset
* students will be able to work with secret and public access keys
* students will be able to assemble an application from modular parts

## Requirements

#### Description
* create an AWS account
* create an AWS Access Key and Secret
  * add the Access Key and Secret to your `.env` file
* create a new model that represents a file type that you want to store on AWS S3
  * ex: `.mp3`, `.mp4`, `.png`, etc
* create a test that uploads one of these files to your route
* use `multer` to parse the file upload request
* use the `aws-sdk` to assist with uploading
* create user, profile, and image models, with relational connections
* combine your API, Auth, and Upload modules into a single application
* Following a sign-in (or OAuth creation), create a profile model entry, connected to the user id
* Following the upload of an image, create a new record in the image collection, connected to the profile
* Using populate, return a user's full profile AND a list of all images they've uploaded as a JSON object
* Later, we can use this API to feed a pintrest like application. 

#### Tests
* `POST` - **200** - test that the upload worked and a resource object is returned
* `DELETE` - **204** - test to ensure the object was deleted from s3

