import React from 'react'
//icons
import { GrMapLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
//styles
import styles from './styles.module.scss'

const page = () => {
  return (
    <section>
      <div className='' id='container'>
          <div className='grid justify-center m-[20px] h-[370px] py-[70px]'>
              <div className='py-[15px] mt-[20px] leading-loose' id='contents'>
                  <p className={`${styles.contact_p}`}>CONTACT</p>
                  <h3 className={`${styles.heading_3}`}>Don't be shy! Hit me up! 👇</h3>
              </div>
              <div className='flex gap-[10px]' id='contact-icons'>
                  <div className='flex gap-[10px]'>
                      <div className={`${styles.contact_icons} border-2 drop-shadow-2xl text-[#147efb]`}>
                         <GrMapLocation size={30}/>
                      </div>
                      <div className='p-[5px]'>
                        <h1 className={`${styles.heading_1}`}>Location</h1>
                        <p className={`${styles.contact_body} hover:text-blue-600`}>Pangasinan, Philippines.</p>
                      </div>
                  </div>
                  <div className='flex gap-[10px]'>
                      <div className={`${styles.contact_icons} border-2 drop-shadow-2xl text-[#147efb]`}>
                        <FiMail size={30} />
                      </div>
                    <div className='p-[5px]'>
                      <h1 className={`${styles.heading_1}`}>Mail</h1>
                      <p className={`${styles.contact_body} hover:text-blue-600`}>karl.tadeo.up@phinmaed.com</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default page
