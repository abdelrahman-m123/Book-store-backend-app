const express = require('express');
const jwt = require('jsonwebtoken');
const regd_users = express.Router();
// Import User, Review, and Book models from books.js
const { User, Review, Book } = require('../models/books');


const isValid = async (email)=>{ //returns boolean
//write code to check is the username is valid
  let user = await User.findOne({ email: email });
  if (user) {
    console.log('User exists');
    return true;
    
  } else {
    console.log('User does not exist');
    return false;
    
  }
}

const authenticatedUser = async (email,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
  // let filtered = users.filter((user) => user.username === username  && user.password === password);
  // if (filtered.length == 1){
  //   return true;
  // }else{
  //   return false;
  // }
  let result = await User.findOne({ email: email, password: password });

  return result;
}

//only registered users can login
regd_users.post("/login", async (req,res) => {
  try {
    let username = req.body.username ;
    let email = req.body.email;
    let password = req.body.password;
    let auth = await authenticatedUser(email, password);
    if (auth){
      let accessToken = jwt.sign({
        data: password
      }, 'access',{expiresIn: 60 *60});

      req.session.authorization = {
        accessToken , email
      }
      res.send({"message":"user logged in successfully"});

    }else{
      res.send({"message":"user does not exist"});
    }
  } catch (error) {
    res.status(500).send({"message":"error logging in"});
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", async (req, res) => {
  //Write your code here
  try{
    
    let email = req.session.authorization.email;
    let reviewText = req.body.review;
    let isbn = req.params.isbn;
    let review = await Review.find({ Isbn : isbn , username: username });
    if (review){
      review.review = reviewText ;
      review.save();
      res.send(review);
    }else {
      review = new Review({isbn , email , review})
      review.save();
      res.send(review);
    }
  }catch{
    res.status(404).set({message: "There are no Reviews for this book"});
  }
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  let username = req.session.authorization.username;
  let isbn = req.params.isbn;
  delete books[isbn].reviews[username]; 
  res.send({ "message":"review deleted successfully", "updated-reviews": books[isbn].reviews});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;