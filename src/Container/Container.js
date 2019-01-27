import React from 'react';
import styles from './styles.less';
import Column from './Column';
import mockData from './data';
import { DragDropContext } from 'react-beautiful-dnd';

class Container extends React.Component {
  state = mockData;
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = this.state.columns[source.droppableId];
    const newProductIds = Array.from(column.productIds);
    newProductIds.splice(source.index, 1);
    newProductIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      productIds: newProductIds
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    };
    this.setState(newState);
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
