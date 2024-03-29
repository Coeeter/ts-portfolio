import Image from 'next/image';
import { Section } from '../../Section';
import { experience } from './experience';
import { format } from 'date-fns';
import { AnimateIn } from '../../animate-in';
import { cn } from '@/lib/utils';

export const Experience = () => {
  return (
    <Section
      className="flex h-fit min-h-0 flex-col items-center pt-44 sm:pt-32 md:pt-20"
      section="experience"
    >
      <h1 className="mb-16 w-full text-center text-3xl font-bold capitalize">
        My Experience
      </h1>
      {experience.map((experienceSection, i) => {
        const range = `${format(experienceSection.start, 'MMM yyyy')} - ${
          experienceSection.end
            ? format(experienceSection.end, 'MMM yyyy')
            : 'Present'
        }`;

        return (
          <AnimateIn
            key={i}
            className="flex max-w-md items-start gap-4 pb-6 last:pb-0"
            scroll={true}
            transition={{
              delay: i * 0.05,
            }}
          >
            <Image
              src={experienceSection.image}
              width={64}
              height={64}
              alt={experienceSection.company}
              className="rounded-full border border-border"
            />
            <div
              className={cn(
                "relative h-full pl-5 before:absolute before:left-0 before:w-1 before:bg-muted-foreground/20 before:content-['']",
                i === 0
                  ? 'before:-top-[24px] before:h-[calc(100%+48px)] before:rounded-t-full'
                  : 'before:top-0 before:h-[calc(100%+24px)]',
                i === experience.length - 1 && 'before:rounded-b-full'
              )}
            >
              <div className="absolute -left-2 top-[32px] h-5 w-5 -translate-y-1/2 rounded-full bg-muted-foreground" />
              <p className="text-sm text-muted-foreground">{range}</p>
              <h3 className="text-lg font-bold">
                {experienceSection.position}
              </h3>
              <h4>{experienceSection.company}</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                {experienceSection.description}
              </p>
              <div className="flex gap-2">
                {experienceSection.skills.map(skill => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm capitalize transition hover:bg-foreground/5 dark:bg-muted dark:hover:bg-muted/70"
                  >
                    <Image
                      src={skill.icon}
                      width={24}
                      height={24}
                      alt={skill.name}
                      className="rounded-full bg-background p-1 dark:bg-foreground"
                    />
                    {skill.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </Section>
  );
};
