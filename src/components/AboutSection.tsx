
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
                    Hydra Email Marketing Team
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
            <p className="text-blue-600 font-medium mb-2 reveal">ACERCA DE NOSOTROS</p>
            <h2 className="text-4xl font-bold mb-6 reveal">
              Generamos Resultados <span className="text-orange-500">Significativos</span>
            </h2>
            
            <p className="text-gray-700 mb-6 reveal">
              Hydra Email Marketing es una agencia de marketing digital de servicio completo dedicada a ayudar a las empresas a prosperar 
              en el panorama digital. Combinamos pensamiento estratégico, excelencia creativa y metodologías basadas en datos 
              para crear soluciones de marketing que generen resultados tangibles.
            </p>
            
            <p className="text-gray-700 mb-6 reveal">
              Nuestro equipo de profesionales de marketing experimentados aporta experiencia diversa en varias 
              industrias y plataformas digitales. Nos enorgullecemos de construir asociaciones duraderas 
              con nuestros clientes, entendiendo verdaderamente sus necesidades únicas y diseñando estrategias personalizadas 
              que se alineen con sus objetivos comerciales.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Enfoque Basado en Datos</h4>
                  <p className="text-gray-600 text-sm">Tomamos decisiones basadas en insights reales</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Excelencia Creativa</h4>
                  <p className="text-gray-600 text-sm">Soluciones innovadoras que capturan la atención</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Enfoque en el Cliente</h4>
                  <p className="text-gray-600 text-sm">Tu éxito es nuestro objetivo principal</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Comunicación Transparente</h4>
                  <p className="text-gray-600 text-sm">Reportes claros e insights honestos</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white px-6 py-2 rounded-lg reveal">
              Conoce Nuestra Historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
