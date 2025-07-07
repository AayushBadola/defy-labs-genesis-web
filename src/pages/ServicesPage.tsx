
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Target, 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  Search,
  MousePointer,
  ArrowRight,
  BarChart3
} from "lucide-react";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "AI-powered visibility strategies that dominate search results",
      features: [
        "Advanced keyword research using AI models",
        "Technical SEO audits and optimization",
        "Content optimization for search engines",
        "Local SEO for geographic targeting",
        "Performance tracking and reporting"
      ],
      animationIdea: "Visual of graph rising with visibility lines on content"
    },
    {
      icon: Target,
      title: "Funnel Optimization",
      description: "Precision-engineered conversion paths that maximize ROI",
      features: [
        "A/B testing for every funnel component",
        "User journey mapping and optimization",
        "Conversion rate analysis and improvement",
        "Landing page optimization",
        "Multi-channel funnel coordination"
      ],
      animationIdea: "Funnel filling with leads in animated flow"
    },
    {
      icon: MousePointer,
      title: "Landing Page Optimization",
      description: "High-converting pages designed for maximum impact",
      features: [
        "Data-driven design decisions",
        "Mobile-first responsive design",
        "Speed optimization for better UX",
        "Persuasive copywriting integration",
        "Continuous performance monitoring"
      ],
      animationIdea: "Landing page elements reordering for best results"
    },
    {
      icon: Search,
      title: "Competitor Investigation",
      description: "Deep intelligence gathering to outmaneuver competition",
      features: [
        "Comprehensive competitive analysis",
        "Market positioning insights",
        "Pricing strategy intelligence",
        "Content gap analysis",
        "Social media competitive audit"
      ],
      animationIdea: "Spyglass effect over competitor chart"
    },
    {
      icon: Shield,
      title: "Future Planning",
      description: "Strategic foresight that future-proofs your business",
      features: [
        "Market trend analysis and prediction",
        "Technology adoption roadmaps",
        "Risk assessment and mitigation",
        "Growth scenario planning",
        "Long-term strategy development"
      ],
      animationIdea: "AI brain with arrows showing forward-thinking"
    },
    {
      icon: Brain,
      title: "AI-Enhanced Marketing",
      description: "Next-gen campaigns powered by trillion-parameter AI models",
      features: [
        "Personalized content generation",
        "Predictive customer behavior analysis",
        "Automated campaign optimization",
        "AI-powered audience segmentation",
        "Real-time performance adjustment"
      ],
      animationIdea: "AI circuits connecting content, audience, conversions"
    },
    {
      icon: Users,
      title: "Target Market Research",
      description: "Deep audience insights that reveal hidden opportunities",
      features: [
        "Detailed customer persona development",
        "Market segmentation analysis",
        "Behavioral pattern identification",
        "Purchase decision mapping",
        "Competitive positioning research"
      ],
      animationIdea: "Crowd transforming into ICP avatars"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time intelligence that drives data-driven decisions",
      features: [
        "Custom dashboard development",
        "Real-time performance monitoring",
        "Predictive analytics modeling",
        "ROI tracking and attribution",
        "Actionable insights generation"
      ],
      animationIdea: "Analytics dashboard scaling and showing key KPIs"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Services That <span className="text-gradient">DEFY</span> Limits
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive AI-driven solutions designed to accelerate your business growth with precision and care.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-defy-purple to-defy-mint mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border/50 hover:border-defy-purple/30 animate-fade-in overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-defy-purple to-defy-mint rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-poppins font-semibold mb-2 group-hover:text-defy-purple transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-defy-purple to-defy-mint rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures every strategy is perfectly tailored to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business, goals, and challenges"
              },
              {
                step: "02",
                title: "Analysis",
                description: "AI-powered market and competitor intelligence gathering"
              },
              {
                step: "03",
                title: "Strategy",
                description: "Custom solution design based on data insights"
              },
              {
                step: "04",
                title: "Execution",
                description: "Implementation with continuous monitoring and optimization"
              }
            ].map((process, index) => (
              <div 
                key={process.step}
                className={`text-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-defy-purple to-defy-mint rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-defy-purple/30 to-defy-mint/30 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-defy-purple to-defy-mint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a custom strategy that treats your business like our own child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-defy-purple hover:bg-white/90 text-lg px-8 py-3"
            >
              <Link to="/contact">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              <Link to="/projects">View Our Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
