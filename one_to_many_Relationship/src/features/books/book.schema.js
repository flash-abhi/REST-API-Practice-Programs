// No need to change pre-written code
// Just make changes in reviews
import mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
        enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Other'],
    },
    copies: {
        type: Number,
        required: true,
        min: 1,
    },
    availableCopies: {
        type: Number,
        required: true,
        min: 0,
    },
    // Modify this section to handle the association with reviews.
    reviews: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Review"
    }]

});