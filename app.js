const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()

// mongodb database connection
const dburl = 'mongodb://localhost:27017/blogman'

mongoose.connect(dburl, { useNewUrlParser: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.listen(()=> {
    console.log('the port is listening on 8000')
},8000);