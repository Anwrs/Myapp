import React from 'react';
import { render } from "react-dom";
import './App.css';
import "@elastic/eui/dist/eui_theme_dark.css";

// Components Import
import Header from './Components/Header';
import Footer from './Components/Footer'

// Router Import
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from 'react-router-dom';

//Pages Import
import Home from './pages';
import Shop from './pages/Shop';
import Error from './pages/404';
import Help from './pages/Help';


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="http://anwrs.github.io/Myapp" component={Home} />
          <Route path='http://anwrs.github.io/Myapp/Shop' component={Shop} />
          <Route path='http://anwrs.github.io/Myapp/Help' component={Help} />
          <Route path='http://anwrs.github.io/Myapp/404' component={Error} />
          <Redirect to='http://anwrs.github.io/Myapp/404'/>
        </Switch>
      </Router>
      <Footer />
    </div>
  ); 
}

export default App; 

const rootElement = document.getElementById("root");
render(<App />, rootElement);

