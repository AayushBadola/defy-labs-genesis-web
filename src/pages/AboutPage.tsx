
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart, Target, Zap } from "lucide-react";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Family-First Approach",
      description: "We treat your business like our own child, giving it the care, attention, and protection it deserves."
    },
    {
      icon: Target,
      title: "Precision & Excellence",
      description: "Every strategy is meticulously crafted with surgical precision to deliver extraordinary results."
    },
    {
      icon: Zap,
      title: "Innovation & Growth",
      description: "We blend cutting-edge AI with human creativity to push boundaries and DEFY conventional limits."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
                  About <span className="text-gradient">DEFY LABS</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  We are a high-performance AI-driven digital strategy company helping businesses scale with precision. Our philosophy is simple yet powerful:
                </p>
                <blockquote className="text-2xl font-poppins font-semibold text-foreground mb-8 pl-6 border-l-4 border-gradient-to-b from-defy-purple to-defy-mint">
                  "Your company is your child. We treat it like family."
                </blockquote>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We blend trillion-parameter AI with human creativity, empathy, and domain expertise to optimize funnels, analyze competitors, and future-proof businesses. Every pixel, every strategy, every decision is made with the obsessive care of a parent nurturing their child's growth.
                </p>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-defy-purple/20 to-defy-mint/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-card border border-border/50 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-defy-purple to-defy-mint rounded-full mx-auto mb-6 animate-pulse-slow"></div>
                    <h3 className="text-2xl font-poppins font-bold mb-2">DEFY LABS</h3>
                    <p className="text-muted-foreground mb-4">Precision. Innovation. Growth.</p>
                    <div className="flex justify-center space-x-2">
                      <Badge variant="outline">AI-Driven</Badge>
                      <Badge variant="outline">Human-Centered</Badge>
                      <Badge variant="outline">Results-Focused</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-defy-purple/20 to-defy-mint/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-muted/50 to-background rounded-3xl p-8 border border-border/50">
                  <div className="aspect-square bg-gradient-to-br from-defy-purple/10 to-defy-mint/10 rounded-2xl flex items-center justify-center">
                    <div className="text-8xl">👨‍💼</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Meet Aayush
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The visionary founder behind DEFY LABS, Aayush brings together a unique blend of technical expertise and business acumen. With a deep understanding of AI technologies and a passion for helping businesses grow, he founded DEFY LABS with a simple mission:
              </p>
              <p className="text-lg font-medium text-foreground mb-6">
                "To treat every business we work with as if it were our own child."
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This philosophy isn't just a tagline—it's the foundation of everything we do. From late-night strategy sessions to celebrating client wins, Aayush and the DEFY LABS team are personally invested in your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="group">
                  <a href="https://www.linkedin.com/in/aayush-badola-0a7b2b343/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="group">
                  <a href="https://aayush-portfolio-main.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Portfolio
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision, strategy, and interaction at DEFY LABS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-defy-purple to-defy-mint rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-4 group-hover:text-defy-purple transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8">
            Certified & Trusted
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our expertise is validated by industry-leading certifications and partnerships.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "IBM AI Certified",
                description: "Advanced AI and machine learning expertise validated by IBM's rigorous certification program.",
                logo: "/ibm-logo.png"
              },
              {
                name: "Microsoft Techniques User",
                description: "Certified expertise in Microsoft's AI and cloud technologies for enterprise solutions.",
                logo: "/microsoft-logo.svg"
              },
              {
                name: "Google Cloud Tech Expertise",
                description: "Google Cloud certified with expertise in data analytics and AI/ML solutions.",
                logo: "/google-cloud-logo.svg"
              }
            ].map((cert, index) => (
              <Card 
                key={cert.name}
                className={`animate-fade-in hover:shadow-lg transition-all duration-300`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img src={cert.logo} alt={cert.name} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
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
            Ready to Join the DEFY LABS Family?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's treat your business with the care it deserves and watch it grow beyond your wildest expectations.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-defy-purple hover:bg-white/90 text-lg px-8 py-3"
          >
            <a href="/contact">
              Start Your Journey
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
