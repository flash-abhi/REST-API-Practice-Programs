import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
const BookModel = mongoose.model('books',bookSchema)


export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
       try{
        const newBook = new BookModel(bookData);
        await newBook.save();
        return newBook;
       }catch(err){
        console.log(err);
       }
    }

    //filtering the book by id
    async getOne(_id) {
        try{
            return await BookModel.findOne({_id});
        }catch(err){
            console.log(err)
        }
    }
}