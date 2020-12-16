require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


// Connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('Connected to our database!')
);


// Import Routes
const postsRoute = require('./controllers/posts');

app.use('/posts', postsRoute);



// Routes
app.get('/', (req, res) => {
    res.send('We are home!')
});


app.listen(3000, (req, res) => {
    console.log(`I'm listening boss!`)
});
