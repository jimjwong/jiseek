import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah C.",
      role: "Data Analyst",
      content: "Jim's training on data analytics was transformative for our team. His approach with Jiseek goes beyond just teaching tools—he helps you understand the 'why' behind the data. The mindful AI framework he introduced has completely changed how we approach automation projects.",
      rating: 5,
      course: "Data Analytics & Machine Learning Fundamentals"
    },
    {
      name: "Rajesh K.",
      role: "Digital Transformation Manager",
      content: "Working with Jiseek was a game-changer for our digital transformation journey. Jim's consultancy didn't just give us a roadmap—he coached our leadership team to think differently about technology. His emphasis on ethical AI and human-centered design resonated deeply with our values.",
      rating: 5,
      course: "Digital Transformation Strategy Consultancy"
    },
    {
      name: "Michelle T.",
      role: "Operations Director",
      content: "As an SME, we were overwhelmed by the complexity of automation. Jim and the Jiseek team made it accessible and practical. The RPA workshop was hands-on, relevant, and immediately applicable. We've already automated three key processes and saved countless hours.",
      rating: 5,
      course: "RPA & Power Automate Workshop"
    },
    {
      name: "Dr. Ahmad H.",
      role: "Head of Analytics",
      content: "Jim's expertise in data analytics is matched only by his ability to communicate complex concepts clearly. His training program at Jiseek helped our clinical team understand how to leverage data responsibly while maintaining patient privacy. Highly recommended.",
      rating: 5,
      course: "Healthcare Data Analytics Program"
    },
    {
      name: "Linda W.",
      role: "HR Director",
      content: "The AI literacy program from Jiseek was exactly what our organization needed. Jim's mindful approach to AI adoption helped our employees feel empowered rather than threatened. The sessions were engaging, practical, and thought-provoking.",
      rating: 5,
      course: "AI Literacy & Mindful AI Implementation"
    },
    {
      name: "Kevin L.",
      role: "Startup Founder",
      content: "Jim's consultancy through Jiseek helped us avoid costly mistakes in our data strategy. His pragmatic yet values-driven approach gave us both technical direction and ethical guardrails. Worth every penny and more.",
      rating: 5,
      course: "Data Strategy & Governance Consultancy"
    },
    {
      name: "Priya S.",
      role: "Learning & Development Lead",
      content: "We've worked with many training providers, but Jiseek stands out. Jim's delivery is engaging, his content is relevant to Asian business contexts, and his follow-up support is exceptional. Our team still references the materials months later.",
      rating: 5,
      course: "Advanced Data Visualization & Storytelling"
    },
    {
      name: "David N.",
      role: "CTO",
      content: "Jim's workshop on automation was a revelation. He didn't just show us the 'how'—he challenged us to think about the 'should we?' His ethical framework for automation decisions has become part of our company culture now. Jiseek delivers real transformation.",
      rating: 5,
      course: "Automation Strategy & Ethics Workshop"
    },
    {
      name: "Amelia Z.",
      role: "Product Manager",
      content: "The machine learning fundamentals course at Jiseek demystified AI for our product team. Jim's teaching style is clear, patient, and grounded in real-world applications. We went from intimidated to empowered in just a few sessions.",
      rating: 5,
      course: "Machine Learning Fundamentals for Product Teams"
    },
    {
      name: "Marcus L.",
      role: "Business Intelligence Manager",
      content: "Jiseek's approach to data culture transformation is unique. Jim didn't just train our BI team—he worked with leadership to create an environment where data-driven decisions could thrive. The results speak for themselves: better insights, faster decisions, more confidence.",
      rating: 5,
      course: "Building a Data-Driven Organization"
    },
    {
      name: "Fatimah I.",
      role: "Non-Profit Director",
      content: "Jim's work with our non-profit through Jiseek was transformative. He understood our mission and constraints, providing pro-bono consultancy that helped us leverage data to increase our impact. His commitment to purpose-driven organizations is genuine and inspiring.",
      rating: 5,
      course: "Data for Social Impact Consultancy"
    },
    {
      name: "Thomas O.",
      role: "Senior Analyst",
      content: "The public sector training program Jim delivered was outstanding. He tailored the content to our governance requirements while pushing us to innovate. Jiseek's training is world-class but grounded in local realities.",
      rating: 5,
      course: "Government Data Analytics & AI Ethics"
    }
  ];

  const stats = [
    { number: "500+", label: "Professionals Trained" },
    { number: "50+", label: "Organizations Served" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "95%", label: "Would Recommend" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-24 bg-secondary/20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Testimonials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear from professionals and organizations who have experienced transformation through Jiseek's training, consultancy, and thought leadership.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/40 to-transparent hidden lg:block"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-secondary/10 border-none hover:shadow-lg transition-all relative">
                <CardContent className="pt-8 pb-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Course/Program */}
                  <div className="pt-2">
                    <span className="text-xs font-medium text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                      {testimonial.course}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <Avatar className="h-12 w-12 bg-primary/20">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
              What Sets Jiseek Apart
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-background border-none text-center">
                <CardContent className="pt-8 space-y-4">
                  <div className="text-4xl font-serif text-primary">🎯</div>
                  <h3 className="font-serif font-bold text-xl text-primary">
                    Practical & Relevant
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Training and consultancy grounded in real Asian business contexts, not generic theory
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none text-center">
                <CardContent className="pt-8 space-y-4">
                  <div className="text-4xl font-serif text-primary">💡</div>
                  <h3 className="font-serif font-bold text-xl text-primary">
                    Mindful & Ethical
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Technology solutions that respect people, values, and responsible innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none text-center">
                <CardContent className="pt-8 space-y-4">
                  <div className="text-4xl font-serif text-primary">🤝</div>
                  <h3 className="font-serif font-bold text-xl text-primary">
                    Long-term Partnership
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ongoing support and coaching beyond one-off training sessions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join the growing community of professionals and organizations experiencing meaningful digital transformation with Jiseek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/services" className="inline-block">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif px-8 py-3 rounded-full text-lg transition-all">
                Explore Our Services
              </button>
            </a>
            <a href="/contact" className="inline-block">
              <button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-serif px-8 py-3 rounded-full text-lg transition-all">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

