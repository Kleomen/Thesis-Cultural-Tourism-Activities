import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import AboutCrete from './pages/AboutCrete';
import Activities from './pages/Activities';
import Map from './pages/Map';
import PlanYourTrip from './pages/PlanYourTrip';
import Experiences from './pages/Experiences';

function App() {
  return (
    <Router>
      <NavBar />          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-crete" element={<AboutCrete />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/map" element={<Map />} />
        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
        <Route path="/experiences" element={<Experiences />} />        
      </Routes>
    </Router>
  );
}

export default App;
