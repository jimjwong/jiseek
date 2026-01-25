import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-accent selection:text-accent-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src="/assets/logo/jiseek-logo.png" alt="Jiseek" className="h-10" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    href="/"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/"
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    href="/about"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/about"
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    href="/services"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/services"
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    Our Services
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    href="/programmes"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/programmes"
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    Programmes
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    href="/contact"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/contact"
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/contact">
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif ml-2">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border p-4 bg-background absolute w-full shadow-lg">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location === "/"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location === "/about"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              <Link 
                href="/services"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location === "/services"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Services
              </Link>

              <Link 
                href="/programmes"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location === "/programmes"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programmes
              </Link>

              <Link 
                href="/contact"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location === "/contact"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact">
                <Button className="w-full bg-primary text-primary-foreground font-serif" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">{children}</main>

      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="/assets/logo/jiseek-logo.png" alt="Jiseek" className="h-8 mb-2" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering organizations in Asia to transform complexity into clarity through mindful, ethical, and human-centered digital strategies.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services#training" className="hover:text-primary transition-colors">Training & Courses</Link></li>
              <li><Link href="/services#consultancy" className="hover:text-primary transition-colors">Consultancy</Link></li>
              <li><Link href="/services#workshops" className="hover:text-primary transition-colors">Workshops</Link></li>
              <li><Link href="/services#speaking" className="hover:text-primary transition-colors">Speaking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/mission" className="hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Join our community of mindful changemakers.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/jiseek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-muted-foreground/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <span className="sr-only">LinkedIn</span>
                in
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jiseek. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
