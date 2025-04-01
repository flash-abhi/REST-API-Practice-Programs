import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => {
        try{
            const {title,author,genre,copies,availableCopies} = req.body;
            const books = {title,author,genre,copies,availableCopies};
            const result = await this.bookRepository.createBook(books);
            res.status(201).send(result);
        }catch(err){
            console.log(err);
        }
     }

    // filtering of book by id
    getOne = async (req, res) => {
        try{
            const id = req.params.bookId;
            const result = await this.bookRepository.getOne(id);
            if(!result){
                res.status(404).send("Book not found")
            }
            res.status(200).send(result);
        }catch(err){
            console.log(err);
        }
     }

}
