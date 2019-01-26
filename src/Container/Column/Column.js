import React from 'react';
import styles from './styles.less';
import Product from '../Product';
// import productList from './mockData';
let data = [
  {
    id: '12345',
    name: 'item 1'
  },
  {
    id: '67890',
    name: 'item2'
  },
  {
    id: '67890',
    name: 'item3'
  },
  {
    id: '13581',
    name: 'item4'
  },
  {
    id: '53421',
    name: 'item5'
  }
];

class Column extends React.Component {
  //   state = productList;
  render() {
    // const { products } = this.state;
    return (
      <div className={styles.productList}>
        {data.map(product => (
          <Product key={product.id} />
        ))}
      </div>
    );
  }
}

export default Column;
