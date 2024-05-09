import React from 'react'
import NavBar from './NavBar'
import Head from 'next/head'
import TransitionEffect from '../UI/TransitionEffect'
import Image from 'next/image'
import demo from '@/../public/brandkit/demo.jpg'
import { useRouter } from 'next/router'
import Link from 'next/link'
import DropSelect from './DropSelect'
import SortSelect from './SortSelect'
import ClosingProjects from '@/components/Project/ClosingProjects'
import MostTrending from '../Project/Most Trending'
import MostFunded from '../Project/MostFunded'



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
        <div className="ad-banner w-[80%] flex sm:flex-col sm:gap-10 items-start justify-center p-10 sm:p-5 bg-gradient-to-tr from-gray-200/90 to-gray-200 via gray-300 rounded-3xl">
          <div className="w-[60%] sm:w-full flex flex-col items-start sm:items-center justify-start">
            <h1 className="font-extrabold text-base sm:text-center">Most Trending Demo Project</h1>
            <h1 className="text-4xl lg:text-xl font-extrabold text-theme mt-1 sm:text-center">Join the waitlist</h1>
            <button className="bg-theme mt-8 px-18 lg:px-4 py-3 lg:py-2 rounded-3xl hover:bg-theme/90">
              <h1 className="font-bold text-white lg:text-xs">Check Opportunity</h1>
            </button>
            <p className="flex text-start font-thin text-xs text-dark w-3/4 lg:w-full px-2 mt-2 md:hidden">
              Some day, this section will be updating new investment opportunities. Such investments which will be displayed, will be promising.
              However, its up to an investor to think and
              make decisions.
            </p>

          </div>

          <div className="w-[40%] sm:w-full sm:order-first flex items-center justify-center">
            <Image src={demo} alt="trending banner" className="w-[90%] h-auto rounded-xl shadow-md shadow-dark" />
          </div>
        </div>
        {/**ad-Banner section ends here */}

        {/**This is the sub-header section */}
        <div className="flex items-start justify-start w-[80%] pt-15">
          <nav className="flex items-start justify-start border-b-2 border-neutral-300 pb-4 w-full gap-20">
            <CustomLink href="/invest/page" title="OVERVIEW" className='text-base sm:text-sm  font-extrabold' />
            <CustomLink href="/invest/page/#" title="NEWS" className='text-base sm:text-sm font-extrabold' />
          </nav>
        </div>
        {/**Subheader section ends here !! */}

        {/**Drop down menus here  */}
        <div className="flex items-start justify-start sm:items-center sm:justify-center pt-10 gap-10 sm:gap-5 w-[80%] sm:flex-col">
          <div className="flex items-center justify-between text-sm bg-gray-200 w-[280px] sm:w-[250px] font-extrabold px-5 py-2 rounded-xl">
            <h1>
              <DropSelect
                href="#"
                title="Categories"
                className="flex items-start justify-between bg-transparent  rounded-xl"
                dropdownItems={[
                  { title: "Agriculture", href: "#" },
                  { title: "Aerospace", href: "#" },
                  { title: "Alternative Energy", href: "#" },
                  { title: "B2B Services", href: "#" },
                  { title: "B2C Services", href: "#" },
                  { title: "Biotech & Pharma", href: "#" },
                  { title: "Computer Hardware", href: "#" },
                  { title: "Construction Materials", href: "#" },
                  { title: "Energy Development", href: "#" },
                  { title: "Financial & Fintech", href: "#" },
                  { title: "Food & Beverage", href: "#" },
                  { title: "Forestry", href: "#" },
                  { title: "IT Services", href: "#" },
                  { title: "Leisure & Hospitality", href: "#" },
                  { title: "Manufacturing", href: "#" },
                  { title: "Media", href: "#" },
                  { title: "Medical Devices", href: "#" },
                  { title: "Retail", href: "#" },
                  { title: "Software", href: "#" },
                  { title: "Transportation", href: "#" }

                  // Add more items as needed
                ]}
              />
            </h1>
          </div>

          <div className="flex items-center justify-between text-sm bg-gray-200 w-[280px] sm:w-[250px] font-extrabold px-5 py-2 rounded-xl">
            <h1>
              <SortSelect
                href="#"
                title="Sort By Status"
                className="flex items-start justify-between bg-transparent  rounded-xl"
                dropdownItems={[
                  { title: "Most Funded", href: "#" },
                  { title: "Closing Soon", href: "#" },
                  { title: "Newest", href: "#" },
                  { title: "Most Trending", href: "#" }

                  // Add more items as needed
                ]}
              />
            </h1>
          </div>

        </div>
        {/**Dropdown menus ended here */}


        {/**Projects section starts here */}


        <div className="flex flex-col items-center justify-center pt-20">
          <MostTrending />
        </div>
        <div className="flex flex-col items-start justify-start pt-20">
          <MostFunded />
        </div>
        <div className="flex flex-col items-start justify-start pt-10">
          <ClosingProjects />
        </div>

        {/**Projects section ends here */}

        <div className="flex flex-col items-center justify-center py-20">
          <button className="bg-black text-white rounded-xl py-3 px-4 font-bold ">
            Show all startups
          </button>
        </div>


      </main>

    </>
  )
}

export default Page