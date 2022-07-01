const Blog = require('../models/blogs')

const BlogIndex = (req,res) =>{
    Blog.find().sort({created_at : -1})
        .then((result) => {
            res.render('blogs/index',{title:'All Blogs',blogs : result})
        })
        .catch((err) => {
            console.log(err);
        });
}

const BlogCreate = (req,res) => {
    res.render('blogs/create',{title : 'Create Blog'})
}

const BlogPost = (req,res) => {
    const blog = new Blog(req.body)
    console.log(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
                console.log(err)
        })
}

BlogDetail = async (req,res) => {
    try{
        const id = req.params.id;
        const blog = await Blog.findById(id)
        console.log(blog);
        res.render('blogs/view',{title : blog.title, blog : blog});

    }catch(error){
        if(!blog){
            console.log(error);
            res.render('blogs/view',{title : '404', blog : 'No Blog Found'});
        }
        console.log(error);        
        res.status(404).render('404',{title : 'Blog Not Found'});
    } 
}


module.exports = {
    BlogIndex,
    BlogCreate,
    BlogPost,
    BlogDetail
}