console.log('In api.js')
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const BlogPost = require('../models/blogpost')

// Routes
router.get('/data', (req, res) => {

    let dataBase = req.query.db;
    let search_category = req.query.category
    if (dataBase != '') {
        if (search_category != '') {
            BlogPost.find({ db: dataBase, category: search_category})
            .then((data) => {
                console.log('Data: ', data)
                res.json(data)
            })
            .catch( (error) => {
                console.log('error', error)
            })  
        } else {
            BlogPost.find({ db: dataBase})
            .then((data) => {
                console.log('Data: ', data)
                res.json(data)
            })
            .catch( (error) => {
                console.log('error', error)
            })  
        }
        
    } else {
        if (search_category != '') {
            BlogPost.find({ category: search_category})
            .then((data) => {
                console.log('Data: ', data)
                res.json(data)
            })
            .catch( (error) => {
                console.log('error', error)
            })  
        } else {
            BlogPost.find({})
            .then((data) => {
                console.log('Data: ', data)
                res.json(data)
            })
            .catch( (error) => {
                console.log('error', error)
            })  
        }

    } 
    
});

router.get('/statistics', (req, res) => {
    
    BlogPost.find({ })
    .then((data) => {
        console.log('Data: ', data)
        res.json(data)
    })
    .catch( (error) => {
        console.log('error', error)

    }) 
    
});

/*router.get('/', (req, res) => {

    
    BlogPost.find({ })
    .then((data) => {
        console.log('Data: ', data)
        res.json(data)
    })
    .catch( (error) => {
        console.log('error', error)

    }) 
    
}); */


module.exports = router;