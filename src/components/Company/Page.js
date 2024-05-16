import Head from 'next/head'
import React from 'react'
import TransitionEffect from '../UI/TransitionEffect'
import NavBar from './NavBar'
import AnimatedText from '../UI/AnimatedText'
import Image from 'next/image'
import city from '@/../public/brandkit/city.jpg'
import quote from '@/../public/brandkit/quote.jpg'
import { KeyIcon, LibraryIcon, SpeakerphoneIcon } from '@heroicons/react/solid'
import monkey from '@/../public/brandkit/monkey.png'
import propic from '@/../public/brandkit/propic.webp'


const Page = () => {
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

      <main className="flex flex-col items-center w-full min-h-screen text-dark/70">

        {/** This is the banner section */}
        <div className="flex md:flex-col md:gap-10 w-[90%] bg-gradient-to-bl from-black to-black-2 via-slate-700 p-20 xs:p-10 rounded-3xl">
          <div className="flex flex-col items-start justify-start w-1/2 md:w-full md:items-center md:justify-center">
            <AnimatedText text="OUR MISSION" className="!uppercase text-3xl lg:text-xl xs:text-lg text-green-400 text-start md:text-center" />
            <AnimatedText text="IDEAS FUEL AFRICA'S TRANSFORMATIVE GROWTH" className="!uppercase lg:text-2xl xs:text-xl text-start md:text-center text-4xl text-white" />
            <button className="text-white hover:bg-green-400 px-5 xs:text-sm py-2 mt-5 rounded-xl font-extrabold bg-green-600">
              Browse startups
            </button>
          </div>
          <div className="relative flex items-center justify-center w-1/2 md:w-full">
            <Image src={city} className="w-full h-auto rounded-lg" />
            <div className="absolute bg-theme/10 w-full h-full" />
          </div>
        </div>
        {/** This is the end of the banner section */}



        {/** This is the solutions section */}
        <div className="relative flex rm:flex-col items-start justify-start w-[90%] pt-20">
          <div className="flex rm:flex-col w-1/4 bg-theme/80 py-80 rounded-full" />
          <div className="absolute z-10 w-full flex rm:flex-col items-center justify-center top-[20%] rm:top-[8%]">
            <div className="items-center justify-center flex rm:flex-col w-[90%] bg-gray-200/90 py-20 lg:py-8 rm:py-0 rounded-full border-4 border-yellow-300">
              <div className="flex flex-col w-1/3 lg:w-1/4 og:w-[20%] items-start gap-5 py-10 lg:py-5 justify-start">
              </div>
              <div className="flex flex-col w-1/3 items-start gap-5 py-10 lg:py-5 justify-start">
                <nav className="">
                  <h1 className="font-extrabold normal-case text-theme xs:text-sm">Boost Entrepreneurs</h1>
                  <p className="text-sm font-thin text-dark px-6 rm:px-3 xs:px-0 xs:text-xs">Mbegu aims to empower Entrepreneurs by providing them with resources and support they need</p>
                </nav>
                <nav>
                  <h1 className="font-extrabold normal-case text-theme xs:text-sm">Bridge the Gap</h1>
                  <p className="text-sm font-thin text-dark px-6 rm:px-3 xs:px-0 xs:text-xs">Bridge the funding gap and connect startups with investors who believe in their vision</p>
                </nav>
                <nav>
                  <h1 className="font-extrabold normal-case text-theme xs:text-sm">Fostering Innovation</h1>
                  <p className="text-sm font-thin text-dark px-6 rm:px-3 xs:px-0 xs:text-xs">Built a platform where African Entrepreneurs can showcase their projects and access funding and mentorship</p>
                </nav>

              </div>

              <div className="flex flex-col w-1/3 items-start gap-5 py-10 sm:py-5 justify-start">
                <nav>
                  <h1 className="font-extrabold normal-case text-theme xs:text-sm">Driving Economic Development</h1>
                  <p className="text-sm font-thin text-dark px-6 rm:px-3 xs:px-0 xs:text-xs">Supporting startups and small businesses contribute to job creation, innovation and economic growth</p>
                </nav>
                <nav>
                  <h1 className="font-extrabold normal-case text-theme xs:text-sm">Promoting Inclusivity</h1>
                  <p className="text-sm font-thin text-dark px-6 rm:px-3 xs:px-0 xs:text-xs">We recognize that even small ideas have the potential to catalyze significant change</p>
                </nav>
                <nav>
                  <h1 className="font-extrabold normal-case text-theme xs:text-sm">Amplifying African Voices</h1>
                  <p className="text-sm font-thin text-dark px-6 rm:px-3 xs:px-0 xs:text-xs">Some Entrepreneurs in Africa have built highly tech products, its time we amplify the voice of these innovators</p>
                </nav>

              </div>
            </div>
          </div>
          <div className="absolute z-20 top-1/3 w-[40%] flex items-start justify-start">
            <h1 className="text-start font-extrabold text-8xl lg:text-7xl og:text-6xl md:text-5xl xs:text-3xl ls:text-2xl">WHY WE BUILT MBEGU</h1>
          </div>
        </div>
        {/** This is the end of the solutions section */}


        {/** This is the start of the quote section */}
        <div className="flex rm:flex-col rm:gap-10 items-center justify-center w-full pt-20 rm:pt-180 tm:pt-[800px] xs:pt-[400px] ls:pt-[600px] bs:pt-[650px]">
          <div className="relative w-1/2 rm:w-full flex items-center justify-center" >
            <Image src={quote} alt="image" className="w-[80%] rounded-full shadow-lg shadow-gray-400" />
            <div className="absolute w-[80%] h-full rounded-full bg-theme/30 border-4 border-green-500" />
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 rm:w-full">
            <AnimatedText text="We are fully in action of helping other businesses raise capital. Mbegu community is where a friend, family, collegue or visionary Investor could become an investor in your startup journey and own a share in your next big thing"
              className="text-2xl lg:text-xl tm:text-sm rm:text-center  rm:px-10 sm:font-bold sm:text-neutral-500 md:text-lg font-light normal-case text-dark/70 text-start pr-20 lg:pr-10"
            />
            <AnimatedText text="Every Idea Counts" className="text-4xl md:text-2xl tm:text-xl tm:pt-5 rm:text-center sm:italic  rm:px-10 font-medium text-theme normal-case text-start pr-20 lg:pr-10" />
          </div>
        </div>
        {/** This is the end of the quote section */}

        {/** This is the start of the Business section */}
        <div className="flex flex-col w-full items-center justify-center pt-40 sm:pt-10 my-20 md:my-10">
          <h1 className="text-5xl md:text-4xl sm:text-3xl xs:text-2xl bs:text-xl text-center font-medium">WHY BUSINESSESS NEED THE PLATFORM</h1>
        </div>
        <div className="flex lg:flex-col lg:gap-60 w-full">

          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex items-center justify-center pt-20">
              <div className="flex flex-col relative items-center justify-center">
                <div className="absolute p-14 bg-yellow-400 shadow-sm shadow-gray-400 z-10 rounded-full" />
                <div className="absolute p-5 bg-dark/90  z-40 rounded-full">
                  <KeyIcon className="w-10 text-gray-200/90" />
                </div>
              </div>
            </div>
            <div className="box w-[80%] relative flex flex-col items-center justify-center">
              <div className="absolute z-20 px-5 sm:px-2 h-[300px] lg:h-[250px] -top-2 rounded-2xl shadow-lg shadow-gray-400 bg-gradient-to-tr from-white/90 to-gray-200/90 via-gray-100/90 flex flex-col items-center justify-center">
                <h1 className="text-theme font-extrabold text-lg text-center pt-20">ACCESS TO FUNDING</h1>
                <p className="text-center text-sm sm:text-xs py-5 text-dark font-light">
                  Unlike traditional financing options denominated by solo venture capitalists or exclusive accelerator and incubator
                  programs, we offer startups and businesses acces to diverse pool of investors.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex items-center justify-center pt-20">
              <div className="flex flex-col relative items-center justify-center">
                <div className="absolute p-14 bg-yellow-400 shadow-sm shadow-gray-400 z-10 rounded-full" />
                <div className="absolute p-5 bg-dark/90  z-40 rounded-full">
                  <LibraryIcon className="w-10 text-gray-200/90" />
                </div>
              </div>
            </div>
            <div className="box w-[80%] relative flex flex-col items-center justify-center">
              <div className="absolute z-20  px-5 sm:px-2 h-[300px] lg:h-[250px] -top-2 rounded-2xl shadow-lg shadow-gray-400 bg-gradient-to-tr from-white/90 to-gray-200/90 via-gray-100/90 flex flex-col items-center justify-center">
                <h1 className="text-theme font-extrabold text-lg text-center pt-20">COLLAB FINANCE</h1>
                <p className="text-center text-sm sm:text-xs py-5 text-dark font-light">
                  The existing finance systems including solo players in the venture capital field or exclusive accelerator programs
                  cannot fund all the available startups. We offer a collaborative ecosystem to allow founders to benefit from a wide range of expertise, resources and support
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center lg:mt-10">
            <div className="flex items-center justify-center pt-20">
              <div className="flex flex-col relative items-center justify-center">
                <div className="absolute p-14 bg-yellow-400 shadow-sm shadow-gray-400 z-10 rounded-full" />
                <div className="absolute p-5 bg-dark/90  z-40 rounded-full">
                  <SpeakerphoneIcon className="w-10 text-gray-200/90" />
                </div>
              </div>
            </div>
            <div className="box w-[80%] relative flex flex-col items-center justify-center">
              <div className="absolute z-20 px-5 sm:px-2 h-[300px] lg:h-[250px] -top-2 rounded-2xl shadow-lg shadow-gray-400 bg-gradient-to-tr from-white/90 to-gray-200/90 via-gray-100/90 flex flex-col items-center justify-center">
                <h1 className="text-theme font-extrabold text-lg text-center pt-20">PITCH TO THE CROWD</h1>
                <p className="text-center text-sm sm:text-xs py-5 text-dark font-light">
                  Startups should not wait for solo ventures or programs, pitch straight to the crowd and let them make decisions on the great idea entrepreneurs have built
                </p>
              </div>
            </div>
          </div>


        </div>
        {/** This is the end of the Business section */}

        {/** This is the start of the Team section */}
        <div className="flex flex-col w-[80%] items-start justify-start mt-100 bg-gradient-to-br lg:w-full from-white via-gray-200/90 to-gray-300/90 px-10 py-20">
          <h1 className="font-extrabold text-3xl">OUR TEAM</h1>
          <div className='flex w-full flex-col pt-20 gap-30'>

            <div className="flex w-full sm:flex-col sm:items-center sm:justify-center gap-20">
              <div className="flex w-1/3 sm:w-[80%] items-start justify-start sm:items-center sm:justify-center">
                <Image src={propic} className="w-full rounded-3xl" />
              </div>
              <div className="flex flex-col items-start justify-start w-2/3 sm:w-full sm:items-center sm:justify-center">
                <h1 className="text-3xl xs:text-2xl font-medium text-theme">MICHAEL TARIMO, MD</h1>
                <h1 className="text-xl xs:text-lg xs:text-center font-extrabold">Mbegu Africa Co-founder & CEO</h1>
                <p className="pt-8">
                  Before co-founding Mbegu Africa, Dr Tarimo co-founded kagoo, worked as a medical doctor and kept on building digital products
                  in the tech industry.
                </p>
                <p className="pt-4">
                  Paragraph.
                </p>
                <p className="pt-3">
                  Paragraph.
                </p>
                <p className="pt-2">
                  Paragraph.
                </p>
              </div>
            </div>

            <div className="flex w-full sm:flex-col sm:items-center sm:justify-center gap-20">
              <div className="flex w-1/3 sm:w-[80%] items-start justify-start sm:items-center sm:justify-center">
                <Image src={propic} className="w-full rounded-3xl" />
              </div>
              <div className="flex flex-col items-start justify-start w-2/3 sm:w-full sm:items-center sm:justify-center">
                <h1 className="text-3xl xs:text-2xl font-medium text-theme">ALLY NDIMBO</h1>
                <h1 className="text-xl xs:text-lg xs:text-center font-extrabold">Mbegu Africa Co-founder & CTO</h1>
                <p className="pt-8">
                  Paragraph.
                </p>
                <p className="pt-4">
                  Paragraph.
                </p>
                <p className="pt-3">
                  Paragraph.
                </p>
                <p className="pt-2">
                  Paragraph.
                </p>
              </div>
            </div>


            <div className="flex w-full sm:flex-col sm:items-center sm:justify-center gap-20">
              <div className="flex w-1/3 sm:w-[80%] items-start justify-start sm:items-center sm:justify-center">
                <Image src={propic} className="w-full rounded-3xl" />
              </div>
              <div className="flex flex-col items-start justify-start w-2/3 sm:w-full sm:items-center sm:justify-center">
                <h1 className="text-3xl xs:text-2xl font-medium text-theme">GEORGE PROSPER</h1>
                <h1 className="text-xl xs:text-lg xs:text-center font-extrabold">Mbegu Africa Co-founder & CMO</h1>
                <p className="pt-8">
                  Paragraph.
                </p>
                <p className="pt-4">
                  Paragraph.
                </p>
                <p className="pt-3">
                  Paragraph.
                </p>
                <p className="pt-2">
                  Paragraph.
                </p>
              </div>
            </div>




          </div>

        </div>






      </main>
    </>
  )
}

export default Page