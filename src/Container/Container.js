import React from 'react';
import styles from './styles.less';
import mockData from './data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

class Container extends React.Component {
  // see data.js for the shape of the data -columns and products- that will be rendered dynamically
  state = mockData;

  //   This block handles identifying the original location of a Draggable (Product),
  // it's new location after dragging, and generates new column arrays to save in state.

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // check whether the item returned to its original location, and no changes need to be saved
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //identify ID of column where draggable starts and ends
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    // Moving draggable within the same column it started in
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

    // Moving a draggable from one column to another
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
        {/* Context wrapper for components that will be droppable and draggable */}
        <DragDropContext onDragEnd={this.onDragEnd}>
          {/* Map over columns in the array, and generate a Column component for each */}
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
