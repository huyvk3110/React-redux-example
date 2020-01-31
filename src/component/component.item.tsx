import React, { Component } from "react";

interface IItemProps {
    checked: boolean,
    todo: string,
}

class Item extends Component<IItemProps> {
    constructor(props: IItemProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange() {

    }

    render() {
        const { checked, todo } = this.props;
        return (
            <div style={{ display: 'flex' }}>
                <input type="checkbox" name="" id="" checked={checked} onChange={()=>{}}/>
                <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>{todo}</div>
            </div>
        )
    }
}

export default Item