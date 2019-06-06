import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

import App from './App'
import './styles.css'

ReactDOM.render(
  <Provider 
  store={
    createStore(rootReducer,
    compose(applyMiddleware(thunk)) 
    )}>
    <App/>
  </Provider>
  , document.getElementById('app'))
