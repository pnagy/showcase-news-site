import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { reducers as regionReducers } from 'ducks/region'
// import { reducers as newsReducers } from 'ducks/news'

const middlewares = [
  ReduxThunk,
  createLogger({
    collapsed: true
  })
]

const reducers = combineReducers({
  region: regionReducers /* news: newsReducers  */
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
)
