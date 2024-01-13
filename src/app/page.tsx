import { Section } from '@/components/Section';
import { AboutMe } from '@/components/about-me';
import { ContactMe } from '@/components/contact-me';
import { Experience } from '@/components/experience';
import { NavigationBar } from '@/components/navbar/navigation-bar';
import { Skills } from '@/components/skills';

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main className="container mx-auto h-full w-full">
        <AboutMe />
        <Skills />
        <Section
          className="flex items-center justify-center"
          section="projects"
        >
          Projects
        </Section>
        <Section className="flex items-center justify-center" section="awards">
          Awards
        </Section>
        <Experience />
        <ContactMe />
      </main>
    </>
  );
}
