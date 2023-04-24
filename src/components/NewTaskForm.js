import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    onTaskFormSubmit(newTask);
    setFormData({
      text: "",
      category: "Code",
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={formData.text}
        onChange={(event) => setFormData({ ...formData, text: event.target.value })}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={formData.category}
        onChange={(event) =>setFormData({ ...formData, category: event.target.value })}
        >
        {categories.map((category) => {
            if (category !== "All") {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            }
            return null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
