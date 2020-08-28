import React from 'react';
import { render } from "react-dom";
import './App.css';
import "@elastic/eui/dist/eui_theme_dark.css";

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer'

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom';

//Pagess

function App() {
  return (
    
    <div>
    {/* <Router>
      <Switch>
        <Route path="/" />
      </Switch>
    </Router> */}

      <Header />
      <Main />
      <Footer />
    </div>
  ); 
}

export default App; 

const rootElement = document.getElementById("root");
render(<App />, rootElement);

