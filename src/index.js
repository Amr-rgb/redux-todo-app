import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedApp } from './App'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import * as actions from './actions'
import { Provider } from 'react-redux';

const logging = (store) => (next) => (action) => {
    console.group(action.type)
    const result = next(action)
    console.log(store.getState())
    console.groupEnd()
    return result
}

const bitcoinAlert = (store) => (next) => (action) => {
    if (action.type === actions.ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin'))
        return alert("bitcoin isn't allowed")
    return next(action)
}

const store = createStore(combineReducers({
    todos,
    goals,
    loading
}), applyMiddleware(thunk, logging, bitcoinAlert))

function todos(state = [], action) {
    switch (action.type) {
        case actions.INITIAL_DATA:
            return action.todos
        case actions.ADD_TODO:
            return state = state.concat([action.todo])
        case actions.REMOVE_TODO:
            return state = state.filter(i => i.id !== action.id)
        case actions.TOGGLE_TODO:
            return state = state.map(i => i.id === action.id ?
                { ...i, complete: !i.complete } : i)
        default:
            return state
    }
}
function goals(state = [], action) {
    switch (action.type) {
        case actions.INITIAL_DATA:
            return action.goals
        case actions.ADD_GOAL:
            return state = state.concat([action.goal])
        case actions.REMOVE_GOAL:
            return state = state.filter(i => i.id !== action.id)
        default:
            return state
    }
}
function loading(state = true, action) {
    switch (action.type) {
        case actions.INITIAL_DATA:
            return false
        default:
            return state
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
    , document.getElementById('root'));
