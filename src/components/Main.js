import React from 'react';
import { Switch, Route } from "react-router-dom";
import Auth from './Auth';
import Contact from './Contact';
import Task from './Task';
import GalleryImg from './GalleryImg';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/gallery" component={Auth} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Task" component={Task} />
        <Route path="/GalleryImg" component={GalleryImg} />
      </Switch>
    </div>
  );
};


export default Main;










