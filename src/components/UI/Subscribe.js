import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import Button from './Button'

const Subscribe = () => {
    const text = "Get notifications straight to your inbox"


    return (
        <Layout className="flex lg:flex-col items-center justify-center text-dark/70">
            <div className="flex items-center self-center w-1/2">
                <AnimatedText
                    text={text}
                    className='!text-base !text-dark/70 text-left xl:text-4xl lg:text-center lg:text-4xl md:text-4xl sm:text-2xl' // Adjust text size here
                />
            </div>
            <div className="flex items-center flex-col w-1/2 lg:pt-6 lg:w-full">
                <div className="flex items-center self-center gap-1">
                    <input placeholder="Your email" type="email" className="outline-none py-[0.7em] px-10 lg:px-2 text-sm placeholder-theme/70 rounded-sm bg-gray-300 font-bold" />
                    <Button className="!px-2 !py-[0.7em] rounded-[4px]">
                        Subscribe
                    </Button>
                </div>
                <p className="my-4 sm:text-center text-xs lg:text-xs font-medium md:text-sm sm:text-xs">
                    By submitting you agree to receive email marketing from Mbegu, as well as to the <a href="#" className="text-yellow-600 font-bold">Terms & Conditions</a> & <a href="#" className="text-yellow-600 font-bold">Privacy Policy</a>.
                </p>
            </div>
        </Layout>
    )
}

export default Subscribe