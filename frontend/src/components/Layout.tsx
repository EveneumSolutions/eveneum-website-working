import { Outlet, Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = 'https://raw.githubusercontent.com/Eveneum2026/eveneum-logo/main/Eveneum%20Logo%20(800%20%C3%97%20400%20Px)%20(800%20%C3%97%20300%20Px)%20(800%20%C3%97%20250%20Px)%20-%20%236B6B6B.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/for-companies', label: 'For Companies' },
  { href: '/for-candidates', label: 'For Candidates' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const contactInfo = {
  phone: '+91 97 1212 1188',
  email: 'info@theeveneum.com',
  address: '211, 2nd Floor, Aamrakunj Business Center, Chandkheda, Ahmedabad, Gujarat – 382424',
};

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    navigate({ to: href });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-gradient-to-r from-white via-blue-50/30 to-green-50/30 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-white/90 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-950">
        <div className="container flex h-20 items-center justify-between px-6">
          <Link to="/" className="flex items-center transition-all duration-300 hover:scale-105 hover:opacity-90">
            <img src={LOGO_URL} alt="Eveneum Solutions" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-4 py-2 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:text-primary"
                activeProps={{ 
                  className: 'text-primary font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:rounded-full' 
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-lg font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="relative overflow-hidden border-t-2 border-primary/20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-50" />
        
        <div className="container relative z-10 py-20">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Description */}
            <div className="space-y-6 lg:col-span-1">
              <img 
                src={LOGO_URL} 
                alt="Eveneum Solutions" 
                className="h-14 w-auto" 
              />
              <p className="text-base leading-relaxed text-slate-300">
                Professional staffing and recruitment solutions for companies and candidates.
              </p>
              <div className="flex gap-2">
                <div className="h-1 w-12 rounded-full bg-primary" />
                <div className="h-1 w-12 rounded-full bg-secondary" />
                <div className="h-1 w-12 rounded-full bg-accent" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-bold tracking-wide text-white">Quick Links</h3>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex items-center text-base text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-primary"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-6 text-lg font-bold tracking-wide text-white">Contact Us</h3>
              <div className="flex flex-col gap-5 text-base text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="mt-1">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="mt-1">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="mt-1 leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-6 text-lg font-bold tracking-wide text-white">Legal</h3>
              <nav className="flex flex-col gap-4">
                <Link
                  to="/privacy-policy"
                  className="group flex items-center text-base text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="group flex items-center text-base text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  Terms and Conditions
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-700 pt-10 text-center">
            <p className="flex items-center justify-center gap-2 text-base text-slate-400">
              © 2025 Eveneum Solutions. Built with <Heart className="h-5 w-5 fill-primary text-primary" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition-colors hover:text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
