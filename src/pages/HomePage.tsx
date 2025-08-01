
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, TrendingUp, Users, Zap, Shield } from "lucide-react";
import useGSAP from "../hooks/useGSAP";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gsapRef = useGSAP();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "AI-powered visibility strategies that dominate search results"
    },
    {
      icon: Target,
      title: "Funnel Optimization",
      description: "Precision-engineered conversion paths that maximize ROI"
    },
    {
      icon: Brain,
      title: "AI-Enhanced Marketing",
      description: "Next-gen campaigns powered by trillion-parameter AI models"
    },
    {
      icon: Users,
      title: "Target Market Research",
      description: "Deep audience insights that reveal hidden opportunities"
    },
    {
      icon: Zap,
      title: "Performance Analytics",
      description: "Real-time intelligence that drives data-driven decisions"
    },
    {
      icon: Shield,
      title: "Future Planning",
      description: "Strategic foresight that future-proofs your business"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "DEFY LABS transformed conversion rate by 74% in 3 Months. Their AI-driven approach is simply revolutionary.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, ScaleUp Co",
      content: "Our revenue increased drastically as they made our product reach the digital audience.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "CMO, GrowthTech",
      content: "The level of care and precision they bring to every project is unmatched. They truly treat your business like their own.",
      rating: 5
    }
  ];

  return (
    <div ref={gsapRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-defy-purple/10 rounded-full blur-3xl animate-float gsap-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-defy-mint/10 rounded-full blur-3xl animate-pulse-slow gsap-float"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-defy-purple/20 to-defy-mint/20 rounded-full blur-2xl animate-bounce-gentle gsap-rotate"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo Animation */}
            <div className="mb-8 inline-block gsap-scale">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ea370277-e89c-4430-af1d-d7372c3e18ef.png" 
                  alt="DEFY LABS" 
                  className="w-52 h-52 rounded-2xl mx-auto mb-4 brightness-125 contrast-110 animate-pulse-slow"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gradient mb-2 gsap-fade-in">
                DEFY LABS
              </h1>
            </div>

            {/* Main Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto gsap-fade-in">
              AI-driven growth strategies that treat your business like our own.
            </p>

            {/* Elevator Pitch */}
            <div className="mb-8 max-w-4xl mx-auto gsap-fade-in">
              <p className="text-lg md:text-xl text-foreground/80 mb-4">
                We blend trillion-parameter AI with human creativity and domain expertise to optimize funnels, analyze competitors, and future-proof businesses.
              </p>
              <p className="text-md text-muted-foreground">
                Your company is your child. We treat it like family.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 gsap-scale">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-defy-purple to-defy-mint hover:opacity-90 transition-all duration-300 glow-purple text-lg px-8 py-3 animate-glow"
              >
                <Link to="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-defy-purple/30 hover:bg-defy-purple/10 text-lg px-8 py-3 hover:animate-glow"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Services That <span className="text-gradient">DEFY</span> Limits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Precision-engineered solutions powered by cutting-edge AI and human expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-defy-purple/30 animate-fade-in gsap-scale hover:animate-glow`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-defy-purple to-defy-mint rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-defy-purple transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-muted-foreground mb-8">
            Certified & Trusted By Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <Badge variant="outline" className="text-lg py-2 px-4">IBM AI Certified</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">Microsoft Partner</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">Google Skills Boost</Badge>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Results that speak louder than words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className={`animate-fade-in hover:shadow-lg transition-all duration-300`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gradient-to-r from-defy-purple to-defy-mint rounded-full mr-1"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-defy-purple to-defy-mint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to DEFY Your Limits?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your goals — not just services.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-defy-purple hover:bg-white/90 text-lg px-8 py-3"
          >
            <Link to="/contact">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
