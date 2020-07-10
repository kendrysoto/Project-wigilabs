import React from 'react';
import { Switch, Route } from "react-router-dom";
 import LogIn from './LogIn';
 import CheckIn from './CheckIn';
 import Auth from './Auth';
 import Contact from './Contact';
 import Chat from './Chat';
 import Task from './Task';
 import GalleryImg from './GalleryImg';

const Main = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Auth} />
        <Route path="/Auth" component={Auth} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Chat" component={Chat} />
        <Route path="/Task" component={Task} />
        <Route path="/GalleryImg" component={GalleryImg} />
      </Switch>
    </div>
  );
};


export default Main;










