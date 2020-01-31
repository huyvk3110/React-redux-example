import React, { Component, SyntheticEvent } from "react";
import { addTodo } from "../redux/redux.action";
import { connect } from "react-redux";

interface IInputProps {
    addTodo: Function
}

interface IState {
    inputValue: string
}

class Input extends Component<IInputProps, IState> {
    constructor(props: IInputProps) {
        super(props)

        this.state = {
            inputValue: ''
        }

        this.addTodo = this.addTodo.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    addTodo() {
        this.props.addTodo({ checked: false, todo: this.state.inputValue });
    }

    onInputChange(event: any) {
        this.setState({ inputValue: event.target.value })
    }

    render() {
        return (
            <>
                <input type="text" placeholder="Text here" onChange={this.onInputChange} />
                <button onClick={this.addTodo}>Add</button>
            </>
        )
    }
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(Input)