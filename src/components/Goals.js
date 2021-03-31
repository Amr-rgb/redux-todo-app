import React from 'react';
import List from './List'
import { handleAddGoal } from './../actionCreators'

export default class Goals extends React.Component {
    addGoal = () => {
        const value = this.input.value

        this.props.store.dispatch(handleAddGoal(value, () => this.input.value = ''))
    }

    render() {
        return (
            <div className="goals">
                <h2>Goals</h2>
                <input
                    type="text"
                    placeholder='type your goal'
                    ref={input => this.input = input}
                />
                <button onClick={this.addGoal}>Add Goal</button>
                <List store={this.props.store} items={this.props.goals} />
            </div>
        )
    }
}