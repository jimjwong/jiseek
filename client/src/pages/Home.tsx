import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, CheckCircle2, Layers, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section - Asymmetric Balance */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[100px]" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/30 blur-[80px]" />
        </div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              Mindful Digital Transformation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-primary">
              Complexity into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Clarity.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Empowering organizations in Asia to leverage data, AI, and automation—grounded in ethical, human-centered principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-8 h-12 rounded-full text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Explore Services
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5 font-serif px-8 h-12 rounded-full text-lg">
                  Our Philosophy
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] w-full animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
              <img 
                src="/assets/hero-clarity.png" 
                alt="Abstract visualization of complexity turning into clarity" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[20s] ease-linear"
              />
              <div className="lens-overlay"></div>
            </div>
            
            {/* Floating Cards - Parallax feel */}
            <div className="absolute bottom-16 left-4 lg:bottom-24 lg:left-8 bg-card p-6 rounded-xl shadow-xl border border-border/50 max-w-xs hidden md:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-accent/10 rounded-full text-accent">
                  <Brain size={24} />
                </div>
                <h3 className="font-serif font-bold text-lg">Mindful AI</h3>
              </div>
              <p className="text-sm text-muted-foreground">Use AI with intention. Right intention brings right results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Content First */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Why Jiseek?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a fast-changing digital landscape, we help you cut through the noise. We blend deep technical expertise with the heart of a mission-driven education brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-10 h-10 text-accent" />,
                title: "Hybrid Expertise",
                desc: "Fusing data science, ML, and automation with leadership coaching and ethical mindfulness."
              },
              {
                icon: <CheckCircle2 className="w-10 h-10 text-accent" />,
                title: "Pragmatic + Ethical",
                desc: "Practical solutions anchored in ethics, people, and long-term value—not just tech for tech's sake."
              },
              {
                icon: <Users className="w-10 h-10 text-accent" />,
                title: "Asia-Centric",
                desc: "Global best practices tailored for the regional business and cultural context of Singapore and Asia."
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:bg-card transition-colors duration-300 group">
                <CardHeader>
                  <div className="mb-4 p-3 w-fit rounded-2xl bg-secondary group-hover:bg-accent/10 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Overlapping Elements */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="/assets/human-tech-interaction.png" 
                  alt="Human interacting with ethical technology" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50 -z-10"></div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Our Core Offerings
              </h2>
              <p className="text-lg text-muted-foreground">
                From structured training to strategic advisory, we provide end-to-end support to help you navigate digital disruption with integrity.
              </p>
              
              <div className="space-y-6">
                {[
                  "Public & Corporate Training Courses",
                  "Consultancy & Strategic Advisory",
                  "Thought Leadership & Keynotes",
                  "Coaching & Capacity Building"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors cursor-default">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-lg font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/services">
                <Button variant="link" className="text-primary font-bold text-lg p-0 hover:text-accent transition-colors group">
                  View All Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Vision Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="/assets/complexity-to-clarity.png" className="w-full h-full object-cover mix-blend-overlay" alt="Background texture" />
        </div>
        <div className="container relative z-10 text-center">
          <blockquote className="max-w-4xl mx-auto space-y-8">
            <p className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              "What good is efficiency or AI if people and purpose are lost?"
            </p>
            <footer className="text-xl md:text-2xl font-light opacity-90">
              — Jiseek Philosophy
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="bg-secondary/30 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[-50%] left-[20%] w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl font-serif font-bold text-primary">Ready to Transform?</h2>
              <p className="text-lg text-muted-foreground">
                Let's build clarity, adopt the right tools, and embed sustainable change in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-10 h-14 rounded-full text-lg shadow-xl">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
