import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Button from '@/components/UI/Button'
import thumbnail from '@/../public/brandkit/demo1.webp'
import Image from 'next/image'
import { HiPlay } from 'react-icons/hi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronDownIcon, ChevronUpIcon, ExclamationCircleIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon, ShieldCheckIcon } from '@heroicons/react/solid'
import member from '@/../public/brandkit/aristotle.png'
import member2 from '@/../public/brandkit/chima.png'
import member3 from '@/../public/brandkit/aristotle.png'
import member4 from '@/../public/brandkit/rose.png'
import member5 from '@/../public/brandkit/jane.png'
import { FaChevronCircleDown, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LinkArrow } from '../UI/Icons'


const ExpandableSection = ({ title, content, isExpanded, toggleExpand }) => {
    return (
        <div
            className={`relative ${isExpanded ? 'bg-light' : 'bg-light'} rounded-lg w-[810px] ${isExpanded ? 'h-auto' : 'h-[72px]'} py-4 px-14 overflow-hidden cursor-pointer mb-1`}
            onClick={toggleExpand}
        >
            <div className="flex items-center  justify-between h-full">
                <div>
                    <h1 className="text-dark text-lg font-medium">{title}</h1>
                </div>
                <div className="flex">
                    <ChevronDownIcon className={`w-6 rounded-full bg-theme/10    text-dark ${isExpanded ? 'transform rotate-180 shadow-none' : ''}`} />
                </div>
            </div>
            {isExpanded && (
                <div className="flex flex-col rounded-lg gap-3 items-start justify-between pt-5 text-dark font-thin">
                    {content}
                </div>
            )}
        </div>
    );
};




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





const Page = () => {

    //Expandable effect
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const router = useRouter();

    const [showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore);
    }



    //Scroll effect
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
            <div className="tm:gap-10">
                <NavBar />
                <div className="w-full flex og:flex-col og:gap-20 tm:gap-10   bg-gray-100 items-center justify-center p-20 og:p-12">
                    <div className="flex flex-col w-1/2 og:w-full og:items-center og:justify-center items-start justify-start">
                        <h1 className="motto uppercase text-lg tm:text-sm  tm:text-center font-medium text-dark/70">Get a piece of demo project</h1>
                        <h1 className="title normal-case text-3xl sm:text-2xl tm:text-xl sm:text-center font-extrabold text-theme">Innovative demo startup project</h1>
                        <p className="summary font-medium text-dark/90 text-[15px] tm:text-[12px] zs:text-[10px] og:text-center og:px-20 tm:px-0">
                            Small turbines, global impact. We believe we have the technology and products to make small wind as big as solar.
                        </p>
                        <div className="mt-10 zs:mt-5 mb-5">
                            <Button className="w-[350px] tm:w-[280px] zs:w-[200px] !text-dark !rounded-lg bg-gradient-to-br from-yellow-200/50 via-yellow-200 to-yellow-400">
                                Get Equity
                            </Button>
                        </div>
                        <p className="text-xs text-dark/80 w-[350px] tm:w-[280px] zs:w-[200px] tm font-medium tm:text-center tm:text-[10px]">
                            This Equity offering is made available through Mbegu Africa. This investment is just a demo, speculative, illiquid, and
                            involves a high degree of risk, including the possible loss of your entire investment.
                        </p>
                    </div>
                    <div className="flex w-1/2 og:w-full items-center justify-center">
                        <div className="relative rounded-2xl shadow-2xl shadow-gray-400 p-5">
                            <Image src={thumbnail} alt="project image" className="w-[400px] og:w-[500px] h-auto rounded-2xl" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <HiPlay className="w-20 h-20 text-light/80  border-2 border-light rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-105" />
                            </div>
                            <div className="absolute flex left-1/2 transform -translate-x-1/2 bg-light shadow-sm shadow-gray-400 rounded-b-2xl w-[80%] marker: px-2 h-[50px] right-[60px] og:right-[150px] items-center justify-center">
                                <h1 className="font-extrabold text-theme text-[16px] tm:text-[15px] bs:text-[10px]"><b className="font-thin text-dark">TZS</b> 174,432,400.342 <b className="font-thin text-dark">raised</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main py-20 tm:py-10 tm:px-10 px-20 flex og:flex-col og:gap-20">
                    <div className="left w-[60%] og:w-full og:order-last items-center justify-center">
                        <nav className="flex flex-row border-b-2 border-gray-300 items-center justify-between pb-4 og:overflow-x-auto">
                            <CustomLink href="/" title="OVERVIEW" className='text-sm font-extrabold text-gray-700' />
                            <CustomLink href="/" title="ABOUT" className='text-sm font-extrabold text-gray-700' />
                            <CustomLink href="/" title="TERMS" className='text-sm font-extrabold text-gray-700' />
                            <CustomLink href="/" title="DISCUSSION" className='text-sm font-extrabold text-gray-700' />
                            <CustomLink href="/" title="INVESTING FAQS" className='text-sm font-extrabold text-gray-700' />
                        </nav>
                        <div className="main">
                            <div className='OVERVIEW py-10' id="OVERVIEW">
                                <div className="reasons">
                                    <h1 className="title font-bold text-3xl text-dark/70">WHY INVEST WITH US</h1>
                                    <div className="flex flex-col bullets pt-10 ml-10 gap-10">
                                        <div className="flex items-start justify-start">
                                            <div className="flex">
                                                <BadgeCheckIcon className="text-theme/90 w-8" />
                                            </div>
                                            <div>
                                                <p className="px-20 font-medium text-gray-600 text-sm">
                                                    This is a dummy project, it depicts how a real projects will start its pitch here. Points to invest should include fair
                                                    inputs from what the project is, a clear outlines mathematical output based on the project potential, with reasons
                                                    why should investors be part of a project, and what will they gain be in the company.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start justify-start">
                                            <div className="flex">
                                                <BadgeCheckIcon className="text-theme/90 w-8" />
                                            </div>
                                            <div>
                                                <p className="px-20 font-medium text-gray-600 text-sm">
                                                    This is a dummy project, it depicts how a real projects will start its pitch here. Points to invest should include fair
                                                    inputs from what the project is, a clear outlines mathematical output based on the project potential, with reasons
                                                    why should investors be part of a project, and what will they gain be in the company.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start justify-start">
                                            <div className="flex">
                                                <BadgeCheckIcon className="text-theme/90 w-8" />
                                            </div>
                                            <div>
                                                <p className="px-20 font-medium text-gray-600 text-sm">
                                                    This is a dummy project, it depicts how a real projects will start its pitch here. Points to invest should include fair
                                                    inputs from what the project is, a clear outlines mathematical output based on the project potential, with reasons
                                                    why should investors be part of a project, and what will they gain be in the company.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team py-20">
                                    <h1 className="title font-bold text-3xl text-dark/70">TEAM</h1>
                                    <div className="flex flex-col members ml-10 pt-10 gap-20">
                                        <div className="flex flex-row items-start justify-start gap-5">
                                            <div>
                                                <Image src={member} alt="team member" className="w-[250px]" />
                                            </div>
                                            <div className="flex flex-col items-start justify-start">
                                                <h1 className="font-extrabold text-dark">Dr. Michael Tarimo - Founder, CEO</h1>
                                                <p className="font-medium text-sm">
                                                    This will be a short summary of the team member, duration of his/her position in office, skills,
                                                    How long has been working on the project, what other project has he/she been working on and what success
                                                    did he/she gain in the previous works ...
                                                </p>
                                                <Link href="#" className="font-extrabold text-theme pb-2">
                                                    Read more
                                                </Link>
                                                <h1 className="border-b-2 border-dotted px-[135px] border-dark/40"></h1>
                                                <div className="flex flex-row gap-6 pt-4">
                                                    <Link href="#" className="">
                                                        <FaLinkedin alt='icon' className="w-[23px] h-auto text-blue-600 transition-transform transform duration-300 hover:scale-125" />
                                                    </Link>
                                                    <Link href="#" className="">
                                                        <FaGithub alt='icon' className="w-[23px] h-auto transition-transform transform duration-300 hover:scale-125" />
                                                    </Link>
                                                    <Link href="#" className="">
                                                        <FaWhatsapp alt='icon' className="w-[23px] text-theme h-auto transition-transform transform duration-300 hover:scale-125" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start justify-start gap-5">
                                            <div>
                                                <Image src={member2} alt="team member" className="w-[250px]" />
                                            </div>
                                            <div className="flex flex-col items-start justify-start">
                                                <h1 className="font-extrabold text-dark">Mr. George Prosper - CMO</h1>
                                                <p className="font-medium text-sm">
                                                    This will be a short summary of the team member, duration of his/her position in office, skills,
                                                    How long has been working on the project, what other project has he/she been working on and what success
                                                    did he/she gain in the previous works ...
                                                </p>
                                                <Link href="#" className="font-extrabold text-theme pb-2">
                                                    Read more
                                                </Link>
                                                <h1 className="border-b-2 border-dotted px-[135px] border-dark/40"></h1>
                                                <div className="flex flex-row gap-6 pt-4">
                                                    <Link href="#" className="">
                                                        <FaLinkedin alt='icon' className="w-[23px] h-auto text-blue-600 transition-transform transform duration-300 hover:scale-125" />
                                                    </Link>
                                                    <Link href="#" className="">
                                                        <FaGithub alt='icon' className="w-[23px] h-auto transition-transform transform duration-300 hover:scale-125" />
                                                    </Link>
                                                    <Link href="#" className="">
                                                        <FaWhatsapp alt='icon' className="w-[23px] text-theme h-auto transition-transform transform duration-300 hover:scale-125" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>


                                        {showMore && (
                                            <>
                                                <div className="flex flex-row items-start justify-start gap-5">
                                                    <div>
                                                        <Image src={member3} alt="team member" className="w-[250px]" />
                                                    </div>
                                                    <div className="flex flex-col items-start justify-start">
                                                        <h1 className="font-extrabold text-dark">Mr. Ally Ndimbo - CTO</h1>
                                                        <p className="font-medium text-sm">
                                                            This will be a short summary of the team member, duration of his/her position in office, skills,
                                                            How long has been working on the project, what other project has he/she been working on and what success
                                                            did he/she gain in the previous works ...
                                                        </p>
                                                        <Link href="#" className="font-extrabold text-theme pb-2">
                                                            Read more
                                                        </Link>
                                                        <h1 className="border-b-2 border-dotted px-[135px] border-dark/40"></h1>
                                                        <div className="flex flex-row gap-6 pt-4">
                                                            <Link href="#" className="">
                                                                <FaLinkedin alt='icon' className="w-[23px] h-auto text-blue-600 transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                            <Link href="#" className="">
                                                                <FaGithub alt='icon' className="w-[23px] h-auto transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                            <Link href="#" className="">
                                                                <FaWhatsapp alt='icon' className="w-[23px] text-theme h-auto transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-start justify-start gap-5">
                                                    <div>
                                                        <Image src={member4} alt="team member" className="w-[250px]" />
                                                    </div>
                                                    <div className="flex flex-col items-start justify-start">
                                                        <h1 className="font-extrabold text-dark">Ms. Rose Roselta - Director</h1>
                                                        <p className="font-medium text-sm">
                                                            This will be a short summary of the team member, duration of his/her position in office, skills,
                                                            How long has been working on the project, what other project has he/she been working on and what success
                                                            did he/she gain in the previous works ...
                                                        </p>
                                                        <Link href="#" className="font-extrabold text-theme pb-2">
                                                            Read more
                                                        </Link>
                                                        <h1 className="border-b-2 border-dotted px-[135px] border-dark/40"></h1>
                                                        <div className="flex flex-row gap-6 pt-4">
                                                            <Link href="#" className="">
                                                                <FaLinkedin alt='icon' className="w-[23px] h-auto text-blue-600 transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                            <Link href="#" className="">
                                                                <FaGithub alt='icon' className="w-[23px] h-auto transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                            <Link href="#" className="">
                                                                <FaWhatsapp alt='icon' className="w-[23px] text-theme h-auto transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-start justify-start gap-5">
                                                    <div>
                                                        <Image src={member5} alt="team member" className="w-[250px]" />
                                                    </div>
                                                    <div className="flex flex-col items-start justify-start">
                                                        <h1 className="font-extrabold text-dark">Ms. Jane Laurent - Lawyer & Relations</h1>
                                                        <p className="font-medium text-sm">
                                                            This will be a short summary of the team member, duration of his/her position in office, skills,
                                                            How long has been working on the project, what other project has he/she been working on and what success
                                                            did he/she gain in the previous works ...
                                                        </p>
                                                        <Link href="#" className="font-extrabold text-theme pb-2">
                                                            Read more
                                                        </Link>
                                                        <h1 className="border-b-2 border-dotted px-[135px] border-dark/40"></h1>
                                                        <div className="flex flex-row gap-6 pt-4">
                                                            <Link href="#" className="">
                                                                <FaLinkedin alt='icon' className="w-[23px] h-auto text-blue-600 transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                            <Link href="#" className="">
                                                                <FaGithub alt='icon' className="w-[23px] h-auto transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                            <Link href="#" className="">
                                                                <FaWhatsapp alt='icon' className="w-[23px] text-theme h-auto transition-transform transform duration-300 hover:scale-125" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {!showMore && (
                                            <button onClick={toggleShowMore} className="font-bold gap-6 shadow-sm shadow-gray-300  flex items-center justify-center bg-gray-200/60 p-2 rounded-b-[60px]  text-theme">
                                                <h1>Show More</h1>
                                                <ChevronDownIcon className="w-7 text-dark" />
                                            </button>
                                        )}
                                        {showMore && (
                                            <button onClick={toggleShowMore} className="font-bold gap-6 shadow-sm shadow-gray-300  flex items-center justify-center bg-gray-200/60 p-2 rounded-t-[60px] text-theme">
                                                <h1>Show Less</h1>
                                                <ChevronUpIcon className="w-7 text-dark" />
                                            </button>
                                        )}
                                    </div>



                                    <div className="team py-10">
                                        <h1 className="title font-bold text-2xl text-dark">OVERVIEW</h1>
                                        <div className="flex flex-col members ml-10 pt-10 gap-20 bg-gray-100 px-6 rounded-md">
                                            <h1 className="font-bold text-dark/70 text-xl">This is an <b className="text-dark">overview</b> section of the demo project</h1>
                                            <p>
                                                A company will be posting description, with images and videos regarding their project here.
                                                It will be comprehensive, and pitched well under the guidance of Mbegu Africa Team.
                                            </p>
                                        </div>
                                    </div>


                                    <div className="team py-10">
                                        <h1 className="title font-bold text-2xl text-dark">THE PROBLEM</h1>
                                        <div className="flex flex-col members ml-10 pt-10 gap-20 bg-gray-100 px-6 rounded-md">
                                            <h1 className="font-bold text-dark/70 text-xl">This is the <b className="text-dark">problem statement</b> section of the demo project</h1>
                                            <p>
                                                A company will be posting description, with images and videos regarding their project here.
                                                It will be comprehensive, and pitched well under the guidance of Mbegu Africa Team.
                                            </p>
                                        </div>
                                    </div>


                                    <div className="team py-10">
                                        <h1 className="title font-bold text-2xl text-dark">SOLUTION</h1>
                                        <div className="flex flex-col members ml-10 pt-10 gap-20 bg-gray-100 px-6 rounded-md">
                                            <h1 className="font-bold text-dark/70 text-xl">This is the <b className="text-dark">solution</b> section of the demo project</h1>
                                            <p>
                                                A company will be posting description, with images and videos regarding their project here.
                                                It will be comprehensive, and pitched well under the guidance of Mbegu Africa Team.
                                            </p>
                                        </div>
                                    </div>


                                    <div className="team py-10">
                                        <h1 className="title font-bold text-2xl text-dark">THE MARKET</h1>
                                        <div className="flex flex-col members ml-10 pt-10 gap-20 bg-gray-100 px-6 rounded-md">
                                            <h1 className="font-bold text-dark/70 text-xl">This is the <b className="text-dark">market overview</b> section of the demo project</h1>
                                            <p>
                                                A company will be posting description, with images and videos regarding their project here.
                                                It will be comprehensive, and pitched well under the guidance of Mbegu Africa Team.
                                            </p>
                                        </div>
                                    </div>


                                    <div className="team py-10">
                                        <h1 className="title font-bold text-2xl text-dark">WHY INVEST</h1>
                                        <div className="flex flex-col members ml-10 pt-10 gap-20 bg-gray-100 px-6 rounded-md">
                                            <h1 className="font-bold text-dark/70 text-xl">This is the <b className="text-dark">why invest</b> section of the demo project</h1>
                                            <p>
                                                A company will be posting description, with images and videos regarding their project here.
                                                It will be comprehensive, and pitched well under the guidance of Mbegu Africa Team.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ABOUT" id="ABOUT">
                                <h1 className="title font-bold text-2xl text-dark">ABOUT</h1>
                                <div className="flex items-start justify-between py-10 px-10">
                                    <nav className="flex flex-col items-start">
                                        <h1 className="text-theme  text-[18px] font-thin">HEADQUARTERS</h1>
                                        <h1 className="font-bold text-dark/70 text-[15px] pt-2">House no 000, LUGALO St.</h1>
                                        <h1 className="font-bold text-dark/70 text-[15px]">UN Road, Upanga EAST</h1>
                                        <h1 className="font-bold text-dark/70 text-[15px]">Ilala - Dar es salaam</h1>
                                    </nav>

                                    <nav className="flex flex-col items-end justify-end">
                                        <h1 className="text-theme font-thin  text-[18px]">WEBSITE</h1>
                                        <Link href="#" className="flex font-extrabold text-theme text-[18px] gap-4 pt-2">
                                            <h1>View Site</h1>
                                            <div>
                                                <LinkArrow className="w-10 text-theme" />
                                            </div>
                                        </Link>
                                    </nav>
                                </div>
                            </div>


                            <div className="TERMS pt-10" id="TERMS">
                                <h1 className="title font-bold text-2xl text-dark">TERMS</h1>
                                <h1 className="font-medium uppercase text-sm text-yellow-800 pt-5">Mbegu Africa</h1>
                                <h1 className="font-extrabold text-theme text-2xl pt-10">Overview</h1>
                                <div className="flex items-start justify-between pt-3 px-10">
                                    <nav className="flex flex-col items-start">
                                        <h1 className="text-dark font-thin text-[18px]">PRICE PER SHARE</h1>
                                        <h1 className="font-bold text-dark text-[17px]">TZS 30,000</h1>
                                    </nav>

                                    <nav className="flex flex-col items-end justify-end">
                                        <h1 className="text-dark font-thin text-[18px]">VALUATION</h1>
                                        <h1 className="font-bold text-dark text-[17px]">TZS 723.21M</h1>
                                    </nav>
                                </div>

                                <div className="flex items-start justify-between pt-5 px-10">
                                    <nav className="flex flex-col items-start">
                                        <h1 className="text-dark font-thin  text-[18px]">DEADLINE</h1>
                                        <h1 className="font-bold text-dark text-[17px]">Dec. 5, 2024 at 10:59 AM GMT+3</h1>
                                    </nav>

                                    <nav className="flex flex-col items-end justify-end">
                                        <h1 className="text-dark font-thin text-[18px]">FUNDING GOAL</h1>
                                        <h1 className="font-bold text-dark text-[17px]">TZS 45M - 345M</h1>
                                    </nav>
                                </div>


                                <h1 className="font-extrabold text-theme text-2xl pt-10">Breakdown</h1>
                                <div className="flex items-start justify-between pt-3 px-10">
                                    <nav className="flex flex-col items-start">
                                        <h1 className="text-dark font-thin text-[18px]">MIN INVESTMENT</h1>
                                        <h1 className="font-bold text-dark text-[17px]">TZS 100,000</h1>
                                    </nav>

                                    <nav className="flex flex-col items-end justify-end">
                                        <h1 className="text-dark font-thin text-[18px]">OFFERING TYPE</h1>
                                        <h1 className="font-bold text-dark text-[17px]">Equity</h1>
                                    </nav>
                                </div>

                                <div className="flex items-start justify-between pt-5 px-10">
                                    <nav className="flex flex-col items-start">
                                        <h1 className="text-dark font-thin  text-[18px]">MAX INVESTMENT</h1>
                                        <h1 className="font-bold text-dark text-[17px]">TZS 20,405,000</h1>
                                    </nav>

                                    <nav className="flex flex-col items-end justify-end">
                                        <h1 className="text-dark font-thin text-[18px]">ASSET TYPE</h1>
                                        <h1 className="font-bold text-dark text-[17px]">Common stock</h1>
                                    </nav>
                                </div>

                                <div className="flex items-start justify-between pt-5 px-10">
                                    <nav className="flex flex-col items-start">
                                        <h1 className="text-dark font-thin  text-[18px]">MIN NUMBER OF SHARES OFFERED</h1>
                                        <h1 className="font-bold text-dark text-[17px]">3,500</h1>
                                    </nav>

                                    <nav className="flex flex-col items-end justify-end">
                                        <h1 className="text-dark font-thin text-[18px]">SHARES OFFERED</h1>
                                        <h1 className="font-bold text-dark text-[17px]">Common stock</h1>
                                    </nav>
                                </div>

                                <div className="flex items-start justify-between pt-5 px-10">
                                    <nav className="flex flex-col items-start">
                                        <h1 className="text-dark font-thin  text-[18px]">MAX NUMBER OF SHARES OFFERED</h1>
                                        <h1 className="font-bold text-dark text-[17px]">250,000</h1>
                                    </nav>
                                </div>
                            </div>


                            <div className="DISCUSSION pt-20" id="DISCUSSION">
                                <h1 className="title font-bold text-2xl text-dark">JOIN THE DISCUSSION</h1>
                                <div className="flex items-start justify-between py-10 px-10">
                                    <div className="flex flex-col">
                                        <div className="w-[800px] p-5 flex flex-col h-[800px] cursor-move bg-white rounded-t-3xl  overflow-y-auto">
                                            <div className="flex items-center justify-center py-10 font-semibold text-gray-600">
                                                <h1>DROP YOUR COMMENT (QUESTION, SUGGESTIONS ETC HERE)</h1>
                                            </div>
                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Lucas John</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">George</h1>
                                                    <h1 className="title font-extrabold text-theme text-sm">Project - CMO</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Eugene Michael</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-sm text-dark">Michael</h1>
                                                    <h1 className="title text-sm font-extrabold text-theme">Project - Founder</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Issac Soppa</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Founder</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    How did you guys manage to raise much funds?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center mb-10">
                                                <h1 className="font-thin">No reply yet</h1>
                                                <ExclamationCircleIcon className="w-5 text-dark" />
                                            </nav>




                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Brown Steve</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-sm text-dark">Ndimbo</h1>
                                                    <h1 className="title text-sm font-extrabold text-theme">Project - CTO</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Eugene Michael</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-sm text-dark">Michael</h1>
                                                    <h1 className="title text-sm font-extrabold text-theme">Project - Founder</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Eugene Michael</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-sm text-dark">Michael</h1>
                                                    <h1 className="title text-sm font-extrabold text-theme">Project - Founder</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Eugene Michael</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-sm text-dark">Michael</h1>
                                                    <h1 className="title text-sm font-extrabold text-theme">Project - Founder</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Eugene Michael</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-sm text-dark">Michael</h1>
                                                    <h1 className="title text-sm font-extrabold text-theme">Project - Founder</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="chat1 flex flex-col  gap-2 px-10">
                                                <nav className="flex flex-row gap-3">
                                                    <BadgeCheckIcon className="w-5 text-blue-500" />
                                                    <h1 className="font-extrabold text-dark text-sm">Eugene Michael</h1>
                                                    <h1 className="title font-extrabold text-yellow-500 text-sm">Investor</h1>
                                                </nav>
                                                <span className="message text-sm text-dark font-thin ">
                                                    Hey guys, i noticed you raised previous rounds. May i ask, where and when? and how far are you to launching
                                                    the project?
                                                </span>
                                            </div>
                                            <nav className="flex gap-4 items-center justify-center">
                                                <h1 className="font-thin">Reply</h1>
                                                <ChevronDownIcon className="w-5 text-dark" />
                                            </nav>
                                            <div className="reply ml-20  flex flex-col gap-2 px-10 py-3 rounded-3xl mt-5 mb-10 bg-theme/10">

                                                <nav className="flex flex-row gap-3 items-end justify-end">
                                                    <BadgeCheckIcon className="w-5 text-green-500" />
                                                    <h1 className="font-extrabold text-sm text-dark">Michael</h1>
                                                    <h1 className="title text-sm font-extrabold text-theme">Project - Founder</h1>
                                                </nav>
                                                <div className="flex message text-sm text-dark font-thin items-end justify-end">
                                                    <p>
                                                        Yes, what you see, is a demo. It will be a demo. the previous rounds were raise for demo
                                                        demo is demo, and demo, will be demo.
                                                    </p>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="">
                                            <input
                                                type='text'
                                                placeholder='Comment on the project, Q&A...'
                                                required
                                                className="w-[800px] px-20 py-10 text-center rounded-t-lg  outline-none bg-form-input   placeholder-gray-100 text-white"
                                            />
                                            <Button className="flex gap-3 items-center rounded-b-lg justify-center w-[800px] bg-gradient-to-r from-theme/50 via-gray-theme/70 to-theme/90">
                                                <h1 className="font-bold text-xl text-white">Send</h1>
                                                <PaperAirplaneIcon className="w-5 rotate-45 text-" />
                                            </Button>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="FAQ mt-10" id="FAQ">
                                <h1 className="title font-bold text-2xl text-dark">FAQs</h1>
                                <div className="flex flex-col items-start justify-between py-10 px-10">
                                    <ExpandableSection
                                        title="How much can I invest?"
                                        content={
                                            <>
                                                <p>Tanzanians are friendly and down to earth people; they greet everyone with a smile and kindness.</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <div className="flex items-center justify-between gap-10">


                                                </div>
                                            </>
                                        }
                                        isExpanded={expandedIndex === 0}
                                        toggleExpand={() => handleToggleExpand(0)}
                                    />
                                    <ExpandableSection
                                        title="When will I get the shares I bought?"
                                        content={
                                            <>
                                                <p>Tanzanians are friendly and down to earth people; they greet everyone with a smile and kindness.</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <div className="flex items-center justify-between gap-10">


                                                </div>
                                            </>
                                        }
                                        isExpanded={expandedIndex === 1}
                                        toggleExpand={() => handleToggleExpand(1)}
                                    />
                                    <ExpandableSection
                                        title="How much can I make from my investment?"
                                        content={
                                            <>
                                                <p>Tanzanians are friendly and down to earth people; they greet everyone with a smile and kindness.</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <div className="flex items-center justify-between gap-10">


                                                </div>
                                            </>
                                        }
                                        isExpanded={expandedIndex === 2}
                                        toggleExpand={() => handleToggleExpand(2)}
                                    />
                                    <ExpandableSection
                                        title="Can I cancel my investment?"
                                        content={
                                            <>
                                                <p>Tanzanians are friendly and down to earth people; they greet everyone with a smile and kindness.</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <p>This will be updated based on the company rules. A dummy question. But who knows, it can make a meaning</p>
                                                <div className="flex items-center justify-between gap-10">


                                                </div>
                                            </>
                                        }
                                        isExpanded={expandedIndex === 3}
                                        toggleExpand={() => handleToggleExpand(3)}
                                    />
                                </div>
                            </div>




                        </div>
                    </div>
                    <div className={`w-[40%] flex flex-col items-center justify-start og:w-full `}>
                        <div className="flex flex-col items-center justify-center shadow-lg shadow-gray-400 w-[80%] h-[7%] rounded-2xl bg-gradient-to-br from-yellow-200/50 via-yellow-200 to-yellow-400">
                            <nav className="flex bg-gray-200 flex-col items-center justify-center shadow-xl shadow-gray-400 w-[90%] h-[20%] rounded-2xl">
                                <Button className="flex shadow-sm shadow-gray-400 flex-col w-[90%] !py-1 !rounded-lg items-center justify-center bg-gradient-to-br from-yellow-200/50 via-yellow-200 to-yellow-400">
                                    <h1 className="text-lg text-dark font-extrabold">Get Equity</h1>
                                    <p1 className="text-sm text-dark font-medium">TZS 30K Per share</p1>
                                </Button>
                            </nav>
                            <div className="flex w-[80%] pt-10 lg:pt-8 og:pt-10  flex-col lg:items-center og:items-center lg:justify-center og:justify-between">
                                <div className="flex gap-2 items-center justify-start  lg:justify-center og:justify-start og:gap-2 lg:gap-1">
                                    <h1 className="text-dark font-thin  text-[16px] lg:text-[14px]">PREVIOUSLY CROWDFUNDED</h1>
                                    <ExclamationCircleIcon className="w-5 lg:w-4 text-dark/40 cursor-pointer transition-transform transform duration-300 hover:scale-110 " />
                                </div>
                                <h1 className="font-extrabold text-theme text-[14px] lg:text-[13px]">TZS 345,040,600.342</h1>
                                <div className="flex flex-row pt-8 lg:pt-4 og:pt-8 items-center justify-between lg:justify-center og:justify-between og:flex-row og:items-center lg:flex-col">
                                    <div className="flex flex-col lg:items-center og:items-start">
                                        <nav className="flex flex-row gap-2">
                                            <h1 className="text-dark font-thin  text-[16px] lg:text-[14px]">RAISED</h1>
                                            <ExclamationCircleIcon className="w-5 lg:w-4 text-dark/40 cursor-pointer transition-transform transform duration-300 hover:scale-110 " />
                                        </nav>
                                        <h1 className="font-extrabold text-theme text-[14px] lg:text-[13px]">TZS 174,432,400.342</h1>
                                    </div>
                                    <div className="flex flex-col items-end justify-end lg:items-center og:items-end lg:justify-center og:justify-end og:pt-0 lg:pt-4">
                                        <h1 className="text-dark/80 font-thin text-[16px] lg:text-[14px]">INVESTORS</h1>
                                        <h1 className="font-extrabold text-theme text-[14px] lg:text-[13px]">267</h1>
                                    </div>
                                </div>
                                <div className="flex pt-8 gap-20 lg:gap-3 og:gap-10 items-center justify-between lg:justify-center og:justify-between og:flex-row lg:flex-col lg:pt-4 og:pt-8">
                                    <div className="flex flex-col lg:items-center">
                                        <nav className="flex flex-row gap-2">
                                            <h1 className="text-dark/80 font-thin  text-[16px] lg:text-[14px]">MIN INVEST</h1>
                                            <ExclamationCircleIcon className="w-5 lg:w-4 text-dark/40 cursor-pointer transition-transform transform duration-300 hover:scale-110 " />
                                        </nav>
                                        <h1 className="font-extrabold text-theme text-[14px] lg:text-[13px]">TZS 30,000</h1>
                                    </div>
                                    <div className="flex flex-col items-end justify-end">
                                        <h1 className="text-dark/80 font-thin  text-[15px] lg:text-[14px]">VALUATION</h1>
                                        <h1 className="font-extrabold text-theme text-[14px] lg:text-[13px]">TZS 12.64B</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl shadow-sm shadow-gray-300 w-[80%] bg-gradient-to-r from-theme/50 via-gray-theme/70 to-theme/90  py-5 mt-5 gap-4 flex items-center justify-center">
                            <div className="rounded-full bg-blue-500 p-2 shadow-sm shadow-theme">
                                <ShieldCheckIcon className="w-5 text-yellow-200" />
                            </div>
                            <h1 className="text-sm font-bold text-dark">Project company registered by Mbegu</h1>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Page