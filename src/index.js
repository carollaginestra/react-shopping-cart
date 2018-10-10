import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Method from './components/Payment';
import InsertCard from './components/Payment/InsertCard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(

    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/method" component={Method} />
                <Route path="/insert-card" component={InsertCard} />
            </Switch>
        </ BrowserRouter>
    </Provider>
    

    , document.getElementById('root')
);
registerServiceWorker();
