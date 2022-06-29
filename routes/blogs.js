const express = require('express');

// creating a instance of express router
const router = express.Router()

const BlogController = require('../controllers/blogcontroller');
const Blog = require('../models/blogs');

router.get('/',BlogController.BlogIndex);
router.get('/create',BlogController.BlogCreate);
router.post('/store',BlogController.BlogPost);
router.get('/:id',BlogController.BlogDetail)
module.exports = router;