import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navabar.module.css'

const NavaBar = () => {
    return (
        <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">My App</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavaBar