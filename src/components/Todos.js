import React from 'react';
import List from './List'
import { handleAddTodo } from './../actionCreators'
import { connect } from 'react-redux';

class Todos extends React.Component {
    addTodo = () => {
        const value = this.input.value

        this.props.dispatch(handleAddTodo(value, () => this.input.value = ''))
    }

    render() {
        return (
            <div className="todos">
                <h2>Todos</h2>
                <input
                    type="text"
                    placeholder='type your todo'
                    ref={input => this.input = input}
                />
                <button onClick={this.addTodo}>Add Todo</button>
                <List dispatch={this.props.dispatch} items={this.props.todos} />
            </div>
        )
    }
}

export const ConnectedTodos = connect((state) => ({
    todos: state.todos
}))(Todos)