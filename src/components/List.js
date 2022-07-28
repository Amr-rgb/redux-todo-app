import { handleRemoveTodo, handleToggleTodo, handleRemoveGoal } from './../actionCreators'

export default function List({ dispatch, items }) {
    const removeTodo = (item) => {
        dispatch(handleRemoveTodo(item))
    }

    const removeGoal = (item) => {
        dispatch(handleRemoveGoal(item))
    }

    const toggleTodo = (id) => {
        dispatch(handleToggleTodo(id))
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