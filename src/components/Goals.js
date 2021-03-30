import React from 'react';
import List from './List'
import * as actCreators from './../actionCreators'

export default class Goals extends React.Component {
    componentDidMount() {
        const { store } = this.props

        store.subscribe(() => {
            this.forceUpdate()
        })
    }

    addGoal = () => {
        const value = this.input.value
        this.input.value = ''

        this.props.store.dispatch(actCreators.addGoalAction(value))
    }

    render() {
        const { store } = this.props
        const items = store.getState().goals

        return (
            <div className="goals">
                <h2>Goals</h2>
                <input
                    type="text"
                    placeholder='type your goal'
                    ref={input => this.input = input}
                />
                <button onClick={this.addGoal}>Add Goal</button>
                <List store={store} items={items} />
            </div>
        )
    }
}