import React,{useState} from "react";
import styles from "./tasks.module.css";

const Tasks = (todo) => {
  // NOTE: do not delete `data-cy` key value pair
  const[isCompleted,setIsCompleted] = useState(todo.isCompleted)
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
      {todo.todo.map(el=>{return <li>{el.value}</li>})}

        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
