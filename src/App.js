import React, { useContext, useReducer, useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
function App() {
  // let[number,setNumber] =useState(45);
  let value =useState(42);
  
  return (
    <ValueContext.Provider value={value}>
      <div>
          hello from
          <Parent></Parent>
          {/* <Parent num={number}></Parent> */}
          {/* <button onClick={()=>{setNumber(++number)}}>Update Number</button> */}
      </div>
    </ValueContext.Provider>
  );
}

export default App;
