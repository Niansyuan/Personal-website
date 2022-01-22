import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter from './routers/AppRouters'
import configureStore from '../src/store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './component/LoadingPage'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

if (document.readyState === 'loading') {
    console.log('loading')
    ReactDOM.render(<LoadingPage />, document.getElementById('app'))
    setTimeout(() => {
        ReactDOM.render(jsx, document.getElementById('app'))
    }, 2000)
};