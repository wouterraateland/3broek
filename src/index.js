import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import registerServiceWorker from './registerServiceWorker'

import App from 'components/App'
import rootReducer from 'reducers/root'
import rootSaga from 'sagas/root'

import { windowResize, windowScroll } from 'actions/window'

import './reset.css'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, logger))

window.addEventListener('resize', () => {
    store.dispatch(windowResize(window.innerWidth, window.innerHeight))
})

window.addEventListener('scroll', () => {
    store.dispatch(windowScroll(window.scrollX, window.scrollY))
})

sagaMiddleware.run(rootSaga)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
