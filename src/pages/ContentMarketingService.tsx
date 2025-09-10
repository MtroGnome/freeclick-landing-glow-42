import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PenTool, BookOpen, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const ContentMarketingService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-6">
              <PenTool className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Marketing de Contenidos</h1>
              <p className="text-xl text-white/90">
                Crea contenido que conecte, inspire y convierta
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
            <h2 className="text-3xl font-bold mb-6">¿Qué es el Marketing de Contenidos?</h2>
            <p className="text-lg text-gray-600 mb-6">
              El marketing de contenidos es una estrategia que se enfoca en crear y distribuir contenido 
              valioso, relevante y consistente para atraer y retener a una audiencia claramente definida, 
              y en última instancia, para impulsar acciones rentables del cliente.
            </p>
            <p className="text-lg text-gray-600">
              En Hydra Marketing, creamos contenido que no solo informa, sino que también establece tu 
              marca como una autoridad en tu industria, genera confianza y guía a tus prospectos a través 
              del embudo de ventas.
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de Contenido</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-cyan-600 mr-3" />
                  <h3 className="text-xl font-bold">Estrategia de Contenido</h3>
                </div>
                <p className="text-gray-600">
                  Desarrollamos una estrategia integral que alinea tu contenido con tus objetivos 
                  de negocio y las necesidades de tu audiencia.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <PenTool className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">Creación de Contenido</h3>
                </div>
                <p className="text-gray-600">
                  Producimos blogs, artículos, infografías, videos y otros formatos de contenido 
                  que resuenan con tu audiencia.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Distribución Multicanal</h3>
                </div>
                <p className="text-gray-600">
                  Distribuimos tu contenido a través de múltiples canales para maximizar 
                  su alcance e impacto.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold">Optimización y Análisis</h3>
                </div>
                <p className="text-gray-600">
                  Medimos el rendimiento de cada pieza de contenido y optimizamos 
                  continuamente para mejores resultados.
                </p>
              </div>
            </div>
          </section>

          {/* Content Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tipos de Contenido que Creamos</h2>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📝
                  </div>
                  <h3 className="font-bold mb-2">Blog Posts</h3>
                  <p className="text-sm text-gray-600">Artículos optimizados para SEO que educan e informan</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📊
                  </div>
                  <h3 className="font-bold mb-2">Infografías</h3>
                  <p className="text-sm text-gray-600">Visualizaciones atractivas de datos e información</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    🎥
                  </div>
                  <h3 className="font-bold mb-2">Videos</h3>
                  <p className="text-sm text-gray-600">Contenido audiovisual para mayor engagement</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📚
                  </div>
                  <h3 className="font-bold mb-2">E-books</h3>
                  <p className="text-sm text-gray-600">Guías completas para generar leads</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📄
                  </div>
                  <h3 className="font-bold mb-2">Whitepapers</h3>
                  <p className="text-sm text-gray-600">Documentos técnicos y estudios de caso</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📱
                  </div>
                  <h3 className="font-bold mb-2">Social Media</h3>
                  <p className="text-sm text-gray-600">Contenido adaptado para cada plataforma</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Beneficios del Marketing de Contenidos</h2>
            
            <div className="space-y-4">
              <div className="flex items-start bg-white border-l-4 border-cyan-600 p-4 shadow-sm">
                <span className="text-cyan-600 font-bold text-xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Genera 3x más leads que el marketing tradicional</h3>
                  <p className="text-gray-600">El contenido de calidad atrae prospectos más calificados</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white border-l-4 border-cyan-600 p-4 shadow-sm">
                <span className="text-cyan-600 font-bold text-xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Construye autoridad y confianza</h3>
                  <p className="text-gray-600">Posiciona tu marca como experta en tu industria</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white border-l-4 border-cyan-600 p-4 shadow-sm">
                <span className="text-cyan-600 font-bold text-xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Mejora el SEO y la visibilidad online</h3>
                  <p className="text-gray-600">Contenido optimizado para motores de búsqueda</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white border-l-4 border-cyan-600 p-4 shadow-sm">
                <span className="text-cyan-600 font-bold text-xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Reduce el costo de adquisición de clientes</h3>
                  <p className="text-gray-600">El contenido orgánico es más económico que la publicidad pagada</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-600 to-cyan-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Listo para crear contenido que convierta?</h2>
            <p className="text-xl mb-8">
              Desarrollemos juntos una estrategia de contenido que impulse tu negocio
            </p>
            <div className="space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Consulta Gratuita
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3">
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

export default ContentMarketingService;
