'use client'
import React from "react";
import A from "@/assets/A.png"
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
return (
    <>
    <header className=" text-gray-600 body-font">
        <div className="container mx-auto shadow-sm flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            <Image src={A} alt="logo" width={50} height={50} 
            className="rounded-xl"/>
            <span className="ml-3 text-xl">Ayesha Aay </span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} 
            className="mr-5 hover:text-black hover:underline">
                Home
            </Link>
            <Link href={"/Skills"}
            className="mr-5 hover:text-black hover:underline">
                Skills
            </Link>
            <Link href={"/About"}
            className="mr-5 hover:text-black hover:underline">
                About
            </Link>
            <Link href={"/Contact"}
            className="mr-5 hover:text-black hover:underline">
                Contact
            </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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
            
        </button>
        </div>
    </header>
    </>
);
};

export default Navbar;