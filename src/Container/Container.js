import React from 'react';
import styles from './styles.less';
import Column from './Column';
import mockData from './data';
import { DragDropContext } from 'react-beautiful-dnd';

{
  /* <Droppable droppableId={this.props.column.id}>
          {provided => (
            <div
              className={styles.productList}
              innerRef={innerRef}
              {...provided.droppableProps}
            >
              <Draggable
                draggableId={this.props.product.id}
                index={this.props.index}
              >
                {this.props.products.map((product, index) => (
                  <Product key={product.id} product={product} index={index} />
                ))}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable> */

  {
    /* <Droppable droppableId={this.props.column.id}>
        {provided => (
            <Column
                key={column.id}
                column={column}
                products={products}
                className={styles.productList}
                innerRef={innerRef}
                {...provided.droppableProps}
            />
        )}
    </Droppable> */
  }
}

class Container extends React.Component {
  state = mockData;
  onDragEnd = result => {
    //    This is a required argument
  };

  render() {
    return (
      <div className={styles.column}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const products = column.productIds.map(
              productId => this.state.products[productId]
            );
            return (
              <Column key={column.id} column={column} products={products} />
            );
          })}
        </DragDropContext>
      </div>
    );
  }
}

export default Container;
