import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Section } from '../../Section';
import { awards } from './awards';
import Image from 'next/image';
import { AnimateIn } from '@/components/animate-in';

export const Awards = () => {
  return (
    <Section
      className="flex flex-col items-center pt-44 sm:pt-32 md:pt-20"
      section="achievements"
    >
      <h1 className="mb-16 w-full text-center text-3xl font-bold capitalize">
        My Achievements
      </h1>
      <AnimateIn scroll>
        <Carousel className="max-w-md lg:max-w-lg xl:max-w-3xl">
          <CarouselContent className="m-0 w-full">
            {awards.map((award, i) => (
              <CarouselItem key={i} className="relative pl-0">
                <Image
                  src={award.image ?? '/awards/director.jpeg'}
                  alt={award.title}
                  width={1000}
                  height={1000}
                  className="w-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 pt-4 text-white">
                  <h3 className="text-center font-montserrat text-xl font-bold">
                    {award.title}{' '}
                    <span className="font-extrabold">({award.year})</span>
                  </h3>
                  <p className="text-center text-white/80">
                    {award.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </AnimateIn>
    </Section>
  );
};
