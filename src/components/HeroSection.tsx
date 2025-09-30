
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-blue-900 overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-white/5 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Eleva tu Presencia Digital con <span className="text-orange-500">Hydra</span> Email Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Soluciones de marketing estratégico para potenciar la visibilidad de tu marca, involucrar a tu audiencia y generar conversiones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:opacity-90 text-white group px-6 py-6">
                Comenzar
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="bg-white/20 text-white hover:bg-white/30 border-white/40">
                Saber Más
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
            <div className="relative">
              <div className="w-[350px] h-[350px] bg-white/90 shadow-2xl backdrop-blur-md rounded-3xl relative z-10 p-6 animate-float">
                <div className="h-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Dashboard de Marketing</h3>
                </div>
                <div className="h-1/2 bg-white p-4 rounded-b-2xl flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
