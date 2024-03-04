import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

//icon links
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const page = () => {
  return (
    <footer className='bg-[#2d2e32]'>
      <div className='flex w-full justify-center md:grid-rows-1 p-[50px]' id='container'>
       <div className='w-full px-[140px] py-[19px] '>
          <div className='grid grid-cols-1 justify-items-center gap-y-[15px] lg:flex justify-between' id='footerfc'>
                <h1 className={`${styles.footer_h1}`}>Copyright © 2024 . All rights are reserved</h1>
                <div className='flex gap-[20px] px-[20px]'> 
                    <Link className={`${styles.hover_icon}`} href={"https://www.linkedin.com/in/karl-angelo-tadeo-27579429a/"}>
                        <AiOutlineLinkedin size={35} className='text-white'/>
                    </Link>
                    <Link className={`${styles.hover_icon}`} href={"https://github.com/taleofthewind"}>
                        <FiGithub size={32} className='text-white'/>
                    </Link>
                </div>
          </div>
       </div>
      </div>
    </footer>
  )
}

export default page
