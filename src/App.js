import React, { useState } from "react";

import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

function App(props) {
  const [tasks, setTasks] = useState(DATA);
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));
  function addTask(name) {
    const newTask = { id: Date.now() , name: name, completed: false }
    // Doggie Dating
    setTasks([...tasks, newTask]);

  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      //function like an on and off switch

      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    
  }
  // const toggleTaskCompleted = (id) => {

  // }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => {
      // console.log('id', id)
      // console.log('task-id', task.id)
      return id !== task.id
    
    });
    setTasks(remainingTasks);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
         <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
export default App;
