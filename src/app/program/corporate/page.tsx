'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Briefcase,
  Zap,
  BookOpen,
  Users,
  Award,
  Sparkles,
  BarChart,
} from 'lucide-react';

export default function CorporatePage() {
  const whyPartnerItems = [
    { text: 'Implement NEP-aligned experiential and project-based learning' },
    {
      text: 'Integrate SDG-focused sustainability education across age groups',
    },
    { text: 'Build leadership, teamwork, communication, and life skills' },
    { text: 'Offer structured community service and volunteering pathways' },
    { text: 'Enhance student engagement through real-world, outdoor experiences' },
  ];

  const engagementModels = [
    'Half-day and full-day experiential programs',
    'Multi-day thematic modules',
    'Semester or annual engagement models',
    'Leadership and team-building immersions',
    'Community development and volunteering tracks',
  ];

  const outcomes = [
    'Environmental literacy and sustainability awareness',
    'STEM and analytical thinking',
    'Leadership and collaboration',
    'Communication and confidence',
    'Civic responsibility and empathy',
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="/Images/kids - Copy.jpg"
            alt="Prakruthi Shaale for Schools & Colleges"
            fill
            className="object-cover"
            data-ai-hint="students learning outdoors"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Prakruthi Shaale for Schools & Colleges
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              NEP-Aligned Experiential Learning | SDG-Focused Education
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

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-lg text-foreground/80">
                Prakruthi Shaale offers experiential, sustainability-focused
                learning programs aligned with India’s National Education
                Policy (NEP 2020) and the United Nations Sustainable
                Development Goals (SDGs). Our approach integrates hands-on
                learning, life skills, environmental awareness, and community
                engagement—supporting institutions in delivering holistic,
                future-ready education.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-accent mb-6 text-center">
                Why Institutions Partner with Prakruthi Shaale
              </h2>
              <p className="text-foreground/80 mb-6 text-center">
                Education today requires more than academic instruction.
                Prakruthi Shaale enables schools and colleges to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyPartnerItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30"
                  >
                    <BookOpen className="w-6 h-6 text-accent flex-shrink-0" />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-foreground/80 mt-4 text-center">
                All programs are facilitated by trained educators and outdoor
                learning specialists, ensuring safety, relevance, and
                measurable outcomes.
              </p>
            </div>

            <div className="mb-12 p-8 rounded-lg bg-accent/10">
              <h2 className="text-3xl font-bold text-accent mb-4 text-center">
                Flexible Engagement Models
              </h2>
              <p className="text-foreground/80 mb-6 text-center">
                We offer customizable engagement formats for students aged 6 to
                24, allowing institutions to choose what best aligns with their
                academic calendar and objectives:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {engagementModels.map((model, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-lg bg-background/50"
                  >
                    <Calendar className="w-8 h-8 mb-2 text-accent" />
                    <p>{model}</p>
                  </div>
                ))}
              </div>
               <p className="text-foreground/80 mt-4 font-semibold text-center">
                Programs are designed collaboratively, not as fixed packages.
              </p>
            </div>

             <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-accent mb-4">Our Learning Approach</h2>
                <p className="text-2xl font-semibold text-foreground/80 mb-4">Experience → Exploration → Reflection → Action</p>
                <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">This approach supports deeper understanding, retention, and real-world relevance. Students learn through hands-on activities, interdisciplinary exploration, collaborative problem-solving, and guided reflection.</p>
             </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-accent mb-4 text-center">
                Outcomes for Students
              </h2>
              <p className="text-foreground/80 mb-6 text-center">Institutions consistently observe improvements in:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30">
                    <Award className="w-6 h-6 text-accent flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-12 p-8 rounded-lg bg-secondary/30 text-center">
              <h2 className="text-3xl font-bold text-accent mb-4">
                Programs as Modular Add-Ons
              </h2>
               <p className="text-lg text-foreground/80">
                Prakruthi Shaale offers a diverse range of optional learning modules that institutions may select as add-ons based on age group, subject focus, and learning outcomes. These modules are informational and flexible, enabling institutions to fully control program design while ensuring alignment with NEP and SDG objectives.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-accent/10">
              <h2 className="text-3xl font-bold text-accent mb-4">
                Let’s Co-Create Meaningful Learning Experiences
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Connect with us to explore how Prakruthi Shaale can support your
                institution’s academic excellence, sustainability vision, and
                holistic student development.
              </p>
              <Button size="lg">Partner with Us</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
