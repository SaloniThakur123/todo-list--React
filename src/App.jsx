import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Display from './components/Display';

function App() {

  const [tasks,setTasks]=useState([]);

  function addTasks(task){
      setTasks([...tasks,task]);
    }
    console.log(tasks);

    function deleteTask(key){
      let copy=[...tasks];
      copy.splice(key,1);
      setTasks([...copy]);
    }
  return (
    <div className="main">
      <h1 className="header">TODO-LIST</h1>
      <Form addTasks={addTasks}></Form>
      <Display tasks={tasks} onDelete={deleteTask}/>
      
    </div>
  );
}

export default App
