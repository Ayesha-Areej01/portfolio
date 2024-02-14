import React from 'react'
import {Song_Myung} from 'next/font/google'
const song = Song_Myung({
    weight: "400",
    subsets: ["latin"]
});
import { Changa } from 'next/font/google';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
const orbit = Changa({
    weight: "600",
    subsets: ["latin"]
})
import {Montserrat} from 'next/font/google'

const mont = Montserrat({
  subsets: ['latin'],
  weight: '700'
})
import {Kanit} from 'next/font/google'
const kan = Kanit({
  subsets: ['latin'],
  weight: '700'
})
import {CardWithForm} from '@/components/Card'
import bg from '@/assets/BACK.jpg'
import Image from 'next/image';
import { Lilita_One } from 'next/font/google'
const lilitaOne = Lilita_One({ 
    subsets: ['latin'], 
    weight: "400"
});
export default function About() {
  return (
    <div className='bg-blue-100'>
         <h1 className={`${lilitaOne.className} text-5xl  text-center text-blue-700 p-6`}>
            About Me
        </h1>
        <div className='p-6 text-center justify-center'>
        <span className={`${orbit.className} text-xl text-blue-600`}>Ayesha Areej</span><br/><br/>
        <span className={`${orbit.className} text-xl text-blue-600`}>Full Stack Web-Developer</span><br/>
        </div>
        <div className='p-6 mt-0 md:text-center md:justify-center'>
        <Button className="hover:bg-blue-600 inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            <Link href={"https://www.linkedin.com/in/ayesha-aay-0a6a46289/"}
            className="">
            Hire Me
            </Link>
            <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </Button>
            </div>
        <div>
        </div>
        <div className='flex flex-wrap mt-20 items-center justify-center gap-4 '>
          <div className=" duration-300">
          <CardWithForm
          title={'1+'}
          description={'Years of Experience in Full Stack'}/>
          </div>
          <div className=''>
          <CardWithForm 
          title={'20+'} 
          description={'Projects successfully completed'} />
          </div>
          <div className=''>
          <CardWithForm 
          title={'6+'} 
          description={'Certificates and Awards'} />
          </div>
          <div className='mb-4'>
          <CardWithForm
           title={'2+'}
           description={'Years of Experience in Front-End Developement'} />
          </div>
           </div>
          </div>
  )
}
