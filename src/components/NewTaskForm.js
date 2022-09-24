import React from "react";

function NewTaskForm({categories, newItem, onChangeAddItem, onTaskFormSubmit}) {
  

  const newArrayCategory = categories
  .filter(category => category !== "All")
  .map((category, index) => <option key={index} value={category}>{category}</option>)
  
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newItem.text} onChange={onChangeAddItem}/>
      </label>
      <label>
        Category
        <select name="category" value={newItem.category} onChange={onChangeAddItem}>
          {newArrayCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>

    
  );
}

export default NewTaskForm;
