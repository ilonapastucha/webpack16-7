import React from 'react';
import Todo from './Todo';

const TodoList = props => { return (
    props.todos.map(todo => {
      return (
        <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            remove={props.remove}
            update={props.update}
            done={props.done}
            isDone={todo.done}
        />
      )
    })
  )
};

export default TodoList;