import { Section } from '@/components/Section';
import { AboutMe } from '@/components/about-me';

export default function HomePage() {
  return (
    <main className="container mx-auto h-full w-full">
      <AboutMe />
      <Section className="flex items-center justify-center" section="projects">
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
      <Section className="flex items-center justify-center" section="contact">
        Contact
      </Section>
    </main>
  );
}
