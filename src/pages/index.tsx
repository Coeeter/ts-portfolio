import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';

const descriptions = [
  'An aspiring Software Developer',
  'A Mobile Developer',
  'A TP Student',
  'A Full Stack Developer',
  'A Web Developer',
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [currentLetters, setCurrentLetters] = useState('');
  const [mode, setMode] = useState<'write' | 'delete'>('write');
  const heading = useRef<HTMLHeadingElement>(null);
  const typewriter = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const description = descriptions[index];
    const timeout = setTimeout(() => {
      if (mode == 'write') {
        if (currentLetters.length == description.length) {
          const deleteTimeOut = setTimeout(() => {
            setMode('delete');
            clearTimeout(deleteTimeOut);
          }, 1000);
          return;
        }
        return setCurrentLetters(
          description.substring(0, currentLetters.length + 1)
        );
      }
      if (currentLetters.length > 0) {
        return setCurrentLetters(
          description.substring(0, currentLetters.length - 1)
        );
      }
      const writeTimeOut = setTimeout(() => {
        setMode('write');
        setIndex((index + 1) % descriptions.length);
        clearTimeout(writeTimeOut);
      }, 1000);
    }, 150);
    return () => clearTimeout(timeout);
  }, [currentLetters, mode]);

  useEffect(() => {
    if (!heading.current || !typewriter.current) return;
    if (currentLetters == '') return;
    const { height } = heading.current.getBoundingClientRect();
    typewriter.current.style.setProperty('--height', `${height}px`);
  }, [currentLetters]);

  return (
    <>
      <Head>
        <title>N.Nasrullah</title>
      </Head>
      <main className="container mx-auto">
        <header className="flex flex-col justify-center min-h-screen p-6 md:p-48 gap-10">
          <canvas className="w-screen h-screen absolute top-0 left-0 pointer-events-none" />
          <div>
            <h1 className="text-xl font-semibold md:text-3xl text-slate-300 font-mono">
              Hi, I am
            </h1>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-700 to-red-600 w-fit bg-clip-text text-transparent md:text-6xl lg:text-7xl">
              N. Nasrullah
            </h2>
            <h3
              ref={heading}
              className="text-3xl md:text-4xl lg:text-5xl font-mono w-fit"
            >
              <div ref={typewriter} className="h-[var(--height)]">
                {currentLetters}
                <span
                  className={
                    currentLetters == '' ||
                    currentLetters.length == descriptions[index].length
                      ? 'animate-blink'
                      : ''
                  }
                >
                  |
                </span>
              </div>
            </h3>
          </div>
          <Button href="/contact">Contact Me</Button>
        </header>
      </main>
    </>
  );
}
