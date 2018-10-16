import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='ToDo App'/>
                    <TodoForm
                        add={this.addTodo}
                        todoLength={this.state.data.length}
                    />
                <ul>
                    <TodoList
                        todos={this.state.data}
                        remove={this.removeTodo}
                        update={this.updateTodo}
                        done={this.doneTodo}
                    />
                </ul>
            </div>
        )
    }

}

export default hot(module)(App);