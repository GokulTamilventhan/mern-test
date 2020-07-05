const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogpost')

// Routes
router.get('/', (req, res) => {
    const data =  {
        username: 'alan',
        age:20
    };

    BlogPost.find({ })
    .then((data) => {
        console.log('Data: ', data)
        res.json(data)
    })
    .catch( (error) => {
        console.log('error', error)

    })

    
});

router.post('/save', (req, res) => {

    const data = req.body 
    const newBlogPost = new BlogPost(data);
    
    newBlogPost.save((error)  => {
        if(error){
            res.status(500).json({msg: 'sorry internal server error'})
            return;
        }
    })
    return res.json({
        msg: 'we received'
    })
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'diffname',
        age:5
    };
    res.json(data)
});

module.exports = router;