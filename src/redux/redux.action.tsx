import { ADD_TODO } from "./redux.define";

export function addTodo(data: { checked: boolean, todo: string }) {
    return {
        type: ADD_TODO,
        payload: data,
    }
}