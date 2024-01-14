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
      {skills.map(({ section, frameworks, path }) => (
        <AnimateIn
          scroll
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mx-auto mb-8 flex flex-col items-center"
          key={section}
        >
          <h1 className="it mb-2 text-xl font-bold capitalize text-muted-foreground">
            {section}
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold transition hover:scale-110 hover:bg-foreground/5 dark:bg-muted dark:hover:bg-muted/70"
              >
                <Image
                  src={`/icons/${path}/${icon}.svg`}
                  className="rounded-full bg-background p-1 dark:bg-foreground"
                  width={32}
                  height={32}
                  alt=""
                />
                {name}
              </a>
            ))}
          </div>
        </AnimateIn>
      ))}
    </Section>
  );
};
