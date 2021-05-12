import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 0, task: "Learn HTML and CSS", isDone: true },
    { id: 1, task: "Learn JS", isDone: true },
    { id: 2, task: "Learn node js", isDone: false },
  ]);

  const handleDelete = (idTask) => {
    setTaskList(taskList.filter((todo) => todo.id !== idTask));
  };

  const handleComplete = (idTask) => {
    setTaskList(
      taskList.map((todo) =>
        todo.id === idTask ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleAdd = (newTask) => {
   if(newTask){
    setTaskList([...taskList,{id:Math.random(),isDone:false,task:newTask}])
   }
   else alert("Enter new Task please")
  }

  return (
    <div className="app">
      <h1>TODO APP</h1>
      <AddTask handleAdd={handleAdd} />
      <TaskList tasks={taskList} handleDelete={handleDelete} handleComplete={handleComplete}/>
    </div>
  );
}

export default App;
