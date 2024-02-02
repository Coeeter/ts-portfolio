import { Section } from '@/components/Section';
import { featuredProjects } from './featured-projects';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AnimateIn } from '@/components/animate-in';
import { ProjectGrid } from './project-grid';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CardActions } from './card-actions';

export const Projects = async () => {
  return (
    <Section
      className="flex h-fit min-h-0 flex-col items-center pt-44 sm:pt-32 md:pt-20"
      section="projects"
    >
      <h1 className="mb-16 w-full text-center text-3xl font-bold capitalize">
        Featured Projects
      </h1>
      {featuredProjects.map((project, index) => (
        <AnimateIn
          scroll
          key={index}
          className="mb-8 flex w-full max-w-3xl flex-col items-center justify-center gap-3 rounded-md border border-border bg-background md:mb-16 md:flex-row md:gap-5 md:odd:flex-row-reverse md:odd:pl-5 md:even:pr-5"
        >
          <Image
            width={400}
            height={400}
            src={project.image}
            alt={project.title}
            className="aspect-video w-96 rounded-md bg-muted object-cover"
          />
          <div className="flex max-w-md flex-col items-start gap-2 p-3 md:p-0">
            <h2 className="text-2xl font-bold capitalize">{project.title}</h2>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex gap-1">
              {project.language.map((lang, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={lang}
                        alt={lang}
                        width={30}
                        height={30}
                        className="cursor-pointer rounded-full bg-white p-1"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">
                        {lang.split('/').pop()?.replace('.svg', '')}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <CardActions
              type="all"
              demo={project.demo}
              repo={project.url}
              className="mt-2"
            />
          </div>
        </AnimateIn>
      ))}
      <h1 className="mb-8 w-full text-center text-3xl font-bold capitalize md:mb-16">
        Other Projects
      </h1>
      <ProjectGrid type="top-8" />
      <Button className="mt-12" asChild>
        <Link href="/projects">View All Projects</Link>
      </Button>
    </Section>
  );
};
