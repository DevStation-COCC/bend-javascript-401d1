# Class 14

## How do I prep for today?
Today is all about creating "relationships" in MongoDB.  Be sure to have a good grasp on how to use the MongooseJS method `populate` for query population at the database level.  Students will need to understand how `ObjectId`'s are used to create pointers to other resources.  Relating this to SQL based DBMS's and how tables can contains primary/foriegn keys to create relationships may be a good idea.  That said, be sure to discuss the differences, pros, and cons of using a SQL based VS noSQL based DBMS.

Building up and using these relationships will require the use of some pre hooks

- pre('save') to inject into the parent object's "array" of references
- pre('findOne') to populate detail information from your relationship into the document

This is a great time to talk about mongoose middleware and the different hooks offered.

Additionally, cement the idea that in a true MVC, the business logic lives in the model and those hooks give you the inroads to do just that.

This day should also bring to the forefront WHY we use the `/api/v1/:model/` pattern. As you'll recall, we genericized the REST API routes so that you can pass any valid model in there.  This keeps the API code really DRY (we don't need a separate route for every model).  This layer of abstraction really helps to create an extensible system.

## What changed from yesterday? 
Time to connect our resources!  Students have been working with a single resource API up until this point.  Today, that changes.

## What might students struggle with today? 
Students will struggle with the configuration and use of `populate`.  Be sure to demostrate how this works, along with potentially looking at created collections in the MongoDB shell and how the `ObjectId`'s for associated resources look at this level.

## What bugs, issues, or surprises have come up in the past for this class?
Lots of bugs and lot's of issues connection resources, specifically through the use of `populate`.  Lecture on this topic as much as you can!

## General comments
N/A
