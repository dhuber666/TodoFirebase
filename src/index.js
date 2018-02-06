import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route to='/' component={TodoApp} />
        </Switch>
    </BrowserRouter>,

    document.getElementById('root'));
registerServiceWorker();
