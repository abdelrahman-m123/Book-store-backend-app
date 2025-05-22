#  Bookshop RESTful API

This is the **server-side** implementation of a Bookshop web application built with **Node.js** and **Express.js**. It provides a RESTful API backend that allows users to view, search, review, and manage books and reviews.

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


## Screenshots

Below are screenshots demonstrating various API functionalities tested using Postman.

| Feature               | Screenshot Preview                     |
|------------------------|----------------------------------------|
|  Login               | ![Login](./login.png)                  |
|  Registration        | ![Registration](./registeration.png)    |
|  Get All Books       | ![Get All Books](./getallbooks.png)    |
|  Get Book by ISBN    | ![Get Book by ISBN](./getbookbyisbn.png)|
|  Get Book by Author  | ![Get Book by Author](./getbooksbyauthor.png)|
|  Get Book by Title   | ![Get Book by Title](./getbooksbytitle.png)|
|  View Book Reviews   | ![View Reviews](./getbookbyreview.png) |
|  Add a Review        | ![Add Review](./addreview.png)         |
|  Delete a Review     | ![Delete Review](./deletereview.png)   |

> **Note:** Screenshots are located in the root of the project directory. Make sure they are committed and pushed to your GitHub repository.
