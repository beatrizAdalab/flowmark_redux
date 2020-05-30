import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import * as reducers from './reducers';

//REDUCERS
const createRootReducer = ({ history }) =>
  combineReducers({
    //router: connectRouter(history),
    ...reducers,
  });

//MIDDELWARE
const configureMiddleware = config => [
  ReduxThunk.withExtraArgument(config),
  ReduxLogger,
];

//redux-devtools-extension
const composeEnhancers = composeWithDevTools;

export function configureStore(config) {
  return function (preloadedState) {
    const reducer = createRootReducer(config);
    const middlewares = configureMiddleware(config);
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(reducer, preloadedState, enhancers);
    return store;
  };
}
