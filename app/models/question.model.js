const mongoose = require('mongoose');


const QuestionSchema = mongoose.Schema({
  
    "title": {
        "type": "String"
      },
      "content": {
        "type": "String"
      },
      "user_id":{
        "type":"ObjectId"
      },
      "likes": {
        "type": "Number"
      }
      
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);
