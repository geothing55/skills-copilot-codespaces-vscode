// Create web server using express
// Create a route for getting all comments
// Create a route for getting a single comment by id
// Create a route for posting a new comment
// Create a route for updating a comment by id
// Create a route for deleting a comment by id
// Export router
// Import router into index.js and use it for the path /comments

const express = require('express');
const router = express.Router();

const comments = [
    { id: 1, name: 'John', comment: 'Hello World!' },
    { id: 2, name: 'Jack', comment: 'Hello World Again!' },
    { id: 3, name: 'Joe', comment: 'Hello World Again and Again!' },
];

router.get('/', (req, res) => {
    res.send(comments);
});

router.get('/:id', (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('Comment not found');
    }
    res.send(comment);
});

router.post('/', (req, res) => {
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment,
    };
    comments.push(comment);
    res.send(comment);
});

router.put('/:id', (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('Comment not found');
    }
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    res.send(comment);
});

router.delete('/:id', (req, res) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('Comment not found');
    }
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});

module.exports = router;