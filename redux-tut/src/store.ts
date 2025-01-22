import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { addTodo, removeTodo, resetTodos } from "./states/todo";
// import {addTodo,removeTodo,resetTodos} from "./states/todo"

const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store
