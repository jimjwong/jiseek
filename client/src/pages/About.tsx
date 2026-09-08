import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-24 bg-secondary/20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Jiseek AI Transformation</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Helping organisations turn AI potential into better work.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jiseek is an AI transformation practice helping organisations move from experimentation to measurable operational change through strategy, workflow redesign, implementation, advisory and workforce capability building.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/40 to-transparent hidden lg:block"></div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-muted">
                <img
                  src="/assets/mindful-workspace.png"
                  alt="Jiseek AI transformation workspace"
                  className="w-full h-full object-cover"
                />
                <div className="lens-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
                <p className="font-serif italic text-primary text-lg">
                  “Start with the work and the value—not with the tool.”
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent mb-3">Led by Jim Wong</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  Practitioner, educator and transformation partner.
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jiseek was built around a simple observation: organisations rarely struggle because they lack access to technology. They struggle to decide where technology matters, how work needs to change around it, and how people can adopt that change sustainably.
                </p>
                <p>
                  Our work therefore connects business priorities, AI and data, workflow design, implementation and capability building. We bring technical understanding together with a strong focus on leadership, people and measurable outcomes.
                </p>
                <p>
                  Jim Wong leads Jiseek as Founder & Principal, AI Transformation. His work spans technology, analytics, AI, education and organisational transformation, allowing Jiseek to bridge the gap between executive intent and practical execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="text-accent font-semibold tracking-wide mb-3">OUR POINT OF VIEW</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">AI transformation is a work transformation problem.</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              The technology matters, but lasting value comes from redesigning decisions, workflows, roles, capability and governance around it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Value before novelty", desc: "Prioritise opportunities that can materially improve outcomes, productivity, service or decision quality." },
              { title: "Work before tools", desc: "Understand the workflow and the people inside it before deciding what technology should change." },
              { title: "Capability before dependence", desc: "Build the organisation's ability to sustain and scale change instead of creating permanent reliance on consultants." }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-7">
                <h3 className="text-2xl font-serif font-bold text-accent mb-3">{item.title}</h3>
                <p className="opacity-85 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="border-border/50 shadow-sm">
            <CardContent className="pt-8">
              <h3 className="text-3xl font-serif font-bold text-primary mb-5">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A future where organisations use AI to improve the quality, productivity and humanity of work—not simply to add more technology.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50 shadow-sm">
            <CardContent className="pt-8">
              <h3 className="text-3xl font-serif font-bold text-primary mb-5">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help leadership teams identify the right AI opportunities, turn them into practical change, and build the organisational capability to sustain the transformation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">How We Work</h2>
            <p className="text-muted-foreground">Mindful transformation remains part of Jiseek's DNA, expressed through practical operating principles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Clarity Amid Complexity", desc: "Cut through AI hype and competing tools to establish a clear transformation agenda." },
              { title: "Measurable Value", desc: "Connect initiatives to business outcomes and define what success should look like before scaling." },
              { title: "Human-Centred Change", desc: "Design new ways of working around the people who will actually use, manage and govern them." },
              { title: "Pragmatic Experimentation", desc: "Prototype quickly enough to learn, but deliberately enough to avoid innovation theatre." },
              { title: "Responsible Adoption", desc: "Consider governance, risk, ethics and workforce impact as part of implementation—not an afterthought." },
              { title: "Capability Transfer", desc: "Leave clients with stronger internal capability, reusable methods and confidence to continue independently." }
            ].map((val) => (
              <Card key={val.title} className="bg-background border-none hover:bg-card transition-colors">
                <CardContent className="pt-6">
                  <h4 className="font-serif font-bold text-xl text-primary mb-3">{val.title}</h4>
                  <p className="text-muted-foreground">{val.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Where could AI materially improve work in your organisation?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start with a conversation about your business priorities, workflows and current AI initiatives.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-8 rounded-full">
              Book a Diagnostic Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
