import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Section } from '../../Section';
import { awards } from './awards';
import Image from 'next/image';
import { AnimateIn } from '@/components/animate-in';
import { CarouselControls } from './carousel-controls';

export const Awards = () => {
  return (
    <Section
      className="flex min-h-screen flex-col items-center pt-44 sm:pt-32 md:pt-20"
      section="achievements"
    >
      <h1 className="mb-16 w-full text-center text-3xl font-bold capitalize">
        My Achievements
      </h1>
      <AnimateIn scroll>
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="m-0 h-full w-full">
            {awards.map((award, i) => (
              <CarouselItem key={i} className="relative h-full w-full pl-0">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={1000}
                  height={1000}
                  className="aspect-square w-full object-cover object-center md:aspect-video"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 pt-4 text-white">
                  <h3 className="text-center font-montserrat font-bold md:text-xl">
                    {award.title}{' '}
                    <span className="font-extrabold">({award.year})</span>
                  </h3>
                  <p className="text-center text-xs text-white/80 md:text-base">
                    {award.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselControls />
        </Carousel>
      </AnimateIn>
    </Section>
  );
};
