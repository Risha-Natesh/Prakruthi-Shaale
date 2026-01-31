'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  Sparkles,
  Award,
  BookOpen,
  Telescope,
  ShieldCheck,
  Building,
  Feather,
  GraduationCap,
  School,
  PersonStanding,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function YouthPage() {
  const whatToExpect = [
    {
      icon: Feather,
      text: 'Hands-on outdoor activities',
    },
    {
      icon: Telescope,
      text: 'Nature exploration and observation',
    },
    {
      icon: Sparkles,
      text: 'Creative expression and problem-solving',
    },
    {
      icon: Users,
      text: 'Teamwork, communication, and leadership building',
    },
    {
      icon: BookOpen,
      text: 'Environmental awareness and sustainable living practices',
    },
  ];

  const whyChoose = [
    {
      icon: Building,
      title: 'Heritage Learning Environment',
      description: 'Learn on a campus that inspired scientific excellence.',
    },
    {
      icon: Feather,
      title: 'Nature-First Approach',
      description: 'Screen-free, outdoor-rich experiences.',
    },
    {
      icon: Award,
      title: 'Holistic Development',
      description: 'Builds confidence, empathy, creativity, and responsibility.',
    },
    {
      icon: Sparkles,
      title: 'Flexible Enrollment',
      description: 'Choose activities that suit your child’s interests.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Guided',
      description:
        'Programs executed by experienced facilitators.',
    },
  ];
  
  const whoCanParticipate = [
    {
      icon: PersonStanding,
      title: 'Spectrum Junior',
      description: 'For students in 1st to 7th grade',
    },
    {
      icon: School,
      title: 'Spectrum Senior',
      description: 'For students in 7th to 12th grade',
    },
    {
      icon: GraduationCap,
      title: 'Youth & College Students',
      description: 'For college-level and young adult participants',
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="/Images/kids - Copy.jpg"
            alt="Youth Environmental Program"
            fill
            className="object-cover"
            data-ai-hint="kids exploring nature"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Where Nature, Curiosity, and Young Minds Grow
            </h1>
          </div>
        </div>

        <div className="container mx-auto py-12 md:py-16 px-4">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2" />
              Back to Programs
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                A Place to Explore, Learn, and Belong
              </h2>
              <p className="text-lg text-foreground/80 mb-4">
                We offer thoughtfully designed nature-based learning experiences
                for children and young adults aged 6 to 24, helping them
                explore, create, and grow—beyond screens and classrooms.
              </p>
              <p className="text-lg text-foreground/80">
                Prakruthi Shaale is more than an activity center—it is a
                community space where families come together to nurture
                curiosity, values, and a love for nature. Whether your child is
                discovering the outdoors for the first time or seeking deeper
                learning experiences, Prakruthi Shaale offers a meaningful
                journey of growth.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Who Can Participate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {whoCanParticipate.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="relative group rounded-xl overflow-hidden p-0.5"
                    >
                       <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-lime-400/30 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                      <div
                        className="relative p-6 rounded-lg bg-background/80 backdrop-blur-md flex flex-col items-center justify-center h-full"
                      >
                        <Icon className="w-10 h-10 mb-3 text-accent" />
                        <h4 className="font-bold text-lg text-primary/90">{item.title}</h4>
                        <p className="text-foreground/80">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
                What Families Can Expect
              </h3>
              <p className="text-foreground/80 mb-6 text-center">
                At Prakruthi Shaale, learning happens through doing, exploring,
                and experiencing. Children and youth engage in:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-decimal list-inside">
                <li>Hands-on outdoor activities</li>
                <li>Nature exploration and observation</li>
                <li>Creative expression and problem-solving</li>
                <li>Teamwork, communication, and leadership building</li>
                <li>Environmental awareness and sustainable living practices</li>
              </ul>
              <p className="text-foreground/80 mt-6 text-center">
                All programs are facilitated by trained outdoor educators,
                ensuring a safe, inclusive, and inspiring environment.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Why Parents Choose Prakruthi Shaale
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {whyChoose.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-accent/10 border border-accent/20"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-accent/90">
                          {item.title}
                        </h4>
                        <p className="text-foreground/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center p-6 md:p-8 rounded-lg bg-accent/10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Join Us
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Explore upcoming programs, weekend workshops, and holiday
                activities. Upcoming events will be posted here.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
