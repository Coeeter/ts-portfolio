import ParticleCanvas from '@/components/home/ParticleCanvas';
import { useEffect, useState } from 'react';
import Button from '../Button';

const descriptions = [
  'A Mobile Developer',
  'A Full Stack Developer',
  'A Web Developer',
  'A Problem Solver',
  'A Learner',
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [currentLetters, setCurrentLetters] = useState('');
  const [mode, setMode] = useState<'write' | 'delete'>('write');

  useEffect(() => {
    const currentDescription = descriptions[index];
    const timeout = setTimeout(() => {
      if (mode == 'write') {
        if (currentLetters.length == currentDescription.length) {
          return setTimeout(() => {
            setMode('delete');
          }, 2000);
        }
        return setCurrentLetters(
          currentDescription.substring(0, currentLetters.length + 1)
        );
      }
      if (currentLetters.length > 0) {
        return setCurrentLetters(
          currentDescription.substring(0, currentLetters.length - 1)
        );
      }
      setTimeout(() => {
        setMode('write');
        setIndex((index + 1) % descriptions.length);
      }, 1000);
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentLetters, mode]);

  return (
    <section id="home" className="container mx-auto">
      <ParticleCanvas className="w-screen h-[100svh] absolute top-0 left-0 pointer-events-none -z-10" />
      <header className="flex flex-col justify-center min-h-[100svh] p-6 md:p-48 gap-10">
        <div>
          <h1 className="text-xl font-semibold md:text-3xl text-slate-300 font-mono">
            Hi, I am
          </h1>
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-700 to-red-600 w-fit bg-clip-text text-transparent md:text-6xl lg:text-7xl">
            N. Nasrullah
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl w-fit">
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
          </h3>
        </div>
        <Button href="#contact">Contact Me</Button>
      </header>
    </section>
  );
}
