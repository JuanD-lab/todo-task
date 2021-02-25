import '../App.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function CreateToDo() {
  const { register, handleSubmit } = useForm(); 

    const onSubmit = (data) => {
      axios.post(`https://todos-academlo.herokuapp.com/api/todo`, {
      task:data.task,
      student:data.student
      });
    }

    return (
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>  
            <label>
                Name Task: 
                <input type="string" name="task" ref={register}/>
            </label>    
        
            <label>
                Student: 
                <input type="string" name="student" ref={register}/>
            </label>    

            <button>Publish</button>
        </form>
        </div>
    )
}

export default CreateToDo;