import { createStore, applyMiddleware } from 'redux'
import app from '../reducers'

import thunk from 'redux-thunk'

export default function configStore() {
    let store = createStore(app, applyMiddleware(thunk))
    return store
}



/*
import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}
*/