const mongoose = require('mongoose');

const bookModel = new mongoose.Schema(
    {
        pic:{
            type:String,
            default:"https://songofamerica.net/wp-content/uploads/2017/09/Missing-book-cover.jpg"
        },

        title: {type:String, required: true,},

        isbn:{type: String, required:true},

        pageCount: {type:Number, required:true,},

        authors: [{type: String, required: true}],
    }
);

const Book = mongoose.model('Book', bookModel);

module.exports = Book ;