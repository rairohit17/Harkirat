import { useEffect, useState } from 'react'
import './App.css'
import { addTodo,removeTodo, } from './states/todo';

import { useSelector,useDispatch} from 'react-redux';
import  { RootState, } from './store'; 





function App() {

  const [input,setInput] = useState("")
  const [id,setId] = useState("")

  let todos= useSelector((state:RootState)=>state.todos)
  const dispatch= useDispatch();
  function handleAddTodo(e:string){

    const id =(Date.now()) ;
    const todo:String = e.trim();
    if ( todo!=""){
      dispatch(addTodo({id,todo})) ;
    }
    
    

  }
  function handleRemoveTodo(e:string){
    if (e!=''){
    const id = Number(e)
    dispatch(removeTodo(id))
    }    

  }
  useEffect(()=>{
    todos.map((todo)=>console.log(todo))
  },[todos])
  

  return (
    <div>
      
      <input onChange={(e)=>setInput(e.target.value)}  type="todo" />
      <button onClick={()=>handleAddTodo(input)}>add todo</button> <br />
      <input onChange={(e)=>setId(e.target.value)}  type="todo" />
      <button onClick={()=>handleRemoveTodo(id)}>remove todo</button> <br />



      {todos.map((element) => {
          return (
            <div >
              {element.todo}
            </div>
          );
        })}
      
    </div>
   
  )
}

export default App
