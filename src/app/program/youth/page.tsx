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
  Heart,
  ShieldCheck,
  Building,
  Feather,
} from 'lucide-react';

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
        'Programs executed by experienced facilitators from Outdoor Dynamix.',
    },
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
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Where Nature, Curiosity, and Young Minds Grow
            </h1>
          </div>
        </div>

        <div className="container mx-auto py-16">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2" />
              Back to Programs
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-accent mb-4">
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

            <div className="mb-12 p-8 rounded-lg bg-secondary/30">
              <h3 className="text-2xl font-bold text-accent mb-4 text-center">
                What Families Can Expect
              </h3>
              <p className="text-foreground/80 mb-6 text-center">
                At Prakruthi Shaale, learning happens through doing, exploring,
                and experiencing. Children and youth engage in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatToExpect.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg"
                    >
                      <Icon className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-foreground/80 mt-6 text-center">
                All programs are facilitated by trained outdoor educators,
                ensuring a safe, inclusive, and inspiring environment.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-accent mb-6 text-center">
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

            <div className="text-center p-8 rounded-lg bg-accent/10">
              <h2 className="text-3xl font-bold text-accent mb-4">
                Join Us
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Explore upcoming programs, weekend workshops, and holiday
                activities. Enroll your child in experiences that inspire
                lifelong learning.
              </p>
              <Button size="lg">Explore Programs</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
