const Answer = require('../models/Answer.model.js');

// Create and Save a new answer
exports.create = (req, res) => {
    // Validate request
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "answer content can not be empty"
        });
    }

    // Create a answer
    const answer = new Answer({
        content: req.body.content || "Untitled answer", 
        question_id:req.params.questionId,
        user_id:req.body.user_id
        
    });
    
    // Save answer in the database
    answer.save()
    .then(data => {
        
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the answer."
        });
    });
};

// Retrieve and return all answer from the database.
exports.findAll = (req, res) => {
    Answer.find()
    .then(answer => {
        res.send(answer);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving answer."
        });
    });
};

// find answer by question id
exports.findAllbyQuestionId = (req, res) => {
    Answer.find()
    .then(answer => {
        res.send(answer);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving answer."
        });
    });
};

// Find a single answer with a answerid
exports.findOne = (req, res) => {
    answer.findById(req.params.answerId)
    .then(answer => {
        if(!answer) {
            return res.status(404).send({
                message: "answer not found with id " + req.params.answerId
            });            
        }
        res.send(answer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "answer not found with id " + req.params.answerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving answer with id " + req.params.answerId
        });
    });
};

// Update a answer identified by the answerid in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "answer content can not be empty"
        });
    }

    // Find answer and update it with the request body
    Answer.findByIdAndUpdate(req.params.answerId, {
        answer_text: req.body.answer_text || "Untitled answer",
        questionId: req.body.questionId
        
    }, {new: true})
    .then(answer => {
        if(!answer) {
            return res.status(404).send({
                message: "answer not found with id " + req.params.answerId
            });
        }
        res.send(answer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "answer not found with id " + req.params.answerId
            });                
        }
        return res.status(500).send({
            message: "Error updating answer with id " + req.params.answerId
        });
    });
};

// Delete a answer with the specified answerid in the request
exports.delete = (req, res) => {
    Answer.findByIdAndRemove(req.params.answerId)
    .then(answer => {
        if(!answer) {
            return res.status(404).send({
                message: "answer not found with id " + req.params.answerId
            });
        }
        res.send({message: "answer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "answer not found with id " + req.params.answerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete answer with id " + req.params.answerId
        });
    });
};

