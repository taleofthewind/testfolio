import React from 'react'
import Image from 'next/image'
import sideImage from '@public/image/profile.jpg'
import styles from './styles.module.scss'
const page = () => {
  return (
    <section className='w-full bg-[#F5F5F5] '>
        <div id='container' className='flex h-[848px] justify-center'>
          <div id='content' className=' border-2'>
            <div id='hero-main' className='w-[800px] mt-auto'>
              <div className=''>
                <h1 className={`${styles.header}`}>Hello I'm Karl Angelo. <br /> <span>Front-End WEB DEVELOPER.</span></h1>
                <p>A passionate Front-End Developer based in Pangasinan, Philippines. 📍 </p>
              </div>
            </div>
            <div id='skills'>

            </div>
          </div>
        </div>
    </section>
  )
}

export default page
