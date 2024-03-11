'use client'
import React from 'react'
import Image from 'next/image'
import rightImage from '@public/image/profile.jpg'
import styles from './styles.module.scss'
import Link from 'next/link'
import waveIcon from '@public/png/wave.png'
import { saveAs } from 'file-saver'
//icons
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";

const page = () => {
  const handleDown = () =>{
    const pdfFileUrl = '/pdfs/resume.pdf';
    saveAs(pdfFileUrl, "resume.pdf")
  }

  return (
    <section className='' id='home'>
        <div className='p-[150px]'>
            <div className='flex justify-between px-[40px] mt-[50px]'>
              <div className='gap-y-[20px]'>
                  <div className='flex flex-row py-[20px]'>
                      <h1 className={`${styles.h1_text}`}>Hi, I'm Karl Angelo. <br />
                      <div className='flex gap-[10px]'>
                        <span>Front-end Developer </span> 
                        <Image className='hidden lg:hidden xl:flex' alt='wave' src={waveIcon.src} width={70} height={70}></Image>
                      </div>
                      </h1>
                  </div>
                  <div className=''>
                      <p className={`${styles.p_text} leading-tight`}>A passionate Front-End Developer based in Pangasinan, Philippines. 📍 </p>
                  </div>
                  <div className='flex justify-center lg:justify-start'>
                    <div className='flex gap-[15px] py-[20px]'>
                          <Link href={"https://www.linkedin.com/in/karl-angelo-tadeo-27579429a/"}>
                              <AiOutlineLinkedin size={40} className='text-[#2d2e32] mr-[2px] hover:text-blue-600'/>
                          </Link>
                          <Link href={"https://github.com/taleofthewind"}>
                              <FiGithub size={34} className='text-[#2d2e32] mt-[3px] hover:text-blue-600'/>
                          </Link>
                    </div>
                  </div>
                  <div className='flex justify-center lg:place-content-start'>
                    <div>
                      <button onClick={handleDown} className="btn btn-outline">Download CV
                        <IoMdDownload />
                      </button>
                    </div>
                  </div>
              </div>
                <div className='w-[700px] hidden xl:flex justify-center md:hidden'>
                    <div className={`${styles.heroimg} overflow-hidden`}>
                      <Image className='' src={rightImage.src} alt='heroimg' width={300} height={300} />
                    </div>
                </div>
            </div>
                <div className='mt-[20px] px-[40px] '>
                    <div className='grid gap-[50px] justify-items-center  lg:flex'>
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
    </section>
  )
}

export default page
