import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import { loadState, saveState } from './js/local-storage/localStorage'
import reducer from "./js/reducers/reducers"
import App from "./js/components/App";
import style from "./styles/styles.css"

import thunk from 'redux-thunk';

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension &&
    window.devToolsExtension()
)

const persistedState = loadState()

const store = createStore(reducer, persistedState, allEnhancers);

store.subscribe(()=> {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App style={style}/>
  </Provider>, 
  document.getElementById('root')
)
