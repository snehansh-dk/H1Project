import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import employerReducer from './store/reducers/employers';
import locationReducer from './store/reducers/locations';
import {watchEmployers, watchLocations} from './store/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  employers: employerReducer,
  locations: locationReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchEmployers);
sagaMiddleware.run(watchLocations);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
    <React.StrictMode>
      {app}
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
