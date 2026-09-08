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

  const isActive = (href: string) => location === href;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-accent selection:text-accent-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src="/assets/logo/jiseek-logo.png" alt="Jiseek" className="h-10" />
            <span className="hidden lg:inline text-xs font-medium tracking-wide text-muted-foreground border-l border-border pl-3">
              AI Transformation
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/") ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/services"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/services") ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    AI Transformation
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/work"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/work") ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    Experience
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/programmes"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/programmes") ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    Capability Programmes
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/about") ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive("/contact") ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/contact">
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif ml-2">
                Book a Diagnostic
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border p-4 bg-background absolute w-full shadow-lg">
            <nav className="flex flex-col gap-4">
              {[
                ["Home", "/"],
                ["AI Transformation", "/services"],
                ["Experience & Evidence", "/work"],
                ["Capability Programmes", "/programmes"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    isActive(href) ? "text-primary font-bold" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  className="w-full bg-primary text-primary-foreground font-serif"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Diagnostic
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {location === "/" && (
        <section className="border-b border-border/50 bg-secondary/20">
          <div className="container py-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {[
                ["500+", "Professionals trained"],
                ["50+", "Organisations served"],
                ["4.9/5", "Average learner rating"],
                ["95%", "Would recommend"],
              ].map(([number, label]) => (
                <div key={label} className="flex items-baseline justify-center gap-2">
                  <span className="font-serif font-bold text-primary text-lg md:text-xl">{number}</span>
                  <span className="text-xs md:text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-2">
              <Link href="/work" className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-primary transition-colors">
                Training & capability-building track record →
              </Link>
            </div>
          </div>
        </section>
      )}

      <main className="flex-1 w-full">{children}</main>

      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="/assets/logo/jiseek-logo.png" alt="Jiseek" className="h-8 mb-2" />
            <p className="text-sm font-medium text-primary">AI Transformation</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping organisations move from AI experiments to measurable work transformation through strategy, workflow redesign, implementation and capability building.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">AI Transformation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services#diagnostic" className="hover:text-primary transition-colors">AI Opportunity Diagnostic</Link></li>
              <li><Link href="/services#sprint" className="hover:text-primary transition-colors">Transformation Sprint</Link></li>
              <li><Link href="/services#programme" className="hover:text-primary transition-colors">Transformation Programme</Link></li>
              <li><Link href="/services#advisory" className="hover:text-primary transition-colors">AI Transformation Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Evidence & Capability</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/work" className="hover:text-primary transition-colors">Experience & Evidence</Link></li>
              <li><Link href="/services#academy" className="hover:text-primary transition-colors">AI Transformation Academy</Link></li>
              <li><Link href="/programmes" className="hover:text-primary transition-colors">Capability Programmes</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Jiseek</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Start Here</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Find where AI can create measurable value in your organisation.
            </p>
            <Link href="/contact">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif mb-5">
                Book a Diagnostic
              </Button>
            </Link>
            <div>
              <a
                href="https://linkedin.com/company/jiseek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Follow Jiseek on LinkedIn
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
