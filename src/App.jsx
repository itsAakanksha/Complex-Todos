import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import useTodo from "./contexts/TodoContext";
import { TodoContextProvider } from "./contexts/TodoContext";
import { useEffect, useState } from "react";

export default function App() {

  // const {todos} = useTodo()
  const [todos,setTodos] =useState([])
  // const [Todo, setTodo] = useState([])

  const addTodo=(todo)=>{
  //  console.log(todo)
   setTodos((prev)=> [{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo)=>{
   setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=>prev.filter((prevTodo) => prevTodo.id != id))
  }

  const toggleTodo = (id)=>{
   setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo))
  }

  

  // LOCALSTORAGE  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0)
    {
      setTodos(todos)
    }
  
  }, [])

  useEffect(() => {
    
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(todos)
  }, [todos])
  
  
 

  return (
   
    <TodoContextProvider value = {{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
           
            {
              todos.map((todo)=>
              (
                <div key={todo.id} className="w-full">
                <TodoItem Todo= {todo}/> 
                </div>
              ))
            }
        </div>
    </div>
</div>
</TodoContextProvider>
  )
}