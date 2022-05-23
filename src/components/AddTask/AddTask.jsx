import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import Tasks from "../Tasks/Tasks";
// import TaskHeader from "./TaskHeader/TaskHeader"

const AddTask = () => {
  const[value,setValue]=useState("")
  const[todos,setTodos]=useState([])
  // NOTE: do not delete `data-cy` key value pair

  const onDelete=(id)=>{
    let newTodos = todos.filter(todo=> todo.id !==id);
  setTodos(newTodos);
  console.log(todos)
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={value} type="text" placeholder="Add Task" onChange={(e)=>{setValue(e.target.value)}} />
      <button data-cy="add-task-button" onClick={()=>{setTodos([...todos,{id:Date.now(),value:value}]);
      setValue("");
    }} >+</button>
    {/* {todos.map((todo)=>
    <Todoitems key={todo.id} todo={todo} onDelete={onDelete}/>
    )} */}
    {/* <TaskHeader todo={console.log(todos.length)}/> */}
    <Tasks todo={todos} key={todos.id}/>
    </div>
  );
};

export default AddTask;
