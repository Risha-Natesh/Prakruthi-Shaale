'use client';

import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import { 
  Sun, 
  Leaf, 
  Recycle, 
  HeartHandshake, 
  FlaskConical, 
  Users, 
  HandHeart, 
  Compass, 
  Puzzle, 
  Gamepad2, 
  Clock, 
  Calendar, 
  BadgeIndianRupee, 
  QrCode, 
  FileText, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const ScrollSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default function SummerCampPage() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const explorationItems = [
    {
      title: 'Gardening and Nature',
      desc: 'Get hands-on experience in planting, nurturing, and caring for the environment.',
      icon: Leaf,
    },
    {
      title: 'Upcycling and Creativity',
      desc: 'Transform everyday items into unique art pieces and discover the joy of reducing waste.',
      icon: Recycle,
    },
    {
      title: 'Life Skills and Leadership',
      desc: 'Develop essential skills like communication, problem-solving, and teamwork through interactive sessions.',
      icon: HeartHandshake,
    },
    {
      title: 'Science and Math Explorations',
      desc: 'Engage in fun hands-on experiments and activities that make learning STEM subjects enjoyable.',
      icon: FlaskConical,
    },
  ];

  const highlights = [
    { title: 'Parent-Child Day', icon: Users, desc: 'Parents join their children for a special day of shared activities.' },
    { title: 'Community Volunteering', icon: HandHeart, desc: 'Children contribute to local community service projects.' },
    { title: 'Survival Day', icon: Compass, desc: 'An exciting challenge applying real-world outdoor skills.' },
    { title: 'Team-building Games', icon: Puzzle, desc: 'Fun group activities to bond and develop teamwork.' },
    { title: 'Unstructured Playtime', icon: Gamepad2, desc: 'Free play sessions to keep energy high and fun flowing.' },
  ];

  const batches = [
    { name: 'Batch 1', dates: '1 – 10 April' },
    { name: 'Batch 2', dates: '13 – 22 April' },
    { name: 'Batch 3', dates: '23 April – 2 May' },
    { name: 'Batch 4', dates: '4 – 13 May' },
    { name: 'Batch 5', dates: '14 – 23 May' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/Images/sshero.png"
            alt="Panchavati Summer Camp Banner"
            fill
            className="object-cover opacity-60 scale-100"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter drop-shadow-2xl">
              Panchavati <span className="text-accent">Summer Camp 2026</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-2 text-white/90">
              10 Days of Mindfulness & Fun
            </p>
            <p className="text-sm md:text-base font-medium mb-8 text-accent/90 uppercase tracking-widest">
              Hosted By Prakruthi Shaale & Outdoor Dynamix
            </p>
            <p className="text-xs md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed text-white/80">
              Join us at the iconic Panchavati, residence of Sir C.V. Raman, for a fun-filled 10-day summer adventure.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToRegister}
              className="rounded-full px-10 py-6 text-base font-bold bg-accent hover:bg-accent/90 transition-all hover:scale-105 shadow-2xl"
            >
              REGISTER NOW
            </Button>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <ScrollSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-6">About the Camp</h2>
            <div className="space-y-4 text-sm md:text-base text-primary-foreground/90 leading-relaxed">
              <p>
                Our summer camp focuses on mindfulness, sustainability, and life skills, designed to help kids grow, learn, and thrive.
              </p>
              <p>
                Through hands-on learning, nature exploration, and collaborative activities, children will develop creativity, teamwork, leadership, and environmental awareness in a fun and engaging environment.
              </p>
            </div>
          </ScrollSection>
        </section>

        <section className="py-16 bg-black/10">
          <div className="container mx-auto px-4">
            <ScrollSection className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold">Age Groups</h2>
            </ScrollSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollSection className="delay-100">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-transform duration-500">
                  <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 mx-auto mb-4 text-accent" />
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Juniors</h3>
                    <p className="text-base md:text-lg text-accent/90 font-semibold">6 to 10 Years</p>
                  </CardContent>
                </Card>
              </ScrollSection>
              <ScrollSection className="delay-300">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-transform duration-500">
                  <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Seniors</h3>
                    <p className="text-base md:text-lg text-primary/90 font-semibold">11 to 15 Years</p>
                  </CardContent>
                </Card>
              </ScrollSection>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <ScrollSection className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold">What We'll Explore</h2>
          </ScrollSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {explorationItems.map((item, idx) => (
              <ScrollSection key={idx} className={cn("delay-" + (idx * 100))}>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 h-full flex flex-col items-center text-center group hover:bg-white/20 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-base font-bold mb-3">{item.title}</h3>
                  <p className="text-xs md:text-sm text-primary-foreground/80 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </section>

        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4">
            <ScrollSection className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-bold">Special Highlights</h2>
            </ScrollSection>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {highlights.map((h, idx) => (
                <ScrollSection key={idx} className="h-full">
                  <div className="p-5 rounded-2xl bg-background/50 backdrop-blur-sm border border-white/5 text-center h-full hover:shadow-xl transition-all">
                    <h.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                    <h4 className="font-bold text-sm mb-2">{h.title}</h4>
                    <p className="text-xs text-primary-foreground/70">{h.desc}</p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollSection>
              <h2 className="text-xl md:text-2xl font-bold mb-6">Daily Schedule</h2>
              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-6">
                <Clock className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xl md:text-2xl font-black text-white">9:30 AM – 12:30 PM</p>
                  <p className="text-xs md:text-sm text-accent/80 mt-1">Sessions run across five available batches.</p>
                </div>
              </div>
            </ScrollSection>
            <ScrollSection>
              <h2 className="text-xl md:text-2xl font-bold mb-6">Available Batches</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {batches.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-primary/20 border border-white/10 flex items-center gap-3 text-xs">
                    <Calendar className="w-4 h-4 text-accent" />
                    <div>
                      <span className="font-bold">{b.name}:</span>
                      <span className="ml-2 opacity-90">{b.dates}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSection>
          </div>
        </section>

        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollSection className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold">What to Expect</h2>
            </ScrollSection>
            <div className="grid gap-4">
              {[
                'Expert facilitators and staff',
                'Safe and engaging environment',
                'Opportunities for children to make new friends and create memorable experiences'
              ].map((text, idx) => (
                <ScrollSection key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-sm md:text-base text-white/90">{text}</p>
                </ScrollSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <ScrollSection className="bg-white/10 p-8 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <BadgeIndianRupee className="w-6 h-6 text-accent" />
                <h2 className="text-xl md:text-2xl font-bold">Camp Fee</h2>
              </div>
              <p className="text-3xl md:text-4xl font-black text-white mb-2">₹5,000</p>
              <p className="text-sm opacity-80">per child per batch. Includes all activities and materials.</p>
            </ScrollSection>
            <ScrollSection className="bg-accent/20 p-8 rounded-2xl border border-accent/20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <QrCode className="w-6 h-6 text-white" />
                <h2 className="text-xl md:text-2xl font-bold">Payment Details</h2>
              </div>
              <p className="text-sm md:text-base mb-4 leading-relaxed">
                Payment can be made using the QR Code provided during registration.
              </p>
              <div className="p-3 bg-white/10 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="font-bold text-xs md:text-sm text-white">Registration is confirmed only after payment is completed.</p>
              </div>
            </ScrollSection>
          </div>
        </section>

        <section className="py-16 bg-black/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollSection>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-accent" />
                  <h2 className="text-xl md:text-2xl font-bold">Terms & Conditions</h2>
                </div>
                <ul className="space-y-3 text-xs md:text-sm opacity-90">
                  <li className="flex gap-2"><ChevronRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" /> Registration is confirmed only after payment</li>
                  <li className="flex gap-2"><ChevronRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" /> No refund policy</li>
                  <li className="flex gap-2"><ChevronRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" /> No swapping of batches once selected</li>
                  <li className="flex gap-2"><ChevronRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" /> Parents/guardians must inform us about any medical conditions or allergies</li>
                  <li className="flex gap-2"><ChevronRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" /> Children must follow camp rules and guidelines</li>
                </ul>
              </ScrollSection>
              <ScrollSection>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                  <h2 className="text-xl md:text-2xl font-bold">Cancellation Policy</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border-l-4 border-accent">
                    <p className="text-sm font-bold text-white">Cancellations before 7 days</p>
                    <p className="text-xl font-black text-accent">50% Refund</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border-l-4 border-destructive">
                    <p className="text-sm font-bold text-white">Cancellations before 4 days</p>
                    <p className="text-xl font-black text-destructive">No Refund</p>
                  </div>
                </div>
              </ScrollSection>
            </div>
          </div>
        </section>

        <section id="register" className="py-24 bg-accent/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/seed/forest-texture/1200/800')] opacity-5 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ScrollSection className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black mb-6">Secure Your Spot!</h2>
              <p className="text-sm md:text-base mb-8 opacity-90 leading-relaxed">
                Join us for an unforgettable experience at the iconic Panchavati. Limited seats available per batch.
              </p>
              <a 
                href="https://forms.gle/ke9LkcfeVbY2XkFq6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full px-12 py-6 text-lg font-black bg-white text-primary hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                >
                  REGISTER NOW
                </Button>
              </a>
            </ScrollSection>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <ScrollSection className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold">Contact Us</h2>
            <p className="mt-2 text-sm opacity-70">Have questions? We're here to help.</p>
          </ScrollSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/10 text-center hover:scale-105 transition-transform">
              <Mail className="w-6 h-6 mx-auto mb-4 text-accent" />
              <h3 className="text-sm font-bold mb-1">Email</h3>
              <a href="mailto:outdoordynamix@gmail.com" className="text-xs text-accent hover:underline break-all">outdoordynamix@gmail.com</a>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 text-center hover:scale-105 transition-transform">
              <Phone className="w-6 h-6 mx-auto mb-4 text-accent" />
              <h3 className="text-sm font-bold mb-1">Mrs. Roopa Abhishek</h3>
              <a href="tel:+919945845127" className="text-xs text-accent hover:underline">+91 99458 45127</a>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 text-center hover:scale-105 transition-transform">
              <Phone className="w-6 h-6 mx-auto mb-4 text-accent" />
              <h3 className="text-sm font-bold mb-1">Mr. Krishna Raj</h3>
              <a href="tel:+919886633810" className="text-sm text-accent hover:underline">+91 98866 33810</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollSection className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold">Frequently Asked Questions</h2>
            </ScrollSection>
            <ScrollSection>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-white/20">
                  <AccordionTrigger className="text-base md:text-lg hover:no-underline hover:text-accent py-5 text-left">
                    What should my child bring to the camp?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-primary-foreground/70 leading-relaxed pb-6">
                    Please send a healthy homemade snack and water bottle (no packaged products), a basic pen and pencil box, and ensure your child has eaten breakfast.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-white/20">
                  <AccordionTrigger className="text-base md:text-lg hover:no-underline hover:text-accent py-5 text-left">
                    What is the pickup time?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-primary-foreground/70 leading-relaxed pb-6">
                    Latest pickup time is 1:00 PM. This is strictly enforced to ensure smooth operations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-white/20">
                  <AccordionTrigger className="text-base md:text-lg hover:no-underline hover:text-accent py-5 text-left">
                    Can I attend the camp with my child?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-primary-foreground/70 leading-relaxed pb-6">
                    Yes! Parents can join their children for special shared activities on Parent-Child Day.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollSection>
          </div>
        </section>
      </main>
    </div>
  );
}