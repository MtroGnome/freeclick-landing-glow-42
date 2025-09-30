import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Users, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMediaService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-6">
              <Share2 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Redes Sociales</h1>
              <p className="text-xl text-white/90">
                Construye comunidades y genera conexiones auténticas
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
            <h2 className="text-3xl font-bold mb-6">Marketing en Redes Sociales</h2>
            <p className="text-lg text-gray-600 mb-6">
              Las redes sociales son el corazón de la comunicación digital moderna. No se trata solo de publicar 
              contenido, sino de crear conversaciones significativas, construir comunidades leales y generar 
              engagement auténtico con tu audiencia.
            </p>
            <p className="text-lg text-gray-600">
              En Hydra Email Marketing, desarrollamos estrategias de redes sociales que van más allá de los "me gusta". 
              Creamos presencias digitales que generan resultados medibles para tu negocio.
            </p>
          </section>

          {/* Platforms */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Plataformas que Manejamos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  f
                </div>
                <h3 className="text-xl font-bold mb-2">Facebook</h3>
                <p className="text-gray-600">Construye comunidades y genera conversaciones</p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg text-center">
                <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  🐦
                </div>
                <h3 className="text-xl font-bold mb-2">Twitter</h3>
                <p className="text-gray-600">Participa en conversaciones en tiempo real</p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg text-center">
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  📷
                </div>
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-gray-600">Comparte historias visuales atractivas</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  in
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-600">Networking profesional y B2B</p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  ▶
                </div>
                <h3 className="text-xl font-bold mb-2">YouTube</h3>
                <p className="text-gray-600">Contenido de video y storytelling</p>
              </div>

              <div className="bg-black/5 p-6 rounded-lg text-center">
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  🎵
                </div>
                <h3 className="text-xl font-bold mb-2">TikTok</h3>
                <p className="text-gray-600">Contenido viral y audiencias jóvenes</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">Estrategia Social</h3>
                </div>
                <p className="text-gray-600">
                  Desarrollamos estrategias personalizadas que alinean tus objetivos de negocio 
                  con las características únicas de cada plataforma.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Share2 className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Creación de Contenido</h3>
                </div>
                <p className="text-gray-600">
                  Producimos contenido original, atractivo y relevante que resuena con tu 
                  audiencia y genera engagement auténtico.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">Community Management</h3>
                </div>
                <p className="text-gray-600">
                  Gestionamos tus comunidades online, respondemos comentarios y creamos 
                  conversaciones significativas con tu audiencia.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold">Publicidad Social</h3>
                </div>
                <p className="text-gray-600">
                  Creamos y optimizamos campañas publicitarias en redes sociales para 
                  maximizar tu alcance y conversiones.
                </p>
              </div>
            </div>
          </section>

          {/* Content Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tipos de Contenido que Creamos</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📸
                  </div>
                  <h3 className="font-bold mb-2">Posts Visuales</h3>
                  <p className="text-sm text-gray-600">Imágenes y gráficos atractivos</p>
                </div>
                
                <div>
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    🎬
                  </div>
                  <h3 className="font-bold mb-2">Videos</h3>
                  <p className="text-sm text-gray-600">Contenido audiovisual dinámico</p>
                </div>
                
                <div>
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📚
                  </div>
                  <h3 className="font-bold mb-2">Stories</h3>
                  <p className="text-sm text-gray-600">Contenido temporal e interactivo</p>
                </div>
                
                <div>
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    🎮
                  </div>
                  <h3 className="font-bold mb-2">Contenido Interactivo</h3>
                  <p className="text-sm text-gray-600">Encuestas, quizzes y challenges</p>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Resultados que Obtienes</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white border-2 border-purple-200 p-6 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">+150%</div>
                <h3 className="font-bold mb-2">Crecimiento en Engagement</h3>
                <p className="text-gray-600">Más interacciones y participación</p>
              </div>
              
              <div className="text-center bg-white border-2 border-purple-200 p-6 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">+200%</div>
                <h3 className="font-bold mb-2">Aumento de Seguidores</h3>
                <p className="text-gray-600">Audiencia de calidad y comprometida</p>
              </div>
              
              <div className="text-center bg-white border-2 border-purple-200 p-6 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">+85%</div>
                <h3 className="font-bold mb-2">Más Tráfico Web</h3>
                <p className="text-gray-600">Conversiones desde redes sociales</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-purple-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Listo para dominar las redes sociales?</h2>
            <p className="text-xl mb-8">
              Construyamos juntos una presencia social que genere resultados reales
            </p>
            <div className="space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Auditoría Social Gratuita
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
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

export default SocialMediaService;
