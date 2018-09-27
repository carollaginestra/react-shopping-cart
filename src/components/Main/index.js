import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Card from '../Payment';


const Main = () => (
    <div>
        <Switch>
            <Route path="/card" component={Card} />
        </Switch>
    </div>
)

export default Main;
