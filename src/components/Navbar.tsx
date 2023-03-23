import { useEffect, useState } from 'react';
import Button from './Button';

const links = [
  { href: '/', label: 'Home' },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTo, setScrollTo] = useState('/');

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('section').forEach(section => {
        setIsScrolled(window.scrollY > 0);
        const rect = section.getBoundingClientRect();
        const hash = window.location.hash.replace('#', '');
        if (
          hash !== section.id &&
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          setScrollTo(section.id == 'home' ? '/' : `#${section.id}`);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    history.replaceState(null, '', scrollTo);
  }, [scrollTo]);

  return (
    <nav
      className={`fixed top-0 left-0 p-6 w-full flex justify-between items-center z-50 transition-all ease-in-out duration-300 ${
        isScrolled ? 'bg-slate-800 shadow-lg' : ''
      }`}
    >
      <a
        href="/"
        className="text-xl text-slate-200"
        onClick={() => setIsOpen(false)}
      >
        N. Nasrullah
      </a>
      <div>
        <button
          className={`md:hidden flex flex-col gap-1 items-center absolute top-0 right-0 z-[100] mx-6 my-8`}
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
        } z-[90] absolute top-0 right-0 p-8 pt-16 space-y-10 items-center justify-center flex flex-col transition duration-300 ease-in-out bg-slate-800 w-3/4 h-screen md:translate-x-0 md:p-0 md:space-y-0 md:relative md:bg-transparent md:w-fit md:h-fit md:space-x-4 md:flex-row`}
      >
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <button
              onClick={() => {
                document
                  .getElementById(href == '/' ? 'home' : href.replace('#', ''))
                  ?.scrollIntoView();
                setIsOpen(false);
              }}
              className={`w-full block text-xl md:w-fit md:text-base ${
                scrollTo == href
                  ? 'text-slate-200 font-bold'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {label}
            </button>
          </li>
        ))}
        <li key="resume">
          <Button
            href="/resume.pdf"
            bgColor="bg-slate-800 md:bg-slate-900"
            size="small"
          >
            Resume
          </Button>
        </li>
      </ul>
    </nav>
  );
}
