import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar/index';
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
    <div>
      <HashRouter basename='/'>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/works' component={Works}/>
          <Route path='/quaran-tings' component={Quarantings}/>
          <Route path='kim.' component={Kim}/>
          <Route path='contactme' component={ContactMe}/>
        </Switch>
      <Works/>
      <Quarantings/>
      <Kim/>
      <ContactMe/>
      </HashRouter>
    </div>
  );
}

export default App;
