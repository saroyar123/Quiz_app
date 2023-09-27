const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correct_answer: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;