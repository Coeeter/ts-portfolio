import NavBar from '@/components/NavBar';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Noorullah Nasrullah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js App" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
