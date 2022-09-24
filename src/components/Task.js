import React from "react";

function Task({text, category, onDelete}) {

  function handleDeleteChange() {
    onDelete(text);
    
  }
 

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteChange}>X</button>
    </div>
  );
}

export default Task;
