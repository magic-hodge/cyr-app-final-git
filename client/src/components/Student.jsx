import React from "react";

function Student(props) {
    return(
        <div className="student-item">
            <h2>{props.student}</h2>
        </div>
    )
}

export default Student;
