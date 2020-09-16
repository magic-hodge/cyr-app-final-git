import React from "react";
// import DeleteIcon from '@material-ui/icons/Delete';

function Feedback(props) {
    
    // function handleClick() {
    //     props.onDelete(props.id);
    // }

    return (
        <div className="move-item">
            <h1>{props.student} • {props.skill} • {props.date}</h1>
            <p>{props.praise}</p>
            <hr/>
            <p>{props.feedback}</p>
            {/* <button onClick={handleClick}><DeleteIcon /></button> */}
        </div>
    );
}

export default Feedback;