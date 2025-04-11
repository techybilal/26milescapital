import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Numbers from './components/Numbers';
import Thinking from './components/Thinking';
import MagicElements from './components/MagicElements';
import GlobalPresence from './components/GlobalPresence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Numbers />
      <Thinking />
      <MagicElements />
      <GlobalPresence />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
