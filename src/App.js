import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment} from './actions'
function App(props) {
  const counter= useSelector(state=>state.counter);
  const isLogged= useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button>-</button>
      {isLogged?<h3>"you are signed in"</h3>:<h3> "you are logged out"</h3>}
    </div>
  );
}

export default App;