import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Home from '@/components/home/Home';
import Projects from '@/components/projects/Projects';
import throttle from '@/utils/throttle';
import Head from 'next/head';
import { useEffect } from 'react';

export default function index() {
  if (typeof window != 'undefined') {
    useEffect(() => {
      const onScroll = () => {
        document.querySelectorAll('section').forEach(section => {
          const rect = section.getBoundingClientRect();
          const hash = window.location.hash.replace('#', '');
          if (
            hash !== section.id &&
            rect.top < window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            history.replaceState(
              null,
              '',
              section.id == 'home' ? '/' : `#${section.id}`
            );
          }
        });
      };
      window.addEventListener('scroll', throttle(onScroll, 100));
      return () =>
        window.removeEventListener('scroll', throttle(onScroll, 100));
    }, []);
  }

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
