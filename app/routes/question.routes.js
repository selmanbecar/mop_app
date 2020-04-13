module.exports = (app) => {
    const questions = require('../controllers/question.controller.js');
    const answers = require('../controllers/answer.controller.js');
    // Create a new questions
    app.post('/questions', questions.create);
    app.post('/questions/:questionId/answers', answers.create);
    

    // Retrieve all questions
    app.get('/questions', questions.findAll);

    // Retrieve a single questions with questionsid
    app.get('/questions/:questionId', questions.findOne);
    app.get('/questions/:questionId/answers', questions.findOne); // find answers by question id

    // Update a questions with questions
    app.put('/questions/:questionId', questions.update);

    // Delete a questions with questions
    app.delete('/questions/:questionId', questions.delete);
}
