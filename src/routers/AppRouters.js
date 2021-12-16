import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashBoardPage from '../component/DashBoardPage';
import NotFoundPage from '../component/NotFoundPage';
import AboutMePage from '../component/AboutMePage';
import Portfolio from '../component/Portfolio';
import Resume from '../component/Resume';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={DashBoardPage} exact={true} />
                <Route path='/AboutMe' component={AboutMePage} />
                <Route path='/Portfolio' component={Portfolio} />
                <Route path='/Resume' component={Resume} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;