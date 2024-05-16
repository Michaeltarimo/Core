import Page from '@/components/Project/Page'
import TransitionEffect from '@/components/UI/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>
      <Head>
        <title>Mbegu Africa | For Visionary Founders & Investors</title>
        <meta name='description' content='Mbegu is a modern crowdfunding platform allowing both investors and founders to thrive.
                                        Now, startups can raise enough rounds to launch their companies and succeed, and investors 
                                        can participate to become part of early ivestors in startups' />
      </Head>
      <TransitionEffect />
      <Page />
    </>
  )
}

export default page