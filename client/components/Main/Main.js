// import "./foundation-sites/scss/foundation.scss";
// import "./foundation-sites/scss/settings/_settings.scss";
import 'semantic-ui-css/semantic.min.css';
// import 'foundation-sites/assets/foundation.scss';
import './global.scss';

import SignupContainer from '../Forms/signup/SignupContainer';
import SigninContainer from '../Forms/signin/SigninContainer';
import TaskItemContainer from '../Task/TaskItem/TaskItemContainer';
import TaskListContainer from '../Task/TaskList/TaskListContainer';
import Header from '../Header/Header';
import Error from '../Error';
import { Switch, Route } from 'react-router-dom';

import React from 'react';

const Main = ({currentUser, token, signOut}) => (
    <div className="site-wrapper">

        <main className="site-main">

            {
                currentUser == '' && typeof token == 'undefined'
                ?
                <div className="ui container">
                    <Switch>
                        <Route exact path='/' component={SigninContainer} />
                        <Route path='/signin' component={SigninContainer}/>
                        <Route path='/signup' component={SignupContainer}/>
                        <Route path='*' component={Error}/>
                    </Switch>
                </div>
                :
                <div className="ui container">
                    <Header user={currentUser} signOut={signOut} />
                    <Switch>
                        <Route exact path='/' component={TaskListContainer} />
                        <Route path='/tasks/:id' component={TaskItemContainer} />
                        <Route path='*' component={Error}/>
                    </Switch>
                </div>
            }

        </main>

    </div>
);

export default Main;
