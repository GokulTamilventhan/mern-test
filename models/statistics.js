const mongoose = require('mongoose');

//  schema
const Schema = mongoose.Schema;
//const BlogPostSchema = new Schema({
const StatisticsSchema = new mongoose.Schema({	
    title: String,
    url: String,
    condition: String,
    db: String
},{ collection : 'statistics' });

//  model
const model_ST = mongoose.model('ST', StatisticsSchema);

module.exports = model_ST;