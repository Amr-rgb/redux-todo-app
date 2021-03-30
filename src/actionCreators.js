import * as actions from './actions'

function generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// todos actions

export function addTodoAction(name) {
    return {
        type: actions.ADD_TODO,
        todo: {
            id: generateID(),
            name,
            completed: false
        }
    }
}

export function removeTodoAction(id) {
    return {
        type: actions.REMOVE_TODO,
        id
    }
}

export function toggleTodoAction(todo) {
    return {
        type: actions.TOGGLE_TODO,
        todo
    }
}

// goals actions

export function addGoalAction(name) {
    return {
        type: actions.ADD_GOAL,
        goal: {
            id: generateID(),
            name,
        }
    }
}

export function removeGoalAction(id) {
    return {
        type: actions.REMOVE_GOAL,
        id
    }
}