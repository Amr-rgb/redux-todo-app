import * as actions from './actions'

// todos actions

export function initialDataAction(todos, goals) {
    return {
        type: actions.INITIAL_DATA,
        todos,
        goals
    }
}

export function addTodoAction(todo) {
    return {
        type: actions.ADD_TODO,
        todo
    }
}

export function removeTodoAction(id) {
    return {
        type: actions.REMOVE_TODO,
        id
    }
}

export function toggleTodoAction(id) {
    return {
        type: actions.TOGGLE_TODO,
        id
    }
}

// goals actions

export function addGoalAction(goal) {
    return {
        type: actions.ADD_GOAL,
        goal
    }
}

export function removeGoalAction(id) {
    return {
        type: actions.REMOVE_GOAL,
        id
    }
}

// handling initial data

export function handleInitialData() {
    return (dispatch) => {
        Promise.all([window.API.fetchTodos(), window.API.fetchGoals()])
            .then(([todos, goals]) => {
                dispatch(initialDataAction(todos, goals))
            })
            .catch(() => {
                alert('error eccured, please reload')
            })
    }
}

// handling todo

export function handleAddTodo(value, cb) {
    return (dispatch) => {
        window.API.saveTodo(value)
            .then(goal => {
                dispatch(addTodoAction(goal))
                cb()
            })
            .catch(() => {
                alert('error eccured, try again')
            })
    }
}
export function handleRemoveTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id))
        window.API.deleteTodo(todo.id)
            .catch(() => {
                alert('error eccured, try again')
                dispatch(addTodoAction(todo))
            })
    }
}
export function handleToggleTodo(id) {
    return (dispatch) => {
        dispatch(toggleTodoAction(id))
        window.API.saveTodoToggle(id)
            .catch(() => {
                alert('error eccured, try again')
                dispatch(toggleTodoAction(id))
            })
    }
}

// handling goals

export function handleAddGoal(value, cb) {
    return (dispatch) => {
        window.API.saveGoal(value)
            .then(goal => {
                dispatch(addGoalAction(goal))
                cb()
            })
            .catch(() => {
                alert('error eccured, try again')
            })
    }
}
export function handleRemoveGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoalAction(goal.id))
        window.API.deleteGoal(goal.id)
            .catch(() => {
                alert('error eccured, try again')
                dispatch(addGoalAction(goal))
            })
    }
}