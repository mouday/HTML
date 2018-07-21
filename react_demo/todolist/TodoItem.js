import React, {Component} from "react";

class TodoItem extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //子组件接受参数props
    handleClick() {
        this.props.delete(this.props.index)
    }

    render() {
        const content = this.props.content
        return (
            <div onClick={this.handleClick}> {content} </div>
        );
    }
}

export default TodoItem;