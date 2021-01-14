import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import RandoVerse from './RandoVerse';

function App() {
  return (
    <div className="App">
     <Route exact path='/randoverse' component={RandoVerse} />
    </div>
  );
}

export default App;
