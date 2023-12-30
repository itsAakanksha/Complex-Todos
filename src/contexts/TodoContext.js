import { createContext,useContext } from "react";

const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"this is first todo",
        completed : false
}
],
   addTodo : (todo)=>{},
   updateTodo:(todo,id)=>{},
   deleteTodo:(id)=>{},
   toggleTodo:(id)=>{}
    
});

export const TodoContextProvider = TodoContext.Provider

export default function useTodo(){
  return useContext(TodoContext)
}