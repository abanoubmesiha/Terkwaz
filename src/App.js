import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import About from './Components/About';
import Rate from './Components/Rate';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <Main />
    <About />
    <Rate />
    </React.Fragment>
  );
}

export default App;
