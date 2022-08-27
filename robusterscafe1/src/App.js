import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

const App = () => (
  <div>
    <ToastContainer/>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
