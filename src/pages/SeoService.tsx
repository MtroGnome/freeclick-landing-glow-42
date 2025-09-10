import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Search, BarChart, Target } from "lucide-react";
import { Link } from "react-router-dom";

const SeoService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-6">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">SEO Estratégico</h1>
              <p className="text-xl text-white/90">
                Posiciona tu sitio web en los primeros resultados de búsqueda
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">¿Qué es el SEO Estratégico?</h2>
            <p className="text-lg text-gray-600 mb-6">
              El SEO (Search Engine Optimization) estratégico es un enfoque integral para mejorar la visibilidad 
              de tu sitio web en los motores de búsqueda. No se trata solo de obtener más tráfico, sino de 
              atraer a las personas adecuadas que están buscando exactamente lo que ofreces.
            </p>
            <p className="text-lg text-gray-600">
              En Hydra Marketing, utilizamos técnicas avanzadas de SEO basadas en datos para aumentar tu 
              posicionamiento orgánico, generar más leads calificados y hacer crecer tu negocio de manera sostenible.
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de SEO</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Search className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">Investigación de Palabras Clave</h3>
                </div>
                <p className="text-gray-600">
                  Identificamos las palabras clave más relevantes y rentables para tu industria, 
                  analizando la competencia y las oportunidades de mercado.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BarChart className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Optimización On-Page</h3>
                </div>
                <p className="text-gray-600">
                  Optimizamos cada página de tu sitio web, desde la estructura del contenido 
                  hasta los meta tags y la velocidad de carga.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">Link Building</h3>
                </div>
                <p className="text-gray-600">
                  Construimos una estrategia de enlaces de alta calidad que aumenta la 
                  autoridad de tu dominio y mejora tu posicionamiento.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold">Análisis y Reportes</h3>
                </div>
                <p className="text-gray-600">
                  Monitoreamos constantemente tu progreso con reportes detallados que 
                  muestran el ROI de nuestras estrategias SEO.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Beneficios del SEO Estratégico</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Aumento del tráfico orgánico:</strong> Más visitantes calificados sin costo por clic
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Mayor credibilidad:</strong> Los usuarios confían más en los resultados orgánicos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>ROI a largo plazo:</strong> Los resultados SEO se mantienen y crecen con el tiempo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Ventaja competitiva:</strong> Supera a tu competencia en los resultados de búsqueda
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestro Proceso</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Auditoría SEO Completa</h3>
                  <p className="text-gray-600">
                    Analizamos tu sitio web actual, identificamos oportunidades de mejora y 
                    creamos una estrategia personalizada.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementación</h3>
                  <p className="text-gray-600">
                    Ejecutamos las optimizaciones técnicas, de contenido y de estructura 
                    según la estrategia definida.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Monitoreo y Optimización</h3>
                  <p className="text-gray-600">
                    Monitoreamos constantemente los resultados y ajustamos la estrategia 
                    para maximizar el rendimiento.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Listo para dominar los resultados de búsqueda?</h2>
            <p className="text-xl mb-8">
              Comienza tu estrategia SEO hoy y ve cómo tu negocio crece orgánicamente
            </p>
            <div className="space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Solicitar Consulta Gratuita
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SeoService;
