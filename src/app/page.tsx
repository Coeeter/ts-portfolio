import { Section } from '@/components/Section';
import { TypeWriterBio } from '@/components/type-writer';

export default function Home() {
  return (
    <main className="container relative mx-auto h-full w-full">
      <Section
        section="home"
        className="flex h-full flex-col items-center justify-center"
      >
        <h1 className="text-center text-5xl font-bold">N. Nasrullah</h1>
        <p className="mt-4 w-fit text-center text-2xl text-muted-foreground backdrop-blur-sm">
          <TypeWriterBio />
        </p>
      </Section>
      <Section className="flex items-center justify-center" section="about">
        About
      </Section>
      <Section className="flex items-center justify-center" section="projects">
        Projects
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
