import React from 'react';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 col-lg-10">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
