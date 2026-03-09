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
    <div className="bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient text-primary-foreground">
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
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ventures for a Better World
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">Driving SDG Impact Through Strategic Partnerships</p>
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
                Driving Growth Through Collaboration (SDG 17)
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Our Strategic Partnerships program is designed for businesses, social enterprises, and innovators looking to co-create ventures that are both profitable and purpose-driven. We align with partners who share our vision for a sustainable future and are committed to advancing the UN Sustainable Development Goals.
              </p>
              
              <div className="space-y-4 text-primary-foreground/90">
                <p>
                  At Prakruthi Shaale, we believe collaboration is the key to scaling impact. We offer a unique platform for partners to leverage our heritage campus, community network, and educational expertise to build ventures in eco-tourism, sustainable products, corporate wellness, and green technology—all aligned with the SDGs.
                </p>
                <p>
                  We are open to various partnership models, including joint ventures, licensing agreements, and impact investments, to build a robust ecosystem of organizations committed to making a tangible, positive difference for people and the planet.
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
                    <h4 className="font-semibold">Sustainable Ventures (SDG 8 & 12)</h4>
                    <p className="text-sm text-foreground/70">Co-creating businesses that promote decent work, economic growth, and sustainable innovation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Impact Investing</h4>
                    <p className="text-sm text-foreground/70">Opportunities to invest in initiatives that deliver clear social and environmental returns.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center p-6 md:p-8 rounded-lg bg-accent/10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Let's Build a Sustainable Future Together</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
              If your organization is passionate about driving sustainable change and seeks a strategic partner to innovate with, we would love to build the future with you.
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
