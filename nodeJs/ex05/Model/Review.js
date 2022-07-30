const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    comment: String,
    score: {
        type: Number, min: 0, max: 5
    },
    target: {
        // 다른 스키마에 있는 데이터를 가져올 것임
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",   // 참조할 model이름
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Review', reviewSchema);