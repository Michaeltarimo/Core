import React from "react";
import Image from "next/image";
import logo from '@/../public/brandkit/logo.png'
import { IconButton, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input, Drawer, Card } from "@material-tailwind/react";
import { UserCircleIcon, CogIcon, HomeIcon, ChatAlt2Icon, BellIcon, ChartBarIcon, LightBulbIcon, EyeOffIcon, PresentationChartLineIcon, BookOpenIcon, PencilAltIcon, QuestionMarkCircleIcon, CheckCircleIcon, BadgeCheckIcon, ClipboardCopyIcon, ShieldCheckIcon, FireIcon, CurrencyDollarIcon, UserAddIcon } from "@heroicons/react/solid";
import { ChevronRightIcon, ChevronDownIcon, MenuIcon, XIcon, LogoutIcon, PencilIcon } from "@heroicons/react/outline";


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
                <IconButton variant="text" size="lg" onClick={openDrawer}>
                    {isDrawerOpen ? (
                        <XIcon className="h-8 w-8 stroke-2 text-theme" />
                    ) : (
                        <MenuIcon className="h-8 w-8 stroke-2 shadow-sm shadow-theme" />
                    )}
                </IconButton>

                <Drawer open={isDrawerOpen} onClose={closeDrawer} className="bg-gray-200">
                    <Card
                        color="transparent"
                        shadow={true}
                        className="h-[calc(100vh-2rem)] w-full p-4"
                    >
                        <div className="sidebar-content" style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}> {/* Added styling for scrollable sidebar */}
                            <div className="mb-2 flex items-center gap-4 p-4 bg-theme rounded-lg">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="h-8 w-8 rounded-full bg-whiter"
                                />
                                <Typography variant="h5" className="text-whiter text-lg">
                                    MBEGU AFRICA
                                </Typography>
                            </div>
                            <List>
                                <Accordion
                                    open={open === 1}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                                }`}
                                        />
                                    }
                                >

                                    <ListItem className="p-0" selected={open === 1}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(1)}
                                            className="border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <HomeIcon className="h-6 w-6 text-theme" />
                                            </ListItemPrefix>
                                            <Typography
                                                color="blue-gray"
                                                className="mr-auto font-medium"
                                            >
                                                Dashboard
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1 bg-theme/20 rounded-lg">
                                        <List className="p-0">
                                            <ListItem className="text-theme font-bold">
                                                <ListItemPrefix>
                                                    <ChevronRightIcon
                                                        strokeWidth={3}
                                                        className="h-3 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Home
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon
                                                        strokeWidth={3}
                                                        className="h-3 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Portfolio
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon
                                                        strokeWidth={3}
                                                        className="h-3 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Watchlist
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon
                                                        strokeWidth={3}
                                                        className="h-3 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Account activities
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <Accordion
                                    open={open === 2}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                                }`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 2}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(2)}
                                            className="border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <UserCircleIcon className="h-6 w-6 text-theme" />
                                            </ListItemPrefix>
                                            <Typography
                                                color="blue-gray"
                                                className="mr-auto font-medium"
                                            >
                                                Profile
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-theme/20 rounded-lg">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon
                                                        strokeWidth={3}
                                                        className="h-3 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Personal details
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon
                                                        strokeWidth={3}
                                                        className="h-3 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                KYC
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon
                                                        strokeWidth={3}
                                                        className="h-3 w-5 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Account settings
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <hr className="my-2 border-theme/50" />
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChatAlt2Icon className="h-6 w-6 text-theme" />
                                    </ListItemPrefix>
                                    Inbox
                                    <ListItemSuffix>
                                        <Chip
                                            value="14"
                                            size="sm"
                                            variant="ghost"
                                            color="blue-gray"
                                            className="rounded-full text-red-600 bg-yellow-400 ml-[120px]"
                                        />
                                    </ListItemSuffix>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <BellIcon className="h-5 w-5 text-theme"
                                        />
                                    </ListItemPrefix>
                                    Notifications
                                    <ListItemSuffix>
                                        <Chip
                                            value="30"
                                            size="sm"
                                            variant="ghost"
                                            color="blue-gray"
                                            className="rounded-full text-red-600 bg-yellow-400 ml-[70px]"
                                        />
                                    </ListItemSuffix>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <CogIcon className="h-5 w-5 text-theme" />
                                    </ListItemPrefix>
                                    Settings
                                </ListItem>
                                <hr className="my-2 border-theme/50" />
                                <Accordion
                                    open={open === 3}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""
                                                }`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 3}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(3)}
                                            className="border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <ChartBarIcon className="h-6 w-6 text-theme" />
                                            </ListItemPrefix>
                                            <Typography
                                                color="blue-gray"
                                                className="mr-auto font-medium"
                                            >
                                                Start Investing
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-theme/20 rounded-lg">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <LightBulbIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Startup Investing
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <EyeOffIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Mbegu Private Companies
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <PresentationChartLineIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Marketplace
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <Accordion
                                    open={open === 5}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 5 ? "rotate-180" : ""
                                                }`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 5}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(5)}
                                            className="border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <FireIcon className="h-6 w-6 text-orange-600" />
                                            </ListItemPrefix>
                                            <Typography
                                                color="blue-gray"
                                                className="mr-auto font-medium"
                                            >
                                                For Founders
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-theme/20 rounded-lg">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <CurrencyDollarIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Raise Capital
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ShieldCheckIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Mbegu Secure
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <UserAddIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Open Founder account
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <Accordion
                                    open={open === 4}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""
                                                }`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 4}>
                                        <AccordionHeader
                                            onClick={() => handleOpen(4)}
                                            className="border-b-0 p-3"
                                        >
                                            <ListItemPrefix>
                                                <PencilAltIcon className="h-6 w-6 text-theme" />
                                            </ListItemPrefix>
                                            <Typography
                                                color="blue-gray"
                                                className="mr-auto font-medium"
                                            >
                                                Learn
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>

                                    <AccordionBody className="py-1 bg-theme/20 rounded-lg">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <PencilIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Blog
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <QuestionMarkCircleIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Investor FAQS
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <BadgeCheckIcon
                                                        strokeWidth={3}
                                                        className="h-4 w-4 text-theme"
                                                    />
                                                </ListItemPrefix>
                                                Success Stories
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <ListItem className="pt-20 font-bold">
                                    <ListItemPrefix>
                                        <LogoutIcon className="h-5 w-5 text-theme" />
                                    </ListItemPrefix>
                                    Log Out
                                </ListItem>
                                <ListItem className="italic font-bold">
                                    <ListItemPrefix>
                                        <ShieldCheckIcon className="h-5 w-5 text-theme" />
                                    </ListItemPrefix>
                                    Mbegu &copy; 2024
                                </ListItem>
                            </List>
                            <Alert
                                open={openAlert}
                                className="mt-auto bg-dark/70 pt-2 pb-2"
                                onClose={() => setOpenAlert(false)}
                            >
                                <Image src={logo} alt="logo" className="mb-4 h-10 w-10" />
                                <Typography variant="h6" className="mb-1 text-whiter">
                                    COMING SOOOOOON !!!
                                </Typography>
                                <Typography variant="small" className="opacity-80 text-light font-bold">
                                    Yes, we know you are excited as we are. We look forward to launching
                                    our platform soon. Have you whitelisted yet? Make sure you do <a href="#"
                                        className="text-yellow-700 font-bold"
                                    >here</a> !
                                </Typography>
                                <div className="mt-4 flex gap-3">
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        className="font-medium opacity-80 text-light bg-dark rounded-lg p-2"
                                        onClick={() => setOpenAlert(false)}
                                    >
                                        Dismiss
                                    </Typography>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        className="font-medium text-light bg-dark rounded-lg p-2"
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