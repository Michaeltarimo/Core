import React from 'react'
import Link from 'next/link'

const RecentProjects = ({ item }) => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row lg:flex-col items-center justify-between w-full">
                <Link href="/project/page/" className="flex  cursor-pointer items-center lg:w-full justify-between pt-6">
                    <div className="">
                        <div className="relative inline-block transition-transform duration-300 transform hover:scale-105">
                            <img src={item.img} alt="" className="w-[300px] h-[200px] lg:w-[440px] lg:h-[300px] xs:w-[300px] xs:h-[160px] rounded-t-xl  shadow-theme shadow-lg " />
                            <button className="bg-yellow-200 w-full font-extrabold text-xs text-dark/70 uppercase p-0.5   absolute bottom-0 left-0 transform translate-X-[10%]">{item.category}</button>
                        </div>
                        <div className="rounded-lg shadow-theme shadow-sm w-[300px] lg:w-[440px] xs:w-[300px] px-4 py-4 z-10">
                            <h1 className="font-bold text-[16px] text-gray-800">{item.title}</h1>
                            <p className="text-xs font-medium text-gray-500 pb-4">{item.desc}</p>
                            <hr />

                            <div className="pt-2 text-sm text-green-800 flex justify-between items-center">
                                <h1 className="font-bold">{item.raise}</h1>
                                <h1 className="font-bold mr-12">{item.investor}</h1>
                                <h1 className="font-bold mr-10">{item.minimum}</h1>
                            </div>

                            <div className="pt-2 flex justify-between items-center">
                                <h1 className="semibold text-gray-400 text-xs" >Raised</h1>
                                <h1 className="semibold text-gray-400 text-xs">Investors</h1>
                                <h1 className="semibold text-gray-400 text-xs">Min. Investment</h1>
                            </div>
                            <p className="pt-4 text-[10px] font-semibold text-gray-700">Demo company by Mbegu Africa</p>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RecentProjects;