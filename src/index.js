import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import TodoApp from './components/todo-app';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route to="/" component={TodoApp} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
registerServiceWorker();
