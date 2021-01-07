import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Loadingpage from './components/LoadingPage/Loadingpage'

function App() {
  return (
    <HashRouter basename='/'>
      <div className='App'>
        <Route exact path="/" component={Homepage} />
        <Route path="/loadingpage" component={Loadingpage} />

      </div>
    </HashRouter>
  );
}

export default App;
