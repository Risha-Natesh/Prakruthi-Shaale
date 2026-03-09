'use client';

import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  name: string;
  role: string;
  imageId: string;
  description: string;
}

const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const imageData = PlaceHolderImages.find(img => img.id === member.imageId);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center transition-all duration-1000 ease-out",
        inView 
          ? "opacity-100 translate-x-0" 
          : cn("opacity-0", isEven ? "-translate-x-20" : "translate-x-20")
      )}
    >
      <div className="relative w-full aspect-square max-w-[280px] mb-6 group">
        <div className="absolute inset-0 bg-primary/20 rounded-3xl scale-105 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src={imageData?.imageUrl || "https://picsum.photos/seed/placeholder/400/400"}
            alt={member.name}
            fill
            className="object-cover"
            data-ai-hint={imageData?.imageHint || "portrait"}
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white tracking-tight">
        {member.name}
      </h3>
      <div className="mb-4">
        <Badge className="bg-primary/40 text-white border-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-primary/50 transition-colors">
          {member.role}
        </Badge>
      </div>
      <p className="text-white/80 text-sm leading-relaxed max-w-[320px] px-2 whitespace-normal overflow-visible h-auto">
        {member.description}
      </p>
    </div>
  );
};

export default function TeamsPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const teamMembers: TeamMember[] = [
    {
      name: 'Krishna Raj Suresh',
      role: 'Founder Trustee',
      imageId: 'team-krishna',
      description: 'Visionary leader dedicated to advancing nature-based education and community learning initiatives.\nGuides the organization’s vision, partnerships, and long-term educational impact.',
    },
    {
      name: 'Roopa Abhishek',
      role: 'Education & Program',
      imageId: 'team-roopa',
      description: 'Designs immersive outdoor learning programs that connect students with nature and sustainability.\nLeads curriculum development and ensures engaging, meaningful educational experiences.',
    },
    {
      name: 'Akhila Murthy',
      role: 'Education & Program',
      imageId: 'team-akhila',
      description: 'Passionate educator focused on fostering curiosity, creativity, and active student participation.\nSupports interactive learning environments that inspire exploration and growth.',
    },
    {
      name: 'Sindhu M V',
      role: 'Creative & Treasurer',
      imageId: 'team-sindhu',
      description: 'Combines creative direction with financial oversight to strengthen organizational sustainability.\nManages communication, branding, and budgeting for impactful program delivery.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
      <Header />
      <main className="pt-20">
        <section ref={heroRef} className="relative h-[35vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image
              src="https://picsum.photos/seed/teams-nature/1200/600"
              alt="Teams Header Background"
              fill
              className="object-cover opacity-30"
              data-ai-hint="lush forest"
            />
          </div>
          <div className="relative z-10 text-center p-4">
            <h1 className={cn("text-4xl md:text-6xl font-bold transition-all duration-1000", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              Meet Our Team
            </h1>
            <p className={cn("mt-4 text-xl md:text-2xl max-w-2xl mx-auto transition-all duration-1000 delay-300 font-light", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              Introducing key team members:
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </section>

        <section className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Join the Movement</h2>
            <p className="text-lg max-w-3xl mx-auto text-white/90 mb-10 leading-relaxed">
              We are a passionate team dedicated to fostering global citizenship through nature. 
              Our diverse skills and shared commitment to the SDGs drive everything we do at Prakruthi Shaale.
            </p>
            <button 
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
              className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl border border-white/10"
            >
              Get in Touch
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
