'use client';

import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import { Sun, Map, Compass, Tent, Flame, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

export default function SummerCampPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: activitiesRef, inView: activitiesInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const activities = [
    { title: 'Nature Exploration', icon: Compass, desc: 'Guided treks and biodiversity walks through lush heritage landscapes.' },
    { title: 'Survival Skills', icon: Tent, desc: 'Learn tent pitching, knot tying, and basic outdoor survival techniques.' },
    { title: 'Art & Crafts', icon: Sun, desc: 'Creative workshops using natural materials found in the environment.' },
    { title: 'Evening Campfires', icon: Flame, desc: 'Storytelling, songs, and reflection under the starlit sky.' },
    { title: 'Adventure Games', icon: Map, desc: 'Team-building challenges and nature-based scavenger hunts.' },
    { title: 'Music & Rhythms', icon: Music, desc: 'Exploring nature\'s sounds and creating music in the wild.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
      <Header />
      <main className="pt-20">
        <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src="https://picsum.photos/seed/summer-camp/1200/800"
            alt="Summer Camp"
            fill
            className="object-cover opacity-70"
            data-ai-hint="summer camp kids nature"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
            <h1 className={cn("text-5xl md:text-7xl font-bold transition-all duration-1000", heroInView ? "opacity-100 scale-100" : "opacity-0 scale-90")}>
              Summer Camp 2025
            </h1>
            <p className={cn("mt-6 text-xl md:text-2xl max-w-3xl transition-all duration-1000 delay-300", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              An unforgettable journey of adventure, friendship, and connection with nature.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Unplug & Reconnect</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Prakruthi Shaale's Summer Camp is designed to take children away from screens and immerse them in the wonders of the natural world. 
              Held at our historic Malleshwaram heritage campus, it's a safe space for curiosity, creativity, and character building.
            </p>
          </div>

          <div ref={activitiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className={cn(
                    "p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-500 hover:bg-white/20 group",
                    activitiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-primary-foreground/80">{activity.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="bg-background/90 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10 border border-primary/20">
              <div className="flex-1 text-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Ready for Adventure?</h2>
                <div className="space-y-4 text-lg">
                  <p className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full"></span> <strong>Dates:</strong> April - May 2025 (Multiple Batches)</p>
                  <p className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full"></span> <strong>Ages:</strong> 6 to 16 years</p>
                  <p className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full"></span> <strong>Location:</strong> Malleshwaram Heritage Campus</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button 
                  onClick={() => window.location.href = '/#contact'}
                  className="px-10 py-4 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl"
                >
                  Register Interest
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
