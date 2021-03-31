import React from 'react'
import './App.css';
import Goals from './components/Goals';
import Todos from './components/Todos';
import { handleInitialData } from './actionCreators'

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props

    store.dispatch(handleInitialData())

    store.subscribe(() => {
      this.forceUpdate()
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
