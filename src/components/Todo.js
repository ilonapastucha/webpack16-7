import React from 'react';
import PropTypes from 'prop-types';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedText: '',
      showText: true,
      showInput: false
    }
  }
  showHandle ()  {
    const { showText, showInput } = this.state;
    this.setState({
      showText: !showText,
      showInput: !showInput
    })
  }
  handleOnChange (event)  {
    const updatedText = event.target.value;
    this.setState({updatedText});
  }
  handleKeyUp (event)  {
    const updatedText = this.state.updatedText;
    if (event.keyCode === 13 &&  updatedText !== '') {
      this.props.update(this.props.id, updatedText);
      this.setState({
        updatedText: '',
        showText: true,
        showInput: false
      })
    } else if (event.keyCode === 13 && updatedText === '') {
      this.setState({
        updatedText: '',
        showText: true,
        showInput: false
      })
    }
  }
  render() {
    const { showText, showInput } = this.state;
    return(
      <li>
        <div>
          <span
          onClick={() => this.props.done(
            this.props.id,
            this.props.text,
            this.props.isDone)}>
          </span>
          <span href="#"
          onClick={() => this.props.remove(this.props.id)}>
          </span>
          {showText &&<p onDoubleClick={this.showHandle}>{this.props.text}</p>}
          {showInput &&<input
            type="text"
            value={this.state.updatedText}
            onChange={this.handleOnChange}
            onKeyUp={this.handleKeyUp}
            />}
        </div>
      </li>
    );
  }
}

Todo.propTypes = {
  update: PropTypes.func,
  id: PropTypes.string,
  isDone: PropTypes.bool,
  done: PropTypes.func,
  text: PropTypes.text,
  remove: PropTypes.func
}.isRequired;

export default Todo;