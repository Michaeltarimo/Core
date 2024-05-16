import NavBar from '@/components/User/Founder/Capital/NavBar'
import TransitionEffect from '@/components/UI/TransitionEffect'
import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/UI/AnimatedText'
import Button from '@/components/UI/Button'
import Image from 'next/image'
import investor from '@/../public/brandkit/investor.jpg'
import { FaQuestion } from 'react-icons/fa'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'

const raisecapital = () => {
    return (
        <>
            <Head>
                <title>Mbegu Africa | For Visionary Founders & Investors</title>
                <meta name='description' content='Mbegu is a modern crowdfunding platform allowing both investors and founders to thrive.
                                        Now, startups can raise enough rounds to launch their companies and succeed, and investors 
                                        can participate to become part of early ivestors in startups' />
            </Head>
            <TransitionEffect />
            <NavBar />
            <main className="w-full flex flex-col">
                <div className="w-full relative bg-cover bg-center h-[450px] sg:h-[400px]" style={{ backgroundImage: `url('/brandkit/torch.jpg')` }}>
                    <div className="absolute w-full h-full bg-dark/30" />
                    <div className="absolute flex flex-col items-center text-white justify-center w-full h-full">
                        <AnimatedText text="Now, You Can Raise Capital For Your Startup in Africa" className="font-extrabold text-center text-2xl sg:text-xl sm:text-lg text-white" />
                        <AnimatedText text="Pitch with no Pressure !" className="font-extrabold text-white text-xl sg:text-lg sm:text-sm uppercase mt-1" />
                        <h2 className="font-semibold text-lg sg:text-base sm:text-[14px] sm:pt-5 text-center mt-2">Mbegu is Committed to Bridge the Gap of <b className="font-extrabold text-green-200">Bias</b>, <b className="font-extrabold text-yellow-200">Availabilty</b> and <b className="font-extrabold text-red-200">Deadlines</b>.</h2>
                        <h1 className="border-b-2  border-dotted border-white px-[250px] pt-10 sm:px-20" />
                        <p className="text-center sg:text-xs sg:mx-4 mx-[300px] sm:text-[11px] sm:font-bold mt-5 font-medium">
                            We raise capital based on the country&apos;s Laws and Regulations with regards to crowdfunding and Investment companies.
                            Please Read our <a href="" className="font-extrabold text-green-300">Company Policy</a> to understand how Mbegu Adhere to these.
                        </p>
                    </div>
                    <div className="flex absolute justify-center w-full -bottom-6 ">
                        <Button className="px-4 py-3 !sm:px-3 sm:text-xs !rounded-md !font-bold !bg-gradient-to-br from-green-500 via-theme to-green-500">
                            Apply to Raise Capital
                        </Button>
                    </div>
                </div>
                <div className="pt-30 flex flex-col items-center justify-center">
                    <AnimatedText text="What we are looking" className="font-extrabold text-3xl sg:text-2xl  text-neutral-600" />
                    <p className="mx-[300px] lg:mx-20 tm:mx-5 tm:text-sm text-center text-neutral-500 pt-6 font-semibold">
                        Investors at Mbegu are on the lookout for companies they can join hands with, offering them support and guidance
                        to reach new heights. They do this by buying shares in your company, becoming key players in your growth journey.
                        Whether you've got a one-of-a-kind idea or a thriving business, Mbegu welcomes you. We cater to companies seeking capital ranging from TZS 10 million
                        to 10 billion.
                    </p>

                    <div className="flex pt-[200px] og:pt-30 sm:pt-20 mx-20 1xl:mx-10 og:mx-5 og:flex-col og:gap-10">
                        <div className="w-1/2 og:w-full flex items-center justify-end og:justify-center relative">
                            <Image src={investor} alt="investor" className="w-[600px] og:w-[450px] xs:w-[390px] ls:w-[320px] h-auto rounded-xl" />
                            <div className="flex absolute bg-yellow-300/30 w-[600px] h-auto 1xl:hidden og:flex" />
                        </div>
                        <div className="flex items-start og:w-full justify-start w-1/2 flex-col px-20 lg:px-10 og:px-50 md:px-40 sm:px-20 xs:px-10">
                            <AnimatedText text="What our investors look for" className="!text-start font-extrabold text-2xl sm:text-xl text-neutral-600" />

                            <h1 className="text-[17px] sm:text-sm font-bold text-neutral-700 pt-5">1. Creative, Unique or New Idea</h1>
                            <p className="font-medium text-neutral-500 ml-5 pt-1 text-sm sm:text-[13px]">
                                Could be tar-pit ideas, maybe, but unique to change the industry, and if its not new, innovative enough to spin
                                on the old technology
                            </p>

                            <h1 className="text-[17px] font-bold text-neutral-700 pt-5 sm:text-sm">2. Market Traction</h1>
                            <p className="font-medium text-neutral-500 ml-5 pt-1 text-sm sm:text-[13px]">
                                This could be B2B or B2C, creating partnerships with other solid companies with good annual revenue. So,
                                Not just good ideas, but ideas + execution.
                            </p>


                            <h1 className="text-[17px] font-bold text-neutral-700 pt-5 sm:text-sm">3. A Solid Team Behind</h1>
                            <p className="font-medium text-neutral-500 ml-5 pt-1 text-sm sm:text-[13px]">
                                The team should have experience in their industry. A good team creates a successful
                                impact on the company, and investors would love to join hands with.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-25 sm:py-18">
                        <h1 className="border-t border-dark px-40 sm:px-25 sm:pt-10 pb-10" />
                        <h1 className="text-xl sm:text-sm text-center font-extrabold text-neutral-700 italic">
                            In other words, our investors look for three things:
                        </h1>
                        <h1 className="text-xl sm:text-sm text-center font-extrabold text-neutral-700 italic">
                            Good Ideas, Market Traction, and a Solid Team.
                        </h1>
                        <h1 className="border-b border-dark px-20 sm:px-14 py-5" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center pt-10 xs:pt-5 pb-20">
                    <AnimatedText text="Start-ups & Companies FAQs" className="font-extrabold text-3xl xs:text-2xl zs:text-xl text-neutral-600" />
                    <div className="flex flex-col px-20 xs:px-10 zs:px-5 py-20">
                        <div className="flex items-start justify-start space-x-10 xs:space-x-5">
                            <nav>
                                <QuestionMarkCircleIcon className="text-theme w-10 xs:w-5" />
                            </nav>
                            <div>
                                <h1 className="font-bold text-neutral-700 text-lg xs:text-base pb-5">I have an Idea, no company yet or product, should I apply?</h1>
                                <p className="text-neutral-500 xs:text-sm">
                                    Paragraph
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start space-x-10 xs:space-x-5 pt-5">
                            <nav>
                                <QuestionMarkCircleIcon className="text-theme w-10 xs:w-5" />
                            </nav>
                            <div>
                                <h1 className="font-bold text-neutral-700 text-lg xs:text-base pb-5">How Long does the approval take?</h1>
                                <p className="text-neutral-500 xs:text-sm">
                                    Paragraph
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start space-x-10 xs:space-x-5 pt-5">
                            <nav>
                                <QuestionMarkCircleIcon className="text-theme w-10 xs:w-5" />
                            </nav>
                            <div>
                                <h1 className="font-bold text-neutral-700 text-lg xs:text-base pb-5">What information will I be required to provide during the evaluation process?</h1>
                                <p className="text-neutral-500 xs:text-sm">
                                    Paragraph
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start space-x-10 xs:space-x-5 pt-5">
                            <nav>
                                <QuestionMarkCircleIcon className="text-theme w-10 xs:w-5" />
                            </nav>
                            <div>
                                <h1 className="font-bold text-neutral-700 text-lg xs:text-base pb-5">Where is the money from investors stored?</h1>
                                <p className="text-neutral-500 xs:text-sm">
                                    Paragraph
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start space-x-10 xs:space-x-5 pt-5">
                            <nav>
                                <QuestionMarkCircleIcon className="text-theme w-10 xs:w-5" />
                            </nav>
                            <div>
                                <h1 className="font-bold text-neutral-700 text-lg xs:text-base pb-5">When does the money from investors actually distribute to my business?</h1>
                                <p className="text-neutral-500 xs:text-sm">
                                    Paragraph
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start space-x-10 xs:space-x-5 pt-5">
                            <nav>
                                <QuestionMarkCircleIcon className="text-theme w-10 xs:w-5" />
                            </nav>
                            <div>
                                <h1 className="font-bold text-neutral-700 text-lg xs:text-base pb-5 xs:pb-3">How do yo determine if my idea/startup/company is eligible to be listed on Mbegu?</h1>
                                <p className="text-neutral-500 xs:text-sm">
                                    Paragraph
                                </p>
                            </div>
                        </div>
                    </div>
                    <h1 className="border-b border-neutral-300 w-[80%]" />
                </div>

                <div className="flex flex-col items-center justify-center pt-5 pb-20 zs:pb-10">
                    <h1 className="font-extrabold text-2xl sm:text-xl text-dark">Ready to Apply?</h1>
                    <h1 className="border-b border-dark px-18 pt-10" />
                    <Button className="px-6 py-5 zs:px-4 zs:py-4 zs:text-xs mt-10 !rounded-md !font-bold !bg-theme text-sm">
                        Apply to Raise Capital
                    </Button>

                </div>

            </main>
        </>
    )
}

export default raisecapital