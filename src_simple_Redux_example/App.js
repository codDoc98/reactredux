import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement,logger} from './actions'
function App(props) {
  const counter= useSelector(state=>state.counter);
  const isLogged= useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
  const logStatus = isLogged?"Log Out":"sign In";
  const toggleLogger = () =>{
    const action = logger()
    dispatch(action)
    // logger = isLogged?"Log Out":"sign In";
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={toggleLogger}>{logStatus}</button>
      {isLogged?<h3>"you are signed in"</h3>:<h3> "you are logged out"</h3>}
    </div>
  );
}

export default App;