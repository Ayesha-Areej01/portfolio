'use client';
import React from 'react';
import * as Form from '@radix-ui/react-form';
import Link from 'next/link';
import github from "@/assets/github.png";
import Linkedin from "@/assets/Linkedin.png";
import Image from 'next/image';
import { Lilita_One } from 'next/font/google'
const lilitaOne = Lilita_One({ 
    subsets: ['latin'], 
    weight: "400"
});
const Contact = () => (
    <>
    <div>
    <div className='bg-blue-950 min-h-screen p-6 '>
    <h1 className={`${lilitaOne.className} text-5xl  text-center text-blue-700 `}>
            Contact Me
        </h1>
  <Form.Root className="w-[260px] mt-6 mx-auto">
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">Email</Form.Label>
        <Form.Message className="text-[13px] text-slate-300 opacity-[0.8]" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="text-[13px] text-slate-300 opacity-[0.8]" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-slate-300 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-blue-700 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-black"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="question">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">
          Question
        </Form.Label>
        <Form.Message className="text-[13px] text-slate-300 opacity-[0.8]" match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="box-border w-full bg-slate-300 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-blue-800 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="box-border w-full text-black shadow-black hover:bg-blue-600 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
  <div className="flex justify-center items-center mt-24  ">
  <div className="flex items-center">
    <Link href="https://github.com/Ayesha-Areej01" className="flex items-center mr-4">
      <Image src={github} alt="GitHub" width="40" height="40" className="rounded-full" />
      <p className="text-slate-300 md:text-xl text-xs ml-2">Ayesha-Areej01</p>
    </Link>
    <Link href="https://www.linkedin.com/in/ayesha-aay-0a6a46289/" className="flex items-center">
      <Image src={Linkedin} alt="Linkedin" width="40" height="40" className="rounded-xl" />
      <p className="text-slate-300 md:text-xl text-xs ml-2">Ayesha Aay</p>
    </Link>
  </div>
</div>


</div>
</div>
  </>
);

export default Contact;

