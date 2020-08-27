import React from 'react';
import { render } from "react-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

import { EuiText } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";

function App() {
  return (
    <html>
      <body>
        <EuiText>Ok!</EuiText>;
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

