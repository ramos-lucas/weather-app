import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './styles/index.css';
import store from './store';
import Router from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
