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
        {/* 1. Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://picsum.photos/seed/camp-hero/1200/800"
            alt="Panchavati Summer Camp"
            fill
            className="object-cover opacity-40 scale-105 animate-pulse-slow"
            priority
            data-ai-hint="summer camp kids"
          />
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter drop-shadow-2xl">
              Panchavati <span className="text-accent">Summer Camp 2026</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-2 text-white/90">
              10 Days of Mindfulness & Fun
            </p>
            <p className="text-lg md:text-xl font-medium mb-8 text-accent/90 uppercase tracking-widest">
              Hosted By Prakruthi Shaale & Outdoor Dynamix
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-white/80">
              Join us at the iconic Panchavati, residence of Sir C.V. Raman, for a fun-filled 10-day summer adventure.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToRegister}
              className="rounded-full px-12 py-7 text-xl font-bold bg-accent hover:bg-accent/90 transition-all hover:scale-105 shadow-2xl"
            >
              REGISTER NOW
            </Button>
          </div>
        </section>

        {/* 2. About the Camp */}
        <section className="py-20 container mx-auto px-4">
          <ScrollSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">About the Camp</h2>
            <div className="space-y-6 text-xl text-primary-foreground/90 leading-relaxed">
              <p>
                Our summer camp focuses on mindfulness, sustainability, and life skills, designed to help kids grow, learn, and thrive.
              </p>
              <p>
                Through hands-on learning, nature exploration, and collaborative activities, children will develop creativity, teamwork, leadership, and environmental awareness in a fun and engaging environment.
              </p>
            </div>
          </ScrollSection>
        </section>

        {/* 3. Age Groups */}
        <section className="py-20 bg-black/10">
          <div className="container mx-auto px-4">
            <ScrollSection className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">Age Groups</h2>
            </ScrollSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollSection className="delay-100">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-transform duration-500">
                  <CardContent className="p-8 text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <h3 className="text-3xl font-bold mb-2 text-white">Juniors</h3>
                    <p className="text-2xl text-accent/90 font-semibold">6 to 10 Years</p>
                  </CardContent>
                </Card>
              </ScrollSection>
              <ScrollSection className="delay-300">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-transform duration-500">
                  <CardContent className="p-8 text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-3xl font-bold mb-2 text-white">Seniors</h3>
                    <p className="text-2xl text-primary/90 font-semibold">11 to 15 Years</p>
                  </CardContent>
                </Card>
              </ScrollSection>
            </div>
          </div>
        </section>

        {/* 4. What We'll Explore */}
        <section className="py-24 container mx-auto px-4">
          <ScrollSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">What We'll Explore</h2>
          </ScrollSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {explorationItems.map((item, idx) => (
              <ScrollSection key={idx} className={cn("delay-" + (idx * 100))}>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 h-full flex flex-col items-center text-center group hover:bg-white/20 transition-all duration-500">
                  <item.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </section>

        {/* 5. Special Highlights */}
        <section className="py-24 bg-accent/10">
          <div className="container mx-auto px-4">
            <ScrollSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Special Highlights</h2>
            </ScrollSection>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {highlights.map((h, idx) => (
                <ScrollSection key={idx} className="h-full">
                  <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-white/5 text-center h-full hover:shadow-xl transition-all">
                    <h.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
                    <h4 className="font-bold text-lg mb-2">{h.title}</h4>
                    <p className="text-sm text-primary-foreground/70">{h.desc}</p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </div>
        </section>

        {/* 6 & 7. Schedule & Batches */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Daily Schedule</h2>
              <div className="p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-8">
                <Clock className="w-20 h-20 text-accent flex-shrink-0" />
                <div>
                  <p className="text-4xl md:text-5xl font-black text-white">9:30 AM – 12:30 PM</p>
                  <p className="text-xl text-accent/80 mt-2">Sessions run across five available batches.</p>
                </div>
              </div>
            </ScrollSection>
            <ScrollSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Available Batches</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {batches.map((b, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-primary/20 border border-white/10 flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-accent" />
                    <div>
                      <span className="font-bold text-lg">{b.name}:</span>
                      <span className="ml-2 opacity-90">{b.dates}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSection>
          </div>
        </section>

        {/* 8. What to Expect */}
        <section className="py-24 bg-black/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollSection className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">What to Expect</h2>
            </ScrollSection>
            <div className="grid gap-6">
              {[
                'Expert facilitators and staff',
                'Safe and engaging environment',
                'Opportunities for children to make new friends and create memorable experiences'
              ].map((text, idx) => (
                <ScrollSection key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5">
                  <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
                  <p className="text-xl text-white/90">{text}</p>
                </ScrollSection>
              ))}
            </div>
          </div>
        </section>

        {/* 9 & 10. Fee & Payment */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <ScrollSection className="bg-white/10 p-10 rounded-3xl border border-white/20">
              <div className="flex items-center gap-6 mb-6">
                <BadgeIndianRupee className="w-12 h-12 text-accent" />
                <h2 className="text-4xl font-bold">Camp Fee</h2>
              </div>
              <p className="text-6xl font-black text-white mb-4">₹5,000</p>
              <p className="text-xl opacity-80">per child per batch. Includes all activities and materials.</p>
            </ScrollSection>
            <ScrollSection className="bg-accent/20 p-10 rounded-3xl border border-accent/20 flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-6">
                <QrCode className="w-12 h-12 text-white" />
                <h2 className="text-4xl font-bold">Payment Details</h2>
              </div>
              <p className="text-xl mb-6 leading-relaxed">
                Payment can be made using the QR Code provided during registration.
              </p>
              <div className="p-4 bg-white/10 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="font-bold text-lg text-white">Registration is confirmed only after payment is completed.</p>
              </div>
            </ScrollSection>
          </div>
        </section>

        {/* 11 & 12. T&C and Cancellation */}
        <section className="py-24 bg-black/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollSection>
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="w-10 h-10 text-accent" />
                  <h2 className="text-3xl font-bold">Terms & Conditions</h2>
                </div>
                <ul className="space-y-4 text-lg opacity-90">
                  <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" /> Registration is confirmed only after payment</li>
                  <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" /> No refund policy</li>
                  <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" /> No swapping of batches once selected</li>
                  <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" /> Parents/guardians must inform us about any medical conditions or allergies</li>
                  <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" /> Children must follow camp rules and guidelines</li>
                </ul>
              </ScrollSection>
              <ScrollSection>
                <div className="flex items-center gap-4 mb-8">
                  <AlertCircle className="w-10 h-10 text-destructive" />
                  <h2 className="text-3xl font-bold">Cancellation Policy</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-accent">
                    <p className="text-xl font-bold text-white mb-2">Cancellations made before 7 days</p>
                    <p className="text-3xl font-black text-accent">50% Refund</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-destructive">
                    <p className="text-xl font-bold text-white mb-2">Cancellations made before 4 days</p>
                    <p className="text-3xl font-black text-destructive">No Refund</p>
                  </div>
                </div>
              </ScrollSection>
            </div>
          </div>
        </section>

        {/* 13. Registration Section */}
        <section id="register" className="py-32 bg-accent/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/seed/forest-texture/1200/800')] opacity-5 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ScrollSection className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8">Secure Your Spot!</h2>
              <p className="text-xl mb-12 opacity-90 leading-relaxed">
                Join us for an unforgettable experience at the iconic Panchavati. Limited seats available per batch.
              </p>
              <a 
                href="https://forms.gle/ke9LkcfeVbY2XkFq6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full px-16 py-8 text-2xl font-black bg-white text-primary hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                >
                  REGISTER NOW
                </Button>
              </a>
            </ScrollSection>
          </div>
        </section>

        {/* 14. Contact Us */}
        <section className="py-24 container mx-auto px-4">
          <ScrollSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>
            <p className="mt-4 text-xl opacity-70">Have questions? We're here to help.</p>
          </ScrollSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-white/10 text-center hover:scale-105 transition-transform">
              <Mail className="w-10 h-10 mx-auto mb-6 text-accent" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <a href="mailto:outdoordynamix@gmail.com" className="text-accent hover:underline break-all">outdoordynamix@gmail.com</a>
            </div>
            <div className="p-8 rounded-3xl bg-white/10 text-center hover:scale-105 transition-transform">
              <Phone className="w-10 h-10 mx-auto mb-6 text-accent" />
              <h3 className="text-lg font-bold mb-2">Mrs. Roopa Abhishek</h3>
              <a href="tel:+919945845127" className="text-accent hover:underline">+91 99458 45127</a>
            </div>
            <div className="p-8 rounded-3xl bg-white/10 text-center hover:scale-105 transition-transform">
              <Phone className="w-10 h-10 mx-auto mb-6 text-accent" />
              <h3 className="text-lg font-bold mb-2">Mr. Krishna Raj</h3>
              <a href="tel:+919886633810" className="text-accent hover:underline">+91 98866 33810</a>
            </div>
          </div>
        </section>

        {/* 15. FAQ Section */}
        <section className="py-24 bg-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            </ScrollSection>
            <ScrollSection>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-white/20">
                  <AccordionTrigger className="text-xl hover:no-underline hover:text-accent py-6 text-left">
                    What should my child bring to the camp?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-primary-foreground/70 leading-relaxed pb-8">
                    Please send a healthy homemade snack and water bottle (no packaged products), a basic pen and pencil box, and ensure your child has eaten breakfast.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-white/20">
                  <AccordionTrigger className="text-xl hover:no-underline hover:text-accent py-6 text-left">
                    What is the pickup time?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-primary-foreground/70 leading-relaxed pb-8">
                    Latest pickup time is 1:00 PM. This is strictly enforced to ensure smooth operations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-white/20">
                  <AccordionTrigger className="text-xl hover:no-underline hover:text-accent py-6 text-left">
                    Can I attend the camp with my child?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-primary-foreground/70 leading-relaxed pb-8">
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
