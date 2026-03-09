'use client';
import Image from 'next/image';
import Header from '@/components/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Leaf,
  Target,
  Users,
  Sprout,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import GoogleCalendar from '@/components/google-calendar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const challengeImage = PlaceHolderImages.find(
    (img) => img.id === 'challenge'
  );

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: challengeRef, inView: challengeInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: liveRef, inView: liveInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const faqs = [
    {
      question: "What is Prakruthi Shaale?",
      answer: "Prakruthi Shaale is an innovative outdoor learning centre dedicated to revolutionising education by connecting minds with the natural world. Our goal is to inspire creativity, curiosity, and critical thinking to foster a generation of leaders committed to the UN Sustainable Development Goals (SDGs)."
    },
    {
      question: "What are the primary mission and vision of the organisation?",
      answer: "Our vision is to build a global network of changemakers achieving the SDGs through a \"Think Global, Act Local\" approach. Our mission is to make sustainability accessible and actionable for everyone, bridging knowledge gaps and mobilising resources to drive progress on goals for quality education, climate action, and terrestrial ecosystem preservation."
    },
    {
      question: "How does outdoor learning benefit participants?",
      answer: "Our programs promote holistic development by connecting individuals with nature, nurturing responsible and compassionate global citizens. These immersive experiences complement academic learning with hands-on activities that empower future leaders and inspire a lifelong commitment to achieving the SDGs."
    },
    {
      question: "What environmental challenges does Prakruthi Shaale address?",
      answer: "We address urgent environmental threats and fragmented sustainability efforts by focusing on key SDGs. We empower community-led innovation for sustainable cities (SDG 11), promote climate action (SDG 13), and protect life on land (SDG 15) by creating a collaborative ecosystem for impactful change."
    },
    {
      question: "Who are the key partners and stakeholders?",
      answer: "Prakruthi Shaale unites organisations, youth, and changemakers to foster social innovation aligned with SDG 17 (Partnerships for the Goals). A key partnership with the Nobel Laureate Sir CV Raman Trust helps us empower minds through extraordinary learning experiences."
    },
    {
      question: "How can I get involved or stay updated on activities?",
      answer: "You can participate in workshops and community events to help achieve the SDGs. We actively mobilise volunteers and resources for collective impact, both online and offline, creating pathways for anyone to contribute to a sustainable tomorrow."
    },
    {
      question: "Where is Prakruthi Shaale located, and how can I contact them?",
      answer: "The centre is located at 45, 15th Cross Rd, Maruthi Extension, Malleshwaram, Bengaluru, Karnataka 560003. For enquiries, you can contact them via telephone at +91 9886633810 or email krishnaraj@prakruthishaale.com."
    }
  ];

  const aboutItems = [
    {
      icon: Target,
      title: 'Education for Sustainable Development',
      description: 'Our innovative outdoor learning experiences are designed to provide quality education and inspire climate action.',
    },
    {
      icon: Leaf,
      title: 'Fostering Global Citizenship',
      description: 'We connect individuals with nature to foster creativity, critical thinking, and a deep-seated responsibility for our planet.',
    },
    {
      icon: Sprout,
      title: 'Promoting Holistic Development',
      description: 'Through immersive programs, we nurture compassionate and responsible leaders equipped to tackle global challenges.',
    },
  ];


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
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white relative z-10 px-4">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                <span
                  className="inline-block animate-fade-in-up text-primary"
                  style={{ animationDelay: '100ms' }}
                >
                  Fostering Global Citizens
                </span>
                <br />
                <span
                  className="inline-block animate-fade-in-up text-primary"
                  style={{ animationDelay: '300ms' }}
                >
                  Through Nature
                </span>
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-in-up [animation-delay:700ms]">
                 Prakruthi Shaale empowers individuals to become active contributors to the UN Sustainable Development Goals (SDGs). Through innovative outdoor learning, we foster the creativity, critical thinking, and global awareness needed to build a sustainable future.
              </p>
            </div>
          </div>
        </section>

        <div className="text-primary-foreground bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient">
          <section id="about" ref={aboutRef} className="py-16 md:py-20">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
              <div className={cn('h-80 md:h-96 relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ease-out hover:scale-105', aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10')}>
                <Image
                  src="/Images/aboutus.jpg"
                  alt="About us"
                  fill
                  className="object-cover"
                  data-ai-hint="kids learning outdoors"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white">
                  About Us
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                {aboutItems.map((item, index) => (
                  <div 
                    key={item.title} 
                    className={cn('flex gap-4 transition-all duration-700 ease-out', aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10')}
                    style={{ transitionDelay: `${200 * (index + 1)}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-primary-foreground transition-transform duration-300 hover:scale-105"
                      >
                        {item.title}
                      </h3>
                      <p className="text-primary-foreground/90 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="vision" ref={visionRef} className="py-16 md:py-20">
            <div className="container mx-auto text-center px-4">
              <div className={cn('transition-all duration-700 ease-out', visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                  Our Vision &amp; Mission
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-12">
                  To build a global network of changemakers dedicated to achieving the Sustainable Development Goals through local action.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-center">
                <div
                  className={cn(
                    'p-8 rounded-lg shadow-lg opacity-0 text-primary-foreground transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl',
                    'bg-white/10 backdrop-blur-sm',
                    visionInView && 'animate-fade-in'
                  )}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Our Vision
                  </h3>
                  <p className="text-white/90">
                    A global network of changemakers dedicated to achieving the Sustainable Development Goals through a "Think Global, Act Local" approach. We unite individuals, organizations, and youth to foster a sustainable future through collaboration.
                  </p>
                </div>
                <div
                  className={cn(
                    'p-8 rounded-lg shadow-lg opacity-0 text-primary-foreground transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl',
                    'bg-white/10 backdrop-blur-sm',
                    visionInView && 'animate-fade-in [animation-delay:300ms]'
                  )}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Our Mission
                  </h3>
                  <p className="text-white/90">
                    To make sustainability accessible and actionable. We bridge knowledge gaps and mobilize resources to drive progress on quality education, climate action, and protecting life on land.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="challenge" ref={challengeRef} className="py-16 md:py-20">
            <div className="container mx-auto relative z-10 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className={cn('transition-all duration-700 ease-out', challengeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    The Challenge &amp; The Opportunity
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    We turn global challenges into local opportunities by empowering communities to act on climate change, biodiversity loss, and sustainable development.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className={cn('bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-700 ease-out transform hover:scale-105', challengeInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10')} style={{ transitionDelay: '200ms' }}>
                    <h3
                      className="font-bold text-xl mb-3 text-emerald-400"
                    >
                      The Challenge
                    </h3>
                    <ul className="space-y-2 text-primary-foreground/90 list-disc list-inside text-left">
                      <li>Apathy towards climate action</li>
                      <li>Biodiversity loss and ecosystem degradation</li>
                      <li>Fragmented community action</li>
                      <li>Gaps in quality environmental education</li>
                    </ul>
                  </div>
                  <div className={cn('bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-700 ease-out transform hover:scale-105', challengeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10')} style={{ transitionDelay: '400ms' }}>
                    <h3
                      className="font-bold text-xl mb-3 text-emerald-400"
                    >
                      The Opportunity
                    </h3>
                    <ul className="space-y-2 text-primary-foreground/90 list-disc text-left pl-5">
                      <li>Empower community-led climate solutions</li>
                      <li>Build resilient and sustainable cities</li>
                      <li>Foster partnerships for the goals</li>
                      <li>Mobilize youth for environmental stewardship</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="live" ref={liveRef} className="py-16 md:py-20">
            <div className="container mx-auto text-center px-4">
               <div className={cn('transition-all duration-700 ease-out', liveInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                  Upcoming Events
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-12">
                  Join our journey toward a sustainable future. Explore our upcoming events, workshops, and community activities dedicated to advancing the Global Goals.
                </p>
              </div>
              <div className={cn('rounded-lg overflow-hidden shadow-xl transition-all duration-700 ease-out invert hue-rotate-90', liveInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{ transitionDelay: '200ms' }}>
                <GoogleCalendar />
              </div>
            </div>
          </section>

          <section id="faq" ref={faqRef} className="py-16 md:py-20">
            <div className="container mx-auto px-4">
               <div className={cn('transition-all duration-700 ease-out', faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className={cn('max-w-3xl mx-auto transition-all duration-700 ease-out', faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{ transitionDelay: '200ms' }}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-primary-foreground/90">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          <section id="contact" ref={contactRef} className="py-16 md:py-20">
            <div className="container mx-auto text-center px-4">
              <div className={cn('transition-all duration-700 ease-out', contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Shape a Sustainable Tomorrow Together
                </h2>
                <p className="text-lg max-w-4xl mx-auto mb-8 text-primary-foreground/90">
                  Join us in forging partnerships for the goals. Our groundbreaking initiative with the Nobel Laureate Sir CV Raman Trust is just one example of how we collaborate to empower minds, complement education with hands-on action, and inspire a lifelong love for nature. Partner with Prakruthi Shaale to nurture the next generation of leaders who will shape a sustainable tomorrow.
                </p>
              </div>
              <div className="mt-12">
                <div className={cn('max-w-4xl mx-auto bg-background/90 text-foreground rounded-lg p-8 shadow-2xl transition-all duration-700 ease-out', contactInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90')} style={{ transitionDelay: '200ms' }}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                      <h3
                        className="text-2xl font-bold mb-6 text-primary"
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
        </div>
      </main>
    </div>
  );
}
