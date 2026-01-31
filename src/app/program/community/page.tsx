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
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
      text: 'Civic responsibility',
    },
    {
      icon: Users,
      text: 'Teamwork and collaboration',
    },
    {
      icon: Award,
      text: 'Leadership and initiative',
    },
    {
      icon: Lightbulb,
      text: 'Environmental consciousness',
    },
    {
      icon: HeartHandshake,
      text: 'A deeper connection to their community',
    },
  ];

  const handleContactScroll = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="bg-background text-foreground">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Community Volunteering Program
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Local Action. Shared Responsibility. Meaningful Impact.
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

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-lg text-foreground/80 mb-4">
                Prakruthi Shaale’s Community Volunteering Program is rooted in
                the belief that sustainable change begins at the community
                level. Aligned with the UN Sustainable Development Goals (SDGs)
                and principles of active citizenship, our volunteering
                initiatives provide individuals and groups with opportunities
                to contribute meaningfully to society while developing empathy,
                leadership, and a sense of responsibility.
              </p>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                A Place Where Community Comes Together
              </h3>
              <p className="text-foreground/80">
                Located at the historic residence of Nobel Laureate Sir C. V.
                Raman, set across 2.28 acres of green space in Malleswaram,
                Bengaluru, Prakruthi Shaale serves as a hub where citizens,
                youth, families, institutions, and organizations come together
                to work on real-world community challenges. The campus offers a
                safe, accessible, and inspiring environment to learn, serve,
                and reflect.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                What the Community Volunteering Program Offers
              </h3>
              <p className="text-foreground/80 mb-4">
                Our volunteering programs are action-oriented and inclusive, designed for participants aged 6 to 24 and beyond, depending on the nature of the activity. Participants engage in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Community service and civic action</li>
                <li>
                  Environmental conservation and sustainability initiatives
                </li>
                <li>Awareness building and outreach activities</li>
                <li>Skill-based volunteering</li>
                <li>Collaborative problem-solving at the local level</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                Each volunteering experience is thoughtfully structured to ensure meaningful contribution and personal growth.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Who Can Participate
              </h3>
              <p className="text-foreground/80 mb-4">
                The Community Volunteering Program is open to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {whoCanParticipate.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="relative group rounded-xl overflow-hidden p-0.5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-lime-400/30 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                      <div className="relative flex flex-col items-center text-center p-4 rounded-lg bg-background/80 backdrop-blur-md h-full justify-center">
                        <Icon className="w-8 h-8 mb-2 text-accent" />
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-foreground/80 mt-4 text-center">
                Activities are customized based on group size, age, time availability, and community needs.
              </p>
            </div>

            <div className="mb-12 p-6 md:p-8 rounded-lg bg-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Our Volunteering Approach
              </h3>
              <p className="text-foreground/80 mb-4 text-center text-xl md:text-2xl font-semibold">
                Understand → Engage → Reflect → Act
              </p>
              <p className="text-foreground/80 mb-2">
                All volunteering initiatives follow this simple, impactful
                framework. Participants:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Learn about the issue and its context</li>
                <li>Engage directly with the community or environment</li>
                <li>Reflect on their role and impact</li>
                <li>Take action that contributes to sustainable outcomes</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                This ensures volunteering is purposeful, respectful, and
                educational.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Outcomes for Volunteers
              </h3>
              <p className="text-foreground/80 mb-4">
                Through participation, volunteers develop:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <div
                      key={index}
                      className="relative group rounded-xl overflow-hidden p-0.5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-lime-400/30 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                      <div className="relative flex items-center gap-3 p-4 rounded-lg bg-background/80 backdrop-blur-md h-full">
                        <Icon
                          className="w-6 h-6 text-accent flex-shrink-0"
                        />
                        <span>{outcome.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
                 <p className="text-foreground/80 mt-4">
                Volunteers also gain a sense of fulfillment by contributing to tangible, local impact.
              </p>
            </div>
            
            <div className="mb-12">
                 <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Volunteering as a Pathway to Sustainable Change
              </h3>
               <p className="text-lg text-foreground/80">
               Prakruthi Shaale’s Community Volunteering Program connects people with purpose, creating a culture of participation and shared responsibility. By working at the grassroots level, volunteers become active contributors to building resilient, inclusive, and sustainable communities.
              </p>
            </div>


            <div className="text-center p-6 md:p-8 rounded-lg bg-accent/10">
                 <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Upcoming Event
              </h2>
               <p className="text-lg text-foreground/80 mb-6">
                Join our Volunteer Day on December 21, 2025! Let's make our community stronger together.
              </p>
              <Button size="lg" onClick={handleContactScroll}>
                Register Now
              </Button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
