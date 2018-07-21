import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js';

// 定义一个组件
class TodoList extends Component {
  // 构造函数初始化
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };
    // 代码优化
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick() {
    this.setState({
      // 展开运算符 es6
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index) {
    // 拷贝一个副本出来，操作副本
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  getItemListByThis(index, item){
    return (
      <li key={index} onClick={this.handleItemClikc.bind(this, index)}> {item}</li>
    )
  }

  getTodoItems(){
      return (this.state.list.map((item, index)=>{
                return (
                  <TodoItem 
                    delete={this.handleDelete} 
                    key={index} 
                    index={index} 
                    content={item} 
                  />
                )
                }))}

  // 必须有render
  render() {
  // 花括号中可以写js表达式
    return (
      // jsx语法，可以直接使用标签结构
      <Fragment>
      <div> 
        <input type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
        <button style={{color: 'white'}} className="red-btn" onClick={this.handleClick}>点击</button>
      </div>
      <ul>
          {  this.getTodoItems()  }
      </ul>
      </Fragment>
    );
  }
}

export default TodoList;  //导出才可以导入
