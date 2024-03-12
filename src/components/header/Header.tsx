'use client';
import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Dialog, Popover, Transition } from '@headlessui/react';


const Header = () => {
  return (
      <header className='flex items-center p-[20px] h-[70px] justify-between border-2'>
        <div className='font-bold'>
          <span>kat.dev</span>
        </div>
        <span className='rounded-full hidden'></span>
        <div className='lg:hidden sm:block'>

        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <IoMenuSharp
                className={`${open ? 'text-orange-300' : 'text-orange-300/70'}
                  h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      <div className='w-[150px] text-center gap-x-[20px]'>
                        <div>
                          <Link 
                            href={'#contact'}
                            >Home
                          </Link>
                        </div>
                        <div>
                          <Link 
                            href={'#'}
                            >About
                          </Link>
                        </div>
                        <div>
                          <Link 
                            href={'#'}
                            >Projects
                          </Link>
                        </div>
                        <div>
                          <Link 
                            href={'#'}
                            >Contact
                          </Link>
                        </div>
                      </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
        </Popover>
        </div>
      </header>
            
  )
}

export default Header
