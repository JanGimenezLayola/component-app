import React from 'react';

import InformationProvider from '../src/context/information-context'

import Home from './components/Home';

import './App.css';

function App() {
  return (
    <InformationProvider>
      <div className="App">
        <Home />
      </div>
    </InformationProvider>
   
  );
}

export default App;
