import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [thunk, promise];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
    });

    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(createReducer(), initialState, compose(...enhancers));

  return store;
}
