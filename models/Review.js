import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    content: {
        type: String,
    },
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    rating: {
        type: Number,
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
})

const Review = mongoose.model('Review', reviewsSchema);

export {
    Review
}