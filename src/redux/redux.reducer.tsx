import { ADD_TODO } from "./redux.define";

let todoState: { todo: { checked: boolean, todo: string }[] } = {
    todo: []
}

export default function todoReducer(state = todoState, action: { type: string, payload: any }) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, { todo: state.todo.concat(action.payload) });
        default:
            return state
    }
}