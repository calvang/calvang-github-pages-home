import React from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <div className="w3-black">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
