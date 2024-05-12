import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDownIcon } from '@heroicons/react/solid';

const DropSelect = ({ href, initialTitle = "Categories", className = "", dropdownItems = [] }) => {
    const router = useRouter();
    const hideDropdownTimeout = useRef();
    const [selectedLanguage, setSelectedLanguage] = useState(initialTitle);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        if (hideDropdownTimeout.current) {
            clearTimeout(hideDropdownTimeout.current);
        }
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        hideDropdownTimeout.current = setTimeout(() => {
            setShowDropdown(false);
        }, 300); // Adjust delay as needed
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setShowDropdown(false); // Optionally hide dropdown after selection
    };

    return (
        <div className={`flex flex-col w-full relative z-50 group ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href={href} passHref>
                <div className="flex items-center w-[280px] justify-center cursor-pointer">
                    <div className="flex w-2/3">
                    {selectedLanguage}
                    </div>
                    <div className="flex w-1/3">
                    <ChevronDownIcon className="w-6" /> 
                    </div>

                </div>
            </Link>
            {dropdownItems.length > 0 && showDropdown && (
                <div className=" mt-6 overflow-y-auto w-full absolute top-3 right-5 h-[200px] py-1 bg-gray-200/90 sm:bg-gray-200 rounded-2xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {dropdownItems.map((item, index) => (
                        <div key={index} onClick={() => handleLanguageChange(item.title)} className="flex items-center justify-start hover:text-theme px-5 w-[80%] py-3 font-bold text-dark/70 cursor-pointer">
                            <span className="">{item.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropSelect;
