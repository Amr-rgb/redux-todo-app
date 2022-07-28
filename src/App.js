import React from 'react'
import './App.css';
import { ConnectedGoals } from './components/Goals';
import { ConnectedTodos } from './components/Todos';
import { handleInitialData } from './actionCreators'
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }


  render() {
    if (this.props.loading) {
      return <h3>loading</h3>
    }

    return (
      <div className="App">
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export const ConnectedApp = connect((state) => ({
  loading: state.loading
}))(App)