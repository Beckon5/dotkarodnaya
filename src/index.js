import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers'
import './index.css';
import App from './App';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);




sagaMiddleware.run(rootSaga);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root')
);