'use client';
import Image from 'next/image';
import Header from '@/components/header';
import {
  Antenna,
  Cross,
  Users,
  Footprints,
  Puzzle,
  GitCommit,
  Leaf,
  HeartHandshake,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      <div className="relative flex flex-col gap-4 text-center md:text-left items-center md:items-start">
        <div
          className={cn(
            'absolute -top-1/4 -left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl',
            initiative.bg
          )}
        ></div>
        <div
          className={cn(
            'relative z-10 w-full p-8 bubble-shape',
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
            <h3 className="text-3xl font-bold text-foreground">
              {initiative.title}
            </h3>
            <p className="text-foreground/70 text-lg mt-2">
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
      <div className="h-80 relative rounded-lg overflow-hidden shadow-lg">
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
      title: 'Youth Environmental Program',
      description:
        'Engaging the next generation with hands-on nature and science programs.',
      href: '/program/youth',
      color: 'text-green-800',
      bg: 'bg-green-400',
      image: '/Images/kids - Copy.jpg',
    },
    {
      icon: Briefcase,
      title: 'Corporate Program',
      description:
        'Partner with us to create impactful environmental and team-building experiences.',
      href: '/program/corporate',
      color: 'text-blue-800',
      bg: 'bg-blue-400',
      image: '/Images/co-op.jpg',
    },
    {
      icon: HeartHandshake,
      title: 'Community Volunteer Program',
      description:
        'Join our volunteer efforts to make a tangible difference in our community.',
      href: '/program/community',
      color: 'text-yellow-800',
      bg: 'bg-yellow-400',
      image: '/Images/volunteer.jpg',
    },
  ];

  const ecoConnectActivities = [
    {
      icon: Antenna,
      title: 'HAM Radio Exploration',
    },
    {
      icon: GitCommit,
      title: 'Rope Work & Knots',
    },
    {
      icon: Cross,
      title: 'Essential First Aid',
    },
    {
      icon: Footprints,
      title: 'Panchavati Nature Walk',
    },
    {
      icon: Puzzle,
      title: 'Ice Breaker Games',
    },
    {
      icon: Users,
      title: 'Team Building',
    },
  ];

  const { ref: approachRef, inView: approachInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main className="flex-1 pt-16">
        <section
          id="programs"
          className="py-20"
          style={{ backgroundColor: '#a7ad89' }}
        >
          <div className="container mx-auto">
            <div
              ref={approachRef}
              className={cn(
                'text-center mb-12 transition-opacity duration-1000',
                approachInView ? 'opacity-100' : 'opacity-0'
              )}
            >
              <h2 className="text-4xl font-bold">Our Approach</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
                Fostering sustainability through hands-on education.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className={cn(
                  'h-96 relative rounded-lg overflow-hidden shadow-lg transition-all duration-1000 transform',
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
              <div className="flex flex-col gap-8">
                <div
                  className={cn(
                    'transition-all duration-1000 transform',
                    approachInView
                      ? 'opacity-100 translate-y-0 delay-200'
                      : 'opacity-0 translate-y-10'
                  )}
                >
                  <h3 className="text-xl font-bold mb-2 transition-transform duration-300 hover:scale-105">
                    Outdoor Activities & Workshops
                  </h3>
                  <p className="text-foreground/80">
                    Activities like nature walks, bird watching, and gardening
                    promote environmental awareness.
                  </p>
                </div>
                <div
                  className={cn(
                    'transition-all duration-1000 transform',
                    approachInView
                      ? 'opacity-100 translate-y-0 delay-400'
                      : 'opacity-0 translate-y-10'
                  )}
                >
                  <h3 className="text-xl font-bold mb-2 transition-transform duration-300 hover:scale-105">
                    Experiential Learning Programs
                  </h3>
                  <p className="text-foreground/80">
                    Hands-on activities enrich curriculum and support academic,
                    emotional, and social growth.
                  </p>
                </div>
                <div
                  className={cn(
                    'transition-all duration-1000 transform',
                    approachInView
                      ? 'opacity-100 translate-y-0 delay-600'
                      : 'opacity-0 translate-y-10'
                  )}
                >
                  <h3 className="text-xl font-bold mb-2 transition-transform duration-300 hover:scale-105">
                    Volunteering, Team-building & Leadership Programs
                  </h3>
                  <p className="text-foreground/80">
                    Collaborative challenges enhance communication and
                    leadership skills among participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="initiatives" className="py-20 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Explore Our Initiatives</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
                Discover how you can get involved and make a difference.
              </p>
            </div>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {initiatives.map((initiative) => (
                  <CarouselItem key={initiative.title}>
                    <div className="p-4">
                      <InitiativeSlide initiative={initiative} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        <section
          id="eco-connect-activities"
          className="py-20"
          style={{ backgroundColor: '#a7ad89' }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Eco Connect Activities
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
              Engaging, hands-on activities designed to build skills and foster
              teamwork.
            </p>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {ecoConnectActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <CarouselItem
                      key={index}
                      className="basis-1/2 md:basis-1/4 lg:basis-1/6"
                    >
                      <div className="flex flex-col items-center gap-3 text-center group transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 ring-2 ring-accent/20">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <h4 className="font-semibold text-foreground transition-transform duration-300 group-hover:scale-105">
                          {activity.title}
                        </h4>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
