import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
const Header = () => {
  return (
    <header className={`${styles.header} font-Poppins`}>
          <h1 className={`${styles.header_h1}`}>kat.dev</h1>
        <nav className={`${styles.header_nav}`}>
          <ul className={`${styles.header_nav_ul}`}>
            <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'/'}>Home</Link>  </li>
            <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'/'}>About</Link> </li>
            <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'/'}>Projects</Link> </li>
            <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'/'}>Contacts</Link> </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
