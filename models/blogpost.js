const mongoose = require('mongoose');

//  schema
const Schema = mongoose.Schema;
//const BlogPostSchema = new Schema({
const BlogPostSchema = new mongoose.Schema({	
    title: String,
    url: String,
    condition: String,
    db: String
    
    //date: {
    //    type:String,
    //    default:Date.now()
    //}
},{ collection : 'test_one_collection' });

//  model
const BlogPost = mongoose.model('collection', BlogPostSchema);

//const DBModel = mongoose.model('test_one_collection')


//module.exports = BlogPost;
module.exports = BlogPost;