const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use('/api/library', require('./server.route'));


mongoose.connect('mongodb+srv://AmeerLala:ameerlala123@cluster0.i5wcv.mongodb.net/library?retryWrites=true&w=majority', { useNewUrlParser: true });

app.listen(process.env.PORT || 5001, () => {
    console.log('Server started on port 5001');
});