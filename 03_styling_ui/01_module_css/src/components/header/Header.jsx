import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
        <h3 className={styles.logo}>Ayush Dubey</h3>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header