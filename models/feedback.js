const mongoose = require('mongoose');

let d = new Date();
    let month = d.getMonth()+1;
    let day = d.getDate();
    let year= d.getFullYear();
    let fullDate = `${month}-${day}-${year}`

// Schema.

const Schema = mongoose.Schema;
const feedbacksSchema = new Schema({
    student: String,
    skill: String,
    date: {
        type: String,
        default: fullDate
    },
    praise: String,
    feedback: String
});

// Model.

const Feedback = mongoose.model('Feedback', feedbacksSchema);

module.exports = Feedback;