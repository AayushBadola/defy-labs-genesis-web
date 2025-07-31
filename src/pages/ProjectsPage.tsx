
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Target, Brain, Search } from "lucide-react";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: "market-predictor",
      title: "Market Predictor",
      description: "AI-powered market analysis system that predicted industry trends with 90%+ accuracy",
      category: "AI Analytics",
      icon: TrendingUp,
      results: [
        "90%+ prediction accuracy",
        "67-80% ROI on average",
        "Real-time market insights"
      ],
      image: "/lovable-uploads/ebcd58b8-1eea-43a1-a420-563e7c200fbb.png",
      tags: ["AI", "Predictive Analytics", "Market Research"],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "content-hook-optimizer",
      title: "Content Hook Optimizer",
      description: "Dynamic content testing platform that optimized engagement rates across multiple channels",
      category: "Content Optimization",
      icon: Target,
      results: [
        "85% engagement increase",
        "65% higher click-through rates",
        "90% content performance boost"
      ],
      image: "/lovable-uploads/ebcd58b8-1eea-43a1-a420-563e7c200fbb.png",
      tags: ["Content Marketing", "A/B Testing", "Optimization"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: "multi-funnel-generator",
      title: "Multi-Funnel Generator",
      description: "Automated funnel creation and optimization system with real-time performance tracking",
      category: "Conversion Optimization",
      icon: Brain,
      results: [
        "75% conversion rate increase",
        "60% reduction in acquisition cost",
        "3.2x ROI improvement"
      ],
      image: "/lovable-uploads/ebcd58b8-1eea-43a1-a420-563e7c200fbb.png",
      tags: ["Funnel Optimization", "Automation", "CRO"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "competitor-analysis",
      title: "Competitor Analysis",
      description: "Comprehensive competitive intelligence platform revealing market gaps and opportunities",
      category: "Market Intelligence",
      icon: Search,
      results: [
        "Identified 15+ market gaps",
        "95% competitive intelligence accuracy",
        "Strategic advantage insights"
      ],
      image: "/lovable-uploads/ebcd58b8-1eea-43a1-a420-563e7c200fbb.png",
      tags: ["Competitive Analysis", "Market Research", "Strategy"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "Multiple", icon: "🚀" },
    { label: "High Client Success Rate", value: "90%+", icon: "✨", animated: true },
    { label: "Industries Served", value: "Multiple", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Projects That <span className="text-gradient">DEFY</span> Expectations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real results from real businesses. See how we've transformed companies across industries with our AI-driven strategies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-defy-purple to-defy-mint mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-3xl md:text-4xl font-poppins font-bold text-gradient mb-2 ${stat.animated ? 'animate-pulse' : ''}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into our most impactful projects and see the strategies that drove extraordinary results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-defy-purple/30 animate-fade-in overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="h-7 w-7 text-white" />
                      </div>
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={`${project.title} logo`} 
                          className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                        />
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-poppins font-semibold mb-2 group-hover:text-defy-purple transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3">
                        Key Results:
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-defy-purple to-defy-mint rounded-full flex-shrink-0"></div>
                            <span className="text-sm font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full mt-4 group-hover:bg-defy-purple/10 group-hover:border-defy-purple/30"
                    >
                      <Link to={`/projects/${project.id}`}>
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Our Success Formula
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project follows our proven methodology that ensures consistent, exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Analyze",
                title: "Deep Intelligence",
                description: "We use AI to analyze every aspect of your market, competitors, and opportunities.",
                icon: "🔍"
              },
              {
                step: "Strategize",
                title: "Custom Solutions",
                description: "Based on insights, we craft strategies tailored specifically to your business goals.",
                icon: "🎯"
              },
              {
                step: "Execute",
                title: "Precision Implementation",
                description: "We implement with surgical precision, monitoring every metric for optimal performance.",
                icon: "⚡"
              }
            ].map((item, index) => (
              <div 
                key={item.step}
                className={`text-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-poppins font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-defy-purple to-defy-mint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can transform your business with the same precision and care.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-defy-purple hover:bg-white/90 text-lg px-8 py-3"
          >
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
