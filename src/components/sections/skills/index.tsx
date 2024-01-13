import { Section } from '../../Section';
import { AnimateIn } from '../../animate-in';
import { skills } from './skills';
import Image from 'next/image';

export const Skills = () => {
  return (
    <Section
      section="skills"
      className="flex w-full flex-col items-center pt-44 sm:pt-32 md:pt-20"
    >
      <h1 className="mb-8 w-full text-center text-3xl font-bold capitalize">
        My Skills
      </h1>
      {skills.map((skillSection, sectionIndex) => (
        <AnimateIn
          scroll
          transition={{
            delay: sectionIndex * 0.05,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mx-auto mb-8 flex flex-col items-center"
          key={skillSection.section}
        >
          <h1 className="it mb-2 text-xl font-bold capitalize text-muted-foreground">
            {skillSection.section}
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {skillSection.frameworks.map(skill => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold transition hover:scale-110 hover:bg-foreground/5 dark:bg-muted dark:hover:bg-muted/70"
              >
                <Image
                  src={`/icons/${skillSection.path}/${skill.icon}.svg`}
                  className="rounded-full bg-background p-1 dark:bg-foreground"
                  width={32}
                  height={32}
                  alt=""
                />
                {skill.name}
              </a>
            ))}
          </div>
        </AnimateIn>
      ))}
    </Section>
  );
};
