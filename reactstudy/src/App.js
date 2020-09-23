import React, { Children } from 'react';
import './App.css';
import { Part1, ArrowFunction, PropsJs, InputJs } from './project';

function App() {
  return (
    <div className="App">
      <Part1 />
      <ArrowFunction />
      <PropsJs>헬로</PropsJs>
      {/* <PropsJs name ='은정'/> */}
      <InputJs />
    </div>
  );
}

export default App;
