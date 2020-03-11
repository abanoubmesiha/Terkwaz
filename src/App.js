import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import About from './Components/About';
import Rate from './Components/Rate';
import Services from './Components/Services';
import Partners from './Components/Partners';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <Main />
    <About />
    <Rate />
    <Services />
    <Partners />
    <Contact />
    <Footer />
    </React.Fragment>
  );
}

export default App;
