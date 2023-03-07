import React,{useEffect, useState} from 'react';
import './App.css';

function App() {


  const [date,setDate]=useState('')
  const [toDos,setToDos]=useState([])
  const[toDo,setToDo]=useState('')
  const today = new Date();

  useEffect(() => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[today.getDay()];
  
    setDate(dayName)

  }, [])
  
  const handleToDo=()=>{
    setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])
    setToDo("")
  }
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {date} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        
        <i onClick={handleToDo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{ 
            return(  
        <div key={obj.id} className="todo">
          <div className="left">
            <input onChange={(e)=>{
           
              console.log(obj)
              console.log(e.target.checked)
             
              setToDos(toDos.filter((obj2)=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2;
              }))
            }}  type="checkbox" name="" id="" />
            <p className={obj.status?'done':''}>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{setToDos(
              toDos.filter((obj3)=>{
                if(obj3.id!==obj.id){
                  return obj3
                }
              })
            )}} className="fas fa-times"></i>
          </div>
        </div>
            )
         })
        }
      </div>
    </div>
  );
}

export default App;