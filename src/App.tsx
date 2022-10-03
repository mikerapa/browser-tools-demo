import React from 'react';
import logo from './logo.svg';
import './App.css';
import storage from './StorageExample';
import StorageExample from './StorageExample';
import APIExample from './APIExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <StorageExample></StorageExample>
      <APIExample></APIExample>
    </div>
  );
}

export default App;
