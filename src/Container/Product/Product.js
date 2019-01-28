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
            <a href={this.props.product.url}>
              <img src={this.props.product.img} alt={this.props.product.name} />
            </a>
            <a href={this.props.product.url} className={styles.link}>
              {this.props.product.name}
            </a>
            <div className={styles.price}>{this.props.product.price}</div>
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
