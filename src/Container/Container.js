import React from 'react';
import styles from './styles.less';
import Product from './Product';

class Container extends React.Component {
  render() {
    return (
      <div className={styles.rows}>
        <div className={styles.individualRow}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className={styles.individualRow}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

export default Container;
