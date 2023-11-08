import React from 'react';
import Navbar from './components/header/Navbar';
import Hero from './components/header/Hero';
import Courses from './components/main/Courses';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
    </div>
  );
};

export default App;