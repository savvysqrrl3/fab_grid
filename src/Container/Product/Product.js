import React from 'react';
import styles from './styles.less';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return <div className={styles.product}>{this.props.product.name}</div>;
  }
}

Product.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string
};

export default Product;
