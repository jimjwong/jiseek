import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    role: "",
    subject: "AI Opportunity Diagnostic",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hello Jiseek, I'm ${formData.firstName} ${formData.lastName}.

Organisation: ${formData.organisation}
Role: ${formData.role}
Email: ${formData.email}
Interest: ${formData.subject}

What we are trying to improve:
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "6588494321";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="flex flex-col w-full">
      <section className="py-24 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Start with the opportunity</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Where could AI materially improve work in your organisation?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Tell us what you are trying to improve. We will help you determine whether an AI Opportunity Diagnostic, transformation sprint, advisory engagement or capability programme is the right next step.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-muted-foreground">Prefer email?</p>
            <a href="mailto:hi@jiseek.com" className="text-primary font-semibold hover:text-accent transition-colors">hi@jiseek.com</a>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-8">
              <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <div className="text-accent font-semibold tracking-wide text-sm mb-3">AI OPPORTUNITY DIAGNOSTIC</div>
                    <h3 className="font-serif font-bold text-2xl mb-4">A practical starting point.</h3>
                    <p className="opacity-85 leading-relaxed">
                      Instead of starting with a tool, we start with your priorities, workflows and constraints—then identify the AI opportunities worth pursuing.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Leadership and stakeholder discovery",
                      "Workflow and AI maturity assessment",
                      "Prioritised AI use-case portfolio",
                      "Readiness, risk and workforce considerations",
                      "90-day priorities and transformation roadmap",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm opacity-90">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30 border-none shadow-none">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Direct contact</p>
                      <a href="mailto:hi@jiseek.com" className="text-muted-foreground hover:text-primary transition-colors">hi@jiseek.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-8">
              <Card className="border border-border/50 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-3">Start a diagnostic conversation</h2>
                    <p className="text-muted-foreground">
                      A few details will help us make the first conversation useful rather than generic.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Jane"
                          className="bg-background"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-background"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="organisation">Organisation</Label>
                        <Input
                          id="organisation"
                          placeholder="Company / Agency / Institution"
                          className="bg-background"
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Input
                          id="role"
                          placeholder="CEO, HOD, Transformation Lead..."
                          className="bg-background"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        className="bg-background"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">What are you exploring?</Label>
                      <Input
                        id="subject"
                        placeholder="AI Opportunity Diagnostic"
                        className="bg-background"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">What work, process or business outcome are you trying to improve?</Label>
                      <Textarea
                        id="message"
                        placeholder="For example: Our teams are already using GenAI, but we need to identify which workflows should be redesigned and how to measure the value..."
                        className="min-h-[170px] bg-background"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-8">
                      Start Conversation via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What happens next</h2>
            <p className="text-muted-foreground">The first objective is clarity—not a hard sell.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              ["1", "Understand", "We discuss your priorities, current AI activity, workflows and constraints."],
              ["2", "Frame", "We identify whether there is a material transformation opportunity and the right scope."],
              ["3", "Recommend", "You receive a clear next-step recommendation: diagnostic, sprint, programme, advisory or capability building."],
            ].map(([number, title, desc]) => (
              <div key={number} className="bg-background rounded-2xl border border-border/50 p-7 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-5">{number}</div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
