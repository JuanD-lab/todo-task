import '../App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ToDoItem({data}) {
    const { _id, task, student} = data
    const [ completed, setCompleted] = useState();

    const DeleteTask = () => {
        axios.delete(`https://todos-academlo.herokuapp.com/api/todo/:${_id}`)
    }


    const UpdateCompleted =  () => {

        const proms = new Promise(() => {
            setCompleted(!completed)
        })

        proms.then(axios.put(`https://todos-academlo.herokuapp.com/api/todo/${_id}`, {isCompleted:!completed}))
    }

  return (
    <div className="ToDoItem">
      <form>
            <div className="task">
                <h2>{task}</h2>
                <p>Por: {student}</p>
                {completed ? <input type="checkbox" defaultChecked="isChecked" name="isCompleted" onClick={UpdateCompleted}/> : <input type="checkbox" name="isCompleted" onClick={UpdateCompleted}/> }
                <p>Marca para realizar la tarea</p>    
                <button onClick={DeleteTask}>Delete Task</button>
            </div>
        </form>
    </div>
  );
}

export default ToDoItem;
