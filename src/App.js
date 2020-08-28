import React from 'react';
import { render } from "react-dom";
import './App.css';
import Header from './Components/Header';

import { EuiText } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";

function App() {
  return (
    <html>
      <body>
        <Header />
        <EuiText>Ok!</EuiText>
      </body>
    </html>
  ); 
}

export default App; 

const rootElement = document.getElementById("root");
render(<App />, rootElement);

