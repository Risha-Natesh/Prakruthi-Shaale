'use client';
import React from 'react';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Briefcase,
  Users,
  Award,
  Sparkles,
  CheckCircle,
  Calendar,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export default function CorporatePage() {
  const engagementModels = [
    {
      icon: Calendar,
      title: 'Half-day or full-day team offsites',
    },
    {
      icon: Briefcase,
      title: 'Leadership and management retreats',
    },
    {
      icon: Users,
      title: 'Cross-functional team engagement programs',
    },
    {
      icon: Award,
      title: 'Sustainability-themed experiential days',
    },
    {
      icon: Sparkles,
      title: 'Employee volunteering and community engagement days',
    },
  ];

  const outcomes = [
    'Improved teamwork and trust',
    'Enhanced communication and leadership behaviors',
    'Increased employee engagement and morale',
    'Stronger connection to sustainability and ESG goals',
    'Memorable experiences that strengthen organizational culture',
  ];

  const idealFor = [
    'Corporate offsites focused on purpose and impact',
    'Leadership development aligned with SDG principles',
    'ESG and sustainability engagement initiatives',
    'CSR-linked employee volunteering days (SDG 4, 13, 15)',
    'Wellness and employee engagement programs',
  ];

  const engagementProcess = [
    'Aligning on objectives and SDG focus areas',
    'Custom experience design and co-creation',
    'On-ground facilitation by trained professionals',
    'Guided reflection and connecting action to impact',
    'Optional feedback and SDG impact reporting',
  ];

  const handleContactScroll = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="/Images/co-op.jpg"
            alt="Prakruthi Shaale for Organizations"
            fill
            className="object-cover"
            data-ai-hint="diverse group collaborating"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Corporate Partnerships for Purpose
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
              Aligning Business with the Sustainable Development Goals
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 md:py-16 px-4">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2" />
              Back to Programs
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-lg text-primary-foreground/90">
                Prakruthi Shaale offers bespoke corporate engagement experiences that align with your ESG priorities, sustainability goals, and commitment to the UN SDGs. Our programs help translate your organization's purpose into tangible, hands-on team experiences.
              </p>
              <p className="text-lg text-primary-foreground/90 mt-4">
                We combine leadership development, team building, and environmental action to create memorable offsites that reinforce responsible business values. Engage your team, foster innovation, and make a measurable impact on goals like Responsible Consumption (SDG 12), Decent Work (SDG 8), and Partnerships for the Goals (SDG 17).
              </p>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary">
              <div className="max-w-3xl mx-auto text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  A Heritage Campus That Inspires Innovation
                </h3>
                <p className="text-foreground/80 mb-6">
                  Located at the historic 2.28-acre residence of Nobel Laureate Sir C. V. Raman in Bengaluru, our campus offers a unique environment to inspire your teams:
                </p>
                <ul className="list-decimal list-outside space-y-2 text-foreground/80 pl-5">
                  <li>A legacy of scientific innovation and discovery</li>
                  <li>Nature-rich open spaces for creative thinking</li>
                  <li>Quiet, reflective areas to disconnect and refocus</li>
                  <li>A safe, accessible, and inspiring urban oasis</li>
                </ul>
                <p className="text-foreground/80 mt-6">
                  This setting empowers teams to break from routine, connect with a greater purpose, and collaborate on sustainable solutions.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Corporate Engagement Models
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-center">
                We offer customizable day-out packages designed around your organization's objectives:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {engagementModels.map((model, index) => (
                  <div
                    key={index}
                    className={cn('flex items-center gap-4 p-4 rounded-lg bg-accent/10 border border-accent/20 md:col-span-2',
                      engagementModels.length % 2 !== 0 &&
                      index === engagementModels.length - 1
                        ? 'md:col-start-2'
                        : ''
                    )}
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <model.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg text-accent/90">
                      {model.title}
                    </h4>
                  </div>
                ))}
              </div>
              <p className="text-primary-foreground/90 mt-6 font-semibold text-center">
                Each engagement is co-designed to reflect team size, learning goals, and your commitment to the SDGs.
              </p>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary">
              <div className="max-w-3xl mx-auto text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Our Experiential Approach
                </h3>
                <p className="text-lg text-foreground/80 mb-4">
                  All corporate programs follow a structured engagement cycle:
                  Experience → Reflection → Collaboration → Action
                </p>
                <p className="text-foreground/80 mb-4">Teams participate in:</p>
                <ul className="list-decimal list-outside space-y-2 text-foreground/80 pl-5">
                  <li>Outdoor and nature-based challenges that build resilience</li>
                  <li>Collaborative activities focused on sustainable problem-solving</li>
                  <li>Guided reflection to connect experiences to business challenges</li>
                  <li>Learning sessions on applying SDG principles in the workplace</li>
                </ul>
                <p className="text-foreground/80 max-w-3xl mt-4">
                  This ensures experiences are not just enjoyable, but impactful and transferable to your organization's culture and strategy.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Outcomes for Organizations & Teams
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-center">
                Corporates consistently report:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-lg bg-accent/10',
                      outcomes.length % 2 !== 0 &&
                        index === outcomes.length - 1 &&
                        'md:col-span-2 md:justify-center'
                    )}
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Activities as Flexible Add-Ons
              </h3>
              <p className="text-lg text-primary-foreground/90">
                Prakruthi Shaale offers a range of optional activity modules that organizations may choose as add-ons based on team preferences and objectives. These modules are presented as flexible components, allowing organizations to curate a day that aligns with their culture—without rigid packages.
              </p>
            </div>

            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <div className="p-6 md:p-8 rounded-lg bg-secondary h-full">
                      <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                        Who is this for?
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        {idealFor.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="p-6 md:p-8 rounded-lg bg-secondary h-full">
                      <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                        Our Engagement Process
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        {engagementProcess.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="text-center mt-16 p-6 md:p-8 rounded-lg bg-accent/10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Bring Your Teams Together—With Purpose
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
                Discover how Prakruthi Shaale can create meaningful, memorable, and values-driven team experiences that advance your sustainability agenda.
              </p>
              <Button size="lg" onClick={handleContactScroll}>
                Contact Us to Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
