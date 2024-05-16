'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import banner from '@/../public/brandkit/banner.webp'
import google from '@/../public/brandkit/google.png'
import github from '@/../public/brandkit/github.png'
import linkedin from '@/../public/brandkit/linkedin.png'
import toast, { Toaster } from 'react-hot-toast';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser, HiBadgeCheck } from "react-icons/hi";
import NavBarAuth from '@/components/Auth/NavBarAuth';
import TransitionEffect from '@/components/UI/TransitionEffect'
import Head from 'next/head'

const page = () => {
    


    //the checkbox goes here
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(true);

    const handleCheckboxchange = () => {
        setChecked(!checked);
    };

    const handleCheckboxchange2 = () => {
        setChecked2(!checked);
    };


    //here we track the active section
    const [activeSection, setActiveSection] = useState('phase');


    //Function to change the active section
    const handleSetActiveSection = (sectionName) => {
        setActiveSection(sectionName);
    };

    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);




    return (
        <>  
            <Head>
                <title>Mbegu Africa | For Visionary Founders & Investors</title>
                <meta name='description' content='Mbegu is a modern crowdfunding platform allowing both investors and founders to thrive.
                                        Now, startups can raise enough rounds to launch their companies and succeed, and investors 
                                        can participate to become part of early ivestors in startups' />
            </Head>
            <TransitionEffect />
            <NavBarAuth />
            <div className="flex flex-row  p-20 xl:p-10 bg-light xl:items-center xl:justify-center">
                {activeSection === 'phase' && (
                    <>
                        <div className="flex w-1/2  p-0 items-center justify-center xl:hidden">
                            <Image src={banner} alt="banner" className="w-full h-screen rounded-lg" />
                        </div>
                        <div className="flex flex-col w-1/2 xl:w-full border items-center justify-center border-gray-300 lg:p-6 bg-white xl:border-none rounded-lg">
                            <div className="items-center text-center justify-center">
                                <span className="font-extrabold md:text-sm   text-dark/70">Join More than 0000 Verified Tanzanians</span>
                            </div>
                            <div className="flex p-4 gap-4 flex-row items-center justify-center">
                                <Image src={google} alt="google" className="h-[60px] w-[60px] tm:w-[50px] tm:h-[50px] ls:w-[40px] ls:h-[40px] zs:w-[30px] zs:h-[30px] rounded-full bg-whiter/80" />
                                <Image src={github} alt="github" className="h-[60px] w-[60px] tm:w-[50px] tm:h-[50px] ls:w-[40px] ls:h-[40px] zs:w-[30px] zs:h-[30px] rounded-full bg-whiter/80" />
                                <Image src={linkedin} alt="github" className="h-[45px] w-[45px] tm:w-[35px] tm:h-[35px] ls:w-[25px] ls:h-[25px] zs:w-[15px] zs:h-[15px]" />
                            </div>
                            <h1 className="p-4 font-bold text-dark text-dark/70 tm:hidden">- - - - - - - - <b className="font-bol text-dark/70 md:text-sm">OR</b> - - - - - - - -</h1>
                            <h1 className="p-4 font-extrabold text-dark/70 hidden tm:block xs:text-sm">OR</h1>
                            <form >
                                <div className="pt-3">
                                    <div className="relative flex flex-row items-center justify-center pt-4">
                                        <label htmlFor="email">
                                            <input
                                                onFocus={() => setIsFocused(true)}
                                                onBlur={() => setIsFocused(false)}
                                                placeholder="email@address.com"
                                                required
                                                name="email"
                                                type="email"
                                                className="ls:text-xs outline-none shadow-sm shadow-gray-400 font-bold text-sm bg-gray-200 pr-[250px] p-4 rounded-sm rm:pr-[200px] tm:pr-[130px] tm:py-3 xs:pr-[100px] ls:pr-20 ls:py-2" />
                                            <HiAtSymbol className={`absolute right-8 bottom-4 ls:bottom-2 rm:right-8 zs:right-3 tm:right-6 tm:h-5 tm:w-5 h-6 w-6 ${isFocused ? 'text-theme' : 'text-gray-400'}`} />
                                        </label>
                                    </div>

                                    <div className="relative flex flex-row items-center justify-center pt-4">
                                        <label htmlFor="password">
                                            <input
                                                onFocus={() => setIsFocused2(true)}
                                                onBlur={() => setIsFocused2(false)}
                                                placeholder="Password"
                                                required
                                                name="password"
                                                type={`${show ? "text" : "password"}`}
                                                className="ls:text-xs outline-none shadow-sm shadow-gray-400 font-bold text-sm bg-gray-200 pr-[250px] p-4 rounded-sm rm:pr-[200px] tm:pr-[130px] tm:py-3 xs:pr-[100px] ls:pr-20 ls:py-2" />
                                            <HiFingerPrint onClick={() => setShow(!show)} className={`absolute right-8 bottom-4 zs:right-3 ls:bottom-2 rm:right-8 tm:right-6 tm:h-5 tm:w-5 h-6 w-6 hover:text-theme cursor-pointer ${isFocused2 ? 'text-theme' : 'text-gray-400'}`} />
                                        </label>
                                    </div>
                                    <div className="relative flex flex-row items-center justify-center pt-4">
                                        <label htmlFor="password">
                                            <input
                                                onFocus={() => setIsFocused3(true)}
                                                onBlur={() => setIsFocused3(false)}
                                                placeholder="Confirm Password"
                                                required
                                                name="password"
                                                type={`${show1 ? "text" : "password"}`}
                                                className="ls:text-xs outline-none shadow-sm shadow-gray-400 font-bold text-sm bg-gray-200 pr-[250px] p-4 rounded-sm rm:pr-[200px] tm:pr-[130px] tm:py-3 xs:pr-[100px] ls:pr-20 ls:py-2" />
                                            <HiFingerPrint onClick={() => setShow1(!show1)} className={`absolute right-8 bottom-4 zs:right-3 ls:bottom-2 rm:right-8 tm:right-6 tm:h-5 tm:w-5 h-6 w-6 hover:text-theme cursor-pointer ${isFocused3 ? 'text-theme' : 'text-gray-400'}`} />
                                        </label>
                                    </div>
                                    <p className="font-light text-xs text-dark pt-3 xs:text-[9px] xs:text-center">At least 8 characters, a capital letter, a special character, and a number</p>
                                    <div className="flex flex-col  items-center justify-center pt-4">
                                        <button
                                            type="submit"
                                            onClick={() => handleSetActiveSection('phase1')}
                                            className="border-2 text-whiter bg-dark/80 border-dark/80 text-center hover:bg-dark hover:border-theme hover:text-whiter font-bold text-sm  px-[200px] rm:px-[170px] p-3 rounded-xl tm:px-[135px] tm:py-3 xs:px-[120px] ls:px-[90px] ls:py-2">
                                            Continue
                                        </button>
                                        <a href="#" className="font-bold text-yellow-600 text-sm pt-6 hover:text-dark">Forgot Password ?</a>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </>
                )}


                {activeSection === 'phase1' && (
                    <>
                        <div className="flex w-1/2 p-0 items-center justify-center xl:hidden">
                            <Image src={banner} alt="banner" className="w-full h-screen rounded-lg" />
                        </div>
                        <div className="flex flex-col w-1/2 xl:w-full border items-center justify-center border-gray-300 xl:border-none bg-white lg:p-6 rounded-lg">
                            <div className="flex flex-col items-center justify-center">
                                <div className="items-center rm:text-center justify-center pb-4">
                                    <span className="font-semibold uppercase md:text-sm tm:text-[10px]  text-whiter">Finish Signing up</span>
                                </div>
                                <p className="text-center font-bold text-xs text-dark pt-2">Enter your first & last name as they appear on your government ID</p>
                                <div className="flex flex-col items-center justify-center pt-3">
                                    <div className="relative flex flex-row items-center justify-start pt-4">
                                        <label htmlFor="email">
                                            <input
                                                onFocus={() => setIsFocused(true)}
                                                onBlur={() => setIsFocused(false)}
                                                placeholder="First Name"
                                                required
                                                name="name"
                                                type="text"
                                                className="outline-none shadow-sm shadow-gray-400 font-bold text-sm bg-gray-200 pr-[250px] p-4 rounded-sm rm:pr-[200px] tm:pr-[130px] tm:py-3 xs:pr-[100px] ls:pr-16 ls:py-2 ls:text-xs" />
                                            <HiOutlineUser className={`absolute right-8 bottom-4 ls:bottom-2 rm:right-4 tm:right-4 tm:h-5 tm:w-5 h-6 w-6 ${isFocused ? 'text-theme' : 'text-gray-400'}`} />
                                        </label>
                                    </div>

                                    <div className="relative flex flex-row items-center justify-start pt-4">
                                        <label htmlFor="email">
                                            <input
                                                onFocus={() => setIsFocused2(true)}
                                                onBlur={() => setIsFocused2(false)}
                                                placeholder="Last Name"
                                                required
                                                name="Last Name"
                                                type="text"
                                                className="outline-none shadow-sm shadow-gray-400 font-bold text-sm bg-gray-200 pr-[250px] p-4 rounded-sm rm:pr-[200px] tm:pr-[130px] tm:py-3 xs:pr-[100px] ls:pr-16 ls:py-2 ls:text-xs" />
                                            <HiBadgeCheck className={`absolute right-8 bottom-4 ls:bottom-2 rm:right-4 tm:right-4 tm:h-5 tm:w-5 h-6 w-6 ${isFocused2 ? 'text-theme' : 'text-gray-400'}`} />
                                        </label>
                                    </div>

                                    <div className="w-[90%] flex items-center justify-center pt-4">
                                        <input
                                            type="checkbox"
                                            checked={checked2}
                                            onChange={handleCheckboxchange2}
                                            className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"

                                        />
                                        <span className="ml-2 text-[10px] font-light text-dark">I would like to receive Mbegu newsletter and investment
                                            opportunities that are relevant to my interest
                                        </span>
                                    </div>

                                    <div className="w-[90%] flex justify-center items-center pt-4">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={handleCheckboxchange}
                                            className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"

                                        />
                                        <span className="ml-2 text-[10px] font-light text-dark">
                                            I have read and agreed to the sites&apos; <a href="#" className="font-bold text-yellow-600">educational materials</a>, risks
                                            and <a href="#" className="font-bold text-red-600">compensation disclosure</a>

                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <p className=" font-bold text-[10px] text-dark pt-6 pb-4 text-center">By signing up you agree with our <a href="#" className="font-bold text-yellow-600">Terms &  Conditions</a> &
                                            <a href="#" className="font-bold text-yellow-600"> Privacy Policy</a></p>
                                    </div>

                                    <div className="flex flex-col  items-center justify-center pt-4">
                                        <button
                                            type="submit"
                                            className="border-2 text-whiter bg-dark/80 border-dark/80 text-center hover:bg-dark hover:border-theme hover:text-whiter font-bold text-sm  px-[200px] rm:px-[170px] p-3 rounded-xl tm:px-[135px] tm:py-3 xs:px-[120px] ls:px-[90px] bs:px-18 ls:py-2">
                                            Submit
                                        </button>
                                    </div>
                                    <div className="flex flex-col  items-center justify-center pt-4">
                                        <button
                                            onClick={() => handleSetActiveSection('phase')}

                                            className="border-2 text-whiter bg-dark/80 border-dark/80 text-center hover:bg-dark hover:border-theme hover:text-whiter font-bold text-sm  px-[210px] rm:px-[170px] p-3 rounded-xl tm:px-[135px] tm:py-3 xs:px-[120px] ls:px-[90px] bs:px-20 ls:py-2">
                                            Back
                                        </button>
                                        <a href="#" className="font-bold text-yellow-600 text-sm pt-6 hover:text-dark">Forgot Password ?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default page;