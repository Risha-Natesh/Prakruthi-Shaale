'use client';
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
    'Corporate offsites and team outings',
    'Leadership and management development days',
    'ESG and sustainability engagement initiatives',
    'CSR-linked employee volunteering days',
    'Wellness and employee engagement programs',
  ];

  const engagementProcess = [
    'Objective and team requirement discussion',
    'Custom experience design',
    'On-ground facilitation by trained professionals',
    'Guided reflection and learning integration',
    'Optional feedback and impact summary',
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
            src="/Images/co-op.jpg"
            alt="Prakruthi Shaale for Organizations"
            fill
            className="object-cover"
            data-ai-hint="diverse group collaborating"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Purpose-Driven Team Experiences
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
              Aligned with ESG & Sustainability Goals
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
              <p className="text-lg text-foreground/80">
                Prakruthi Shaale offers corporate team engagement and offsite
                experiences aligned with ESG priorities, sustainability goals,
                and employee wellbeing frameworks.
              </p>
              <p className="text-lg text-foreground/80 mt-4">
                Our programs combine team building, leadership development, and
                environmental awareness, enabling organizations to engage their
                teams meaningfully while reinforcing responsible business
                values. Designed as day-out and short-format engagements,
                Prakruthi Shaale helps organizations translate sustainability
                commitments into hands-on, memorable team experiences.
              </p>
            </div>

            <div className="mb-12 p-8 rounded-lg bg-secondary/30">
              <div className="max-w-3xl mx-auto text-left">
                <h3 className="text-3xl font-bold text-accent mb-4">
                  A Heritage Campus That Inspires Teams
                </h3>
                <p className="text-foreground/80 mb-6">
                  Located at the historic residence of Nobel Laureate Sir C. V.
                  Raman, Prakruthi Shaale is spread across 2.28 acres of green
                  open space in Malleswaram, Bengaluru. The campus offers a rare
                  combination of:
                </p>
                <ul className="list-decimal list-outside space-y-2 text-foreground/80 pl-5">
                  <li>Heritage and scientific legacy</li>
                  <li>Nature-rich open environments</li>
                  <li>Quiet, reflective spaces within the city</li>
                  <li>Safe and accessible location for corporate teams</li>
                </ul>
                <p className="text-foreground/80 mt-6">
                  This setting allows teams to disconnect from routine workspaces
                  and reconnect with purpose, people, and nature.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-accent mb-6 text-center">
                Corporate Engagement Models
              </h3>
              <p className="text-foreground/80 mb-6 text-center">
                Prakruthi Shaale offers customizable day-out packages designed
                around organizational objectives:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {engagementModels.map((model, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-accent/10 border border-accent/20"
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
              <p className="text-foreground/80 mt-6 font-semibold text-center">
                Each engagement is co-designed to reflect team size, learning
                goals, and corporate values.
              </p>
            </div>

            <div className="mb-12 p-8 rounded-lg bg-secondary/30">
              <div className="max-w-3xl mx-auto text-left">
                <h3 className="text-3xl font-bold text-accent mb-4">
                  Our Experiential Approach
                </h3>
                <p className="text-lg text-foreground/80 mb-4">
                  All corporate programs follow a structured engagement cycle:
                  Experience → Reflection → Collaboration → Action
                </p>
                <p className="text-foreground/80 mb-4">Teams participate in:</p>
                <ul className="list-decimal list-outside space-y-2 text-foreground/80 pl-5">
                  <li>Outdoor and nature-based challenges</li>
                  <li>Problem-solving and collaborative activities</li>
                  <li>Guided reflection and facilitated discussions</li>
                  <li>Learning sessions linked to workplace application</li>
                </ul>
                <p className="text-foreground/80 max-w-3xl mt-4">
                  This ensures experiences are not just enjoyable, but impactful
                  and transferable to the workplace.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-accent mb-6 text-center">
                Outcomes for Organizations & Teams
              </h3>
              <p className="text-foreground/80 mb-6 text-center">
                Corporates consistently report:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-accent/10"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-accent mb-4">
                Activities as Flexible Add-Ons
              </h3>
              <p className="text-lg text-foreground/80">
                Prakruthi Shaale offers a range of optional activity modules
                that organizations may choose as add-ons based on team
                preferences and objectives. These modules are presented as
                flexible components, allowing organizations to curate a day
                that aligns with their culture—without rigid packages.
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
                    <div className="p-8 rounded-lg bg-secondary/30 h-full">
                      <h3 className="text-2xl font-bold text-accent mb-4 text-center">
                        Who is this for?
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        {idealFor.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="p-8 rounded-lg bg-secondary/30 h-full">
                      <h3 className="text-2xl font-bold text-accent mb-4 text-center">
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

            <div className="text-center mt-16 p-8 rounded-lg bg-accent/10">
              <h2 className="text-3xl font-bold text-accent mb-4">
                Bring Your Teams Together—With Purpose
              </h2>
              <p className="text-lg text-foreground/80 mb-6 max-w-3xl mx-auto">
                Discover how Prakruthi Shaale can create meaningful, memorable,
                and values-driven team experiences for your organization.
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
