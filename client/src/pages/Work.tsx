import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, BriefcaseBusiness, Building2, CheckCircle2, GraduationCap, Gauge, LineChart, Quote, ShieldCheck, Star } from "lucide-react";
import { Link } from "wouter";

export default function Work() {
  const trackRecord = [
    { number: "500+", label: "Professionals trained" },
    { number: "50+", label: "Organisations served" },
    { number: "4.9/5", label: "Average learner rating" },
    { number: "95%", label: "Would recommend" },
  ];

  const testimonials = [
    {
      name: "Alex T. — Placeholder",
      role: "Operations Manager — Sample profile",
      quote: "Jim made AI practical for our team. The session moved quickly from concepts into workflows we could immediately recognise and improve.",
      context: "AI & Productivity Programme",
    },
    {
      name: "Priya N. — Placeholder",
      role: "Learning & Development Lead — Sample profile",
      quote: "What stood out was the connection between technology, business outcomes and people. It was not simply a tour of AI tools.",
      context: "Enterprise GenAI Programme",
    },
    {
      name: "Marcus L. — Placeholder",
      role: "Transformation Manager — Sample profile",
      quote: "The facilitation helped us identify where AI could genuinely improve work instead of creating more disconnected experiments.",
      context: "AI Transformation Workshop",
    },
    {
      name: "Sarah K. — Placeholder",
      role: "Senior Analyst — Sample profile",
      quote: "Complex ideas were explained clearly and tied back to real work. The programme gave our team confidence to apply the concepts responsibly.",
      context: "Data & AI Capability Programme",
    },
  ];

  const experience = [
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Public sector & infrastructure",
      desc: "Practitioner experience in public infrastructure and operations, combined with current work helping public-sector teams build practical AI capability and translate operational problems into usable AI opportunities."
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Higher education & professional learning",
      desc: "Associate Lecturer experience since 2021 across AI, Python, analytics, data visualisation, mathematics and business-related subjects, with a focus on turning technical concepts into applied capability."
    },
    {
      icon: <BriefcaseBusiness className="w-7 h-7" />,
      title: "Enterprise transformation",
      desc: "Transformation and management experience spanning financial services, F&B, digital platforms and advisory work—bringing a business and operating-model lens to technology adoption."
    },
    {
      icon: <Bot className="w-7 h-7" />,
      title: "AI, data & automation",
      desc: "Design and delivery of corporate programmes and applied work across GenAI, automation, analytics, productivity and AI-enabled ways of working."
    }
  ];

  const founderCredentials = [
    "Computer Engineering background",
    "MSc in Asset & Wealth Management",
    "PhD research in Information Systems",
    "Associate Lecturer since 2021",
    "Experience across public infrastructure, finance, F&B and digital transformation"
  ];

  const engagementPatterns = [
    {
      sector: "Operational / public-sector team",
      challenge: "Teams are experimenting with GenAI, but leadership needs a clearer view of where it can improve real operational work.",
      intervention: "Executive framing, workflow discovery, use-case prioritisation and role-relevant capability building.",
      evidence: "Use-case portfolio, prioritisation rationale, adoption signals and agreed next-step experiments."
    },
    {
      sector: "Knowledge-work / professional team",
      challenge: "Staff have access to AI tools but use is inconsistent, task-level and difficult to translate into repeatable productivity gains.",
      intervention: "Map recurring work, identify repeatable AI patterns, redesign selected workflows and build team capability around them.",
      evidence: "Baseline versus redesigned workflow, time/cycle measurements, quality checks and adoption data."
    },
    {
      sector: "SME / growing organisation",
      challenge: "Management sees many possible AI tools but lacks an internal team to decide what to implement first.",
      intervention: "AI Opportunity Diagnostic followed by rapid prototyping of the highest-value, feasible opportunities.",
      evidence: "Prioritised business case, prototype results, implementation effort, owner and 90-day roadmap."
    }
  ];

  const measures = [
    { icon: <Gauge className="w-6 h-6" />, title: "Productivity", desc: "Time saved, cycle-time reduction and throughput." },
    { icon: <LineChart className="w-6 h-6" />, title: "Business outcome", desc: "Service, revenue, cost, quality or decision improvements relevant to the use case." },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "Adoption", desc: "Whether people actually use the redesigned workflow consistently." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Readiness & risk", desc: "Capability, governance, data and operational constraints that affect scaling." }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-[-10%] top-[-20%] w-[60vw] h-[60vw] rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="container relative z-10 max-w-4xl">
          <div className="text-accent font-semibold tracking-wide mb-4">EXPERIENCE & EVIDENCE</div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Built on practice, not AI theatre.</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-3xl">
            Jiseek combines technical understanding, operating experience, teaching and transformation work. We distinguish between our established capability-building track record and the measurable business evidence we build through transformation engagements.
          </p>
        </div>
      </section>

      <section className="py-14 bg-secondary/30 border-b border-border/50">
        <div className="container">
          <div className="text-center mb-8">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-2">Training & capability-building track record</div>
            <p className="text-sm text-muted-foreground">Existing evidence of delivery scale, learner experience and organisational exposure.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {trackRecord.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-background border border-border/60 p-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-4">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-3">Led by Jim Wong</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-5">Practitioner, educator and researcher.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">
                The proposition is intentionally interdisciplinary: understand the technology, understand the work, communicate it clearly to people, and connect implementation to business outcomes.
              </p>
              <Link href="/about">
                <Button variant="outline" className="font-serif">About Jim & Jiseek <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {founderCredentials.map((item, i) => (
                <div key={item} className={`rounded-2xl border border-border/60 bg-card p-6 shadow-sm ${i === founderCredentials.length - 1 ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-3">Selected experience</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Experience across the systems that AI has to fit into.</h2>
            <p className="text-lg text-muted-foreground">Technology, operations, leadership and capability building are treated as one transformation problem rather than separate workstreams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((item) => (
              <Card key={item.title} className="border-border/50 bg-background shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3">{item.icon}</div>
                  <CardTitle className="font-serif text-2xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-3">What learners say</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Capability that feels relevant to the work.</h2>
            <p className="text-lg text-muted-foreground">These cards are layout placeholders only. They will be replaced with actual learner testimonials and names supplied by Jiseek before launch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border/50 bg-card shadow-sm relative overflow-hidden">
                <CardContent className="p-7 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="inline-flex rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-semibold">
                      PLACEHOLDER — REPLACE BEFORE LAUNCH
                    </div>
                    <div className="flex gap-1" aria-label="Sample five-star layout">
                      {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="w-4 h-4 text-primary fill-primary" />)}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-lg text-foreground leading-relaxed mb-6">“{testimonial.quote}”</p>
                  <div className="border-t border-border pt-5">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground mt-2">Sample context: {testimonial.context}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-3">Engagement patterns</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">What transformation work looks like in practice.</h2>
            <p className="text-lg text-muted-foreground">These are representative engagement patterns, not claims of named client results. Client-specific case studies will be published only where the underlying evidence and permissions are available.</p>
          </div>

          <div className="space-y-6">
            {engagementPatterns.map((item, i) => (
              <div key={item.sector} className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl border border-border/60 bg-background p-7 md:p-9 shadow-sm">
                <div className="lg:col-span-3">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">{i + 1}</div>
                  <h3 className="font-serif font-bold text-xl text-primary">{item.sector}</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-2">Challenge</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.challenge}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-2">Intervention</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.intervention}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-2">Evidence to capture</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.evidence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="text-accent font-semibold tracking-wide mb-3">THE JISEEK PROOF STANDARD</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Measure the change, not the enthusiasm.</h2>
            <p className="text-lg opacity-85">A successful workshop is not the same thing as a successful transformation. Where an engagement moves into implementation, we establish evidence that can be revisited after the novelty wears off.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {measures.map((item) => (
              <div key={item.title} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="bg-secondary/30 rounded-[3rem] p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-3">Start with evidence in mind</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What would have to change for an AI initiative to be worth doing?</h2>
              <p className="text-lg text-muted-foreground">The AI Opportunity Diagnostic turns that question into a prioritised use-case portfolio, measurement approach and practical roadmap.</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif rounded-full px-8">Book a Diagnostic Conversation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
