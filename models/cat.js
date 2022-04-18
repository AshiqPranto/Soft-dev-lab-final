const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

var Cats = mongoose.model('Cat',catSchema);
module.exports = Cats;
