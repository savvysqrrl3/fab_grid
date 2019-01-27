import React from 'react';
import styles from './styles.less';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

class Product extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.product.id} index={this.props.index}>
        {provided => (
          <div
            provided={provided}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={styles.product}
          >
            {this.props.product.name}
          </div>
        )}
      </Draggable>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string,
  index: PropTypes.number
};

export default Product;
