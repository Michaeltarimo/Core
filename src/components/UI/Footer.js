import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import banner from '@/../public/brandkit/banner.webp'
import Image from 'next/image';
import { GithubIcon, TwitterIcon, LinkedInIcon, WhatsappIcon, } from './Icons';
import Layout from './Layout';

const Footer = () => {

	return (
		<footer className='w-full z-10 bg-light  text-dark/70 flex flex-col items-center border-t border-theme/40
		font-light sm:text-sm  dark:text-light dark:border-light
		'>
			<Layout className='!p-6 !px-10 !text-dark/70 flex flex-row !bg-light items-center justify-between md:flex-col lg:gap-10 lg:py-4 sm:justify-center'>
				<div>
					<Image src={banner} alt="banner" className="w-[100px] h-auto rounded-lg"/>
				</div>
				<div className="flex text-dark/70 flex-col gap-4 items-start justify-center md:items-center md:justify-center md:gap-2">
					<span className="text-sm font-bold sm:text-sm font-sans">Get To Know Us</span>
					<a href="#" className="font-medium hover:font-medium  text-[12px] lg:text-[15px]">Our Team</a>
					<a href="#" className="font-medium hover:font-semibold  text-[12px] lg:text-[15px]">Careers</a>
					<a href="#" className="font-medium hover:font-semibold text-[12px] lg:text-[15px] sm:mb-4">Blog</a>
				</div>
				<div className="flex flex-col text-dark/70 items-start gap-4 lg:items-center lg:justify-center md:gap-2">
					<span className="text-sm font-bold  sm:text-sm font-sans">Let&apos;s Work Together</span>
					<a href="#" className="font-medium hover:font-semibold  text-[12px] lg:text-[15px]">Raise Capital</a>
					<a href="#" className="font-medium hover:font-semibold  text-[12px] lg:text-[15px]">Success stories</a>
					<a href="#" className="font-medium hover:font-semibold  text-[12px] lg:text-[15px] sm:mb-4">Partnerships</a>

				</div>
				<div className="flex flex-col text-dark/70 items-start gap-4 justify-start lg:items-center lg:justify-center lg:gap-2">
					<span className="text-sm font-bold font-sans">Need Help</span>
					<a href="#" className="font-medium hover:font-semibold  text-[12px]">Contact Us</a>
					<a href="#" className="font-medium hover:font-semibold  text-[12px]">Terms of Use</a>
					<a href="#" className="font-medium hover:font-semibold text-[12px]">Privacy Policy</a>
				</div>
				<nav className=" flex flex-col items-center justify-between lg:pt-4">
					<div className="flex flex-col gap-4 xs:flex-row items-center justify-center">
						<motion.a href="https://github.com/mbegu-africa" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
							<GithubIcon />
						</motion.a>
						<motion.a href="https://x.com/mbeguAfrica" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
							<TwitterIcon />
						</motion.a>
						<motion.a href="/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
							<LinkedInIcon />
						</motion.a>
					</div>
				</nav>
			</Layout>

			<div className='flex text-sm items-center pt-10 lg:py-2 font-bold text-yellow-500 lg:text-xs'>
				<p>Built by <Link target="_blank" href="https://gutoshi.vercel.app"
					className='text-dark text-sm p-1 font-bold bg-theme rounded-lg'
				>Gutoshi</Link>
				</p>
			</div>
			<span className="font-bold text-dark/70 p-6">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
		</footer>
	)
}

export default Footer;