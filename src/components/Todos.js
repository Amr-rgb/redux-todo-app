import React from 'react';
import List from './List'
import * as actCreators from './../actionCreators'

export default class Todos extends React.Component {
    componentDidMount() {
        const { store } = this.props

        store.subscribe(() => {
            this.forceUpdate()
        })
    }

    addTodo = () => {
        const value = this.input.value
        this.input.value = ''

        this.props.store.dispatch(actCreators.addTodoAction(value))
    }

    render() {
        const { store } = this.props
        const items = store.getState().todos

        return (
            <div className="todos">
                <h2>Todos</h2>
                <input
                    type="text"
                    placeholder='type your todo'
                    ref={input => this.input = input}
                />
                <button onClick={this.addTodo}>Add Todo</button>
                <List store={store} items={items} />
            </div>
        )
    }
}