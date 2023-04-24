import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setTaskList(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTaskList(filteredTasks);
    }
  };

  const handleTaskFormSubmit = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
      selectedCategory={selectedCategory}
      onFilter={handleFilter} 
      />
      <NewTaskForm
      categories={CATEGORIES} 
      onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={taskList} 
      onDelete={removeTask} 
      />
    </div>
  );
}

export default App;
