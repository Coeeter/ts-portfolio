import { NavigationBar } from '@/components/navbar/navigation-bar';
import {
  AboutMe,
  Awards,
  Experience,
  ContactMe,
  Skills,
  Projects,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main className="container mx-auto w-full">
        <AboutMe />
        <Skills />
        <Projects />
        <Awards />
        <Experience />
        <ContactMe />
      </main>
    </>
  );
}
