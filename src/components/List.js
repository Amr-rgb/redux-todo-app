import * as actCreators from './../actionCreators'

export default function List({ store, items }) {
    const removeTodo = (item) => {
        store.dispatch(actCreators.removeTodoAction(item.id))
        window.API.deleteTodo(item.id)
            .catch(() => {
                alert('error eccured, try again')
                store.dispatch(actCreators.addTodoAction(item.name))
            })
    }

    const removeGoal = (item) => {
        store.dispatch(actCreators.removeGoalAction(item.id))
        window.API.deleteGoal(item.id)
            .catch(() => {
                alert('error eccured, try again')
                store.dispatch(actCreators.addGoalAction(item.name))
            })
    }

    const toggleTodo = (id) => {
        store.dispatch(actCreators.toggleTodoAction(id))
        window.API.saveTodoToggle(id)
            .catch(() => {
                alert('error eccured, try again')
                store.dispatch(actCreators.toggleTodoAction(id))
            })
    }

    return (
        <ul className="list">
            {items && items.map(item => (
                <li key={item.id}>{item.name}
                    {item.hasOwnProperty('complete') && <input
                        type="checkbox"
                        checked={item.complete ? true : false}
                        onChange={() => toggleTodo(item.id)} />}
                    <button
                        onClick={() => {
                            item.hasOwnProperty('complete') ? removeTodo(item) : removeGoal(item)
                        }}
                    >X</button>
                </li>
            ))}
        </ul>
    )
}