'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Briefcase,
  Users,
  Zap,
  BookOpen,
  Award,
  Sparkles,
  BarChart,
  Target,
  Calendar,
} from 'lucide-react';

export default function CorporatePage() {
  const whyPartnerItems = [
    {
      icon: Zap,
      text: 'Deliver impactful experiential and project-based learning programs.',
    },
    {
      icon: BookOpen,
      text: 'Integrate SDG-focused sustainability education and action.',
    },
    {
      icon: Users,
      text: 'Build leadership, teamwork, communication, and essential life skills.',
    },
    {
      icon: Target,
      text: 'Offer structured community service and employee/student volunteering pathways.',
    },
    {
      icon: Sparkles,
      text: 'Enhance engagement through real-world, outdoor experiences.',
    },
     {
      icon: BarChart,
      text: 'Achieve measurable outcomes for participants and the organization.',
    },
  ];

  const engagementModels = [
    {
      icon: Calendar,
      title: 'Workshops & Immersions',
      description: 'Half-day and full-day experiential programs.',
    },
    {
      icon: Briefcase,
      title: 'Thematic Modules',
      description: 'Multi-day programs focused on specific goals.',
    },
    {
      icon: Users,
      title: 'Long-Term Engagement',
      description: 'Semester or annual engagement models.',
    },
     {
      icon: Award,
      title: 'Leadership & Team Building',
      description: 'Immersive experiences to foster collaboration.',
    },
    {
      icon: Sparkles,
      title: 'Community Impact Tracks',
      description: 'Tailored community development and volunteering projects.',
    },
  ];

  const outcomes = [
    'Enhanced environmental and sustainability awareness',
    'Improved analytical and problem-solving skills',
    'Stronger leadership and collaboration',
    'Better communication and increased confidence',
    'Greater sense of civic responsibility and empathy',
    'A culture of purpose and engagement',
  ];

  return (
    <div className="bg-background text-foreground">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Prakruthi Shaale for Organizations
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
              Customized Experiential Programs for Corporate Teams, Non-Profits, and Educational Institutions
            </p>
          </div>
        </div>

        <div className="container mx-auto py-16">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2" />
              Back to Programs
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
               <h2 className="text-3xl font-bold text-accent mb-4">
                Partner with Prakruthi Shaale
              </h2>
              <p className="text-lg text-foreground/80">
                Prakruthi Shaale offers experiential, sustainability-focused programs that align with corporate social responsibility (CSR) goals, employee engagement needs, and educational objectives. Our approach integrates hands-on learning, life skills, and environmental action to help organizations deliver holistic, future-ready development.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-accent mb-6 text-center">
                Why Organizations Partner with Us
              </h3>
              <p className="text-foreground/80 mb-6 text-center">
                Today’s challenges require more than conventional training. Prakruthi Shaale enables organizations to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyPartnerItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-center items-center gap-4 p-6 rounded-lg bg-accent/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-foreground/80 mt-4 text-center">
                All programs are facilitated by trained educators and specialists, ensuring safety, relevance, and measurable outcomes.
              </p>
            </div>

            <div className="mb-12 p-8 rounded-lg bg-accent/10">
              <h3 className="text-3xl font-bold text-accent mb-4 text-center">
                Flexible Engagement Models
              </h3>
              <p className="text-foreground/80 mb-6 text-center">
                We offer customizable formats, allowing organizations to choose what best aligns with their objectives:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {engagementModels.map((model, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 rounded-lg bg-background/50 shadow-md"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                      <model.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">{model.title}</h4>
                    <p className="text-sm text-foreground/70">{model.description}</p>
                  </div>
                ))}
              </div>
               <p className="text-foreground/80 mt-6 font-semibold text-center">
                Programs are designed collaboratively to meet your specific needs.
              </p>
            </div>

             <div className="mb-12 text-center p-8 rounded-lg bg-secondary/30">
                <h3 className="text-3xl font-bold text-accent mb-4">Our Learning Approach</h3>
                <p className="text-2xl font-semibold text-foreground/80 mb-4">
                  Experience → Exploration → Reflection → Action
                </p>
                <p className="text-foreground/80 max-w-3xl mx-auto">This approach supports deeper understanding, retention, and real-world relevance. Participants learn through hands-on activities, interdisciplinary exploration, collaborative problem-solving, and guided reflection.</p>
             </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-accent mb-6 text-center">
                Outcomes for Participants & Organizations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-accent/10">
                    <Award className="w-6 h-6 text-accent flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-foreground/70 italic text-sm max-w-2xl mx-auto mb-6">
                Information about upcoming events and workshops will be posted here. For bespoke programs and collaborations, please feel free to reach out to us directly.
              </p>
              <Link href="/program/partnerships">
                <Button>Explore Strategic Partnerships</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
