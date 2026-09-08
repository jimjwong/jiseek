import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, CheckCircle2, Layers, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const framework = ["Discover", "Prioritise", "Prototype", "Transform", "Scale"];

  const opportunities = [
    "Business Value",
    "Feasibility",
    "Readiness",
    "Risk",
    "Workforce Impact",
  ];

  const proofPoints = [
    "Computer Engineering background with business and financial-management training",
    "PhD research in Information Systems focused on AI and digital technologies",
    "Associate Lecturer experience since 2021 across AI, analytics, Python and related subjects",
    "Practitioner experience spanning public infrastructure, finance, F&B and digital transformation",
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/30 blur-[80px]" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
          <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              Jiseek AI Transformation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-primary">
              From AI experiments to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">measurable work transformation.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We help leadership teams identify high-value AI opportunities, redesign workflows, implement practical solutions, and build the capability to scale them responsibly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-8 h-12 rounded-full text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Book an AI Opportunity Diagnostic
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5 font-serif px-8 h-12 rounded-full text-lg">
                  Explore Our Approach
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground tracking-wide">
              Strategy • Workflow redesign • Implementation • Workforce capability
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[500px] lg:h-[650px] w-full animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/assets/hero-clarity.png"
                alt="AI transformation from complexity to measurable clarity"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[20s] ease-linear"
              />
              <div className="lens-overlay"></div>
            </div>
            <div className="absolute bottom-12 left-4 lg:bottom-20 lg:left-8 bg-card p-6 rounded-xl shadow-xl border border-border/50 max-w-sm hidden md:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-accent/10 rounded-full text-accent">
                  <Brain size={24} />
                </div>
                <h3 className="font-serif font-bold text-lg">AI with business intent</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Start with the work, the value and the people—not with a tool looking for a problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              AI pilots are easy. Organisation-wide value is harder.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most organisations do not need more AI demos. They need clarity on where AI creates value, which workflows should change, how to implement safely, and how to make the change stick.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Scattered experiments", desc: "Teams are trying AI, but initiatives are disconnected and difficult to scale." },
              { title: "Unclear ROI", desc: "Leadership sees activity but cannot yet connect it to measurable business outcomes." },
              { title: "Workflow gap", desc: "Tools are introduced without redesigning the work, roles and processes around them." },
              { title: "Readiness & risk", desc: "Capability, governance, adoption and change management are treated too late." },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-4 p-3 w-fit rounded-2xl bg-secondary text-primary">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                Jiseek AI Transformation Framework
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                A disciplined path from opportunity to impact.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We move beyond generic AI adoption by linking every initiative to work, outcomes, implementation readiness and measurable value.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-5 gap-4">
              {framework.map((stage, i) => (
                <div key={stage} className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-5">
                    {i + 1}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-primary">{stage}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/assets/complexity-to-clarity.png" className="w-full h-full object-cover mix-blend-overlay" alt="Background texture" />
        </div>
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-7">
            <div className="text-accent font-semibold tracking-wide">START HERE</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              AI Opportunity Diagnostic
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Before investing in another platform or pilot, identify where AI can materially improve work. We interview stakeholders, map workflows, surface use cases, assess readiness and prioritise the opportunities worth pursuing.
            </p>
            <ul className="space-y-3 opacity-95">
              {[
                "Leadership and stakeholder discovery",
                "Workflow and AI maturity assessment",
                "Prioritised AI use-case portfolio",
                "Risk, readiness and workforce considerations",
                "90-day priorities and a practical transformation roadmap",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif px-8 rounded-full">
                Discuss a Diagnostic <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-3xl border border-primary-foreground/20 p-8 md:p-10">
            <h3 className="text-2xl font-serif font-bold mb-3">Jiseek AI Opportunity Map</h3>
            <p className="opacity-80 mb-8">Each opportunity is assessed across five decision dimensions.</p>
            <div className="space-y-4">
              {opportunities.map((item, i) => (
                <div key={item} className="flex items-center gap-4 p-4 rounded-xl bg-background/10 border border-primary-foreground/10">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">{i + 1}</div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-5">From first decision to scaled transformation.</h2>
            <p className="text-lg text-muted-foreground">
              Engage Jiseek at the point you need us: executive alignment, diagnosis, rapid implementation, broader transformation, ongoing advisory or workforce capability building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Executive AI Briefing", "Align leadership on what AI means for your organisation, the decisions ahead and where to focus."],
              ["AI Opportunity Diagnostic", "Identify and prioritise the workflows and use cases most likely to create measurable value."],
              ["AI Transformation Sprint", "Prototype and implement selected use cases while redesigning the surrounding workflow."],
              ["AI Transformation Programme", "Coordinate multi-workstream transformation across functions, technology, people and governance."],
              ["AI Transformation Advisory", "Ongoing senior guidance for leaders steering AI adoption, investment and change."],
              ["AI Transformation Academy", "Build internal capability so leaders and teams can sustain transformation beyond the engagement."],
            ].map(([title, desc], i) => (
              <Card key={i} className="border-border/50 shadow-lg bg-card/70">
                <CardHeader>
                  <div className="mb-3 p-3 w-fit rounded-2xl bg-secondary text-primary">
                    {i % 2 === 0 ? <Layers className="w-7 h-7" /> : <Users className="w-7 h-7" />}
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/services">
              <Button variant="link" className="text-primary font-bold text-lg p-0 hover:text-accent transition-colors group">
                Explore AI Transformation Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-3">Experience behind the work</div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5">Led by a practitioner who works across technology, business and learning.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">
                Jiseek is led by Jim Wong, Founder & Principal, AI Transformation. His background combines engineering, business, higher education, AI and transformation—useful when the problem crosses leadership, workflows, technology and people.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/work">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif rounded-full px-7">Experience & Evidence</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="font-serif rounded-full px-7">About Jim & Jiseek</Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {proofPoints.map((item, i) => (
                <div key={item} className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Built for organisations that need AI to work in the real world.</h2>
            <p className="text-lg text-muted-foreground">Especially where leadership, operations, workforce capability and implementation have to move together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Leadership & transformation teams",
              "Public sector & infrastructure",
              "Education & professional services",
              "SMEs & growing organisations",
            ].map((item) => (
              <div key={item} className="bg-card rounded-2xl border border-border/50 p-7 text-center shadow-sm">
                <div className="w-11 h-11 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-5">Mindful transformation remains our principle</p>
          <blockquote className="text-3xl md:text-5xl font-serif font-bold leading-tight text-primary">
            “Technology should improve the work and strengthen the people doing it—not become the objective itself.”
          </blockquote>
        </div>
      </section>

      <section className="py-24 bg-background pt-0">
        <div className="container">
          <div className="bg-secondary/30 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-50%] left-[20%] w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px]"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-7">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Find where AI can create measurable value in your organisation.</h2>
              <p className="text-lg text-muted-foreground">
                Start with a focused conversation about your priorities, workflows and current AI initiatives.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-10 h-14 rounded-full text-lg shadow-xl">
                  Book a Diagnostic Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
