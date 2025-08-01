
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, TrendingUp, Target, Brain, Search } from "lucide-react";

interface ProjectPhase {
  phase: string;
  duration: string;
  description: string;
}

interface ProjectResult {
  metric: string;
  value: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  icon: any;
  color: string;
  results: ProjectResult[];
  technologies: string[];
  nextSteps: string;
  timeline?: ProjectPhase[];
}

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects: Record<string, Project> = {
    "market-predictor": {
      title: "Market Predictor",
      description: "AI-powered market analysis system that predicted industry trends with 94% accuracy",
      challenge: "Our client needed to anticipate market shifts in a volatile industry to maintain competitive advantage and make informed investment decisions.",
      solution: "We developed a sophisticated AI system using trillion-parameter models to analyze market data, consumer behavior, and economic indicators in real-time.",
      outcome: "The system successfully predicted 23 major market shifts 3 months in advance, giving our client a 1.6x ROI improvement. Through our collaboration, higher optimization becomes achievable - ROI increases with every returned collaboration.",
      icon: TrendingUp,
      color: "from-blue-500 to-purple-600",
      results: [
        { metric: "Prediction Accuracy", value: "94%", description: "Industry-leading accuracy in trend prediction" },
        { metric: "Early Detection", value: "3 Months", description: "Average lead time for trend identification" },
        { metric: "Competitive Advantage", value: "40%", description: "Increase in market positioning" },
        { metric: "ROI", value: "1.6x", description: "Return on investment within first year" }
      ],
      technologies: ["GPT-4", "Custom ML Models", "Real-time Analytics", "Cloud Computing"],
      nextSteps: "Expansion to additional markets and integration with automated trading systems"
    },
    "content-hook-optimizer": {
      title: "Content Hook Optimizer",
      description: "Dynamic content testing platform that optimized engagement rates across multiple channels",
      challenge: "Client struggled with low engagement rates across social media and needed a systematic approach to create compelling content that resonates with their audience.",
      solution: "We built an AI-powered content optimization platform that generates, tests, and optimizes content hooks across multiple channels simultaneously.",
      outcome: "Achieved 76% increase in engagement rates averaging across platforms, 2x content efficiency, and 80% social media growth. Through our collaboration, higher optimization becomes achievable - ROI increases with every returned collaboration.",
      icon: Target,
      color: "from-green-500 to-teal-600",
      results: [
        { metric: "Engagement Increase", value: "76%", description: "Average increase across all platforms" },
        { metric: "Content Efficiency", value: "2x", description: "Faster content creation process" },
        { metric: "Social Media Growth", value: "80%", description: "Follower and engagement growth" },
        { metric: "Click-through Rate", value: "65%", description: "Improvement in CTR performance" }
      ],
      technologies: ["Natural Language Processing", "A/B Testing Framework", "Multi-platform APIs", "Analytics Dashboard"],
      nextSteps: "Integration with video content optimization and expansion to emerging platforms"
    },
    "multi-funnel-generator": {
      title: "Multi-Funnel Generator",
      description: "Automated funnel creation and optimization system with real-time performance tracking",
      challenge: "Client needed to scale their lead generation across multiple products but lacked the resources to manually create and optimize individual funnels.",
      solution: "We developed an intelligent funnel generation system that automatically creates, tests, and optimizes conversion funnels based on product characteristics and target audience data.",
      outcome: "Generated 67% conversion rate averaging, 70%+ funnel efficiency, and 72% ROI averaging. Through our collaboration, higher optimization becomes achievable - ROI increases with every returned collaboration.",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      results: [
        { metric: "Conversion Rate", value: "67%", description: "Average conversion performance" },
        { metric: "Funnel Efficiency", value: "70%+", description: "Improvement in funnel performance" },
        { metric: "ROI", value: "72%", description: "Average return on investment" },
        { metric: "Acquisition Cost", value: "75%", description: "Reduction in customer acquisition cost" }
      ],
      technologies: ["Machine Learning", "Automated A/B Testing", "Real-time Analytics", "CRM Integration"],
      nextSteps: "Integration with predictive customer lifetime value and cross-selling optimization"
    },
    "competitor-analysis": {
      title: "Competitor Analysis",
      description: "Comprehensive competitive intelligence platform revealing market gaps and opportunities",
      challenge: "Client operated in a highly competitive market and needed deep insights into competitor strategies to identify opportunities for differentiation.",
      solution: "We created an AI-powered competitive intelligence system that continuously monitors competitors and identifies strategic weaknesses and market gaps.",
      outcome: "Identified 23 exploitable market gaps, leading to 200% market share growth and 6-month competitive advantage. Through our collaboration, higher optimization becomes achievable - ROI increases with every returned collaboration.",
      icon: Search,
      color: "from-orange-500 to-red-600",
      results: [
        { metric: "Market Gaps Found", value: "23", description: "Exploitable opportunities identified" },
        { metric: "Market Share Growth", value: "200%", description: "Increase in client's market position" },
        { metric: "Competitive Lead", value: "6 Months", description: "Time advantage over competitors" },
        { metric: "Revenue Impact", value: "$2M", description: "Additional revenue generated" }
      ],
      technologies: ["Web Scraping", "Sentiment Analysis", "Market Intelligence", "Predictive Modeling"],
      nextSteps: "Real-time competitive alerts and automated strategy recommendations"
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-poppins font-bold">
                    {project.title}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <Card key={result.metric} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-poppins font-bold text-gradient mb-2">
                      {result.value}
                    </div>
                    <div className="font-medium text-sm mb-2">{result.metric}</div>
                    <div className="text-xs text-muted-foreground">{result.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Outcome */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🎯</span>
                  <span>Challenge</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">⚡</span>
                  <span>Solution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🚀</span>
                  <span>Outcome</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline - Only show for projects that have timeline */}
      {project.timeline && (
        <section className="py-20 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-poppins font-bold text-center mb-16">Project Timeline</h2>
            <div className="space-y-8">
              {project.timeline.map((phase, index) => (
                <div key={phase.phase} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-defy-purple to-defy-mint rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-2">
                      <h3 className="text-xl font-poppins font-semibold">{phase.phase}</h3>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold mb-6">Next Steps</h2>
          <p className="text-lg text-muted-foreground mb-8">{project.nextSteps}</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-defy-purple to-defy-mint hover:opacity-90">
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

export default ProjectDetail;
