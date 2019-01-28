/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.less';
import { Droppable } from 'react-beautiful-dnd';
import Product from '../Product';

class Column extends React.Component {
  render() {
    return (
      // The Column is a Droppable area, the direction items can be dragged is vertical
      <Droppable droppableId={this.props.column.id} direction="vertical">
        {provided => (
          <div
            provided={provided}
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.productList}
          >
            {/* map over products array and generate a Product component for each */}
            {this.props.products.map((product, index) => (
              <Product key={product.id} product={product} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default Column;
