const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

// mongo password qwerty1234
// const MONGODB_URI = 'mongodb+srv://newUser:qwerty1234@testdb.len0c.mongodb.net/test?retryWrites=true&w=majority';

const MONGODB_URI = 'mongodb+srv://newUser:qwerty1234@testdb.len0c.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODBATLAS_URI || MONGODB_URI || 'mongodb://localhost/mern_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('mongoose is connected...');
});


app.use(express.json());
app.use(express.urlencoded({ extended:false}));


// Saving data to our mongo database
const data = {
    title: 'Welcome to my channel',
    body: ' blalalala'
};

// const newBlogPost = new BlogPost(data); // new instance of mdoel

// newBlogPost.save((error) => {
//     if(error) {
//         console.log('oops, something happened');
//     } else {
//         console.log('data has been saved');
//     }
// });
//  .save()


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    console.log("here")
    // app.use(path.join(__dirname, 'client/build'))
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));