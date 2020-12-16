const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req, res) => {
    res.send('We are on posts through the router')
});

router.post('/', (req, res) => {
    const posts = new Post({
        title: req.body.title,
        description: req.body.description
    });
    posts.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    });
})

module.exports = router;