import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

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
    <nav className="fixed top-0 w-full border-b border-muted">
      <div className="container mx-auto flex justify-between items-center p-3">
        <h1 className="text-2xl">N.Nasrullah</h1>
        <div className="flex items-center gap-6">
          <ul className="flex gap-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Button
                  variant={'link'}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Link href={href}>{label}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
