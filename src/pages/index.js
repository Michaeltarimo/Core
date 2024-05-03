import Layout from '@/components/UI/Layout'
import TransitionEffect from '@/components/UI/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '@/../public/brandkit/boss.jpg'
import AnimatedText from '@/components/UI/AnimatedText'
import Button from '@/components/UI/Button'
import Link from 'next/link'
import { ChartBarIcon, HandIcon, OfficeBuildingIcon } from '@heroicons/react/outline'
import Subscribe from '@/components/UI/Subscribe'
import RecentProjects from '@/components/Project/RecentProjects';
import ClosingProjects from '@/components/Project/ClosingProjects'
import NavBar from '@/components/UI/NavBar'

const index = () => {
  const text = 'Startup Venture Capital: Invest & Raise Funds';


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
      <main className="flex flex-col items-center text-dark w-full min-h-screen text-dark/70">
        <Layout className='pt-10 lg:mt-0'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full sm:pb-16 ml-20 lg:ml-0 lg:mr-0 md:mr-0 order-last'>
              <Image src={profilePic} alt='Mbegu' className='w-full h-auto rounded-full shadow-sm shadow-theme lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center md:pt-10 sm:pt-0 lg:w-full lg:text-center'>
              <AnimatedText
                text={text}
                className='!normal-case text-dark/70 text-4xl text-left xl:text-3xl lg:text-center lg:text-3xl md:text-3xl xs:text-3xl' // Adjust text size here
              />
              <p className='my-4 text-sm font-medium md:text-sm sm:text-xs'>
                Start Your Startup Journey: Invest Early, Raise Funds, and Connect with Investors
                Who Share Your Vision. Explore, Invest, and Grow - Together, We Build the Future.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="https://mbegu.africa/signup">
                  <Button className="px-6 !rounded-[4px] text-lg !py-4 font-semibold text-whiter">
                    Sign up for <b className="italic">free</b>
                  </Button>
                </Link>
              </div>
              <p className='my-4 text-[10px] lg:text-[8px] font-light text-dark md:text-[10px] sm:text-[9px]'>
                Some day, this section will be updating new investment opportunities.
                Such investments which will be displayed, will be promising.
                However, its up to an investor to think and make decisions.
                Why will you being seeing this offer? Review how Mbegu promotes offerings <a href="#" className="text-theme font-bold">here</a>.
              </p>
            </div>
          </div>
        </Layout>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl pb-5 xs:2xl">Why Mbegu <b className="italic">Africa</b>?</h1>
          <h1 className="border-b border-dark px-20 py-2"></h1>
          <p className="px-[100px] py-10 text-center lg:text-sm">
            We are committed to supporting the vibrant Tanzanian startup ecosystem, which continues to fuel economic
            growth and innovation. With an increase in startup-generated jobs by 14.65% from 2021 to 2022, reaching 89,509,
            entrepreneurs are playing a vital role in job creation and driving economic progress. Despite these achievements,
            challenges persist, with the majority of startups struggling to secure funding. In 2022, only 38.75% of startups received
            funding, highlighting the urgent need for platforms like Mbegu Africa to bridge the funding gap. Our platform aims to Connect
            startups with investors who share their vision, providing essential capital to fuel growth and innovation. As
            Tanzania Startups landscape expands, with a 15% increase in known startups from 2021 to 2022, there is immense potential
            to further economic development and impact. Mbegu Africa is committed to empowering the next generation of Tanzanian
            entrepreneurs, driving job creation, innovation, and economic prosperity for years to come.
          </p>
          <div className="flex flex-row items-center justify-center gap-[200px] sg:gap-20 sm:gap-10 tm:flex-col">
            <nav className="flex flex-col items-center gap-2">
              <h1 className="font-extrabold text-5xl lg:text-3xl sm:text-2xl tm:text-5xl">000M+</h1>
              <h1 className="font-bold text-lg lg:text-base tm:text-lg">Transactions</h1>
            </nav>
            <nav className="flex flex-col items-center gap-2">
              <h1 className="font-extrabold text-5xl lg:text-3xl sm:text-2xl tm:text-5xl">0000+</h1>
              <h1 className="font-bold text-lg lg:text-base tm:text-lg">Investment Opportunities</h1>
            </nav>
            <nav className="flex flex-col items-center gap-2">
              <h1 className="font-extrabold text-5xl lg:text-3xl sm:text-2xl tm:text-5xl">000+</h1>
              <h1 className="font-bold text-lg lg:text-base tm:text-lg">Investors</h1>
            </nav>
          </div>
        </div>
        <Link href="https://mbegu.africa/portfolio" className="pt-[120px] pb-20">
          <Button className="px-6 !rounded-[4px] text-lg !py-4 font-semibold text-whiter shadow-lg shadow-gray-400">
            Check Our <b className="italic">Portfolio</b>
          </Button>
        </Link>
        <div className="w-[85%] flex flex-col bg-gradient-to-br from-yellow-200/50 via-yellow-200 to-yellow-400 items-center justify-between p-[120px] sm:p-20 tm:p-5 border-t-4 border-theme  shadow-lg shadow-gray-300">
          <h1 className="font-bold text-3xl pb-5 xs:text-2xl">How does it work?</h1>
          <div className="pt-10 flex items-center justify-center lg:flex-col lg:gap-10">
            <div className="flex flex-col items-center justify-center gap-6 px-4 yl:px-0 lg:px-4">
              <h1 className="text-3xl rounded-full text-whiter font-extrabold px-3.5 py-3 bg-theme">01</h1>
              <h1 className="font-bold text-[18px]">Unlock opportunities.</h1>
              <p className="text-center">Sign up to gain full access and explore investment possibilities</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 px-4 yl:px-0 lg:px-4">
              <h1 className="text-3xl rounded-full text-whiter font-extrabold px-3.5 py-3 bg-theme">02</h1>
              <h1 className="font-bold text-[18px]">Invest with confidence.</h1>
              <p className="text-center">Become part of the company you invested and play a role in its future</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 px-4 yl:px-0 lg:px-4">
              <h1 className="text-3xl rounded-full text-whiter font-extrabold px-3.5 py-3 bg-theme">03</h1>
              <h1 className="font-bold text-[18px]">Empower your venture.</h1>
              <p className="text-center">Apply to raise captial for your start-up company and begin our entrepreneur journey</p>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="font-bold text-3xl pb-5 lg:text-2xl tm:text-xl text-center">Mbegu Africa will be a full service investment</h1>
          <h1 className="font-bold text-3xl pb-5 lg:text-2xl tm:text-xl text-center">bank</h1>
          <nav className="flex flex-row pb-2">
            <h1 className="border-t border-gray-400 px-20 lg:px-10 xs:px-5"></h1>
            <h1 className="font-bold text-3xl pb-5 italic lg:text-2xl tm:text-xl text-center">offering</h1>
            <h1 className="border-t border-gray-400 px-20 lg:px-10 xs:px-5"></h1>
          </nav>
          <h1 className="font-bold text-3xl pb-5 lg:text-2xl text-center tm:text-xl">a broad range of private market investments.</h1>
          <Layout className="flex flex-row gap-7 lg:flex-col">
            <div className="flex flex-col bg-gradient-to-br from-yellow-200/50 via-yellow-200 to-yellow-400 rounded-sm shadow-sm shadow-gray-400 gap-5 p-10 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
              <ChartBarIcon className="h-12 w-12 shadow-sm shadow-theme text-dark/40" />
              <h1 className="text-xl font-bold">Equity crowdfunding</h1>
              <p>Pre-vetted startup investments open for Everyone</p>
              <Link href="" className="text-theme font-semibold text-lg">
                Invest in startups
              </Link>
            </div>
            <div className="flex flex-col bg-gradient-to-br from-yellow-200/50 via-yellow-200 to-yellow-400 rounded-sm shadow-sm shadow-gray-400 gap-5 p-10 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
              <HandIcon className="h-12 w-12 shadow-sm shadow-theme text-dark/40" />
              <h1 className="text-xl font-bold">Accredited investments</h1>
              <p>Early & Late-Stage primary/secondary investment options</p>
              <Link href="" className="text-theme font-semibold text-lg">
                Sign up now
              </Link>
            </div>
            <div className="flex flex-col bg-gradient-to-br from-yellow-200/50 via-yellow-200 to-yellow-400 rounded-sm shadow-sm shadow-gray-400 gap-5 p-10 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
              <OfficeBuildingIcon className="h-12 w-12 shadow-sm shadow-theme text-dark/40" />
              <h1 className="text-xl font-bold">Raise capital</h1>
              <p>Register and request to raise capital for your startup/company</p>
              <Link href="" className="text-theme font-semibold">
                Register your startup
              </Link>
            </div>
          </Layout>
          <Link href="https://mbegu.africa/portfolio" className="pt-[120px] pb-20">
            <Button className="px-6 !rounded-[4px] text-lg !py-4 font-semibold text-whiter shadow-lg shadow-gray-400">
              Get started
            </Button>
          </Link>
          <RecentProjects />
          <ClosingProjects />
          <Subscribe />
        </div>
      </main>
    </>
  )
}

export default index