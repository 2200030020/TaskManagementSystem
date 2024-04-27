import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import Contact from './components/Contact';
import LearnMore from './components/LearnMore';
import Header from './components/Header'; 
import Footer from './components/Footer';
import TaskManagementAppBar from './components/TaskManagementAppBar';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import TaskCategories from './components/TaskCategories';
import TaskSearch from './components/TaskSearch';

import TaskCalendar from './components/TaskCalendar';
import TaskStatistics from './components/TaskStatistics';

import TaskSharing from './components/TaskSharing';
import AddTask from './components/AddTask';
import Upcoming from './components/Upcoming';
import Filters from './components/Filters';


import TimeOfDaySymbols from './components/TimeOfDaySymbols';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div><Footer /><WelcomePage loggedIn={loggedIn} /></div>} />
          <Route path="/login" element={<div><Header /><Footer /><Login onLogin={handleLogin} /></div>} />
          <Route path="/registration" element={<div><Header /><Registration /></div>} />
          
          <Route path="/contact" element={<div><Footer /><Contact /></div>} />
          <Route path="/about" element={<div><Footer /><LearnMore /></div>} />
          <Route path="/taskmanagement" element={<div><TaskManagementAppBar /><Footer /></div>} />
          <Route path="/taskdetails" element={<div><Header /><TaskDetails /><Footer /></div>} />
          <Route path="/edittask" element={<div><Header /><EditTask /><Footer /></div>} />
          <Route path="/deletetask" element={<div><Header /><DeleteTask /><Footer /></div>} />
          <Route path="/taskcategories" element={<div><Header /><TaskCategories /><Footer /></div>} />
          <Route path="/tasksearch" element={<div><Header /><TaskSearch /><Footer /></div>} />
          
          <Route path="/taskcalendar" element={<div><Header /><TaskCalendar /><Footer /></div>} />
          <Route path="/taskstatistics" element={<div><Header /><TaskStatistics /><Footer /></div>} />
          
          <Route path="/tasksharing" element={<div><Header /><TaskSharing /><Footer /></div>} />
          <Route path="/tasks" element={<div><Header /><AddTask /></div>} />
          <Route path="/upcoming" element={<div><Header /><Upcoming /><Footer /></div>} />
          <Route path="/filters" element={<div><Header /><Filters /><Footer /></div>} />
          
          <Route path="/timeofsymbols" element={<div><Header /><TimeOfDaySymbols /><Footer /></div>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
