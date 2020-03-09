import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from './Components/About';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Main />
    <About />
    </React.Fragment>
  );
}

export default App;
