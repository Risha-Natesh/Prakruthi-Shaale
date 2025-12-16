'use client';
import Image from 'next/image';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Leaf,
  Target,
  Users,
  Sprout,
  HeartHandshake,
  Lightbulb,
  Globe,
  LifeBuoy,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  const challengeImage = PlaceHolderImages.find(
    (img) => img.id === 'challenge'
  );

  const events = [
    {
      title: 'Volunteer Day',
      date: 'December 21, 2024',
      image: 'https://picsum.photos/seed/event1/600/400',
      aiHint: 'people planting trees',
      href: '/program/community',
      colors: {
        bg: 'bg-green-100/30',
        glow1: 'bg-green-400/30',
        glow2: 'bg-lime-400/30',
        text: 'text-green-800',
      },
    },
  ];

  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: 0.1,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main className="flex-1">
        <section id="home" className="relative h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white relative z-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span
                  className="inline-block animate-fade-in-up"
                  style={{ color: '#889063', animationDelay: '100ms' }}
                >
                  Empowering
                </span>
                <br />
                <span
                  className="inline-block animate-fade-in-up"
                  style={{ color: '#889063', animationDelay: '300ms' }}
                >
                  Through Nature
                </span>
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-in-up [animation-delay:700ms]">
                Prakruthi Shaale, a flagship initiative by Outdoor Dynamix,
                revolutionizes education by connecting minds with nature through
                innovative outdoor learning experiences. It fosters creativity,
                curiosity, and critical thinking, promoting holistic
                development.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-secondary/30">
          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="h-96 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Images/aboutus.jpg"
                alt="About us"
                fill
                className="object-cover"
                data-ai-hint="kids learning outdoors"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h2 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                About Us
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold transition-transform duration-300 hover:scale-105"
                    style={{ color: '#889063' }}
                  >
                    Innovative Outdoor Learning Center
                  </h3>
                  <p className="text-foreground/80 mt-1">
                    Dedicated to revolutionizing education by providing unique
                    outdoor learning experiences that inspire.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold transition-transform duration-300 hover:scale-105"
                    style={{ color: '#889063' }}
                  >
                    Nature Connection Benefits
                  </h3>
                  <p className="text-foreground/80 mt-1">
                    Connects everyone with nature to foster creativity,
                    curiosity, and critical thinking skills in a natural
                    environment.
                    '
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold transition-transform duration-300 hover:scale-105"
                    style={{ color: '#889063' }}
                  >
                    Promoting Holistic Development
                  </h3>
                  <p className="text-foreground/80 mt-1">
                    Focuses on nurturing responsible and compassionate
                    individuals through immersive outdoor educational programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#889063' }}>
              Our Vision &amp; Mission
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
              Connecting changemakers to make sustainability actionable and
              inclusive.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div
                ref={visionRef}
                className={cn(
                  'p-8 rounded-lg shadow-md opacity-0',
                  visionInView && 'animate-fade-in'
                )}
                style={{ backgroundColor: '#697254' }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-white/90">
                  Think Global, Act Local approach. Achieving SDG Goals.
                  Connecting individuals, organizations, and youth. Building a
                  network of changemakers. Sustainable future through online and
                  offline engagements.
                </p>
              </div>
              <div
                ref={missionRef}
                className={cn(
                  'p-8 rounded-lg shadow-md opacity-0',
                  missionInView && 'animate-fade-in [animation-delay:300ms]'
                )}
                style={{ backgroundColor: '#697254' }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/90">
                  Make sustainability accessible and actionable for all. Bridge
                  knowledge gaps in sustainability. Mobilize volunteers and
                  resources effectively. Foster collaborative action for impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="challenge" className="py-20 relative text-white">
          {challengeImage && (
            <Image
              src={challengeImage.imageUrl}
              alt={challengeImage.description}
              fill
              className="object-cover"
              data-ai-hint={challengeImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold" style={{ color: '#889063' }}>
                The Challenge &amp; The Opportunity
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Addressing urgent environmental threats by uniting stakeholders
                and empowering youth to foster sustainable development and
                social innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{ color: '#889063' }}
                  >
                    The Challenge
                  </h3>
                  <ul className="space-y-2 text-white/80 list-disc list-inside text-left">
                    <li>Limited community engagement</li>
                    <li>Urgent environmental threats</li>
                    <li>Disconnected sustainability efforts</li>
                    <li>Inefficient resource allocation</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{ color: '#889063' }}
                  >
                    The Opportunity
                  </h3>
                  <ul className="space-y-2 text-white/80 list-disc text-left pl-5">
                    <li>Empower community-led innovation</li>
                    <li>Create a collaborative ecosystem</li>
                    <li>Leverage partnerships for impact</li>
                    <li>Mobilize resources efficiently</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="live" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#889063' }}>
              What's Live
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
              Stay updated with our latest events, workshops, and community activities.
            </p>
            <div className="flex justify-center">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="group relative rounded-[3rem] overflow-hidden transform transition-all duration-500 hover:-translate-y-2 w-full max-w-sm"
                >
                   <div className={cn("absolute inset-0 backdrop-blur-xl transition-all duration-500 shadow-inner", event.colors.bg)}></div>
                   <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-500 scale-100", event.colors.glow1)}></div>
                   <div className={cn("absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl transition-all duration-700 scale-100", event.colors.glow2)}></div>

                  <div className="relative p-8 text-left z-10 flex flex-col h-full">
                    <div className={cn("flex items-center gap-2 text-sm mb-4", event.colors.text)}>
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2 flex-grow", event.colors.text)}>
                      {event.title}
                    </h3>
                    <Link href={event.href} className={cn("font-semibold flex items-center mt-auto", event.colors.text, 'group-hover:underline')}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#546A50] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Shape a Sustainable Tomorrow Together
            </h2>
            <p className="text-lg max-w-4xl mx-auto mb-8 text-primary-foreground/90">
              Discover our groundbreaking initiative uniting Nobel Laureate Sir
              CV Raman Trust &amp; Outdoor Dynamix. Join us to empower minds
              through extraordinary learning experiences, complement academic
              education with hands-on activities, and inspire a lifelong love
              for nature. Partner with Prakruthi Shaale to nurture curious,
              compassionate, and responsible future leaders who will shape a
              sustainable tomorrow.
            </p>
            <div className="mt-12">
              <div className="max-w-4xl mx-auto bg-background/90 text-foreground rounded-lg p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: '#889063' }}
                    >
                      Contact Us
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-accent" />
                        <a
                          href="tel:+919886633810"
                          className="hover:text-accent"
                        >
                          +91 9886633810
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-accent" />
                        <a
                          href="mailto:krishnaraj@prakruthishaale.com"
                          className="hover:text-accent"
                        >
                          krishnaraj@prakruthishaale.com
                        </a>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-accent mt-1" />
                        <a
                          href="https://maps.app.goo.gl/k1nmzXf3CWLf2SH68"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent hover:underline"
                        >
                          45, 15th Cross Rd, Maruthi Extension, Malleshwaram,
                          Bengaluru, Karnataka 560003
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-left"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
