import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';

import { searchChars, fetchChars } from './reducers';

import 'tachyons';

const rootReducer = combineReducers({
	searchChars,
	fetchChars,
})

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
