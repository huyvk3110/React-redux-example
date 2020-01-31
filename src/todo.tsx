import React, { Component } from "react";
import Input from "./component/component.input";
import List from "./component/component.list";

class Todo extends Component {
    render() {
        return (
            <>
                <h1>Todo List</h1>
                <Input />
                <List/>
            </>
        )
    }
}

export default Todo