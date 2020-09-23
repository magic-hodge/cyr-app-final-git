import React from "react";

function Student(props) {
    
    function handleClick() {
        props.onFilter(props.student);
    }
    
    return(
        <li className="student-item">
            <h2 onClick={handleClick}>{props.student}</h2>
        </li>
    )
}

export default Student;
