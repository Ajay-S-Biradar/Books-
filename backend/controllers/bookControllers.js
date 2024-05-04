const asyncHandler = require('express-async-handler');
const Book = require('../models/bookmodel');

const registerBook = asyncHandler(async (req, res) => {
    const { pic, title, isbn, pageCount, authors } = req.body;

    if (!title || !isbn || !pageCount || !authors) {
        res.status(400);
        throw new Error("Please enter all the details");
    }

    const bookExists = await Book.findOne({ isbn });

    if (bookExists) {
        res.status(400);
        throw new Error("Book with this ISBN already exists");
    }

    const book = await Book.create({
        pic,
        title,
        isbn,
        pageCount,
        authors
    });

    if (book) {
        res.status(201).json({ _id: book._id });
    } else {
        res.status(400);
        throw new Error("Error adding the book");
    }
});

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.json(books);
});

const retrieveBook = asyncHandler(async (req,res)=>{
    //console.log(req.body);
    const {id} = req.params;
    console.log(id);
    //console.log(req);
    //console.log(req.params);
    const book = await Book.find({_id:id});
    if(book){
        res.status(201).json(book);
    }
    else{
        res.status(400);
        throw new Error("Error finding the book");
    }
});

const updateBook = asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const {pic, title, isbn, pageCount, authors} = req.body ;
    try{
        const BookUpdated = await Book.findByIdAndUpdate(id, {
            pic,
            title,
            isbn,
            pageCount,
            authors
        },{
            new:true
        })
        if(!BookUpdated){
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(BookUpdated);
    }catch(err){
        res.status(400).json({error:"Error: ",err});
    }
})

const removeBook = asyncHandler(async(req,res)=>{
    const {id} = req.params ;
    try{
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    }catch(err){
        res.status(400).json({error:"Error: ",err});
    }
});

module.exports = { registerBook, getAllBooks, retrieveBook,updateBook, removeBook };
