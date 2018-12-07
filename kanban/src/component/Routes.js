import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaskBoard from './Taskboard/Taskboard.js'
import Features from './Features/Features.js'
import Header from './Header/Header.js';

export default () =>
<Router>
       <div>
           <Header>
                <Switch>
                     <Route path="/" exact={true} component={TaskBoard} />
                     <Route path="/features" component={Features}> </Route>
                </Switch>
            </Header>
       </div>
</Router>
// end of route 