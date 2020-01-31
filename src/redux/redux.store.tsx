import { createStore, combineReducers } from "redux";
import TodoReducer from "./redux.reducer";

const store = createStore(TodoReducer);

store.subscribe(() => { console.log('Todo store:', store.getState()) })

export default store;