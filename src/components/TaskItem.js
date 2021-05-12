import React from "react";

const TaskItem = ({ todo, handleDelete, handleComplete }) => {
  return (
    <div className="task">
      <p className={todo.isDone ? "done" : null}>{todo.task}</p>
      <div>
        <button onClick={() => handleComplete(todo.id)}>
          {todo.isDone ? "Undo" : "Complete"}
        </button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
