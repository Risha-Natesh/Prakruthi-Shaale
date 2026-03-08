
'use client';

import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export default function TeamsPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const teamMembers = [
    {
      name: 'Krishna Raj Suresh',
      role: 'Founder Trustee',
      imageId: 'team-krishna',
    },
    {
      name: 'Roopa Abhishek',
      role: 'Education & Program',
      imageId: 'team-roopa',
    },
    {
      name: 'Akhila Murthy',
      role: 'Education & Program',
      imageId: 'team-akhila',
    },
    {
      name: 'Sindhu M V',
      role: 'Creative & Treasurer',
      imageId: 'team-sindhu',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
      <Header />
      <main className="pt-20">
        <section ref={heroRef} className="relative h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
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

        <section ref={teamRef} className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => {
              const imageData = PlaceHolderImages.find(img => img.id === member.imageId);
              return (
                <div
                  key={member.name}
                  className={cn(
                    "flex flex-col items-center text-center transition-all duration-700 ease-out",
                    teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative w-48 h-48 mb-6 group">
                    <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={imageData?.imageUrl || "https://picsum.photos/seed/placeholder/400/400"}
                        alt={member.name}
                        fill
                        className="object-cover"
                        data-ai-hint={imageData?.imageHint || "portrait"}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">
                    {member.name}
                  </h3>
                  <Badge className="bg-primary/30 text-white border-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-primary/40 transition-colors">
                    {member.role}
                  </Badge>
                </div>
              );
            })}
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
