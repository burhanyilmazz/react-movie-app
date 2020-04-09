import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger  from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxPromise(), thunk, logger)
  )
)

export default function configureStore() {
  return store;
}