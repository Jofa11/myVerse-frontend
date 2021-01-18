import React from 'react';
import { Route } from 'react-router-dom';
import AddVerse from './AddVerse';
import AllVerses from './AllVerses';
import './index.css';
import RandoVerse from './RandoVerse';

function App() {
  return (
    <div className="App">
      <h1 className='title'>My Verse</h1>
     <Route exact path='/randoverse' component={RandoVerse} />
     <Route exact path='/' component={AddVerse}/>
     <Route exact path='/allverses' component={AllVerses} />
    </div>
  );
}

export default App;
