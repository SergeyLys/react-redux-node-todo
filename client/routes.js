import React from 'react';
import Main from './components/Main/Main';
import TaskListContainer from './components/TaskList/TaskListContainer';
import TaskItemContainer from './components/TaskItem/TaskItemContainer';
import SignupContainer from './components/Forms/signup/SignupContainer';
import SigninContainer from './components/Forms/signin/SigninContainer';
import Error from './components/Error';
// import {Route, IndexRoute, browserHistory} from 'react-router';
import { Switch, Route } from 'react-router-dom';

// function changeRoute() {
//     if (typeof checkLogin('token') == 'undefined') {
//         browserHistory['replace']('/signin');
//     }
// }

// function preventEnter() {
//     if (typeof checkLogin('token') != 'undefined') {
//         browserHistory['replace']('/');
//     }
// }


// export const routes = (
//     <Route path='/' component={Main}>
//             <IndexRoute  component={TaskListContainer}/>
//             <Route path='/tasks/:url' component={TaskItemContainer}/>
//             <Route path='/signin' component={SigninContainer}/>
//             <Route path='/signup' component={SignupContainer}/>
//             <Route path='*' component={Error}/>
//     </Route>
// );

export const routes = (
    <Switch>
        <Route component={TaskListContainer}/>
        <Route path='/tasks/:url' component={TaskItemContainer}/>
        <Route path='/signin' component={SigninContainer}/>
        <Route path='/signup' component={SignupContainer}/>
        <Route path='*' component={Error}/>
    </Switch>
);

