// src/components/Routes.js
import React from 'react';
import "./ContentMain/ContentMain.css";
import { Route, Redirect } from 'react-router-dom';
import NewsFeed from './Transactions/NewsFeed';
import Events from './Financial/Events'; // Create an Events component
import Contacts from './Contact/Contact'; // Create a Contacts component
import Albums from './Budget/Album'; // Create an Albums component
// import Boards from './Boards/Boards'; // Create a Boards component
import Organizations from './Organization/Organization'; // Create an Organizations component
import Tasks from './Task/Task'; // Create a Tasks component
import PersonalProject from './Loans/PersonalProject';
import PeopleYouFollow from './Cards/PeopleYouFollow';
import Subscriptions from './Subscriptions/Subscriptions';
import Boards from './Report/Boards';
import Project from './Projects/Project';
import './Route.css'

const Routes = () => {
  return (
      <div className='' id='route'>
        <Route path="/newsfeed" component={NewsFeed} />
      <Route path="/events" component={Events} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/albums" component={Albums} />
      <Route path="/personalproject" component={PersonalProject} />
      <Route path="/Followers" component={PeopleYouFollow} />
      <Route path="/subscriptions" component={Subscriptions} />
      <Route path="/boards" component={Boards} />
      <Route path="/Projects" component={Project} />
      <Route path="/organizations" component={Organizations} />
      <Route path="/task" component={Tasks} />
      {/* <Redirect from="/" to="/home" /> */}
    
      </div>
  );
};

export default Routes;
