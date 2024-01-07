import { ModeToggle } from './mode-toggle';
import { NavigationLink } from './navigation-link';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export const NavigationBar = () => {
  return (
    <nav className="fixed top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 p-3 md:flex-row md:gap-0">
        <h1 className="flex w-full items-center justify-between text-2xl md:block">
          N.Nasrullah
          <span className="ml-2 md:hidden">
            <ModeToggle />
          </span>
        </h1>
        <div className="flex w-full flex-row items-center gap-6 md:w-fit">
          <ul className="flex w-full justify-between gap-2 md:justify-normal">
            {links.map(({ href, label }) => (
              <li key={href}>
                <NavigationLink href={href} label={label} />
              </li>
            ))}
          </ul>
          <span className="hidden md:block">
            <ModeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
};
