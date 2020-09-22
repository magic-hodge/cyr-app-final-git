import React, {useState} from "react";
import Header from "./Header";
import FeedbackArea from "./FeedbackArea"
import Feedback from "./Feedback";
import Footer from "./Footer";
import axios from "axios";

function App() {
    // const [moves, setMoves] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

    // function addMove(newMove) {
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
            {feedbacks.map((feedbackItem, index) => {
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