import { handleRemoveTodo, handleToggleTodo, handleRemoveGoal } from './../actionCreators'

export default function List({ store, items }) {
    const removeTodo = (item) => {
        store.dispatch(handleRemoveTodo(item))
    }

    const removeGoal = (item) => {
        store.dispatch(handleRemoveGoal(item))
    }

    const toggleTodo = (id) => {
        store.dispatch(handleToggleTodo(id))
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