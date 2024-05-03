import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/brandkit/logo.png'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { HeartIcon } from '@heroicons/react/outline';



const CustomMobileLink = ({ href, title, className = "", toogle }) => {
  const router = useRouter();

  const handleClick = () => {
    toogle();
    router.push(href)
  }

  return (
    <button href={href} className={`relative group text-light font-extrabold hover:text-dark my-2 ${className}`} onClick={handleClick} >
      {title}
      <span
        className={`
        h-[1px] inline-block bg-transparent 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
       `}
      >&nbsp;</span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      isActive();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <>
      <div className={`hidden z-99 md:flex  items-center bg-light rounded-b-lg  justify-between text-[15px] font-bold text-dark/70 pt-10 pb-8 ${active ? "sticky top-0 shadow-lg shadow-theme/80" : ""}`}>

        <nav className="flex items-center gap-5 ml-10">
          <button className="flex-col justify-center items-center hidden md:flex" onClick={handleClick}>
            <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
          <Image src={logo} alt="logo" className="w-12 h-12 md:hidden rounded-full shadow-lg shadow-theme bg-green-200" />
          <h1 className="text-xl font-serif md:hidden">MBEGU-<b className="text-xl font-extrabold italic">AFRICA</b></h1>
        </nav>
        <nav className="flex items-center justify-center gap-8 mr-10">
          <HeartIcon className="w-6 hover:text-red-500 cursor-pointer" />
          <Link href="/login/page" className="hover:text-theme">Login</Link>
        </nav>



        {
          isOpen ?

            <motion.div

              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}

              className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-theme/80  rounded-lg backdrop-blur-md py-32">
              <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink href="/" title="Home" className='' toogle={handleClick} />
                <CustomMobileLink href="/" title="Invest" className='' toogle={handleClick} />
                <CustomMobileLink href="/" title="Raise Capital" className='' toogle={handleClick} />
                <CustomMobileLink href="/" title="Our Company" className='' toogle={handleClick} />
                <CustomMobileLink href="/" title="Learn" className='' toogle={handleClick} />
              </nav>
            </motion.div>

            : null
        }


      </div>
    </>
  )
}

export default NavBar