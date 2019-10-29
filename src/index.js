import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers'
import './index.css';
import App from './App';

export const ACTION_CHANGE_CURRENT_HERO = 'ACTION_CHANGE_CURRENT_HERO';
export const ACTION_CHANGE_SEARCH_VALUE = 'ACTION_CHANGE_SEARCH_VALUE';
export const ACTION_CHANGE_DATA = 'ACTION_CHANGE_DATA';

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root')
);