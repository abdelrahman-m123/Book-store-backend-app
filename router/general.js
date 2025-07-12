const express = require('express');
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios');

const { User, Review, Book } = require('../models/books');


public_users.post("/register", async (req,res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  let valid = await isValid(email);
  console.log(username, password, email , valid);
  if (username && password && email && !valid) {
    
    const newUser = new User({ email, username, password });
    await newUser.save();
    res.status(200).send({
      "message":"user registered successfully"
    });
  } else {
    res.send({
      "message":"please enter valid data"
    });
  }
});


public_users.post('/addbook', async (req, res) => {
  
  let Isbn = req.body.Isbn;
  let author = req.body.author;
  let title = req.body.title;
  if (!Isbn || !author || !title) {
    return res.status(400).send({ message: "Please provide Isbn, author, and title." });
  }
  try {
    const existingBook = await Book.findOne({ Isbn });
    if (existingBook) {
      return res.status(409).send({ message: "Book with this ISBN already exists." });
    }
    const newBook = new Book({ Isbn, author, title });
    await newBook.save();
    res.status(201).send({ message: "Book added successfully.", book: newBook });
  } catch (error) {
    res.status(500).send({ message: "Error adding book.", error: error.message });
  }
});


public_users.delete('/deleteallbooks', async (req, res) => {
  try {
    const result = await Book.deleteMany({});
    res.status(200).send({ message: "All books deleted successfully.", deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).send({ message: "Error deleting all books.", error: error.message });
  }
});



public_users.get('/',async (req, res) => {
  //Write your code here
  let books = await Book.find({});
  res.send(books);
});



public_users.get('/isbn/:isbn',async (req, res) => {
 try{
  let isbn = req.params.isbn;
  let book = await Book.findOne({ Isbn: isbn });
  res.send(book);
 } catch{
  res.status(404).send({message: "book doesn't exist"});
 }
 });
  


public_users.get('/author/:author',async (req, res) => {
  try{
    let author = req.params.author;
    let book = await Book.find({ author : author });
    res.status(200).send(book);
  }catch{
    res.status(404).set({message: "book doesn't exist"});
  }
  
  
  let filtered = await getBooksAuth(author);
  
  res.send(filtered);
  
});


public_users.get('/title/:title',async (req, res)=>{
  try{
    let title = req.params.title;
    let book = await Book.find({ title : title });
    res.status(200).send(book);
  }catch{
    res.status(404).set({message: "book doesn't exist"});
  }
});


public_users.get('/review/:isbn',async (req, res) =>{
  try{
    let isbn = req.params.isbn;
    let book = await Review.find({ Isbn : isbn });
    res.status(200).send(book);
  }catch{
    res.status(404).set({message: "There are no Reviews for this book"});
  }
});

module.exports.general = public_users;
