import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Import the specific icons you need from Heroicons


const CustomLink = ({ href, title, className = "", dropdownItems = [] }) => {
    const router = useRouter();
    const hideDropdownTimeout = useRef();
    const pathname = router.pathname;

    const [active, setActive] = useState(false);
    // State to manage the visibility of the dropdown menu
    const [showDropdown, setShowDropdown] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

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

    return (
        <div className={`relative group ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href={href}>
                {title}
            </Link>
            {dropdownItems.length > 0 && showDropdown && (
                <div className="absolute left-0 mt-8 px-5 py-2 w-[300px] bg-gray-200/90 shadow-lg rounded-2xl z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {dropdownItems.map((item, index) => (
                        <Link key={index} href={item.href} className="flex items-start px-2 py-2 text-sm text-dark hover:bg-gray-300 hover:rounded-xl">
                            {/* Assuming you're using Heroicons and have an icon name for each item */}
                            <item.icon className="h-5 w-5 mr-2 text-theme" />
                            <div>
                                <div className="font-semibold">{item.title}</div>
                                <div className="text-xs text-dark font-light">{item.description}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            
        </div>
    );
};

export default CustomLink;
