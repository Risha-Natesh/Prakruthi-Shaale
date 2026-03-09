'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  HeartHandshake,
  Lightbulb,
  CheckCircle,
  Building,
  User,
  School,
  Sparkles,
  Award,
  BookOpen,
  Calendar,
  Recycle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import React from 'react';


export default function CommunityPage() {
  const whoCanParticipate = [
    {
      icon: User,
      text: 'Individuals and families',
    },
    {
      icon: Users,
      text: 'Youth and student groups',
    },
    {
      icon: School,
      text: 'Schools and colleges',
    },
    {
      icon: Building,
      text: 'Corporate teams and CSR initiatives',
    },
    {
      icon: HeartHandshake,
      text: 'Resident welfare and community groups',
    },
  ];

  const outcomes = [
    {
      icon: Sparkles,
      text: 'Empathy and social awareness',
    },
    {
      icon: CheckCircle,
      text: 'A strong sense of civic responsibility',
    },
    {
      icon: Users,
      text: 'Teamwork and collaborative problem-solving skills',
    },
    {
      icon: Award,
      text: 'Leadership and initiative for local action',
    },
    {
      icon: Lightbulb,
      text: 'Deepened environmental consciousness',
    },
    {
      icon: HeartHandshake,
      text: 'A tangible connection to community and planet',
    },
  ];

  const { ref: whoRef, inView: whoInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: outcomesRef, inView: outcomesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: greensRef, inView: greensInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleContactScroll = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="/Images/volunteer.jpg"
            alt="Community Volunteer Program"
            fill
            className="object-cover"
            data-ai-hint="volunteers working together"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight animate-fade-in-up">
              Community Action for the Planet
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/90 animate-fade-in-up [animation-delay:300ms]">
              Local Action. Shared Responsibility. Global Impact.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 md:py-16 px-4">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Programs
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-sm md:text-lg text-primary-foreground/90 mb-4">
                Our Community Action Program empowers individuals to be catalysts for change, directly contributing to UN Sustainable Development Goals like Climate Action (SDG 13), Sustainable Cities (SDG 11), and Life on Land (SDG 15). We believe that meaningful global impact begins with local, collective action.
              </p>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                A Hub for Community-Led Change
              </h3>
              <p className="text-sm md:text-base text-foreground/80">
                Located at the historic 2.28-acre residence of Nobel Laureate Sir C. V. Raman, Prakruthi Shaale serves as a hub where citizens, youth, and organizations unite to tackle real-world challenges. It’s an inspiring environment to learn, serve, and drive progress on the SDGs.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                What the Community Action Program Offers
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/90 mb-4">
                Our action-oriented programs are designed for all ages to engage in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-primary-foreground/90">
                <li>Community service projects targeting local SDG priorities</li>
                <li>Environmental conservation and ecosystem restoration</li>
                <li>Awareness campaigns on climate action and biodiversity</li>
                <li>Skill-based volunteering for sustainable solutions</li>
                <li>Collaborative problem-solving for community resilience</li>
              </ul>
              <p className="text-sm md:text-base text-primary-foreground/90 mt-4">
                Each experience is structured to ensure your contribution is both meaningful and educational.
              </p>
            </div>

            <div className="mb-12" ref={whoRef}>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Who Can Participate
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/90 mb-4">
                The Community Action Program is open to everyone:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {whoCanParticipate.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={cn('relative group rounded-xl overflow-hidden p-0.5 transition-all duration-700 ease-out transform hover:scale-105', whoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}
                      style={{ transitionDelay: `${100 * index}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-lime-400/30 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                      <div className="relative flex flex-col items-center text-center p-4 rounded-lg bg-background/80 backdrop-blur-md h-full justify-center">
                        <Icon className="w-6 h-6 mb-2 text-accent" />
                        <p className="text-xs md:text-sm">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm md:text-base text-primary-foreground/90 mt-4 text-center">
                Activities are customized based on group size, age, and community needs to maximize impact.
              </p>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Our Volunteering Approach
              </h3>
              <p className="text-foreground/80 mb-4 text-center text-lg md:text-xl font-semibold">
                Understand → Engage → Reflect → Act
              </p>
              <p className="text-sm md:text-base text-foreground/80 mb-2">
                All initiatives follow this simple, impactful framework. Participants:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-foreground/80">
                <li>Learn about the issue and its connection to the SDGs</li>
                <li>Engage directly with the community and environment</li>
                <li>Reflect on their role in creating systemic change</li>
                <li>Take action that contributes to measurable, sustainable outcomes</li>
              </ul>
              <p className="text-sm md:text-base text-foreground/80 mt-4">
                This ensures every action is purposeful, respectful, and educational.
              </p>
            </div>

            <div className="mb-12" ref={outcomesRef}>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Outcomes for Volunteers
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/90 mb-4">
                Through participation, volunteers develop:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <div
                      key={index}
                      className={cn('relative group rounded-xl overflow-hidden p-0.5 transition-all duration-700 ease-out transform hover:scale-105', outcomesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}
                      style={{ transitionDelay: `${100 * index}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-lime-400/30 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                      <div className="relative flex items-center gap-3 p-4 rounded-lg bg-background/80 backdrop-blur-md h-full text-sm md:text-base">
                        <Icon
                          className="w-5 h-5 text-accent flex-shrink-0"
                        />
                        <span>{outcome.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
                 <p className="text-sm md:text-base text-primary-foreground/90 mt-4">
                Volunteers also gain a sense of fulfillment by contributing to tangible, local impact on global goals.
              </p>
            </div>
            
            <div className="mb-12">
                 <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Volunteering as a Pathway to Sustainable Change
              </h3>
               <p className="text-base md:text-lg text-primary-foreground/90">
               Prakruthi Shaale’s Community Action Program connects people with purpose, creating a culture of participation and shared responsibility. By working at the grassroots level, volunteers become active contributors to building resilient, inclusive, and sustainable communities for all.
              </p>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary shadow-lg" ref={greensRef}>
              <div
                className={cn('transition-all duration-700 ease-out', greensInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 text-center flex items-center justify-center gap-2">
                  <Recycle className="w-6 h-6" />
                  Featured Initiative: Greens &amp; Browns Story
                </h3>
                <p className="text-sm md:text-base text-foreground/80 mb-4">
                  <strong>Greens &amp; Browns Story</strong> is a community-led sustainability initiative by the <strong>Zero Waste Collective Malleswaram</strong> that focuses on reducing landfill waste through decentralized composting. Launched in February 2023 as a temple composting pilot, the project has grown into a scalable model now active across multiple temples and community spaces, diverting around <strong>1.10 tons of organic waste per month</strong> from landfills and converting it into useful compost. The initiative has already achieved significant impact, with thousands of days of activity, over five tons of compost harvested, and strong participation from volunteers and partner organizations.
                </p>
                <p className="text-sm md:text-base text-foreground/80 mb-4">
                  The project is built around three core goals: creating a structured platform for community volunteering, ensuring organic waste is kept out of landfills through segregation and composting, and decentralizing waste management at the neighborhood level. By composting waste directly at temples and community spaces, the initiative reduces pressure on municipal systems, converts transportation emissions, and promotes a circular economy where waste is turned into value for the local community.
                </p>
                <p className="text-sm md:text-base text-foreground/80 mb-4">
                  As the initiative expands from temples to parks and other public spaces, it aims to create a <strong>ward-level organic waste management ecosystem</strong> across the Malleswaram constituency. The project aligns with multiple <strong>UN Sustainable Development Goals</strong>, especially responsible consumption, sustainable communities, climate action, and partnerships for the goals (SDG 17). Through collaboration between civic institutions, educational organizations, and citizens, Greens &amp; Browns Story is shaping a replicable, community-driven model that has the potential to scale across cities and even nationwide.
                </p>
                <p className="text-sm md:text-base text-foreground/80 font-semibold">
                  In short, <strong>Greens &amp; Browns Story</strong> shows how local communities can turn everyday waste into a powerful tool for environmental action—blending tradition, participation, and sustainability into a practical and impactful zero-waste movement.
                </p>
              </div>
            </div>

            <div className="text-center p-6 md:p-8 rounded-lg bg-accent/10">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Upcoming Events
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/90 mb-6">
                We will update this section with any upcoming volunteer events. Stay tuned!
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
