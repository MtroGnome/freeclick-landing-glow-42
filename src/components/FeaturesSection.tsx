
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Mail, Globe, PenTool, BarChart, Share2 } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const services = [
    {
      title: "Strategic SEO",
      description: "Boost your search rankings and drive more organic traffic with data-driven SEO strategies.",
      icon: TrendingUp,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that engages your audience and establishes your brand as an industry leader.",
      icon: PenTool,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      title: "Social Media",
      description: "Build a powerful social presence that connects with your audience and drives meaningful engagement.",
      icon: Share2,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Email Campaigns",
      description: "Design targeted email campaigns that nurture leads and convert prospects into loyal customers.",
      icon: Mail,
      color: "from-red-400 to-red-600",
    },
    {
      title: "PPC Advertising",
      description: "Maximize your ROI with strategic pay-per-click campaigns that target your ideal customers.",
      icon: Globe,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Analytics & Reporting",
      description: "Get actionable insights with comprehensive analytics and reporting to refine your marketing strategy.",
      icon: BarChart,
      color: "from-orange-400 to-orange-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 reveal">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Marketing Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 reveal">
            We offer a full suite of digital marketing services designed to help your business 
            reach new heights in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 reveal"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="ghost" 
                className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-0"
              >
                Learn more &rarr;
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white px-8 py-6 rounded-lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
