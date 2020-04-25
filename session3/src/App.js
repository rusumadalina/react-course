import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import Cocktails from './components/Cocktails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/something" render={() => { return <h1>My Something</h1> }}></Route>
          <Route path="/cocktails/:cocktailId" component={Cocktails}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
