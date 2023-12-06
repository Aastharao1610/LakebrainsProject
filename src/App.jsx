// import { useState } from 'react'
import React from 'react';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default App;