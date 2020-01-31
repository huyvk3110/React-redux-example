import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./component.item";

interface IListProps {
    todo: {checked: boolean, todo: string}[],
}

class List extends Component<IListProps> {
    render() {
        let { todo } = this.props

        return (
            <>
                {todo.map((o, i) => <Item key={i} checked={o.checked} todo={o.todo} />)}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps)(List)