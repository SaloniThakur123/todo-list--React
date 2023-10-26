// import React from 'react'
import "./Display.css";
const Display = (props) => {
  return (
    <ul>
      {props.tasks.map((task,idx) => (
        <li key={idx}>
          {task}<i onClick={props.onDelete} className="fa-solid fa-trash"></i>
        </li>
      ))}
    </ul>
  );
};

export default Display;
