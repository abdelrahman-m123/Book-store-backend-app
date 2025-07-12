#  Bookshop RESTful API

This is the **server-side** implementation of a Bookshop web application built with **Node.js**, **Express.js** and **MongoDB**. It provides a RESTful API backend that allows users to view, search, review, and manage books and reviews.

---

##  Features

The application supports the following core features:

###  Books API
-  Retrieve all books in the bookshop
-  Search for books by:
  - ISBN
  - Author
  - Title
-  View reviews for any book

###  User Authentication
-  User Registration
-  User Login
-  JWT and Session-based authentication

###  Book Reviews 
-  Add a review (Logged-in users only)
-  Modify own review
-  Delete own review

###  Technologies Used
- RESTful web service built with **Express.js**
- **JWT & Sessions** for secure access control
- **Async/Await**, **Promises**, and **Callbacks** for efficient, non-blocking operations
- Supports concurrent access for multiple users
- **MongoDB** hosted on MongoDB Atlas


## Screenshots

Below are screenshots demonstrating various API functionalities tested using Postman.

| Feature               | Screenshot Preview                     |
|------------------------|----------------------------------------|
|  Login               | <img src="./postman screenshots/login.png"/>                  |
|  Registration        | <img src="./postman screenshots/registeration.png"/>    |
|  Get All Books       | <img src="./postman screenshots/getallbooks.png"/>    |
|  Get Book by ISBN    | <img src="./postman screenshots/getbookbyisbn.png"/>|
|  Get Book by Author  | <img src="./postman screenshots/getbooksbyauthor.png"/>|
|  Get Book by Title   | <img src="./postman screenshots/getbooksbytitle.png"/>|
|  View Book Reviews   | <img src="./postman screenshots/getbookbyreview.png"/> |
|  Add a Review        | <img src="./postman screenshots/addreview.png"/>         |
|  Delete a Review     | <img src="./postman screenshots/deletereview.png"/>   |


