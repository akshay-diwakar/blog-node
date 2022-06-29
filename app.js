const express = require('express');
const { default: mongoose } = require('mongoose');
const morgan = require('morgan')
const app = express()
const BlogRoutes = require('./routes/blogs');

// mongodb database connection
const dburl = 'mongodb://localhost:27017/blogman';

mongoose.connect(dburl, { useNewUrlParser: true })
    .then((result) => app.listen(8000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('./public/'));
app.use(express.urlencoded({extended : true}));


app.use('/blogs',BlogRoutes);

app.use('/',(req,res) =>{
    res.redirect('/blogs');
});


app.listen(()=> {
    console.log('the port is listening on 8000')
},8000);