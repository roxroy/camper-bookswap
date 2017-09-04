import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers/configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import SignupForm from './components/auth/SignupForm';
import LoginForm from './components/auth/LoginForm';
import Library from './components/Library';

import reducers from './reducers';
import './components/bundle.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
        <Route path='/library' component={Library} />
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root')
);
