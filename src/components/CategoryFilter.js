import React from "react";

function CategoryFilter({categories, selectedCategory, onFilter}) {

  const handleFilter = (category) => {
    onFilter(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
