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
      <div className="container mx-auto flex items-center justify-between p-3">
        <h1 className="text-2xl">N.Nasrullah</h1>
        <div className="flex items-center gap-6">
          <ul className="flex gap-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <NavigationLink href={href} label={label} />
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
