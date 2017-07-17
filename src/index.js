import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import registerServiceWorker from './registerServiceWorker'

import App from 'components/App'
import rootReducer from 'reducers/root'

import './index.css'

let store = createStore(
  rootReducer,
  applyMiddleware(logger))

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
