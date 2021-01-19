import React from 'react';
import { Route } from 'react-router-dom';
import AddVerse from './AddVerse';
import AllVerses from './AllVerses';
import IdVerse from './IdVerse';
import Navbar from './Navbar';
import './index.css';
import RandoVerse from './RandoVerse';

function App() {
  return (
    <div className="App">
      <h1 className='title'>My Verse</h1>
      
     <Route exact path='/randoverse' component={RandoVerse} />
     <Route exact path='/' component={AddVerse}/>
     <Route exact path='/allverses' component={AllVerses} />
     <Route exact path='/verses/:id' component={IdVerse} />
    </div>
  );
}

export default App;
