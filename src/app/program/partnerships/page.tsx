'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Handshake, Target } from 'lucide-react';

export default function PartnershipsPage() {
  const handleContactScroll = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="/Images/partner.jpg"
            alt="Strategic Partnerships"
            fill
            className="object-cover"
            data-ai-hint="business people shaking hands"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
              Strategic Partnerships
            </h1>
          </div>
        </div>

        <div className="container mx-auto py-12 md:py-16 px-4">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2" />
              Back to Programs
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Driving Growth Through Collaboration
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Our Strategic Partnerships program is designed for businesses, social enterprises, and entrepreneurs looking to collaborate on ventures that are both profitable and sustainable. We seek to align with partners who share our vision for a greener future and are interested in developing innovative business models that create shared value.
              </p>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  At Prakruthi Shaale, we believe that collaboration is key to scaling impact. We offer a unique platform for partners to leverage our heritage campus, community network, and educational expertise to co-create ventures in areas like eco-tourism, sustainable products, corporate wellness, and green technology.
                </p>
                <p>
                  We are open to various partnership models, including joint ventures, licensing agreements, and impact investments. Our goal is to build a robust ecosystem of purpose-driven organizations committed to making a tangible difference.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Partnership Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sustainable Ventures</h4>
                    <p className="text-sm text-foreground/70">Co-creating businesses that prioritize ecological balance and profitability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">For-Profit Collaborations</h4>
                    <p className="text-sm text-foreground/70">Partnering on projects with shared financial and environmental goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Impact Investing</h4>
                    <p className="text-sm text-foreground/70">Opportunities to invest in initiatives that deliver measurable social and environmental returns.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center p-6 md:p-8 rounded-lg bg-accent/10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Let's Build a Sustainable Future Together</h2>
            <p className="text-lg text-foreground/80 mb-6 max-w-3xl mx-auto">
              If your organization is passionate about driving sustainable change and is looking for a strategic partner to innovate and grow with, we would love to hear from you.
            </p>
            <Button size="lg" onClick={handleContactScroll}>
              Contact Us to Discuss a Partnership
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
