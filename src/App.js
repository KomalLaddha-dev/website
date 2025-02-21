import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './App.css';
import RamdeobabaNSS from './RamdeobabaNSS.js';
import NSSUnit from './NSSUnit.js';
import Gallery from './Gallery.js';
import EventPage from "./EventPage.js";
import Events from "./Event.js";
import Teampage from "./Teampage.js";
import PrernaRegistration from './PrernaRegistration.js';
import ReachReport from './ReachReport.js';
import ReguralEvents from './ReguralEvents.js';
import SpecialActivities from './SpecialActivities.js';
import EventReport from './EventReport.js';
import AnnualReport from './AnnualReport.js';
import DomainReport from './DomainReport.js';
import HOL from './HOL.js';
import Login from './Login.js';
import Navbar from './Navbar.js';
import {useState} from 'react';
import Admin from './Admin.js';
import HOLAdmin from './HOLADMIN.js';

function App() {
  const [teamName, setTeamName] = useState(null);

  const handleLogin = (name) => {
    setTeamName(name);
  };
  return (
    <Router>
      {/* Pass teamName, handleLogin, and handleLogout to Navbar */}
      <Navbar teamName={teamName} onLogin={handleLogin}/>
      <Routes>
        <Route path="/" element={<NSSUnit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/reguralevents" element={<ReguralEvents />} />
        <Route path="/events/specialevents" element={<SpecialActivities />} />
        <Route path="/events/annualreport" element={<AnnualReport />} />
        <Route path="/event-report/:eventName" element={<EventReport />} />
        <Route path="/full-gallery/:year/:eventName" element={<EventPage />} />
        <Route path="/reach/:labelreport" element={<ReachReport />} />
        <Route path="/reach/:labelreport/:year" />
        <Route path="/domain/:labelreport" element={<DomainReport />} />
        <Route path="/domain/:labelreport/:year" />
        <Route path="/prerna-registration" element={<PrernaRegistration />} />
        <Route
            path="/HOL"
            element={
              teamName ? <HOL teamName={teamName} /> : <Login onLogin={handleLogin} />
            }
          />
        <Route path="/HOLADMIN" element={<HOLAdmin isAdmin={true} />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;