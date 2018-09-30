import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Method from './components/Payment';
import InsertCard from './components/Payment/InsertCard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/method" component={Method} />
            <Route path="/insert-card" component={InsertCard} />
        </Switch>
    </ BrowserRouter>

    , document.getElementById('root')
);
registerServiceWorker();
