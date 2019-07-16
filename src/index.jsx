import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Page from './components/Page/Page';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('Wrapper'),
);
// registerServiceWorker();
