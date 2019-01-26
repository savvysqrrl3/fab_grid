import React from 'react';
import styles from './styles.less';
import Column from './Column';
// import Product from './Product';

class Container extends React.Component {
  render() {
    return (
      <div className={styles.column}>
        <Column />
      </div>
    );
  }
}

export default Container;
