
'use client';
import Image from 'next/image';
import Header from '@/components/header';
import {
  Users,
  Footprints,
  Puzzle,
  Leaf,
  HeartHandshake,
  ArrowRight,
  Briefcase,
  Building,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '@/components/ui/button';

const InitiativeSlide = ({ initiative }: { initiative: any }) => {
  const Icon = initiative.icon;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
      <div className="relative flex flex-col gap-4 text-center md:text-left items-center md:items-start order-2 md:order-1">
        <div
          className={cn(
            'absolute -top-1/4 -left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl',
            initiative.bg
          )}
        ></div>
        <div
          className={cn(
            'relative z-10 w-full p-8 bubble-shape transform transition-transform duration-500 hover:scale-105',
            initiative.bg,
            'bg-opacity-40'
          )}
        >
          <div className="flex flex-col items-center md:items-start">
            <div
              className={cn(
                `w-16 h-16 rounded-full flex items-center justify-center mb-4`,
                initiative.bg
              )}
            >
              <Icon className={`w-8 h-8 ${initiative.color}`} />
            </div>
            <h3 className="text-3xl font-bold text-primary-foreground">
              {initiative.title}
            </h3>
            <p className="text-primary-foreground/70 text-lg mt-2">
              {initiative.description}
            </p>
            <Link href={initiative.href} passHref>
              <Button className="mt-4">
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-80 relative rounded-lg overflow-hidden shadow-lg order-1 md:order-2 transform transition-transform duration-500 hover:scale-105">
        <Image
          src={initiative.image}
          alt={initiative.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default function ProgramPage() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Youth for SDGs Program',
      description:
        'Empowering the next generation to lead on the Global Goals through immersive nature and science education (SDG 4, 13, 15).',
      href: '/program/youth',
      color: 'text-green-800',
      bg: 'bg-green-400',
      image: '/Images/kids - Copy.jpg',
    },
    {
      icon: Building,
      title: 'Partnerships for Purpose',
      description:
        'Collaborate on ESG-aligned corporate experiences that drive sustainable innovation and responsible leadership (SDG 12, 17).',
      href: '/program/corporate',
      color: 'text-teal-800',
      bg: 'bg-teal-400',
      image: '/Images/co-op.jpg',
    },
    {
      icon: HeartHandshake,
      title: 'Community Action for the Planet',
      description:
        'Join local volunteer efforts to build sustainable communities and contribute to climate action and biodiversity (SDG 11, 13, 15).',
      href: '/program/community',
      color: 'text-lime-800',
      bg: 'bg-lime-400',
      image: '/Images/volunteer.jpg',
    },
    {
      icon: Briefcase,
      title: 'Ventures for a Better World',
      description:
        'Co-create profitable and sustainable business ventures aligned with the principles of the SDGs (SDG 8, 9, 17).',
      href: '/program/partnerships',
      color: 'text-emerald-800',
      bg: 'bg-emerald-400',
      image: '/Images/partner.jpg',
    },
  ];

  const approachItems = [
    {
      title: 'Outdoor Activities & Workshops',
      description: 'Activities like nature walks and gardening connect participants to SDG 15 (Life on Land) and promote environmental awareness.',
    },
    {
      title: 'Experiential Learning Programs',
      description: 'Hands-on activities provide quality education (SDG 4) that supports academic, emotional, and social growth for all ages.',
    },
    {
      title: 'Volunteering & Leadership Programs',
      description: 'Collaborative challenges enhance communication and leadership skills, fostering partnerships for the goals (SDG 17).',
    }
  ];

  const { ref: approachRef, inView: approachInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: initiativesRef, inView: initiativesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main className="flex-1 pt-16">
        <section
          id="programs"
          ref={approachRef}
          className="py-16 md:py-20 relative overflow-hidden text-primary-foreground bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient"
        >
          <div className="absolute inset-0 z-0 opacity-50">
            <svg
              className="absolute left-0 top-0 h-full w-auto"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1"/>
                </filter>
              </defs>
              <g>
                <path
                  d="M 300,0 C 200,150 400,200 300,300 C 200,400 400,450 300,600 L 0,600 L 0,0 Z"
                  fill="#15803d"
                  filter="url(#shadow)"
                />
                 <path
                  d="M 250,0 C 150,150 350,200 250,300 C 150,400 350,450 250,600 L 0,600 L 0,0 Z"
                  fill="#16a34a"
                  filter="url(#shadow)"
                />
                <path
                  d="M 200,0 C 100,150 300,200 200,300 C 100,400 300,450 200,600 L 0,600 L 0,0 Z"
                  fill="#22c55e"
                  filter="url(#shadow)"
                />
                 <path
                  d="M 150,0 C 50,150 250,200 150,300 C 50,400 250,450 150,600 L 0,600 L 0,0 Z"
                  fill="#dcfce7"
                  filter="url(#shadow)"
                />
              </g>
            </svg>
          </div>

          <div className="container mx-auto relative z-10 px-4">
            <div
              className={cn(
                'text-center mb-12 transition-opacity duration-1000',
                approachInView ? 'opacity-100' : 'opacity-0'
              )}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mt-4">
                Our approach is rooted in experiential education that empowers individuals to understand and act on the Sustainable Development Goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div
                className={cn(
                  'h-80 md:h-96 relative rounded-lg overflow-hidden shadow-lg transition-all duration-1000 transform order-1 hover:scale-105',
                  approachInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                )}
              >
                <Image
                  src="/Images/aproach.png"
                  alt="A diagram illustrating the educational approach."
                  fill
                  className="object-cover"
                  data-ai-hint="approach diagram"
                />
              </div>
              <div className="flex flex-col gap-8 order-2">
                {approachItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      'transition-all duration-700 transform',
                      approachInView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-10'
                    )}
                    style={{ transitionDelay: `${200 * (index + 1)}ms` }}
                  >
                    <h3 className="text-xl font-bold mb-2 transition-transform duration-300 hover:scale-105">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/90">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="initiatives" ref={initiativesRef} className="py-16 md:py-20 text-primary-foreground bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient">
          <div className="container mx-auto px-4">
            <div className={cn('text-center mb-12 transition-all duration-700', initiativesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
              <h2 className="text-3xl md:text-4xl font-bold">Explore Our Initiatives</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mt-4">
                Discover how you can get involved and contribute to the Global Goals.
              </p>
            </div>
            <div className={cn('transition-all duration-700', initiativesInView ? 'opacity-100' : 'opacity-0')} style={{transitionDelay: '200ms'}}>
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {initiatives.map((initiative) => (
                    <CarouselItem key={initiative.title} className="md:basis-1/1">
                      <div className="p-4">
                        <InitiativeSlide initiative={initiative} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious className="relative top-auto left-auto" />
                  <CarouselNext className="relative top-auto right-auto" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
