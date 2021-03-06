import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../src/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {persistor} from '../src/redux/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18n';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate  persistor={persistor}>
        <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
        </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

