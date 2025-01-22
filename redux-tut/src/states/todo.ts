import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = Todo[]

interface Todo {
   id:number,
   todo: String,
}

const initialState: initialState = [];

const TodoSlice = createSlice({
   name: "todos", 
   initialState,
   reducers: {
       addTodo: (state: Todo[], action: PayloadAction<Todo>) => {
           state.push(action.payload);
       },
       removeTodo: (state: Todo[], action: PayloadAction<number>) => {
        return state.filter((todo: Todo) => todo.id !== action.payload);
      }
      ,
       resetTodos:(state: Todo[])=>{
            return [];

       }
   }
});

export const  {addTodo,removeTodo,resetTodos} = TodoSlice.actions;

export default TodoSlice.reducer;


// steps 

// create a slice 

// a slice has the name of state its initial state and the reducers 
// the reducers contains the methods to interact with the state and change it 

// export the reducers 
//create a store to store all the states 

