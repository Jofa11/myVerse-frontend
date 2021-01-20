import React from 'react';
import { Route } from 'react-router-dom';
import AddVerse from './AddVerse';
import AllVerses from './AllVerses';
import IdVerse from './IdVerse';
import './index.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
     <Route exact path='/' component={Home} />
     <Route exact path='/addverse' component={AddVerse}/>
     <Route exact path='/allverses' component={AllVerses} />
     <Route exact path='/verses/:id' component={IdVerse} />
    </div>
  );
}

export default App;
