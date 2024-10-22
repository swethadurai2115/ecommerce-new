const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Create a Post
router.post('/', async (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single Post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a Post
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a Post
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post deleted successfully.");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
