import React, {useEffect, useState} from 'react'
import '../App.css';
import axios from 'axios'
import ToDoItem from './ToDoItem'
import CreateToDo from './CreateToDo'

function ToDoContainer() {
  const [view, setView] = useState([])
  const BaseURL = 'https://todos-academlo.herokuapp.com/'
  
  useEffect(() => {
    const promise = axios.get(`${BaseURL}api/todos`)
    promise.then((response) =>{
      setView(response.data)
    })
  },[])
  
  return (
    <div className="ToDoContainer">
      <CreateToDo/>
      {view.todos ? view.todos.map(
        (e) => {return <ToDoItem key={e._id} data={e}/>}
      ): null}
    </div>
  );
}

export default ToDoContainer;

