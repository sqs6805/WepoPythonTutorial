import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from 'App';
import input from 'input';
import { Router } from '@mui/icons-material';

const Main = () => {
  return (
    <Router>
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/input.js' component={input}></Route>
      <Route path='/' component={App}></Route>
    </Switch>
    </Router>
  );
}

export default Main;