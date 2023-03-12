import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from './Button';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const hamburgerStyles = [
  'rotate-45 origin-top-left',
  'opacity-0',
  '-rotate-45 origin-bottom-left',
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="absolute top-0 left-0 p-6 w-full flex justify-between items-center">
      <a
        href="/"
        className="text-2xl text-slate-200"
        onClick={() => setIsOpen(false)}
      >
        N. Nasrullah
      </a>
      <div>
        <button
          className={`md:hidden flex flex-col gap-1 items-center absolute top-0 right-0 z-50 mx-6 my-8`}
          onClick={() => setIsOpen(isOpen => !isOpen)}
        >
          {hamburgerStyles.map((style, index) => (
            <div
              key={index}
              className={`h-1 rounded-xl w-[24px] bg-slate-300 transition-all duration-300 ease-in-out ${
                isOpen ? style : ''
              }`}
            />
          ))}
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 w-screen h-screen z-30 transition duration-300 ease-in-out md:hidden ${
          isOpen ? 'backdrop-blur-sm' : 'pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <ul
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 absolute top-0 right-0 p-8 pt-16 space-y-10 items-center justify-center flex flex-col transition duration-300 ease-in-out bg-slate-800 w-3/4 h-screen md:translate-x-0 md:p-0 md:space-y-0 md:relative md:bg-transparent md:w-fit md:h-fit md:space-x-4 md:flex-row`}
      >
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a
              href={href}
              onClick={() => setIsOpen(false)}
              className={`w-full block text-xl md:w-fit md:text-base ${
                currentPath == href
                  ? 'text-slate-200 font-bold'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
        <li key="resume">
          <Button href="/resume.pdf" bgColor="bg-slate-800 md:bg-slate-900">
            Resume
          </Button>
        </li>
      </ul>
    </nav>
  );
}
