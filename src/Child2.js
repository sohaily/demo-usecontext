import React, { useReducer } from 'react';
import Child from './Child';
import numberReducer from './numberReducer';
// import useReducer from './useReducer'
function Child2() {
    let [state,dispatch] =useReducer(numberReducer,52)
    return (
      <div>
         Child2 {state}
         <button onClick={() =>{dispatch({type:"INCREMENT",val:67})}}>Increment</button>
         <button onClick={() =>{dispatch({type:"DECREMENT",val:34})}}>decrement</button>
      </div>
    );
  }
  
  export default Child2;