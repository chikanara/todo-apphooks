import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleDelete, handleComplete }) => {
  return (
    <div>
      {tasks.map((todo) => (
        <TaskItem
          todo={todo}
          key={todo.id}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
