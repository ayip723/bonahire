import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const configureStore = (railsProps) => (
  createStore(rootReducer, railsProps, applyMiddleware(thunk, logger))
);

export default configureStore;
