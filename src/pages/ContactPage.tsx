
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@defylabs.com",
      description: "Get in touch for any inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote-First",
      description: "Serving clients worldwide"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 24 Hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const benefits = [
    "Free 30-minute strategy consultation",
    "Custom growth plan tailored to your business",
    "No-obligation discussion about your goals",
    "Expert insights into your market opportunities",
    "Clear next steps and recommendations"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Let's <span className="text-gradient">DEFY</span> Your Limits Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ready to transform your business with precision AI strategies? Let's discuss your goals — not just services.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-defy-purple to-defy-mint mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.label}
                className={`text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-defy-purple to-defy-mint rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold mb-2">{info.label}</h3>
                  <p className="text-foreground font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Calendly and Contact Form */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Prefer to reach out directly? Send us a message and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your goals and challenges..."
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-defy-purple to-defy-mint hover:opacity-90"
                    >
                      Send Message
                    </Button>
                  </form>

                  {/* Benefits List */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-poppins font-semibold mb-4">What You'll Get:</h4>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-defy-purple flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendly Widget */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-poppins font-bold mb-4">
                  Book Your Free Consultation
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Schedule a 30-minute strategy session where we'll discuss your business goals and show you exactly how we can help you grow.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">✅ Free Consultation</Badge>
                  <Badge variant="outline">🎯 Custom Strategy</Badge>
                  <Badge variant="outline">⚡ Immediate Insights</Badge>
                  <Badge variant="outline">🚀 Action Plan</Badge>
                </div>
              </div>
              
              {/* Calendly Embed */}
              <div className="bg-white rounded-lg border border-border overflow-hidden shadow-lg">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/aayush-badola2/consultationmeet" 
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold mb-8">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help. Every conversation starts with understanding your unique challenges and goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-poppins font-semibold mb-2">No Pressure</h3>
              <p className="text-sm text-muted-foreground">Our consultation is completely pressure-free. We're here to help, not to sell.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-poppins font-semibold mb-2">Quick Setup</h3>
              <p className="text-sm text-muted-foreground">Most clients see results within the first 30 days of working with us.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-poppins font-semibold mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">Every strategy is tailored specifically to your business and industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
