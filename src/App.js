import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import '@elastic/eui/src/themes/eui/eui_colors_light.scss';
import '@elastic/eui/src/themes/eui/eui_globals.scss';

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

