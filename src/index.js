import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home/home';
import About from './components/About/about';
import Members from './components/Members/members';
import JoinUs from './components/JoinUs/joinUs';
import Sponsorship from './components/Sponsorship/sponsorship'
import Projects from './components/Projects/projects';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<App customComponent={Home}/>}/>
          <Route exact path="/about" element={<App customComponent={About}/>}/>
          <Route exact path="/projects" element={<App customComponent={Projects}/>}/>
          <Route exact path="/members" element={<App customComponent={Members}/>}/>
          <Route exact path="/joinus" element={<App customComponent={JoinUs}/>}/>
          <Route exact path="/sponsorship" element={<App customComponent={Sponsorship}/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
