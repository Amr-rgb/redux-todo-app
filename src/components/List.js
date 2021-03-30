import * as actCreators from './../actionCreators'

export default function List({ store, items }) {
    const removeTodo = (id) => {
        store.dispatch(actCreators.removeTodoAction(id))
    }

    const removeGoal = (id) => {
        store.dispatch(actCreators.removeGoalAction(id))
    }

    const toggleTodo = (todo) => {
        store.dispatch(actCreators.toggleTodoAction(todo))
    }

    return (
        <ul className="list">
            {items && items.map(item => (
                <li key={item.id}>{item.name}
                    {item.hasOwnProperty('completed') && <input type="checkbox" onChange={() => toggleTodo(item)} />}
                    <button
                        onClick={() => {
                            item.hasOwnProperty('completed') ? removeTodo(item.id) : removeGoal(item.id)
                        }}
                    >X</button>
                </li>
            ))}
        </ul>
    )
}