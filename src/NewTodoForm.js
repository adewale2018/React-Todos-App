import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = {...this.state, id: uuid(), completed: false }
    this.props.createTodo(newTodo);
    this.setState({
      task: ""
    })
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">Enter New Todo</label>
        <input 
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          placeholder="Enter New Todo"
          required="required"
          onChange={this.handleChange}
        />
        <button>Add New Task</button>
      </form>
    )
  }
}

export default  NewTodoForm;
