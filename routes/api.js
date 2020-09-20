const express = require('express');

const router = express.Router();

const Feedback = require('../models/feedback');
const Student = require('../models/student');


router.get('/', (req, res) => {

    Feedback.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

// router.get('/ivydrips', (req, res) => {

//     Feedback.find({})
//         .then((data) => {
//             // console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });

// router.get('/:studentName', (req, res) => {
//     const student = req.params.studentName;
//     console.lug("student");
//     // const student = new Student({
//     //     name: studentName,
//     //     feedbacks: studentFeedbacks
//     // });
// });

// router.get('/one', (req, res) => {

//     Feedback.find({ })
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((err) => {
//             console.log('Error: ', err);
//         });
// });

// router.get('/two', (req, res) => {
//     const data = {
//         student:"Ivy Drips",
//         skill:"Coins",
//         praise:"Does 2/3!",
//         feedback:"Complete 2nd-half."
//     }
//     res.json(data);
//     const test = db.feedbacks.find({});
//     console.log(test);
// });

// router.get('/three', (req, res) => {
//     const data = {
//         student:"Kid Circus",
//         skill:"1-Arm Rodeos",
//         praise:"E-Z!",
//         feedback:"Switch hands."
//     }
//     res.json(data);
// });

router.post('/save', (req, res) => {

    const data = req.body;

    const newFeedback = new Feedback(data);
    
    newFeedback.save((err) => {
        if (err) {
            res.status(500).json({
                message: 'Internal server error.'
            });
            return;
        }
        return res.json({
            message: 'Data saved.'
        });
    });
});

module.exports = router;