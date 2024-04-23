import React from 'react'
import Image from 'next/image'
import image1 from '@/../public/brandkit/demo.webp'
import image2 from '@/../public/brandkit/demo1.webp'
import image3 from '@/../public/brandkit/demo2.webp'
import image4 from '@/../public/brandkit/demo3.webp'

const RecentProjects = () => {
    return (
        <div className="flex flex-col pt-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold text-3xl">Closing Soon</h1>
                <p className="font-semibold text-gray-500">Startups rounds closing soon</p>
            </div>

            <div className="flex flex-row lg:flex-col items-center justify-between gap-12 p-4">
                <div className="flex items-center lg:w-full justify-between pt-6">
                    <div className="">
                        <div className="relative inline-block">
                            <Image src={image4} alt="" className="w-[340px] h-[200px] lg:w-[440px] lg:h-[300px] xs:w-[300px] xs:h-[160px] rounded-t-xl rounded-r-xl shadow-theme shadow-lg" />
                            <button className="bg-light font-bold text-sm text-red-700 p-1 px-6 rounded-t-full absolute bottom-0 left-0 transform translate-X-[10%]">10 days left</button>
                        </div>
                        <div className="rounded-lg shadow-theme shadow-sm px-4 p-6 z-10">
                            <h1 className="font-bold text-[18px] text-gray-800">Touch wireless</h1>
                            <p className="text-xs font-medium text-gray-500 pb-4">Innovative Touch wireless</p>
                            <hr />

                            <div className="pt-2 text-lg text-green-800 flex justify-between items-center">
                                <h1 className="font-bold">318.2M</h1>
                                <h1 className="font-bold mr-12">1154</h1>
                                <h1 className="font-bold mr-10">10,000</h1>
                            </div>

                            <div className="pt-2 flex justify-between items-center">
                                <h1 className="semibold text-gray-400 text-sm" >Raised</h1>
                                <h1 className="semibold text-gray-400 text-sm">Investors</h1>
                                <h1 className="semibold text-gray-400 text-sm">Min. Investment</h1>
                            </div>
                            <p className="pt-4 text-[10px] font-semibold text-gray-700">Registered company by Mbegu Africa</p>
                        </div>

                    </div>
                </div>

                <div className="flex items-start justify-between pt-6">
                    <div className="">
                        <div className="relative inline-block">
                            <Image src={image2} alt="" className="w-[340px] h-[200px] lg:w-[440px] lg:h-[300px] xs:w-[300px] xs:h-[160px] rounded-t-xl rounded-r-xl shadow-theme shadow-lg" />
                            <button className="bg-light font-bold text-sm text-red-700 p-1 px-6 rounded-t-full absolute bottom-0 left-0 transform translate-X-[10%]">7 days left</button>
                        </div>
                        <div className="rounded-lg shadow-theme shadow-sm px-4 p-6 z-10">
                            <h1 className="font-bold text-[18px] text-gray-800">Flower Turbines</h1>
                            <p className="text-xs font-medium text-gray-500 pb-4">Innovative small wind turbines</p>
                            <hr />

                            <div className="pt-2 text-lg text-green-800 flex justify-between items-center">
                                <h1 className="font-bold">210M</h1>
                                <h1 className="font-bold mr-12">601</h1>
                                <h1 className="font-bold mr-10">8,000</h1>
                            </div>

                            <div className="pt-2 flex justify-between items-center">
                                <h1 className="semibold text-gray-400 text-sm" >Raised</h1>
                                <h1 className="semibold text-gray-400 text-sm">Investors</h1>
                                <h1 className="semibold text-gray-400 text-sm">Min. Investment</h1>
                            </div>
                            <p className="pt-4 text-[10px] font-semibold text-gray-700">Registered company by Mbegu Africa</p>
                        </div>

                    </div>
                </div>

                <div className="flex items-start justify-between pt-6">
                    <div className="">
                        <div className="relative inline-block">
                            <Image src={image1} alt="" className="w-[340px] h-[200px] lg:w-[440px] lg:h-[300px] xs:w-[300px] xs:h-[160px] rounded-t-xl rounded-r-xl shadow-theme shadow-lg" />
                            <button className="bg-light font-bold text-sm text-red-700 p-1 px-6 rounded-t-full absolute bottom-0 left-0 transform translate-X-[10%]">12 days left</button>
                        </div>
                        <div className="rounded-lg shadow-theme shadow-sm px-4 p-6 z-10">
                            <h1 className="font-bold text-[18px] text-gray-800">Kala Waters</h1>
                            <p className="text-xs font-medium text-gray-500 pb-4">Innovative bottled dispensers</p>
                            <hr />

                            <div className="pt-2 text-lg text-green-800 flex justify-between items-center">
                                <h1 className="font-bold">88.2M</h1>
                                <h1 className="font-bold mr-12">560</h1>
                                <h1 className="font-bold mr-10">10,000</h1>
                            </div>

                            <div className="pt-2 flex justify-between items-center">
                                <h1 className="semibold text-gray-400 text-sm" >Raised</h1>
                                <h1 className="semibold text-gray-400 text-sm">Investors</h1>
                                <h1 className="semibold text-gray-400 text-sm">Min. Investment</h1>
                            </div>
                            <p className="pt-4 text-[10px] font-semibold text-gray-700">Registered company by Mbegu Africa</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProjects;
