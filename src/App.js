import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<UserList/>} />
          <Route path="/user/:userId" element={<UserDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
