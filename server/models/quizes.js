const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const McqsSchema = new Schema({

    question: {
        type: Array,
        default: []
    },
    options: {
        type: Array,
        default: []
    },
    answers: {
        type: Array,
        default: []
    }
})

const QuizesSchema = new Schema({

    quiz: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    mcqs: [McqsSchema]
})

const Quizes = mongoose.model('quizes', QuizesSchema)
module.exports = Quizes;



// {
//     _id: ObjectId("5933d0b496a3594ad5b92a11"),
//     quiz: "quiz#12",
// course_name: "DCCN"
//     mcqs: [{
//         question: ["what is JS?"], 
//         options: ["Scriting lang", "Programming language", "hyperText language", "Styling"], 
//         answers: ["Scripting lang", "Programming Language"]
//         }]
// }