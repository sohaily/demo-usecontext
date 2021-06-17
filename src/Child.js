import React, { useContext } from 'react';
import ValueContext from './ValueContext';
function Child(props) {
    // function Child(props) {
    let value = useContext(ValueContext);
    return (
      <div>
       hello from Child  {value}
       {/* {props.num} */}
      </div>
    );
  }
  
  export default Child;