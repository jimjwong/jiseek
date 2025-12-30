import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, BookOpen, Lightbulb, Mic2, Users, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "training",
      icon: <BookOpen className="w-8 h-8" />,
      title: "Training & Courses",
      desc: "Structured training modules on data analytics, machine learning, RPA/automation, AI literacy, and digital transformation fundamentals.",
      details: ["Data Analytics & ML", "RPA / Power Automate", "AI Literacy & Mindful AI", "Cyber-risk Awareness"]
    },
    {
      id: "consultancy",
      icon: <Wrench className="w-8 h-8" />,
      title: "Consultancy & Advisory",
      desc: "Strategic consulting for organizations wanting to transform digitally—from strategy to execution.",
      details: ["Data Strategy", "Automation Roadmaps", "Tool Evaluation", "Digital Governance"]
    },
    {
      id: "workshops",
      icon: <Users className="w-8 h-8" />,
      title: "Workshops & Labs",
      desc: "Interactive, practical workshops aimed at building capability from the ground up through hands-on exercises.",
      details: ["Hands-on ML Demos", "Automation Build Labs", "Scenario-based Exercises", "Team Capability Building"]
    },
    {
      id: "speaking",
      icon: <Mic2 className="w-8 h-8" />,
      title: "Thought Leadership",
      desc: "Speaking engagements and keynote addresses on themes combining technical insight with values-driven reflection.",
      details: ["Keynote Speaking", "Mindful AI Themes", "Ethical Transformation", "Human-Centric Data Culture"]
    },
    {
      id: "coaching",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Coaching",
      desc: "Coaching individuals and teams to adopt new tools and mindsets, helping leaders steer transformation sustainably.",
      details: ["Leadership Coaching", "Change Management", "Digital Mindset", "Internal Capacity Building"]
    },
    {
      id: "content",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Content Development",
      desc: "Developing frameworks, playbooks, and training materials for clients who prefer in-house upskilling.",
      details: ["Custom Frameworks", "Training Playbooks", "Curriculum Design", "Resource Toolkits"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute right-[-10%] top-[-20%] w-[60vw] h-[60vw] rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Holistic solutions that blend technical pragmatism with human-centered values. We help you navigate the digital landscape with confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
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
                  <Link href="/contact">
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary hover:bg-secondary/50">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Who We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Jiseek is designed for those who care about sustainable change, culture, and employee development—not just short-term gains.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "SMEs in Asia", desc: "Digitizing workflows and adopting analytics without in-house expertise." },
                  { title: "Corporates", desc: "Undergoing digital transformation and needing team upskilling." },
                  { title: "Educational Institutions", desc: "Seeking courses in data analytics and AI literacy." },
                  { title: "Leaders & Executives", desc: "Seeking guidance on integrating AI in a values-driven way." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">
                        {i + 1}
                      </div>
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
               <img 
                  src="/assets/hero-clarity.png" 
                  alt="Abstract clarity" 
                  className="w-full h-full object-cover"
                />
               <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-background/90 backdrop-blur-md p-8 rounded-2xl max-w-xs text-center shadow-xl">
                   <h3 className="font-serif font-bold text-2xl text-primary mb-2">Partner with Us</h3>
                   <p className="text-muted-foreground mb-6">Let's define your digital future together.</p>
                   <Link href="/contact">
                     <Button className="w-full bg-primary text-primary-foreground font-serif">Get Started</Button>
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
