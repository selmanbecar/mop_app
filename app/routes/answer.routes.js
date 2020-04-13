module.exports = (app) => {
    const answers = require('../controllers/answer.controller.js');

    // Create a new answers
    app.post('/answers', answers.create);

    // Retrieve all answers
    app.get('/answers', answers.findAll);

    // Retrieve a single answers with answersid
    app.get('/answers/:answerId', answers.findOne);

    // Update a answers with answersid
    app.put('/answers/:answerId', answers.update);

    // Delete a answers with answers
    app.delete('/answers/:answerId', answers.delete);
}
