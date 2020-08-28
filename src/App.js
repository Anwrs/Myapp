import React from 'react';
import { render } from "react-dom";
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer'

import "@elastic/eui/dist/eui_theme_dark.css";

function App() {
  return (
    <html>
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    </html>
  ); 
}

export default App; 

const rootElement = document.getElementById("root");
render(<App />, rootElement);

