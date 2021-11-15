const express = require('express');
const bookController = require('../nodeJS/controller.js')
const router = express.Router();

router.get('/', (req, res) => {
    bookController.getAllBooks(req, res)
}).post('/', (req, res) => {
    bookController.addNewBook(req, res);
}).delete('/:id', (req, res) => {
    bookController.deleteBook(req, res);
}).get('/:year', (req, res) => {
    bookController.getBookByYear(req, res)
}).put('/:id', (req, res) => {
    bookController.updateBook(req, res)
});

module.exports = router;



// יש לבצע בדיקות שאכן המידע תקין(למשל לא נכנס שם כלשהו ריק) או ששנת ההוצאה גדולה מהשנה הנוכחית וכו.
// על התוכנה יש להכיל את הדברים הבאים:
// עדכון ספר.
// אין לבנות ממשק של ריאקט.
// יש לעלות את הפרוייקט להירוקו: slightly_smiling_face: