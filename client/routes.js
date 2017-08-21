import React from 'react';
import Main from './components/Main/Main';
import TaskListContainer from './components/TaskList/TaskListContainer';
import TaskItemContainer from './components/TaskItem/TaskItemContainer';
import Error from './components/Error';
import {Route, IndexRoute, browserHistory} from 'react-router';

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

export const routes = (
    <Route path='/' component={Main}>
        <IndexRoute  component={TaskListContainer}/>
        <Route path='/:url' component={TaskItemContainer}/>
        <Route  path='*' component={Error}/>
    </Route>
);

