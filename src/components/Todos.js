import React from 'react';
import List from './List'
import * as actCreators from './../actionCreators'

export default class Todos extends React.Component {
    addTodo = () => {
        const value = this.input.value
        this.input.value = ''

        window.API.saveTodo(value)
            .then(_ => {
                this.props.store.dispatch(actCreators.addTodoAction(value))
            })
            .catch(() => {
                alert('error eccured, try again')
            })
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
                <List store={this.props.store} items={this.props.todos} />
            </div>
        )
    }
}