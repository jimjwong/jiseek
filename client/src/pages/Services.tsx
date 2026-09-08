import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, BookOpen, Lightbulb, Mic2, Users, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "briefing",
      icon: <Mic2 className="w-8 h-8" />,
      title: "Executive AI Briefing",
      desc: "A focused leadership session to align senior stakeholders on what AI means for the organisation, where value may sit, and which decisions matter now.",
      details: ["Leadership Alignment", "AI Landscape & Implications", "Opportunity Framing", "Priority Decisions"]
    },
    {
      id: "diagnostic",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Opportunity Diagnostic",
      desc: "Our recommended starting point. We map workflows, surface AI opportunities and prioritise the use cases most likely to create measurable business value.",
      details: ["Stakeholder Discovery", "Workflow Mapping", "AI Opportunity Map", "90-Day Roadmap"]
    },
    {
      id: "sprint",
      icon: <Wrench className="w-8 h-8" />,
      title: "AI Transformation Sprint",
      desc: "Turn selected opportunities into working change through rapid prototyping, workflow redesign, implementation and adoption support.",
      details: ["Use-Case Design", "Rapid Prototyping", "Workflow Redesign", "Implementation & Adoption"]
    },
    {
      id: "programme",
      icon: <Users className="w-8 h-8" />,
      title: "AI Transformation Programme",
      desc: "A broader transformation engagement for organisations coordinating multiple AI workstreams across business functions, people, technology and governance.",
      details: ["Transformation Roadmap", "Multi-Workstream Delivery", "Governance & Change", "Benefits Tracking"]
    },
    {
      id: "advisory",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI Transformation Advisory",
      desc: "Ongoing senior advisory for leaders who need an experienced external partner to guide AI priorities, investments, vendors, governance and organisational change.",
      details: ["Leadership Advisory", "Portfolio Prioritisation", "Vendor & Tool Decisions", "Governance & Measurement"]
    },
    {
      id: "academy",
      icon: <BookOpen className="w-8 h-8" />,
      title: "AI Transformation Academy",
      desc: "Capability building connected directly to transformation priorities—so leaders and teams can sustain new ways of working after the engagement ends.",
      details: ["Executive Capability", "Role-Based Learning", "Applied AI Labs", "Internal Champions"]
    }
  ];

  const framework = [
    { title: "Discover", desc: "Understand priorities, pain points, workflows and readiness." },
    { title: "Prioritise", desc: "Score opportunities by value, feasibility, readiness, risk and workforce impact." },
    { title: "Prototype", desc: "Test the highest-value use cases quickly with real users and work." },
    { title: "Transform", desc: "Redesign workflows, implement solutions and support adoption." },
    { title: "Scale", desc: "Build governance, capability and measurement for sustained impact." }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-[-10%] top-[-20%] w-[60vw] h-[60vw] rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-accent font-semibold tracking-wide mb-4">JISEEK AI TRANSFORMATION</div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Move from AI activity to measurable impact.
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Strategy, diagnosis, implementation, advisory and workforce capability—designed around the work that needs to change, not around a particular AI tool.
          </p>
        </div>
      </section>

      {/* Recommended starting point */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-5xl mx-auto rounded-3xl bg-background border border-border/60 shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-3">Recommended starting point</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">AI Opportunity Diagnostic</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Before funding another pilot or buying another platform, establish where AI can materially improve work. We turn interviews, workflow analysis and use-case assessment into a prioritised portfolio and practical roadmap.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                {["Leadership & stakeholder interviews", "Workflow and AI maturity assessment", "Prioritised use-case portfolio", "90-day priorities and roadmap"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif rounded-full px-8">
                  Discuss a Diagnostic
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Engage us at the point you need us.</h2>
            <p className="text-lg text-muted-foreground">The services form a progression, but they can also be commissioned independently depending on your organisation's maturity and priorities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} id={service.id} className="flex flex-col h-full border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group scroll-mt-24">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-serif text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {service.desc}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary hover:bg-secondary/50">
                      Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="text-accent font-semibold tracking-wide mb-3">OUR APPROACH</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Discover → Prioritise → Prototype → Transform → Scale</h2>
            <p className="text-lg opacity-85">A simple operating framework that keeps AI investment connected to business value, implementation realities and workforce impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {framework.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6">
                <div className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-5">{i + 1}</div>
                <h3 className="font-serif font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Who We Serve</h2>
              <p className="text-lg text-muted-foreground">
                We work best with organisations that have moved beyond curiosity and now need leadership clarity, operational redesign and practical implementation.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Leadership & Transformation Teams", desc: "Turning fragmented AI activity into an organisation-level agenda." },
                  { title: "Public Sector & Infrastructure", desc: "Applying AI where operational resilience, governance and people matter together." },
                  { title: "Education & Professional Services", desc: "Redesigning knowledge work and building role-relevant AI capability." },
                  { title: "SMEs & Growing Organisations", desc: "Prioritising high-value use cases without needing a large in-house AI team." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">{i + 1}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/assets/hero-clarity.png" alt="From AI complexity to business clarity" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="bg-background/90 backdrop-blur-md p-8 rounded-2xl max-w-sm text-center shadow-xl">
                  <h3 className="font-serif font-bold text-2xl text-primary mb-2">Not sure where to start?</h3>
                  <p className="text-muted-foreground mb-6">Start by identifying where AI can create measurable value in your organisation.</p>
                  <Link href="/contact">
                    <Button className="w-full bg-primary text-primary-foreground font-serif">Book a Diagnostic Conversation</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
