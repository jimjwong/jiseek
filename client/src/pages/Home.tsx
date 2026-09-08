import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Layers, Users } from "lucide-react";
import { Link } from "wouter";

const services = [
  { icon: Compass, title: "Find your starting point", description: "Prioritise AI opportunities around your workflows, readiness and business value.", label: "AI Opportunity Diagnostic", href: "/services#diagnostic" },
  { icon: Layers, title: "Put AI to work", description: "Prototype practical solutions and redesign the work around them.", label: "Transformation Sprint", href: "/services#sprint" },
  { icon: Users, title: "Build team confidence", description: "Help your people apply AI responsibly in their everyday work.", label: "Capability Programmes", href: "/programmes" },
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-background">
        <div className="container grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">Jiseek AI Transformation</p>
            <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.08] tracking-tight text-primary">Make AI work for your business.</h1>
            <p className="max-w-lg text-lg md:text-xl text-muted-foreground leading-relaxed">Turn promising experiments into practical workflows, measurable value and confident teams.</p>
            <Button asChild size="lg" className="h-auto min-h-12 max-w-full whitespace-normal rounded-full px-7 py-3 text-base">
              <Link href="/contact">Book a Diagnostic <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link>
            </Button>
          </div>
          <div className="relative">
            <img src="/assets/hero-clarity.png" alt="Abstract illustration of complexity becoming clarity" className="h-[280px] sm:h-[360px] lg:h-[460px] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10" />
            <p className="absolute bottom-5 left-5 right-5 rounded-xl bg-background/95 px-5 py-4 text-sm font-medium text-primary shadow-sm">Start with the work. Build around the people.</p>
          </div>
        </div>
      </section>

      <section aria-label="Training and capability-building track record" className="border-y border-border/50 bg-secondary/20">
        <div className="container py-8 md:py-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {[["500+", "Professionals trained"], ["50+", "Organisations served"], ["4.9/5", "Average learner rating"], ["95%", "Would recommend"]].map(([value, label]) => (
              <div key={label} className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center"><Link href="/work" className="text-sm text-primary underline underline-offset-4">Our training track record</Link></div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl mb-10"><h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Move from possibility to practice.</h2></div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, label, href }) => (
              <div key={title} className="flex flex-col rounded-2xl border border-border/60 bg-card p-7 md:p-8">
                <Icon aria-hidden="true" className="mb-8 h-8 w-8 text-accent" />
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>
                <Link href={href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4">{label}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
              </div>
            ))}
          </div>
          <Link href="/services" className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:underline underline-offset-4">Explore all services <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Selected experience</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-5">Grounded in real work.</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">Technical understanding, operating experience and practical teaching come together.</p>
            <Link href="/work" className="inline-flex items-center gap-2 font-medium text-primary hover:underline underline-offset-4">Explore experience & evidence <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
          </div>
          <div className="divide-y divide-border">
            {[
              ["01", "Public infrastructure", "Practitioner experience in infrastructure and operations, alongside AI capability building for public-sector teams."],
              ["02", "Applied learning", "Associate Lecturer since 2021, teaching AI, Python and analytics."],
              ["03", "Business transformation", "Management and transformation experience across finance, F&B and digital platforms."],
            ].map(([number, title, description]) => (
              <div key={title} className="flex gap-5 py-7 first:pt-0 last:pb-0">
                <span className="pt-1 text-sm font-semibold text-accent" aria-hidden="true">{number}</span>
                <div><h3 className="text-xl font-serif font-bold text-primary mb-2">{title}</h3><p className="text-muted-foreground leading-relaxed">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="rounded-[2rem] bg-primary px-6 py-12 md:p-16 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">Where could AI make a difference?</h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed opacity-90 mb-8">Start with a conversation about your priorities and the work you want to improve.</p>
          <Button asChild size="lg" className="h-auto min-h-12 max-w-full whitespace-normal rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-7 py-3 text-base"><Link href="/contact">Discuss your priorities <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
