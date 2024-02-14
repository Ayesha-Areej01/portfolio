import Image from 'next/image';
import Link  from 'next/link';
import { Button } from './ui/button';
import { UserButton } from './Button';
import {Lobster} from "next/font/google"
import About from '../app/About/About';
const lob = Lobster({ 
    weight: "400",
    subsets: ["latin"]
});
import {Song_Myung} from 'next/font/google'
const song = Song_Myung({
    weight: "400",
    subsets: ["latin"]
});
import bg from "@/assets/background.jpg"
import Skills from '../app/Skills/Skills';
import Contact from '../app/Contact/Contact';
export default function Hero() {
  return (
    <div>
    <div>
    <div className="relative min-h-screen flex ">
  <div className="md:w-1/2">
    <Image src={bg} alt="background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
    <div className="relative z-10 md:p-6 p-4">
      <h1 className="text-4xl md:text-5xl p-6 font-bold mt-20 text-left md:text-center">
        <span>I&apos;m </span> 
        <span className={`${lob.className} text-blue-800`}> Ayesha Areej</span>
      </h1>
      <p className="text-md md:text-2xl font-semibold mt-0 text-black text-left md:text-center">
        A Full Stack Developer With Modern Techniques <br/>
        To Design And Develop Your Site From Scratch <br/>
        Or Any Preferred Framework. I Will Develop your<br/>
        required Websites at an Affordable Price.
      </p>
    </div>
  </div>
</div>
<div>
        <Skills/>
    </div>
    <About/>
    <Contact/>
    </div>

    </div>
  )
}
