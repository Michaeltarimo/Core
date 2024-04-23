import Head from 'next/head'
import { useRouter } from 'next/router';
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Footer from '../components/UI/Footer'
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import NavBar from '@/components/UI/NavBar';



export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
        />
      </Head>
      <main className="font-poppins bg-light dark:bg-dark w-full min-h-screen">
        <NavBar />
        <AnimatePresence mode="wait">
          <ErrorBoundary>
            <Component key={router.asPath} {...pageProps} />
          </ErrorBoundary>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
