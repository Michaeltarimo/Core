import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import chima from '@/../public/brandkit/chima.png'
import Image from 'next/image';
import { ChevronDownIcon, CogIcon, CurrencyEuroIcon, IdentificationIcon, LogoutIcon } from '@heroicons/react/solid';
import { UserCircleIcon } from '@heroicons/react/solid';
import { FaProjectDiagram } from 'react-icons/fa';

const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const trigger = useRef(null);
    const dropdown = useRef(null);


    const currentUser = {
        id:1,
        username:"Michael Tarimo",
        isFounder:true,
    }

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="relative">
            <Link
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
                href="#"
            >
                <span className="flex 1xl:hidden flex-col items-end justify-end text-right">
                    <span className="text- font-font  text-dark/70 dark:text-white pt-4">
                        Michael Tarimo
                    </span>
                    {!currentUser?.isFounder && <span className="flex text-xs text-orange-700 font-bold">Investor</span>}
                    {currentUser?.isFounder && <span className="flex text-xs text-orange-700 font-bold">Founder</span>}
                </span>
                <span className="h-10 w-10">
                    <Image src={chima} alt="User" className="rounded-full bg-gray-300" />
                </span>
                <ChevronDownIcon className="w-5 h-5" />
            </Link>
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-b-lg rounded-sm border border-gray-200/90 bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? 'block' : 'hidden'
                    }`}
            >
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                    <li>
                        <Link
                            href="/profile"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-orange-700 lg:text-base"
                        >
                            <UserCircleIcon className="w-6 h-6 text-theme" />

                            <span className="font-medium">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="flex items-center gap-3.5 text-sm font-light duration-300 ease-in-out hover:text-orange-700 lg:text-base"
                        >
                            <IdentificationIcon className="w-6 h-6 text-theme" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/pages/settings"
                            className="flex items-center gap-3.5 text-sm font-light duration-300 ease-in-out hover:text-orange-700 lg:text-base"
                        >
                            <CogIcon className="w-6 h-6 text-theme " />
                            Account Settings
                        </Link>
                    </li>
                    <li>
                        {currentUser?.isFounder && <Link
                            href="/settings"
                            className="flex items-center gap-3.5 text-sm font-light duration-300 ease-in-out hover:text-orange-700 lg:text-base"
                        >
                            <FaProjectDiagram className="h-6 w-6 text-theme" />
                            <span>My Project</span>
                        </Link>}
                        {!currentUser?.isFounder && <Link
                            href="/settings"
                            className="flex items-center gap-3.5 text-sm font-light duration-300 ease-in-out hover:text-orange-700 lg:text-base"
                        >
                            <CurrencyEuroIcon className="h-6 w-6 text-theme" />
                            <span>Wallet</span>
                        </Link>}
                    </li>
                </ul>
                <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-orange-700 lg:text-base">
                    <LogoutIcon className="w-6 h-6 text-theme" />
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default DropdownUser;
