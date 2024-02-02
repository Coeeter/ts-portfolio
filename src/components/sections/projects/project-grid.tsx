import { featuredProjects } from './featured-projects';
import { AnimateIn } from '@/components/animate-in';
import { z } from 'zod';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CardActions } from './card-actions';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const RepoSchema = z.object({
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  homepage: z.string().nullable(),
});

const ResponseSchema = z.array(RepoSchema);

const blackList = [
  'test',
  'demo',
  'portfolio',
  'advent',
  'secret-santa',
  'Coeeter',
];

type ProjectGridProps = {
  type: 'all' | 'top-8';
};

const languageToImage = (language: string) => {
  if (
    !['dart', 'java', 'javascript', 'kotlin', 'python', 'typescript'].includes(
      language.toLowerCase()
    )
  )
    return;
  return `/icons/languages/${language.toLowerCase()}.svg`;
};

export const ProjectGrid = async ({ type }: ProjectGridProps) => {
  const otherProjects = await fetch(
    'https://api.github.com/user/repos?sort=pushed&per_page=100',
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  )
    .then(res => res.json())
    .then(ResponseSchema.parse)
    .then(items => {
      return items.filter(item => {
        if (type !== 'all')
          return (
            !featuredProjects
              .map(project => project.repoName)
              .includes(item.name) &&
            !blackList.some(word =>
              item.name.toLowerCase().includes(word.toLowerCase())
            )
          );

        return !blackList.some(word =>
          item.name.toLowerCase().includes(word.toLowerCase())
        );
      });
    })
    .then(items => (type === 'top-8' ? items.slice(0, 8) : items))
    .then(items => {
      return items.map(item => {
        console.log(item);
        const featuredProjIndex = featuredProjects.findIndex(
          project => project.repoName === item.name
        );

        return {
          name:
            featuredProjIndex !== -1
              ? featuredProjects[featuredProjIndex].title
              : item.name,
          description:
            featuredProjIndex !== -1
              ? featuredProjects[featuredProjIndex].description
              : item.description,
          url:
            featuredProjIndex !== -1
              ? featuredProjects[featuredProjIndex].url
              : item.html_url,
          homepage:
            featuredProjIndex !== -1
              ? featuredProjects[featuredProjIndex].demo
              : item.homepage,
          repoName: item.name,
          fullName: item.full_name,
        };
      });
    });

  const otherProjectsWithLanguages = await Promise.all(
    otherProjects.map(async project => {
      const languages = await fetch(
        `https://api.github.com/repos/${project.fullName}/languages`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      )
        .then(res => res.json())
        .then(res => Object.keys(res))
        .then(lang => lang.map(languageToImage).filter(Boolean) as string[]);

      return {
        ...project,
        language: languages,
      };
    })
  );

  if (type === 'all') {
    return (
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {otherProjectsWithLanguages.map((project, index) => (
          <ProjectCard
            index={index}
            project={project}
            type={type}
            key={project.name}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-4">
        {otherProjectsWithLanguages.slice(0, 4).map((project, index) => (
          <ProjectCard
            index={index}
            project={project}
            type={type}
            key={project.name}
          />
        ))}
      </div>
      <div className="mt-3 hidden w-full grid-cols-1 gap-3 md:grid md:grid-cols-4">
        {otherProjectsWithLanguages.slice(4, 8).map((project, index) => (
          <ProjectCard
            index={index}
            project={project}
            type={type}
            key={project.name}
          />
        ))}
      </div>
    </>
  );
};

type ProjectCardProps = {
  project: {
    name: string;
    description: string | null;
    url: string;
    homepage: string | null | undefined;
    language: string[];
    fullName: string;
  };
  type: 'all' | 'top-8';
  index: number;
};

const ProjectCard = ({ type, index, project }: ProjectCardProps) => {
  return (
    <AnimateIn
      asElement={Link}
      href={`/redirect?type=repo&to=${project.url}`}
      scroll={type === 'top-8'}
      key={index}
      transition={{
        delay: index * 0.05,
      }}
      className="flex h-full w-full cursor-pointer flex-col justify-between gap-2 rounded-md border border-border bg-background p-3 transition-colors hover:border-primary"
    >
      <div>
        <h2 className="truncate text-xl font-bold">{project.name}</h2>
        <p className="my-3 flex w-fit items-center rounded-full bg-muted px-4 py-2 text-sm">
          <FaGithub className="mr-2" size={20} />
          {project.fullName}
        </p>
        <p className="line-clamp-2 text-muted-foreground">
          {project.description ?? <i>No Description</i>}
        </p>
      </div>
      <div className="mb-2 flex items-center gap-1">
        {project.language.map(
          (lang, index) =>
            lang && (
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
            )
        )}
        <CardActions type="demo" demo={project.homepage} />
      </div>
    </AnimateIn>
  );
};
