import React from 'react';
import styles from './styles.less';
import Container from '../Container';

class Wrapper extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <h1 className={styles.header}>Inspiration Board</h1>
        <Container />
      </div>
    );
  }
}

export default Wrapper;
