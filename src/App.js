import React from 'react'
import './App.css';
import Goals from './components/Goals';
import Todos from './components/Todos';
import * as actCreators from './actionCreators'

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props

    store.subscribe(() => {
      this.forceUpdate()
    })

    Promise.all([window.API.fetchTodos(), window.API.fetchGoals()])
      .then(([todos, goals]) => {
        store.dispatch(actCreators.initialDataAction(todos, goals))
      })
      .catch(() => {
        alert('error eccured, please reload')
      })
  }


  render() {
    const { store } = this.props
    const { todos, goals, loading } = store.getState()

    if (loading) {
      return <h3>loading</h3>
    }

    return (
      <div className="App">
        <Todos store={store} todos={todos} />
        <Goals store={store} goals={goals} />
      </div>
    );
  }
}

export default App;
