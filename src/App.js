import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom' 
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
    <Router basename="/personal_website">
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={Projects}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
