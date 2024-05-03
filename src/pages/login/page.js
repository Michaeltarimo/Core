import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import banner from '@/../public/brandkit/banner.webp'
import google from '@/../public/brandkit/google.png'
import github from '@/../public/brandkit/github.png'
import linkedin from '@/../public/brandkit/linkedin.png'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn } from "next-auth/react";
import NavBarLogin from '@/components/Auth/NavBarLogin'
import Head from 'next/head'
import TransitionEffect from '@/components/UI/TransitionEffect'


const page = () => {

    //Google Handler function
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: "/admin/page" });
    }




    //These are for input space icons.
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [show, setShow] = useState(false);



    return (
        <>
            <Head>
                <title>Mbegu Africa | For Visionary Founders & Investors</title>
                <meta name='description' content='Mbegu is a modern crowdfunding platform allowing both investors and founders to thrive.
                                        Now, startups can raise enough rounds to launch their companies and succeed, and investors 
                                        can participate to become part of early ivestors in startups' />
            </Head>
            <TransitionEffect />
            <NavBarLogin />
            <div className="flex flex-row  p-20 xl:p-10 bg-light xl:items-center xl:justify-center">
                <div className="flex w-1/2  p-0 items-center justify-center xl:hidden">
                    <Image src={banner} alt="banner" className="w-full h-screen rounded-lg" />
                </div>
                <div className="flex flex-col w-1/2 xl:w-full border items-center justify-center border-theme lg:p-6 bg-theme/70 rounded-lg">
                    <div className="items-center rm:text-center justify-center">
                        <span className="font-extrabold md:text-sm  text-dark/70">Join More than 0000 Verified Tanzanians</span>
                    </div>
                    <div className="flex p-4 gap-4 flex-row items-center justify-center">
                        <button onClick={handleGoogleSignin}>
                            <Image src={google} alt="google" className="h-[60px] w-[60px] tm:w-[50px] tm:h-[50px] ls:w-[40px] ls:h-[40px] zs:w-[30px] zs:h-[30px] rounded-full bg-whiter/80" />
                        </button>
                        <Image src={github} alt="github" className="h-[60px] w-[60px] tm:w-[50px] tm:h-[50px] ls:w-[40px] ls:h-[40px] zs:w-[30px] zs:h-[30px] rounded-full bg-whiter/80" />
                        <Image src={linkedin} alt="github" className="h-[63px] w-[63px] tm:w-[53px] tm:h-[53px] ls:w-[43px] ls:h-[43px] zs:w-[33px] zs:h-[33px]" />
                    </div>
                    <h1 className="p-4 font-bold text-whiter text-dark/70 tm:hidden">- - - - - - - - <b className="font-bold text-whiter text-dark/70 md:text-sm">OR</b> - - - - - - - -</h1>
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
                                        className="outline-none shadow-sm shadow-gray-400 font-bold text-sm bg-gray-200 pr-[250px] p-4 rounded-sm rm:pr-[200px] tm:pr-[130px] tm:py-3 xs:pr-[100px] ls:pr-16 ls:py-2 ls:text-xs" />
                                    <HiAtSymbol className={`absolute right-8 bottom-4 rm:right-4 tm:right-6 tm:h-5 tm:w-5 h-6 w-6 ls:bottom-2 ls:right-3 ${isFocused ? 'text-green-500' : 'text-gray-400'}`} />
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
                                        className="ls:text-xs outline-none shadow-sm shadow-gray-400 font-bold text-sm bg-gray-200 pr-[250px] p-4 rounded-sm rm:pr-[200px] tm:pr-[130px] tm:py-3 xs:pr-[100px] ls:pr-16 ls:py-2" />
                                    <HiFingerPrint onClick={() => setShow(!show)} className={`absolute right-8 bottom-4 rm:right-4 tm:right-6 ls:bottom-2 ls:right-3 tm:h-5 tm:w-5 h-6 w-6 hover:text-green-500 cursor-pointer ${isFocused2 ? 'text-green-500' : 'text-gray-400'}`} />
                                </label>
                            </div>
                            <div className="flex flex-col  items-center justify-center pt-10">
                                <button
                                    type="submit"
                                    className="border-2 text-whiter bg-dark/80 border-dark/80 text-center hover:bg-dark hover:border-theme hover:text-whiter font-bold text-sm  px-[210px] rm:px-[170px] p-3 rounded-xl tm:px-[135px] tm:py-3 xs:px-[120px] ls:px-[90px] ls:py-2">
                                    Login
                                </button>
                                <a href="#" className="font-bold text-yellow-200 text-sm pt-6 hover:text-dark">Forgot Password ?</a>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default page;