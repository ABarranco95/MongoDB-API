const mongoose = require('mongoose');




const commentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});




const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    comment: [commentSchema],
    
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Posts', PostSchema);