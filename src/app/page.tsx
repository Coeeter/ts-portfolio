import { Section } from '@/components/Section';
import { AboutMe } from '@/components/about-me';
import { ContactMe } from '@/components/contact-me';
import { NavigationBar } from '@/components/navbar/navigation-bar';
import { SkillsSection } from '@/components/skills';

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main className="container mx-auto h-full w-full">
        <AboutMe />
        <SkillsSection />
        <Section
          className="flex items-center justify-center"
          section="projects"
        >
          Projects
        </Section>
        <Section className="flex items-center justify-center" section="awards">
          Awards
        </Section>
        <Section
          className="flex items-center justify-center"
          section="experience"
        >
          Experience
        </Section>
        <ContactMe />
      </main>
    </>
  );
}
