import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// components 
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import ReadMe from './components/ReadMe';
import Modals from './components/Modal';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';
import Rating from './components/Rating';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Profile />
      <Projects />
      <AboutMe />
      <Rating />
      <ReadMe />
      <Switch>
      <Route exact path="/project-details" component={Modals} />
      <Route exact path="/resume" component={ResumeModal} />
      <Route exact path="/contact" component={ContactModal} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
