import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/brandkit/logo.png'
import Link from 'next/link'
import NavBarMobile from './NavBarMobile';
import { HeartIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

//Custom Links
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`
        h-[4px] inline-block bg-theme 
        absolute left-0 -bottom-4.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
       `}
      >&nbsp;</span>
    </Link>
  );
};


//Custom Links 1
const CustomLink1 = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`
        h-[5px] inline-block bg-theme 
        absolute left-0 -bottom-8
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
       `}
      >&nbsp;</span>
    </Link>
  );
};



const NavBar = () => {
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
      <div className={`flex z-99  md:hidden items-center bg-light rounded-b-lg  justify-between md:justify-center md:gap-20 text-[15px] font-bold text-dark/70 pt-10 pb-8 ${active ? "hidden" : ""}`}>
        <Link href="/" className="flex items-center gap-5 ml-10">
          <Image src={logo} alt="logo" className="w-12 h-12 rounded-full shadow-lg shadow-theme bg-green-200" />
          <h1 className="text-xl font-serif md:hidden">MBEGU-<b className="text-xl font-extrabold italic">AFRICA</b></h1>
        </Link>
        <nav className="flex items-center justify-center gap-8 mr-[140px] lg:mr-10">
          <Link href="/" className="flex gap-2 rounded-lg px-10  py-1.5 border border-dark hover:border-green-500 hover:text-red-500">
            <HeartIcon className="w-6" />
            <h1>Add to Watchlist</h1>
          </Link>
          <Link href="/login/page" className="hover:text-theme">Login</Link>
        </nav>

      </div>
      <NavBarMobile />













      <header className={`flex z-99  md:hidden items-center bg-light rounded-b-lg  justify-between md:justify-center md:gap-20 text-[15px] font-bold text-dark/70 py-4 ${active ? "block sticky top-0 shadow-lg shadow-theme/80" : "hidden"}`}>
        <Link href="/" className="flex items-center gap-5 ml-10">
          <Image src={logo} alt="logo" className="w-12 h-12 rounded-full shadow-lg shadow-theme bg-green-200" />
          <h1 className="text-xl font-serif md:hidden">MBEGU-<b className="text-xl font-extrabold italic">AFRICA</b></h1>
        </Link>
        <nav className={`flex flex-row gap-10 mg:hidden border-gray-300 items-center`}>
          <CustomLink1 href="/" title="OVERVIEW" className='text-xs font-bold text-dark/70' />
          <CustomLink1 href="/" title="ABOUT" className='text-xs font-bold text-dark/70' />
          <CustomLink1 href="/" title="TERMS" className='text-xs font-bold text-dark/70' />
          <CustomLink1 href="/" title="DISCUSSION" className='text-xs font-bold text-dark/70' />
          <CustomLink1 href="/" title="INVESTING FAQS" className='text-xs font-bold text-dark/70' />
        </nav>
        <nav className="flex items-center justify-center gap-8 mr-[40px] lg:mr-10">
          <Link href="/" className="flex gap-2 rounded-lg px-10  py-1.5 border border-dark hover:border-green-500 hover:text-red-500">
            <HeartIcon className="w-6" />
            <h1>Add to Watchlist</h1>
          </Link>
          <Link href="/login/page" className="hover:text-theme">Login</Link>
        </nav>

      </header>
    </>
  )
}

export default NavBar