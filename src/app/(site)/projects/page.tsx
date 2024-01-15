import { NavigationBar } from '@/components/navbar/navigation-bar';
import { ProjectGrid } from '@/components/sections/projects/project-grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <>
      <NavigationBar type="project" />
      <main className="container mx-auto pb-6 pt-24">
        <h1 className="relative mb-8 w-full text-center text-2xl font-bold capitalize md:text-3xl">
          <Button
            asChild
            className="absolute left-0 top-1/2 w-10 -translate-y-1/2 rounded-full p-1 text-sm md:w-auto md:rounded-md md:px-4 md:py-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-6 w-6" />
              <span className="hidden md:block">Go Back</span>
            </Link>
          </Button>
          All Projects
        </h1>
        <ProjectGrid type="all" />
      </main>
    </>
  );
};

export default ProjectsPage;
