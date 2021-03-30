import React from 'react';
import List from './List'
import * as actCreators from './../actionCreators'

export default class Goals extends React.Component {
    addGoal = () => {
        const value = this.input.value
        this.input.value = ''

        window.API.saveGoal(value)
            .then(_ => {
                this.props.store.dispatch(actCreators.addGoalAction(value))
            })
            .catch(() => {
                alert('error eccured, try again')
            })
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