import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Home from '@/components/home/Home';
import Projects from '@/components/projects/Projects';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>N.Nasrullah</title>
      </Head>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
