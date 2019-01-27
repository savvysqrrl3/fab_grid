/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.less';
// import { Droppable } from 'react-beautiful-dnd';
// import { Draggable } from 'react-beautiful-dnd';
import Product from '../Product';

class Column extends React.Component {
  render() {
    // const { innerRef } = this.props;
    return (
      <div className={styles.productList}>
        {this.props.products.map((product, index) => (
          <Product key={product.id} product={product} index={index} />
        ))}
      </div>
    );
  }
}

export default Column;
