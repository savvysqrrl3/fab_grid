import React from 'react';
import styles from './styles.less';
import Container from '../Container';

class Wrapper extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <h1 className={styles.header}>Fabulous Grid</h1>
        <div>
          <Container />
        </div>
      </div>
    );
  }
}

export default Wrapper;
