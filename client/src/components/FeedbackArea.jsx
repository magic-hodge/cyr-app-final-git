import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';

function FeedbackArea(props) {
    
    const [isExpanded, setExpanded] = useState(false);

    const [move, setMove] = useState({
        student: "",
        skill: "",
        praise: "",
        feedback: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setMove(prevMoveItem => {
            return {
                ...prevMoveItem,
                [name]: value
            };
        });
    }

    function submitFeedback(event) {
        event.preventDefault();

        const payload = {
            student: move.student,
            skill: move.skill,
            praise: move.praise,
            feedback: move.feedback
        };

        axios({
           url: '/api/save',
           method: 'POST',
           data: payload
        })
            .then(() => {
                console.log('Data successfully sent to server.');
            })
            .catch((err) => {
                console.log(err);
            });;

        props.onAdd(move);
        setMove({
            student: "",
            skill: "",
            praise: "",
            feedback: ""
        });

        setExpanded(false);
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-feedback" action="/" method="post">
                {isExpanded && <input
                    name="student"
                    placeholder="Student Name"
                    onChange={handleChange}
                    value={move.student}
                />}
                { isExpanded && <input
                    name="skill"
                    placeholder="Skill Name"
                    onChange={handleChange}
                    value={move.skill}
                />}
                
                { isExpanded && <textarea
                    name="praise"
                    placeholder="Praise!"
                    rows="3"
                    onClick={expand}
                    onChange={handleChange}
                    value={move.praise}
                />}
                <textarea
                    name="feedback"
                    placeholder={isExpanded ? "Feedback..." : "New Feedback..."}
                    rows={isExpanded ? 3 : 1}
                    onClick={expand}
                    onChange={handleChange}
                    value={move.feedback}
                />
                <Zoom in={isExpanded? true : false}>
                    <Fab type="submit" onClick={submitFeedback}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default FeedbackArea;