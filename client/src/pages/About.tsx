import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-24 bg-secondary/20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              About Jiseek
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A boutique education, training, and consultancy brand enabling individuals and organizations to leverage data, digital tools, and mindful, ethical approaches to transformation.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/40 to-transparent hidden lg:block"></div>
      </section>

      {/* Founder & Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-muted">
                {/* Placeholder for Founder Image - using generated workspace image for now as proxy */}
                <img 
                  src="/assets/mindful-workspace.png" 
                  alt="Jiseek Workspace" 
                  className="w-full h-full object-cover"
                />
                <div className="lens-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
                <p className="font-serif italic text-primary text-lg">
                  "Technology with heart and values."
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jiseek began as a way to bridge the gap between deep technical expertise and truly human-centered digital success. In a world flooded with data, tools and digital noise, clarity has become rare and yet more essential than ever. Too often, organizations adopt technology for its own sake, losing sight of the people, purpose and culture that give transformation its meaning.
                </p>
                <p>
                  At Jiseek, we integrate training and consultancy in data analytics, AI, automation, cyber risk and digital communication with a coaching-driven mindset that supports real and lasting change. We do not simply plan and deploy. We cultivate the thinking, habits and capabilities that make transformation sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-accent">Our Vision</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To create a world where technology empowers people, strengthens purpose and enables organizations to grow with clarity, confidence and humanity.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-accent">Our Mission</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To guide organizations toward sustainable digital success by combining technical expertise with human-centered leadership. We equip teams with the skills, mindset and culture needed to use data, AI and automation responsibly, effectively and meaningfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Brand Pillars</h2>
            <p className="text-muted-foreground">The core values that define our identity and approach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clarity Amid Complexity",
                desc: "Cutting through the noise of AI hype and data overload to deliver clear, actionable guidance."
              },
              {
                title: "Mindful Transformation",
                desc: "Emphasizing not just what is possible, but what is right—technology that respects people."
              },
              {
                title: "Empowerment",
                desc: "Believing that education and capacity-building are as important as the technology itself."
              },
              {
                title: "Pragmatic Excellence",
                desc: "High technical standards committed to delivering real, measurable business value."
              },
              {
                title: "Regional Relevance",
                desc: "Deep understanding of Asian business contexts blended with global best practices."
              },
              {
                title: "Adaptive Innovation",
                desc: "Helping organizations stay future-ready by fostering curiosity, experimentation and continuous learning in a rapidly changing digital landscape."
              }
            ].map((val, i) => (
              <Card key={i} className="bg-secondary/20 border-none hover:bg-secondary/40 transition-colors">
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
      <section className="py-24 bg-secondary/30">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Join the Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're an SME looking to digitize or a corporate team needing upskilling, we're here to guide you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-8 rounded-full">
              Work With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
