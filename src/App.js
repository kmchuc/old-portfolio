import React, { useState } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SideBar from './components/Sidebar/index';
import NavBar from './components/Navbar/index';
import LandingPage from './components/LandingPage/LandingPage';
import Works from './components/Works/Works';
import Quarantings from './components/Quaran-tings/Quaran-tings';
import Kim from './components/Kim/Kim';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HashRouter basename='/'>
      <div className='App'>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle} />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/works' component={Works} />
          <Route path='/quaran-tings' component={Quarantings} />
          <Route path='/kim' component={Kim} />
          <Route path='/contactme' component={ContactMe} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
