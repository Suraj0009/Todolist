import React,{useState}from "react"
import "./App.css";

function App() {
 
  const [todoList, setTodoList]= useState([]);
  const [CurrentTask,setCurrentTask]=useState("");

  const addTask=()=>{
         
    setTodoList([...todoList, CurrentTask]);

    console.log(todoList);

  }
  return (
    <div className="App">
      <h1> Todo-List</h1>
      <div>
          
           <input type="text" placeholder="task..." onChange={(event)=>{

            setCurrentTask(event.target.value)
           }}/>
          <button onClick={addTask}>Add Task</button>

          </div>
          <hr />
    </div>
  )
}

export default App
