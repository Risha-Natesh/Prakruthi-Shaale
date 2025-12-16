'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Handshake, Target } from 'lucide-react';

export default function PartnershipsPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <div className="relative h-64 md:h-80">
          <Image
            src="/Images/partnerships.jpg"
            alt="Strategic Partnerships"
            fill
            className="object-cover"
            data-ai-hint="business people shaking hands"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center">
              Strategic Partnerships
            </h1>
          </div>
        </div>

        <div className="container mx-auto py-16">
          <Link href="/program" className="mb-8 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2" />
              Back to Programs
            </Button>
          </Link>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                Driving Growth Through Collaboration
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Our Strategic Partnerships program is designed for businesses and entrepreneurs looking to collaborate on ventures that are both profitable and sustainable. We seek to align with partners who share our vision for a greener future and are interested in developing innovative business models.
              </p>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  This is a placeholder for more detailed information about partnership opportunities, investment models, and the benefits of collaborating with Prakruthi Shaale on for-profit initiatives.
                </p>
                <p>
                  Information about past successful ventures and case studies will be shared here.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-4">Partnership Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-200/50 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <TrendingUp className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sustainable Ventures</h4>
                    <p className="text-sm text-foreground/70">Co-creating businesses that prioritize ecological balance and profitability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-purple-200/50 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Handshake className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">For-Profit Collaborations</h4>
                    <p className="text-sm text-foreground/70">Partnering on projects with shared financial and environmental goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-purple-200/50 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <Target className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Impact Investing</h4>
                    <p className="text-sm text-foreground/70">Opportunities to invest in initiatives that deliver measurable impact.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-8">Our Partners & Ventures</h2>
            <div className="text-center text-foreground/70">
              <p>Details about our current partners and joint ventures will be featured here soon.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

    