import Head from 'next/head';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider from next-auth/react
import '@/styles/globals.css';
import Footer from '../components/UI/Footer';
import { AnimatePresence } from 'framer-motion';

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
      {/* Wrap your component tree with SessionProvider */}
      <SessionProvider session={pageProps.session}>
        <main className="font-poppins bg-light w-full min-h-screen">
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </main>
      </SessionProvider>
    </>
  );
}
