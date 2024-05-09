import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/brandkit/logo.png'
import Link from 'next/link'
import NavBarMobile from '@/components/UI/NavBarMobile';
import { BadgeCheckIcon, CurrencyDollarIcon, LightBulbIcon, PencilAltIcon, QuestionMarkCircleIcon, ShoppingBagIcon, UserAddIcon } from '@heroicons/react/solid';
import DropLink from '@/components/UI/DropLink'



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
      <div className={`flex md:hidden z-99  items-center bg-light rounded-b-lg  justify-between text-[15px] font-bold text-dark/70 pt-10 pb-8 ${active ? "sticky top-0 shadow-lg shadow-theme/80" : ""}`}>
        <Link href="/" className="flex items-center gap-5 ml-10">
          <Image src={logo} alt="logo" className="w-12 h-12 rounded-full shadow-lg shadow-theme bg-green-200" />
          <h1 className="text-xl font-serif md:hidden">MBEGU-<b className="text-xl font-extrabold italic">AFRICA</b></h1>
        </Link>
        <nav className="flex items-center justify-center gap-8 mr-10">
          <DropLink 
          href="/" 
          className="hover:text-theme md:hidden"
          title="Invest"
          dropdownItems={[
            {
                icon: LightBulbIcon,
                title: "Startup Investing",
                description: "Invest in early stage Startups & companies.",
                href: "/invest/page"
            },
            {
                icon: ShoppingBagIcon,
                title: "Marketplace",
                description: "Exchange shares with other investors",
                href: "/"
            }
            // Add more items as needed
        ]} 
          />
          <DropLink 
                  href="/" 
                  className="text-theme font-extrabold md:hidden"
                  title="For Founders"
                  dropdownItems={[
                      {
                          icon: CurrencyDollarIcon,
                          title: "Raise Capital",
                          description: "Raise your round to boost your business",
                          href: "#"
                      },
                      {
                          icon: QuestionMarkCircleIcon,
                          title: "Learn how to do it",
                          description: "Full support for Equity Crowdfunding",
                          href: "/"
                      }
                  ]}
           />
          <Link href="/company/page" className="hover:text-theme md:hidden">Our company</Link>
          <DropLink 
                  href="/" 
                  className="hover:text-theme og:hidden" 
                  title="Learn"
                  dropdownItems={[
                    {
                        icon: PencilAltIcon,
                        title: "Blog",
                        href: "/"
                    },
                    {
                        icon: QuestionMarkCircleIcon,
                        title: "Investor FAQS",
                        href: "/"
                    },
                    {
                        icon: BadgeCheckIcon,
                        title: "Success Stories",
                        href: "/"
                    }
                    // Add more items as needed
                ]}
          />
          <Link href="/" className="hover:text-theme og:hidden">Insights</Link>
          <Link href="/login/page" className="hover:text-theme">Login</Link>
          <Link href="/register/page" className="hover:text-theme">Sign Up</Link>
        </nav>
      </div>
      <NavBarMobile />
    </>
  )
}

export default NavBar