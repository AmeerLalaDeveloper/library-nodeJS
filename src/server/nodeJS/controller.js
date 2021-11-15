const bookModel = require('../mongoDB/mongo.js').bookModel;
const validator = require('validator')

const getAllBooks = async (req, res) => {
    const data = await bookModel.find({}, (err, data) => {
        if (err) return res.status(404).send(err.message);
        return res.status(200).send(data);
    });

}

const addNewBook = (req, res) => {
    const { name, author, year, language, rating } = req.body;


    const jumper = new bookModel({
        name: name,
        author: author,
        year: year,
        language: language,
        rating: rating
    })


    jumper.save((err, data) => {
        if (err) return res.status(404).send(err.message);
        return res.status(200).send(data);
    });


}
const updateBook = (req, res) => {
    const { id } = req.params;
    const { name, author, publishYear, language, rating } = req.body;
    const updatedBook = {
        name: name,
        author: author,
        publishYear: publishYear,
        language: language,
        rating: rating
    }
    bookModel.findByIdAndUpdate(id, updatedBook, { new: true, runValidators: true }, (err, data) => {
        if (err) return res.status(404).json(err.message);
        return res.status(200).json(data);
    })
}

const deleteBook = (req, res) => {
    const { id } = req.params;
    bookModel.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(404).send(err.message);
        return res.status(200).send(data);
    });
}

const getBookByYear = (req, res) => {
    const { year } = req.params;
    bookModel.find({ year: year }, (err, data) => {
        if (err) return res.status(404).send(err.message);
        return res.status(200).send(data);
    })
}
module.exports = {
    getAllBooks,
    addNewBook,
    deleteBook,
    getBookByYear,
    updateBook
}