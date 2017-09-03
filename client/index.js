import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import MainContainer from './components/Main/MainContainer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainContainer/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);