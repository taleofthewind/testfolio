'use client';

import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Menu } from '@headlessui/react'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Header = () => {
  return (
      <header className={`${styles.header} font-Poppins drop-shadow-lg`}>
          <h1 className={`${styles.header_h1}`}>kat.dev</h1>
          <nav className={`${styles.header_nav} `}>
            <ul className={`${styles.header_nav_ul}`}>
              <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'#home'}>Home</Link> </li>
              <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'#about'}>About</Link> </li>
              <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'#projects'}>Projects</Link> </li>
              <li className={`${styles.header_nav_ul_li} hover:text-blue-600`}> <Link href={'#contact'}>Contacts</Link> </li>
            </ul>
            
          </nav>
              <div className='lg:hidden sm:block'>
              <IoMenuSharp size={30} aria-hidden="true" />
              </div>
        </header>
  )
}

export default Header
