import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappMessage = `Hello! I'm ${formData.firstName} ${formData.lastName}

Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (remove + and any spaces)
    const whatsappNumber = "6588494321";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-24 bg-background text-center">
        <div className="container max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform complexity into clarity? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <Card className="bg-secondary/30 border-none shadow-none">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-primary mb-4">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-accent mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a href="mailto:hi@jiseek.com" className="text-muted-foreground hover:text-primary transition-colors">hi@jiseek.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <Card className="border border-border/50 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Jane" 
                          className="bg-background" 
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
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
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="jane@company.com" 
                        className="bg-background"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Training Inquiry" 
                        className="bg-background"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project or training needs..." 
                        className="min-h-[150px] bg-background"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-8">
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
