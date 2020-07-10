import React from 'react';
import { Switch, Route } from "react-router-dom";
 import LogIn from './LogIn';
 import CheckIn from './CheckIn';
 import Auth from './Auth';
 import Contact from './Contact';
 import Chat from './Chat';
 import Task from './Task';

const Main = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={CheckIn} />
        <Route path="/gallery" component={CheckIn} />
        <Route path="/Auth" component={Auth} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Chat" component={Chat} />
        <Route path="/Task" component={Task} />
      </Switch>
    </div>
  );
};


export default Main;










