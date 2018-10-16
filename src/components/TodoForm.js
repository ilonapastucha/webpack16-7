import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoForm.css';


class TodoForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  handleOnChange (event) {
    const newToDo = event.target.value;
    this.setState({text: newToDo});
  }
  handleKeyUp (event) {
    const newToDo = this.state.text;
    if (event.keyCode === 13 && newToDo !== '') {
      this.props.add(newToDo);
      this.setState({text: ''})
    }
  }
  render() {
    return (
      <div className={style.TodoForm}>
        <input
          type="text"
          placeholder="Add to do"
          value={this.state.text}
          onChange={this.handleOnChange}
          onKeyUp={this.handleKeyUp}
          />
        <h3>#{this.props.todoLength}</h3>
      </div>
    );
  }
}

TodoForm.propTypes = {
  add: PropTypes.func,
  todoLength: PropTypes.number
}.isRequired;

export default TodoForm;