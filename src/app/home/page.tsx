import React from 'react'
import Image from 'next/image'
import rightImage from '@public/image/profile.jpg'
import styles from './styles.module.scss'
import Link from 'next/link'
import waveIcon from '@public/png/wave.png'
//icons
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const page = () => {
  return (
    <section className='p-[98px] bg-[#f9f9f9]'>
        <div className='h-[650px] p-[80px] px-[100px]'>
            <div className='flex mt-[50px]'>
              <div className='gap-y-[20px]'>
                  <div className='flex py-[15px]'>
                      <h1 className={`${styles.h1_text}`}>Hi, I'm Karl Angelo. <br />
                        <span>Front-end Developer</span>
                        <Image className='float-right ml-[12px]' alt='wave' src={waveIcon.src} width={70} height={70}></Image>
                      </h1>
                  </div>
                  <div className=''>
                      <p className={`${styles.p_text} leading-tight`}>A passionate Front-End Developer based in Pangasinan, Philippines. 📍 </p>
                  </div>
                  <div className='flex gap-[15px] py-[20px]'>
                        <Link href={"https://www.linkedin.com/in/karl-angelo-tadeo-27579429a/"}>
                            <AiOutlineLinkedin size={40} className='text-[#2d2e32] mr-[2px] hover:text-blue-600'/>
                        </Link>
                        <Link href={"https://github.com/taleofthewind"}>
                            <FiGithub size={34} className='text-[#2d2e32] mt-[3px] hover:text-blue-600'/>
                        </Link>
                  </div>
              </div>
                <div className=''>
                    
                </div>
            </div>
                <div className='mt-[20px]'>
                    <div className='flex gap-[50px]'>
                        <div className={`${styles.border_div} w-[130px]`}>
                          <h1 className={`${styles.skill_header}`}>Tech Stack</h1>
                        </div>
                       <div className='flex gap-[25px]'>
                            <div className={`${styles.icon_animation}`}>
                              <img src="https://skillicons.dev/icons?i=html,css" />
                            </div>
                            <div className={`${styles.icon_animation}`}>
                              <img src="https://skillicons.dev/icons?i=js,ts" />
                            </div>
                            <div className={`${styles.icon_animation}`}>
                              <img src="https://skillicons.dev/icons?i=react,nextjs" />
                            </div>
                            <div className={`${styles.icon_animation}`}>
                              <img src="https://skillicons.dev/icons?i=tailwind,scss" />
                            </div>
                       </div>
                    </div>
                </div>
        </div>
        <hr />
    </section>
  )
}

export default page
