import React from "react";
import Image from "next/image";
import logo from '@/../public/brandkit/logo.png'
import { IconButton, Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Alert, Input, Drawer, Card } from "@material-tailwind/react";
import { ChartBarIcon, LightBulbIcon, QuestionMarkCircleIcon, BadgeCheckIcon, CurrencyDollarIcon, UserAddIcon, LoginIcon, ShoppingBagIcon, UserGroupIcon, OfficeBuildingIcon, BookmarkAltIcon, BookmarkIcon, NewspaperIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FaBookReader, FaCopyright, FaNewspaper, FaQuestionCircle, FaRoad } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";


const SideBar = () => {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);





    return (
        <>
            <div className="flex">
                <IconButton variant="text" size="base" onClick={openDrawer}>
                    {isDrawerOpen ? (
                        <XIcon className="h-7 w-7 stroke-2 text-theme" />
                    ) : (
                        <MenuIcon className="h-7 w-7 stroke-2" />
                    )}
                </IconButton>

                <Drawer open={isDrawerOpen} onClose={closeDrawer} className="bg-white shadow-none">
                    <Card
                        color="white"
                        shadow={false}
                        className="h-screen w-full p-5"
                    >
                        <div className="sidebar-content" style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}> {/* Added styling for scrollable sidebar */}
                            <div className=" flex items-center p-5 rounded-lg">
                                <h1 className="text-lg font-bol text-dark/70">MBEGU <b className="italic">AFRICA</b></h1>
                            </div>
                            <List>
                                <Accordion
                                    open={open === 1}
                                    
                                >
                                    <ListItem className="p-0" selected={open === 1}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(1)}
                                            className="flex items-start justify-start gap-10 border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <ChartBarIcon className="h-5 w-5 text-yellow-500" />
                                            </ListItemPrefix>
                                            <h1 className="font-bold text-base text-dark/70">Invest</h1>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-gray-100/90 rounded-lg">
                                        <List className="p-0">
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <LightBulbIcon
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                <Link href="/invest/page" className="text-sm font-semibold hover:text-theme text-dark">Startup Investing</Link>
                                            </ListItem>
                                            
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <ShoppingBagIcon
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                    <Link href="" className="text-sm font-semibold hover:text-theme text-dark">Marketplace</Link>
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>


                                <Accordion
                                    open={open === 2}
                                    
                                >
                                    <ListItem className="p-0" selected={open === 2}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(2)}
                                            className="flex items-start justify-start gap-10 border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <UserGroupIcon className="h-5 w-5 text-yellow-500" />
                                            </ListItemPrefix>
                                            <h1 className="font-bold text-base text-dark/70">For Founders</h1>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-gray-100/90 rounded-lg">
                                        <List className="p-0">
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <CurrencyDollarIcon 
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                <Link href="/founder/capital/page" className="text-sm font-semibold hover:text-theme text-dark">Raise Capital</Link>
                                            </ListItem>
                                            
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <QuestionMarkCircleIcon
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                    <Link href="" className="text-sm font-semibold hover:text-theme text-dark">Learn How To Do it</Link>
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>


                                <Accordion
                                    open={open === 3}
                                    
                                >
                                    <ListItem className="p-0" selected={open === 3}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(3)}
                                            className="flex items-start justify-start gap-10 border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <OfficeBuildingIcon className="h-5 w-5 text-yellow-500" />
                                            </ListItemPrefix>
                                            <h1 className="font-bold text-base text-dark/70">Our Company</h1>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-gray-100/90 rounded-lg">
                                        <List className="p-0">
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <BookmarkAltIcon 
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                <Link href="/company/page" className="text-sm font-semibold hover:text-theme text-dark">About Us</Link>
                                            </ListItem>
                                            
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <FaRoad
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                    <Link href="" className="text-sm font-semibold hover:text-theme text-dark">Roadmap</Link>
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>



                                <Accordion
                                    open={open === 4}
                                    
                                >
                                    <ListItem className="p-0" selected={open === 4}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(4)}
                                            className="flex items-start justify-start gap-10 border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <BookmarkIcon className="h-5 w-5 text-yellow-500" />
                                            </ListItemPrefix>
                                            <h1 className="font-bold text-base text-dark/70">Learn</h1>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-gray-100/90 rounded-lg">
                                        <List className="p-0">
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <FaBookReader 
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                <Link href="" className="text-sm font-semibold hover:text-theme text-dark">Blog</Link>
                                            </ListItem>
                                            
                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <FaQuestionCircle
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                    <Link href="" className="text-sm font-semibold hover:text-theme text-dark">Investor FAQs</Link>
                                            </ListItem>

                                            <ListItem className="flex items-start justify-start gap-10 p-3">
                                                <ListItemPrefix>
                                                    <BadgeCheckIcon 
                                                        strokeWidth={3}
                                                        className="h-5 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                <Link href="" className="text-sm font-semibold hover:text-theme text-dark">Success Stories</Link>
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>

                                <ListItem className="">
                                    <Link href="" className=" flex items-start justify-start gap-10 p-">
                                    <ListItemPrefix>
                                        <FaNewspaper className="h-5 w-5 text-yellow-500" />
                                    </ListItemPrefix>
                                        <h1 className="font-bold text-base text-dark/70">Insights</h1>
                                    </Link>
                                </ListItem>

                                <hr className="my-2 border-yellow-500/50" />

                                <ListItem className="">
                                    <Link href="/login/page" className=" flex items-start justify-start gap-10 p-">
                                    <ListItemPrefix>
                                        <HiOutlineLogin className="h-5 w-5 text-yellow-500" />
                                    </ListItemPrefix>
                                        <h1 className="font-bold text-base text-dark/70">Log In</h1>
                                    </Link>
                                </ListItem>

                                <ListItem className="">
                                    <Link href="/register/page" className=" flex items-start justify-start gap-10 p-">
                                    <ListItemPrefix>
                                        <UserAddIcon className="h-5 w-5 text-yellow-500" />
                                    </ListItemPrefix>
                                        <h1 className="font-bold text-base text-dark/70">Sign Up</h1>
                                    </Link>
                                </ListItem>

                                 <ListItem className="">
                                    <Link href="" className=" flex items-start justify-start gap-10 p-">
                                    <ListItemPrefix>
                                        <FaCopyright className="h-5 w-5 text-yellow-500" />
                                    </ListItemPrefix>
                                        <h1 className="font-bold italic text-base text-dark/70">Mbegu &copy; 2024</h1>
                                    </Link>
                                </ListItem>   
                            </List>
                            <Alert
                                open={openAlert}
                                className="mt-auto bg-yellow-500/70 mb-40"
                                onClose={() => setOpenAlert(false)}
                            >
                                <Image src={logo} alt="logo" className="mb-4 h-10 w-10 rounded-full shadow-sm shadow-gray-500" />
                                <h1 className="font-bold text-lg text-dark/70 text-center"> Coming soon ! !</h1>
                                <Typography variant="small" className="opacity-80 text-xs text-dark text-center font-light">
                                    Yes, we know you are excited as we are. We look forward to launching
                                    our platform soon. Have you whitelisted yet? Make sure you do <a href="#"
                                        className="text-theme font-bold"
                                    >here</a> !
                                </Typography>
                                <div className="mt-4 flex items-center justify-center gap-3">
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        className="font-bold text-xs px-2 text-light bg-dark rounded-lg p-1.5"
                                        onClick={() => setOpenAlert(false)}
                                    >
                                        Dismiss
                                    </Typography>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        className="font-bold text-xs text-light bg-dark rounded-lg p-1.5"
                                    >
                                        Whitelist Now
                                    </Typography>
                                </div>
                            </Alert>
                        </div>

                    </Card>

                </Drawer>
            </div>

        </>
    )
}

export default SideBar;