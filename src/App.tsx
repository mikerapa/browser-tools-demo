import React from 'react';
import logo from './TechBash2022.png' 
import './App.css';
import storage from './StorageExample';
import StorageExample from './StorageExample';
import APIExample from './APIExample';
import LayoutExample from './LayoutExample';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        See <a href="https://github.com/mikerapa/browser-tools-demo/blob/master/README.md">documentation</a> for using this demo. 
      </div>

      <LayoutExample></LayoutExample>
      <StorageExample></StorageExample>
      <APIExample></APIExample>
    </>
  );
}

export default App;
