const express = require('express');
const router = express.Router();
const posts = require('../../../../data');

// Route to display all blog posts
router.get('/', (req, res) => {
    res.render('components/articles/blog', { blog: posts });
});

// Route to display form for creating a new blog post
router.get('/new', (req, res) => {
    res.render('components/articles/new');
});

// Route to handle creating a new blog post
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newPost = { id: Date.now().toString(), title, description, date: new Date() };

    posts.push(newPost);
    res.redirect('/blog');
});

// Route to display a single blog post
router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    res.render('components/articles/show', { post });
});

// Route to display form for editing a blog post
router.get('/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    res.render('components/articles/edit', { post });
});

// Route to handle updating a blog post
router.put('/:id', (req, res) => {
    const { title, description } = req.body;
    const post = posts.find(p => p.id === req.params.id);
    post.title = title;
    post.description = description;
    res.redirect('/blog');
});

// Route to handle deleting a blog post
router.delete('/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === req.params.id);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
    }
    res.redirect('/blog');
});

module.exports = router;
