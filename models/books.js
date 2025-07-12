const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type : String,
        required : true,
        unique : true
    },
    username: {
        type : String,
        required : true,
        
    },
    password: {
        type : String,
        required : true,
    },
})

const reviewSchema = new Schema({
    isbn: {
        type : String,
        required : true,
        unique : true
    },
    email: {
        type : String,
        required : true,
    },
    review : {type : String }

});

const booksSchema = new Schema({
    "Isbn": {
        type : String,
        required : true,
        unique : true
    },
    "author": {type : String},
    "title": {type : String}
    
    
});

const User = mongoose.model('User', userSchema);
const Review = mongoose.model('Review', reviewSchema);
const Book = mongoose.model('Book', booksSchema);

module.exports = {
    User,
    Review,
    Book
};