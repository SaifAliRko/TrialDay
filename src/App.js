import logo from './logo.svg';
import './App.css';
import BoardCard from './components/BoardCard';
import data from './components/data/cardData'
import { useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  console.log('data', data)
  const [tasks, setTasks] = useState([]) // this should be replaced new boardTasks
  const [boardTasks, setBoardTasks] = useState([{
    id: 0,
    task: []
  },
  {
    id: 1,
    task: []
  },
  {
    id: 2,
    task: []
  },
  {
    id: 3,
    task: []
  }
  ]);

  const handleNext = (id) => {
    console.log('id', id)
    //increment the id by Id
    //push the task of specfic id into task array
  }
  
  const addTaskHandler = (task)=> {
    console.log('task values', task)
   // let newTaskArray = tasks.push(task)
    setTasks(prevItems => [...prevItems, task]);
    console.log('tasks from State', tasks)
  }
  
  const Card = data.map((item,index) => (
    <BoardCard title={item.title} tasks={tasks} addTaskHandler={addTaskHandler} index={index}/>
  ));

  return (
    
    

     <div style={{ display: "flex", padding: "100px", width: "100%", margin: "auto", flexWrap: "wrap", backgroundColor: "blue" }}>
        {Card}
      </div>
   
  )
}

export default App;
