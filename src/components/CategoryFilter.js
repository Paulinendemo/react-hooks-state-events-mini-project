import React from "react";

function CategoryFilter({categories, onClickCategory}) {
  
  const categoryButtons = categories.map((category, index) => <button key={index} value={category} onClick={onClickCategory}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
