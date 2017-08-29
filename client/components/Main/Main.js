import "./foundation-sites/scss/foundation.scss";
import "./foundation-sites/scss/settings/_settings.scss";
import './global.scss';

import SignupContainer from '../Forms/signup/SignupContainer';
import SigninContainer from '../Forms/signin/SigninContainer';
import TaskItemContainer from '../Task/TaskItem/TaskItemContainer';
import TaskListContainer from '../Task/TaskList/TaskListContainer';
import Error from '../Error';
import { Switch, Route } from 'react-router-dom';

import React from 'react';

const Main = () => (
    <div className="site-wrapper">

        <main className="site-main">
            <div className="row align-center">

                <div className="small-12 medium-9 columns">

                    <Switch>
                        <Route exact path='/' component={TaskListContainer} />
                        <Route path='/tasks/:id' component={TaskItemContainer} />
                        <Route path='*' component={Error}/>
                    </Switch>

                    {/*<Switch>*/}
                        {/*<Route exact path="/" component={Task}/>*/}
                        {/*<Route path='/signin' component={SigninContainer}/>*/}
                        {/*<Route path='/signup' component={SignupContainer}/>*/}
                        {/*<Route path='*' component={Error}/>*/}
                    {/*</Switch>*/}

                </div>

            </div>
        </main>

    </div>
);

export default Main;
