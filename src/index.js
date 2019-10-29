import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers'
import './index.css';
import App from './App';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";


const sagaMiddleware = createSagaMiddleware();




const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
sagaMiddleware.run(rootSaga);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root')
);