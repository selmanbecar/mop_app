const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
     "content": {
        "type":  "String"
      },
      "question_id":{
        "type": "ObjectId"
      },
      "user_id":{
        "type":"ObjectId"
      }
    }, {
    timestamps: true
});

module.exports = mongoose.model('Answer', AnswerSchema);

