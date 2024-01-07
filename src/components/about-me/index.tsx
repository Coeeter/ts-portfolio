import { TypeWriterBio } from './type-writer';
import { Section } from '../Section';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { montserrat } from '@/fonts';

export const AboutMe = () => {
  return (
    <Section
      section="about me"
      className={cn(
        'flex min-h-full w-full flex-col items-center justify-center gap-6 pt-[180px] md:flex-row md:gap-12 md:p-0'
      )}
    >
      <div className="flex flex-col items-center justify-end md:flex-1">
        <h1 className="text-center text-3xl font-bold text-muted-foreground md:text-5xl">
          Hi I&apos;m,{' '}
          <span
            className={cn(
              'font-extrabold text-foreground',
              montserrat.className
            )}
          >
            N. Nasrullah
          </span>
        </h1>
        <h2 className="mt-4 w-fit text-center text-2xl font-bold text-muted-foreground backdrop-blur-sm md:text-5xl">
          <TypeWriterBio />
        </h2>
        <p className="mt-6 w-full max-w-md px-3 text-center text-lg text-muted-foreground md:text-xl">
          I am a software engineer with a passion for{' '}
          <span className="line-through">breaking</span> building things. I love
          learning new technologies and always looking for new opportunities to
          grow. I am currently pursuing a diploma in Information Technology at
          Temasek Polytechnic.
        </p>
      </div>
      <div className="relative aspect-square max-h-[75vh] w-full scale-95 rounded-lg bg-white p-4 shadow-2xl transition hover:scale-100 md:flex-1 md:overflow-hidden md:p-8 dark:bg-white/20">
        <Image
          src="/me.jpeg"
          alt="N. Nasrullah"
          width={1000}
          height={1000}
          className="h-full rounded-lg object-cover object-top"
        />
      </div>
    </Section>
  );
};
