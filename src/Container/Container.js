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

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    // Moving within the same column
    if (start === finish) {
      const newProductIds = Array.from(start.productIds);
      newProductIds.splice(source.index, 1);
      newProductIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
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
      return;
    }

    // Moving from one column to another
    const startProductIds = Array.from(start.productIds);
    startProductIds.splice(source.index, 1);
    const newStart = {
      ...start,
      productIds: startProductIds
    };

    const finishProductIds = Array.from(finish.productIds);
    finishProductIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      productIds: finishProductIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
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
