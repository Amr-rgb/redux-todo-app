import React from 'react';
import List from './List'
import { handleAddTodo } from './../actionCreators'

export default class Todos extends React.Component {
    addTodo = () => {
        const value = this.input.value

        this.props.store.dispatch(handleAddTodo(value, () => this.input.value = ''))
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