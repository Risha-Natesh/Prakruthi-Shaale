'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      window.location.href = '/#' + id;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navTextColor = 'text-foreground';
  const navHoverColor = 'hover:bg-foreground/10';

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
    const commonButtonClass = cn(
      navTextColor,
      navHoverColor,
      isMobile && 'w-full justify-start'
    );

    const links = (
      <>
        <Button
          variant="ghost"
          onClick={() => scrollTo('home')}
          className={commonButtonClass}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollTo('about')}
          className={commonButtonClass}
        >
          About
        </Button>
        <Link href="/program" passHref>
          <Button
            variant="ghost"
            className={cn(commonButtonClass, 'w-full', isMobile && 'justify-start')}
          >
            Programs
          </Button>
        </Link>
        <Link href="/teams" passHref>
          <Button
            variant="ghost"
            className={cn(commonButtonClass, 'w-full', isMobile && 'justify-start')}
          >
            Teams
          </Button>
        </Link>
        <Link href="/summer-camp" passHref>
          <Button
            variant="ghost"
            className={cn(commonButtonClass, 'w-full', isMobile && 'justify-start')}
          >
            Summer Camp
          </Button>
        </Link>
        <Button
          variant="ghost"
          onClick={() => scrollTo('faq')}
          className={commonButtonClass}
        >
          FAQ
        </Button>
        <Button
          onClick={() => scrollTo('contact')}
          className={cn(
            'border',
            'border-foreground/50 bg-foreground/5 text-foreground hover:bg-foreground/10',
            isMobile && 'w-full justify-start'
          )}
        >
          Contact
        </Button>
      </>
    );

    if (isMobile) {
      return (
        <SheetClose asChild>
          <div className='flex flex-col gap-4'>{links}</div>
        </SheetClose>
      );
    }

    return <>{links}</>;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <Link href="/" className="flex items-center gap-3 font-bold text-xl">
        <Image
          src="/Images/1logo.jpg"
          alt="Prakruthi Shaale Logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <span
          className={cn(navTextColor)}
        >
          PRAKRUTHI <span className="font-light">SHAALE</span>
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-2">
        <NavLinks />
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(navTextColor, navHoverColor)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-background">
            <div className="flex flex-col gap-4 pt-10">
              <NavLinks isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
