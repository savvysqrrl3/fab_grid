import React from 'react';
import styles from './styles.less';

class Product extends React.Component {
  render() {
    return <div className={styles.product}>{this.props.product.name}</div>;
  }
}

export default Product;
