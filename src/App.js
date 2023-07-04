import logo from './logo.svg';
import './App.css';
import StateTutorial1 from "./UseState/StateTutorial1"
import StateTutorial2 from "./UseState/StateTutorial2"
import StateTutorial3 from "./UseState/StateTutorial3"
import ReducerTutorial from "./UseReducer/ReducerTutorial"
import EffectTutorial from './UseEffect/EffectTutorial';

function App() {
  return (
    <div className="App">
      <StateTutorial1 />
      <StateTutorial2 />
      <StateTutorial3 />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
