import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import reducer from "./js/reducers/reducers"
import App from "./js/components/App";
import style from "./styles/styles.css"

import thunk from 'redux-thunk';

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension &&
    window.devToolsExtension()
)

const store = createStore(reducer, allEnhancers);

ReactDOM.render(
    <Provider store={store}>
        <App style={style}/>
    </Provider>, 
    document.getElementById('root')
)
