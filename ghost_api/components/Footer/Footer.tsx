// Footer.tsx

import React from 'react';
import styles from '../Footer/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} style={{backgroundColor: "red"}}>
      <p>&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
