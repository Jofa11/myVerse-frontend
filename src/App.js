import React from 'react';
import { Route } from 'react-router-dom';
import AddVerse from './AddVerse';
import './index.css';
import RandoVerse from './RandoVerse';

function App() {
  return (
    <div className="App">
     <Route exact path='/randoverse' component={RandoVerse} />
     <Route exact path='/' component={AddVerse}/>
    </div>
  );
}

export default App;
