import React from 'react';
import List from './List'
import { handleAddGoal } from './../actionCreators'
import { connect } from 'react-redux';

class Goals extends React.Component {
    addGoal = () => {
        const value = this.input.value

        this.props.dispatch(handleAddGoal(value, () => this.input.value = ''))
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
                <List dispatch={this.props.dispatch} items={this.props.goals} />
            </div>
        )
    }
}

export const ConnectedGoals = connect((state) => ({
    goals: state.goals
}))(Goals)