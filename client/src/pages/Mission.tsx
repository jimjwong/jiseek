import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Target, Lightbulb, Users, Heart, Compass, Sparkles } from "lucide-react";

export default function Mission() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-24 bg-secondary/20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Guiding organizations toward sustainable digital success by combining technical expertise with human-centered leadership.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/40 to-transparent hidden lg:block"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-4">
              <Target className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent">
              What Drives Us
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              We equip teams with the skills, mindset and culture needed to use data, AI and automation responsibly, effectively and meaningfully. Our mission is to transform complexity into clarity, enabling organizations to thrive in the digital age while staying true to their values and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Core Commitments
            </h2>
            <p className="text-lg text-muted-foreground">
              These commitments guide everything we do—from training design to client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-secondary/20 border-none hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">
                  Clarity Over Hype
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We cut through the noise of AI buzzwords and tech trends to deliver clear, actionable guidance that makes sense for your specific context and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-none hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">
                  People-First Technology
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology should serve people, not the other way around. We champion solutions that respect human dignity, enhance capabilities, and foster meaningful work.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-none hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">
                  Capability Building
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just deliver solutions—we build lasting capability within your teams through education, coaching, and hands-on practice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-none hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">
                  Ethical Leadership
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Digital transformation must be guided by ethics, responsibility and values. We help organizations navigate complex decisions with integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-none hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">
                  Pragmatic Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We balance cutting-edge innovation with practical implementation, ensuring that new technologies deliver real, measurable business value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-none hover:shadow-lg transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">
                  Sustainable Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on long-term, sustainable transformation rather than quick fixes—building foundations that support continuous growth and adaptation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Who We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Our mission comes to life through partnerships with diverse organizations across Asia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none bg-background">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-serif font-bold text-2xl text-primary">
                    Small & Medium Enterprises
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Helping SMEs navigate their digital journey with accessible, practical solutions that don't require massive budgets or technical teams. We demystify technology and make it work for growing businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-background">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-serif font-bold text-2xl text-primary">
                    Corporate Teams
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Empowering corporate teams with advanced skills in data analytics, AI, and automation. We help large organizations build internal capabilities and foster a culture of continuous learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-background">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-serif font-bold text-2xl text-primary">
                    Educational Institutions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Partnering with schools, universities, and training organizations to develop curricula and programs that prepare the next generation for the digital economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-background">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-serif font-bold text-2xl text-primary">
                    Purpose-Driven Organizations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supporting non-profits, social enterprises, and mission-driven organizations in leveraging technology to amplify their impact while staying true to their values.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Our Vision for Impact
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a future where organizations across Asia are empowered to harness technology not just for competitive advantage, but for genuine positive impact—on their people, their communities, and their industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A future where digital transformation is synonymous with human flourishing, where AI augments human creativity rather than replacing it, and where data-driven decision making is balanced with wisdom, empathy, and ethical consideration.
            </p>
            <div className="pt-8">
              <blockquote className="text-2xl font-serif italic text-primary">
                "Technology with heart and values—that's the Jiseek way."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6">
            Join Us in This Mission
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're just beginning your digital journey or looking to deepen your organization's capabilities, we're here to partner with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services">
              <Button size="lg" variant="secondary" className="font-serif px-8 rounded-full">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif px-8 rounded-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

