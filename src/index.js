import React from 'react';
import ReactDOM from 'react-dom';

import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"
import {rootReducer} from "./redux/rootReducer";

import thunk from "redux-thunk";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-grid.css"


const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
const app = (
    <Provider>
        <App/>
    </Provider>
)

ReactDOM.render(<Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode></Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
