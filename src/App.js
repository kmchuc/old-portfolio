import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Channels from './components/Channels';

function App() {
  return (
    <HashRouter basename='/'>
      <div className='App'>
        <Route exact path="/" component={Homepage} />
        <Route path="/channels" component={Channels} />
        <Route path="/aboutme" component={AboutMe} />
      </div>
    </HashRouter>
  );
}

export default App;
