import React from 'react';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import Routes from './components/Routes';
import Footer from './components/Footer';
import './css/App.css';

export default function App() {
  return (
    <div className="w3-black">
      <Navbar />
      <Settings />
      <Routes />
      <Footer />
    </div>
  );
}