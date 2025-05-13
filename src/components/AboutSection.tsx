
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left part - Image with geometric elements */}
          <div className="lg:w-1/2 reveal">
            <div className="relative">
              {/* Background elements */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200/50 rounded-full"></div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-orange-200/50 rounded-full"></div>
              
              {/* Main image */}
              <div className="relative z-10 bg-blue-900 rounded-lg p-2">
                <div className="bg-gradient-to-br from-blue-400/30 to-blue-900/30 rounded-lg overflow-hidden aspect-video">
                  {/* This would be a real image in production */}
                  <div className="h-full w-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                    freeclick marketing team
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-lg shadow-xl p-4 w-28 h-28 flex flex-col items-center justify-center animate-float">
                <div className="text-2xl font-bold text-blue-500">84%</div>
                <div className="text-xs text-center text-gray-600">Client Retention</div>
              </div>
              
              <div className="absolute bottom-10 right-0 transform translate-x-1/4 bg-white rounded-lg shadow-xl p-4 w-28 h-28 flex flex-col items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-2xl font-bold text-orange-500">95%</div>
                <div className="text-xs text-center text-gray-600">ROI Increase</div>
              </div>
            </div>
          </div>
          
          {/* Right part - Text content */}
          <div className="lg:w-1/2">
            <p className="text-blue-600 font-medium mb-2 reveal">ABOUT US</p>
            <h2 className="text-4xl font-bold mb-6 reveal">
              We Drive <span className="text-orange-500">Meaningful</span> Results
            </h2>
            
            <p className="text-gray-700 mb-6 reveal">
              Freeclick LLC is a full-service marketing agency dedicated to helping businesses thrive 
              in the digital landscape. We combine strategic thinking, creative excellence, and data-driven 
              methodologies to create marketing solutions that deliver tangible results.
            </p>
            
            <p className="text-gray-700 mb-6 reveal">
              Our team of seasoned marketing professionals brings diverse expertise across various 
              industries and digital platforms. We pride ourselves on building lasting partnerships 
              with our clients, truly understanding their unique needs, and crafting customized strategies 
              that align with their business goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Data-Driven Approach</h4>
                  <p className="text-gray-600 text-sm">We make decisions based on real insights</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Creative Excellence</h4>
                  <p className="text-gray-600 text-sm">Innovative solutions that capture attention</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Client-Focused</h4>
                  <p className="text-gray-600 text-sm">Your success is our primary objective</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Transparent Communication</h4>
                  <p className="text-gray-600 text-sm">Clear reporting and honest insights</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white px-6 py-2 rounded-lg reveal">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
