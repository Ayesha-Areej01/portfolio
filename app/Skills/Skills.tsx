import React from 'react'
import { Lilita_One } from 'next/font/google'
const lilitaOne = Lilita_One({ 
    subsets: ['latin'], 
    weight: "400"
});
import HTML from "@/assets/HTML.png"
import Image from 'next/image';
import CSS from "@/assets/CSS.png"
import JS from "@/assets/JS.png"
import TaC from "@/assets/Tailwind_CSS_logo.png"
import Nj from "@/assets/Nj.png"
import RE from "@/assets/React_logo.png"
import git from "@/assets/Git-Icon-1788C.png";
import github from "@/assets/github.png"
export default function Skills() {
  return (
    <div className='bg-slate-100 md:min-h-screen min-h-screen flex items-center justify-center'>
        <div className=''>
        <h1 className={`${lilitaOne.className} text-5xl  text-center text-blue-700 p-6`}>
            Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="flex justify-center items-center">
    <Image src={HTML} alt="HTML" width={75} height={75} className="rounded-sm" />
  </div>
  <div className="flex justify-center items-center">
    <Image src={CSS} alt="CSS" width={75} height={75} className="rounded-sm" />
  </div>
  <div className="flex justify-center items-center">
    <Image src={JS} alt="JS" width={75} height={75} className="rounded-sm" />
  </div>
  <div className="flex justify-center items-center">
    <Image src={git} alt="git" width={75} height={75} className="rounded-sm" />
  </div>
  <div className="flex justify-center items-center">
    <Image src={github} alt="github" width={75} height={75} className="rounded-sm" />
  </div>
  <div className="flex justify-center items-center">
    <Image src={TaC} alt="Tailwind" width={250} height={250} className="rounded-sm md:w-[250px] w-50" />
  </div>
  <div className="flex justify-center items-center">
    <Image src={Nj} alt="Nextjs" width={150} height={150} className="rounded-sm" />
  </div>
  <div className="flex justify-center items-center">
    <Image src={RE} alt="React" width={150} height={150} className="rounded-sm" />
  </div>
</div>







        </div>
        </div>

  )
}
