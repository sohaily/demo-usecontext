import React, { useContext } from 'react';
import ValueContext from './ValueContext';
function Child(props) {
    // function Child(props) {
    let value = useContext(ValueContext);
    let updateValue = value[1];
    return (
      <div>
       hello from Child  {value[0]}
       <button onClick = {()=>{updateValue(++value[0])}}>Update value</button>
       {/* <button onClick = {()=>{value[1](++value[0])}}>Update value</button> */}
       {/* {props.num} */}
      </div>
    );
  }
  
  export default Child;