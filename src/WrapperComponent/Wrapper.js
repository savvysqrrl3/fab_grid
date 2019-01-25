import React from 'react';
import wrapper from './styles.less';

class Wrapper extends React.Component {
  render() {
    return <h1 className={wrapper.header}>Wrapper is working.</h1>;
  }
}

export default Wrapper;
