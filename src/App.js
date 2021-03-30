import './App.css';
import Goals from './components/Goals';
import Todos from './components/Todos';

function App(props) {
  return (
    <div className="App">
      <Todos store={props.store} />
      <Goals store={props.store} />
    </div>
  );
}

export default App;
