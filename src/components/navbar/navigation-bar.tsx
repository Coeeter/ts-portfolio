import { activeSections } from '@/types/active-section';
import { ModeToggle } from './mode-toggle';
import { NavigationLink } from './navigation-link';

type NavigationBarProps = {
  type?: 'project' | 'index';
};

export const NavigationBar = ({ type = 'index' }: NavigationBarProps) => {
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
          {type === 'index' && (
            <ul className="flex w-full flex-wrap justify-center md:flex-nowrap md:gap-2">
              {activeSections.map(section => (
                <li key={section}>
                  <NavigationLink section={section} />
                </li>
              ))}
            </ul>
          )}
          <span className="hidden md:block">
            <ModeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
};
