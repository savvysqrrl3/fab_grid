import React from 'react';
import styles from './styles.less';
import Product from '../Product';
// import productList from './mockData';

class Column extends React.Component {
  //   state = productList;
  render() {
    // const { products } = this.state;
    return (
      <div className={styles.productList}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Column;
