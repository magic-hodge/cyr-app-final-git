import React, {useState} from "react";
import Header from "./Header";
import FeedbackArea from "./FeedbackArea"
import Feedback from "./Feedback";
import Footer from "./Footer";
import axios from "axios";
import Student from "./Student";

function App() {
    // const [moves, setMoves] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [student, setStudent] = useState();
    const [studentList, setStudentList] = useState([]);
    // const [isFiltered, setFiltered] = useState(false);

    //     setMoves(prevMoves => {
    //     return [...prevMoves, newMove]; 
    //     });
    // }
    
    // function deleteMove(id) {
    //     setMoves(prevMoves => {
    //         return prevMoves.filter((moveItem, index) => {
    //             return index !== id;
    //         });
    //     });
    // }

    
    let newStudents = [];

    feedbacks.forEach(function(feedbackItem) {
        if (newStudents.includes(feedbackItem.student) != true) {
            newStudents.push(feedbackItem.student);
        }
    });

    // console.log(newStudents);


    function filterStudent(student) {
    
        setStudent(prevStudent => {
            return student;
        });
        // setFiltered(true);
    }

    function getFeedbacks() {
        
        axios.get('/api')
            .then((res) => {
                const data = res.data;
                setFeedbacks(prevFeedbacks => {
                    return data;
                });
                // console.log('Data received.');
                // console.log(feedbacks);
            })
            .catch(() => {
                console.log('Error retrieving data.');
            });
    }

    setTimeout(getFeedbacks, 100);

// To filter items by student... Insert after feedbacks.
// .filter(feedbackItem =>
//     feedbackItem.student === "Nick Hodge"
// )

    return (
        <div>
            <Header />
            <FeedbackArea onAdd={getFeedbacks}/>
            
            {/* Displays Student List */}

            <div className="student-list-box">
                <ul className="student-list">
                    {feedbacks.map((feedbackItem, index) => {
                        return <Student
                        key={index}
                        id={index}
                        student={feedbackItem.student}
                        onFilter={filterStudent}
                        />
                    })}
                </ul>
            </div>

            {/* Displays feedbacks. */}

            {feedbacks.filter(feedbackItem => 
                feedbackItem.student === student
            ).map((feedbackItem, index) => {
                return <Feedback
                key={index}
                id={index}
                student={feedbackItem.student}
                skill={feedbackItem.skill}
                date={feedbackItem.date}
                praise={feedbackItem.praise}
                feedback={feedbackItem.feedback}
                // onDelete={deleteMove}
                />
            }).reverse()}

            <Footer />
        </div>
    );
}

export default App;