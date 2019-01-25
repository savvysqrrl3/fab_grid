import React from 'react';
import { hot } from 'react-hot-loader';
import Wrapper from './WrapperComponent';

class App extends React.Component {
  render() {
    return <Wrapper />;
  }
}

export default hot(module)(App);
