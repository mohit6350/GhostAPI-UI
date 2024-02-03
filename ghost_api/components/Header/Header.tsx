// Header.tsx

import React from 'react';
import styles from '../Header/Header.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header} style={{backgroundColor: 'blue'}}>
      <h1>Your App Name</h1>
    </header>
  );
};

export default Header;
