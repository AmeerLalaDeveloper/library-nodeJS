const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Student has {name, age, email}
const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        min: [1, 'We Weren\'t'],
        max: [new Date().getFullYear(), `Year Cant Be More Than ${new Date().getFullYear()}`]
    },
    language: {
        type: String,
        length: 2
    },
    rating: {
        type: Number,
        min: [0, "Less Than This Dont Sell The Book"],
        max: [5, "Okay Good Book But Dont Fly On YourSelf"]
    }
});

const bookModel = mongoose.model('Books', bookSchema);

module.exports = {
    bookModel
}
