import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'reducers'
import asyncMiddleware from 'middlewares/async'
import stateValidator from 'middlewares/stateValidator'

export default (props) => {
  const store = createStore(reducers, props.initialState || {}, applyMiddleware(asyncMiddleware, stateValidator))
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}