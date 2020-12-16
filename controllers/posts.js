const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS BACK
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts)
});


// SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

   const savedPost = await post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    });
})


// SPECIFIC POST
router.get('/:postId', async (req, res) => {
    const post = await Post.findById(req.params.postId);
    res.json(post);
})

// UPDATE POST
router.put('/:postId', async (req, res) => {
    const updatedPost = await Post.update({ _id: req.params.postId }, { $set: {title: req.body.title } });
    res.json(updatedPost);
});

// DELETE POST
router.delete('/:postId', async (req, res) => {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost)
})


module.exports = router;