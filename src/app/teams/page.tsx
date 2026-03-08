'use client';

import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import { Users, Heart, Shield, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

export default function TeamsPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const teamMembers = [
    {
      name: 'Krishnaraj',
      role: 'Founder & Director',
      description: 'Visionary leader dedicated to nature-based education and sustainable growth.',
      icon: Star,
    },
    {
      name: 'Outdoor Educators',
      role: 'Facilitators',
      description: 'Expert guides who bring learning to life in the great outdoors.',
      icon: Users,
    },
    {
      name: 'Community Volunteers',
      role: 'Changemakers',
      description: 'Passionate individuals driving local action for global goals.',
      icon: Heart,
    },
    {
      name: 'Safety Marshals',
      role: 'Guardians',
      description: 'Ensuring a secure and protected environment for all participants.',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
      <Header />
      <main className="pt-20">
        <section ref={heroRef} className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <Image
            src="https://picsum.photos/seed/teams-hero/1200/600"
            alt="Our Team"
            fill
            className="object-cover opacity-60"
            data-ai-hint="team collaboration nature"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className={cn("text-4xl md:text-6xl font-bold transition-all duration-1000", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              Our Team
            </h1>
            <p className={cn("mt-4 text-lg md:text-xl max-w-2xl transition-all duration-1000 delay-300", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              Meet the passionate individuals dedicated to fostering global citizenship through nature.
            </p>
          </div>
        </section>

        <section ref={teamRef} className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.name}
                  className={cn(
                    "bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl transition-all duration-700 hover:scale-105 hover:bg-white/20",
                    teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Movement</h2>
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground/90 mb-10">
              We are always looking for passionate individuals who believe in the power of outdoor learning. 
              Whether you are an educator, a volunteer, or a partner, there is a place for you in our team.
            </p>
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Contact Us to Join
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
