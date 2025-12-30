import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Award, CheckCircle2, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Programmes() {
  const programmes = [
    {
      category: "Data Analytics & Machine Learning",
      courses: [
        {
          title: "Data Analytics Fundamentals",
          duration: "2 Days",
          level: "Beginner",
          format: "In-Person / Virtual",
          description: "Master the foundations of data analysis, visualization, and storytelling with data. Learn to extract meaningful insights from business data.",
          topics: [
            "Data collection and cleaning",
            "Exploratory Data Analysis (EDA)",
            "Data visualization with modern tools",
            "Statistical analysis basics",
            "Creating impactful data stories"
          ],
          outcomes: [
            "Analyze business datasets confidently",
            "Create compelling data visualizations",
            "Present data-driven recommendations"
          ]
        },
        {
          title: "Machine Learning for Business",
          duration: "3 Days",
          level: "Intermediate",
          format: "In-Person / Virtual",
          description: "Understand ML concepts and applications in business contexts. Learn to identify ML opportunities and implement practical solutions.",
          topics: [
            "ML fundamentals and use cases",
            "Supervised vs Unsupervised learning",
            "Model training and evaluation",
            "Practical ML applications",
            "Ethics in ML and AI"
          ],
          outcomes: [
            "Identify ML opportunities in your business",
            "Understand ML project lifecycle",
            "Evaluate ML solutions effectively"
          ]
        },
        {
          title: "Advanced Analytics & Predictive Modeling",
          duration: "4 Days",
          level: "Advanced",
          format: "In-Person",
          description: "Deep dive into advanced analytics techniques, predictive modeling, and forecasting for strategic business decisions.",
          topics: [
            "Advanced statistical methods",
            "Time series analysis & forecasting",
            "Predictive modeling techniques",
            "Model optimization",
            "Business case applications"
          ],
          outcomes: [
            "Build predictive models",
            "Perform advanced forecasting",
            "Apply analytics to strategic planning"
          ]
        }
      ]
    },
    {
      category: "RPA & Automation",
      courses: [
        {
          title: "Introduction to RPA",
          duration: "1 Day",
          level: "Beginner",
          format: "Virtual / In-Person",
          description: "Discover how Robotic Process Automation can transform repetitive tasks and boost productivity across your organization.",
          topics: [
            "RPA fundamentals",
            "Identifying automation opportunities",
            "RPA tools overview",
            "Building simple automations",
            "ROI calculation for automation"
          ],
          outcomes: [
            "Identify processes suitable for RPA",
            "Understand RPA implementation",
            "Calculate automation benefits"
          ]
        },
        {
          title: "Power Automate Mastery",
          duration: "2 Days",
          level: "Intermediate",
          format: "Virtual / In-Person",
          description: "Master Microsoft Power Automate to create sophisticated workflows and automate business processes efficiently.",
          topics: [
            "Power Automate fundamentals",
            "Building automated workflows",
            "Integration with Microsoft 365",
            "Advanced automation scenarios",
            "Governance and best practices"
          ],
          outcomes: [
            "Build complex automated workflows",
            "Integrate multiple business systems",
            "Implement automation governance"
          ]
        },
        {
          title: "Enterprise Automation Strategy",
          duration: "2 Days",
          level: "Advanced",
          format: "In-Person",
          description: "Design and implement organization-wide automation strategies for maximum impact and sustainable change.",
          topics: [
            "Automation strategy framework",
            "Process assessment and prioritization",
            "Change management for automation",
            "Scaling automation programs",
            "Measuring automation success"
          ],
          outcomes: [
            "Develop automation roadmap",
            "Lead automation initiatives",
            "Drive organizational transformation"
          ]
        }
      ]
    },
    {
      category: "AI Literacy & Ethics",
      courses: [
        {
          title: "AI Literacy for Leaders",
          duration: "1 Day",
          level: "Beginner",
          format: "In-Person / Virtual",
          description: "Equip leaders with essential AI knowledge to make informed decisions about AI adoption and strategy.",
          topics: [
            "AI fundamentals demystified",
            "AI capabilities and limitations",
            "AI use cases across industries",
            "Ethical considerations in AI",
            "Building an AI strategy"
          ],
          outcomes: [
            "Understand AI potential and risks",
            "Identify AI opportunities",
            "Make informed AI decisions"
          ]
        },
        {
          title: "Mindful AI Implementation",
          duration: "2 Days",
          level: "Intermediate",
          format: "In-Person",
          description: "Learn to implement AI solutions with intention, ethics, and human-centered principles at the core.",
          topics: [
            "Human-centered AI design",
            "Ethical AI frameworks",
            "Bias detection and mitigation",
            "Responsible AI governance",
            "Stakeholder engagement"
          ],
          outcomes: [
            "Implement ethical AI practices",
            "Build trust in AI systems",
            "Create human-centered AI solutions"
          ]
        }
      ]
    },
    {
      category: "Digital Transformation",
      courses: [
        {
          title: "Digital Transformation Fundamentals",
          duration: "2 Days",
          level: "Beginner",
          format: "In-Person / Virtual",
          description: "Navigate the digital landscape and understand the key components of successful digital transformation.",
          topics: [
            "Digital transformation overview",
            "Technology trends and tools",
            "Change management essentials",
            "Building digital capabilities",
            "Measuring transformation success"
          ],
          outcomes: [
            "Understand digital transformation landscape",
            "Plan transformation initiatives",
            "Lead change effectively"
          ]
        },
        {
          title: "Cyber Risk Awareness",
          duration: "1 Day",
          level: "Beginner",
          format: "Virtual / In-Person",
          description: "Build awareness of cyber threats and learn practical strategies to protect your organization's digital assets.",
          topics: [
            "Common cyber threats",
            "Security best practices",
            "Data protection essentials",
            "Incident response basics",
            "Building security culture"
          ],
          outcomes: [
            "Recognize cyber threats",
            "Implement security practices",
            "Foster security awareness"
          ]
        }
      ]
    }
  ];

  const deliveryFormats = [
    {
      title: "Public Courses",
      description: "Join our scheduled open-enrollment courses with professionals from various organizations.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Corporate Training",
      description: "Customized training programs delivered at your organization for your teams.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Blended Learning",
      description: "Combine self-paced online modules with live instructor-led sessions for flexible learning.",
      icon: <Calendar className="w-6 h-6" />
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
          <Badge variant="outline" className="mb-4 border-primary-foreground/30 text-primary-foreground">
            Learning & Development
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Programmes
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Structured training programmes designed to build capabilities in data, AI, automation, and digital transformation—tailored for the Asian business context.
          </p>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Flexible Delivery Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the learning format that best fits your organization's needs and schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryFormats.map((format, i) => (
              <Card key={i} className="text-center border-border/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    {format.icon}
                  </div>
                  <CardTitle className="text-xl">{format.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Listing */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="space-y-20">
            {programmes.map((category, idx) => (
              <div key={idx}>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                    {category.category}
                  </h2>
                  <div className="h-1 w-24 bg-accent rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.courses.map((course, i) => (
                    <Card key={i} className="flex flex-col h-full border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <Badge variant="secondary">{course.level}</Badge>
                          <Badge variant="outline">{course.format}</Badge>
                        </div>
                        <CardTitle className="font-serif text-2xl text-primary mb-2">
                          {course.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="flex-1 space-y-6">
                        <CardDescription className="text-base leading-relaxed">
                          {course.description}
                        </CardDescription>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-accent" />
                            What You'll Learn
                          </h4>
                          <ul className="space-y-2">
                            {course.topics.map((topic, tidx) => (
                              <li key={tidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            Learning Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {course.outcomes.map((outcome, oidx) => (
                              <li key={oidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="border-t pt-6">
                        <Link href="/contact" className="w-full">
                          <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                            Enquire Now
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Ready to Upskill Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for public courses or customized corporate training, we're here to help your organization build the capabilities needed for digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="font-serif">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

