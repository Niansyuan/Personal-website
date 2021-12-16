import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter, { history } from './routers/AppRouters'
import configureStore from '../src/store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './component/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        {/* <LoadingPage /> */}
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    };
};

ReactDOM.render(jsx, document.getElementById('app'));