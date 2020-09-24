import React, { Children } from 'react';
import './App.css';
import { Part1, ArrowFunction, PropsJs, InputJs, Challenge, Sort } from './project';

function App() {
  return (
    <div className="App">
      <Part1 />
      <ArrowFunction />
      <PropsJs>헬로</PropsJs>
      {/* <PropsJs name ='은정'/> */}
      <InputJs />
      <Challenge />
      <Sort />
    </div>
  );
}

export default App;
