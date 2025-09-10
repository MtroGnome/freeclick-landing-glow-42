import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, BarChart3, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const PpcService: React.FC = () => {
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
              <Target className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Publicidad PPC</h1>
              <p className="text-xl text-white/90">
                Resultados inmediatos con campañas de pago por clic optimizadas
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
            <h2 className="text-3xl font-bold mb-6">Publicidad Digital que Convierte</h2>
            <p className="text-lg text-gray-600 mb-6">
              La publicidad PPC (Pay-Per-Click) te permite alcanzar a tu audiencia ideal en el momento 
              exacto en que están buscando tus productos o servicios. Con las estrategias correctas, 
              puedes generar leads calificados y ventas desde el primer día.
            </p>
            <p className="text-lg text-gray-600">
              En Hydra Marketing, gestionamos campañas PPC que maximizan tu ROI a través de targeting 
              preciso, creatividades optimizadas y monitoreo continuo del rendimiento.
            </p>
          </section>

          {/* Platforms */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Plataformas que Manejamos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/api/placeholder/24/24" alt="Google Ads" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Google Ads</h3>
                <p className="text-gray-600">Campañas de búsqueda, display, shopping y YouTube para máxima visibilidad.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/api/placeholder/24/24" alt="Facebook Ads" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Meta Ads</h3>
                <p className="text-gray-600">Facebook e Instagram Ads con targeting avanzado y creatividades impactantes.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/api/placeholder/24/24" alt="LinkedIn Ads" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn Ads</h3>
                <p className="text-gray-600">Publicidad B2B dirigida a profesionales y tomadores de decisiones.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/api/placeholder/24/24" alt="TikTok Ads" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">TikTok Ads</h3>
                <p className="text-gray-600">Llega a audiencias jóvenes con contenido video nativo y engaging.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/api/placeholder/24/24" alt="Microsoft Ads" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Microsoft Ads</h3>
                <p className="text-gray-600">Bing Ads para alcanzar audiencias profesionales con menor competencia.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/api/placeholder/24/24" alt="Twitter Ads" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Twitter Ads</h3>
                <p className="text-gray-600">Promociona tu marca en conversaciones relevantes y trending topics.</p>
              </div>
            </div>
          </section>

          {/* Campaign Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tipos de Campañas</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">Campañas de Búsqueda</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Aparece en los primeros resultados cuando tus clientes potenciales buscan tus productos o servicios.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Keywords de alta intención de compra</li>
                  <li>Anuncios de texto optimizados</li>
                  <li>Extensions para mayor visibilidad</li>
                  <li>Landing pages específicas</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">Campañas Display</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Aumenta el awareness de tu marca con anuncios visuales en sitios web relevantes.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Creatividades llamativas y profesionales</li>
                  <li>Targeting por intereses y comportamiento</li>
                  <li>Remarketing para reconvertir visitantes</li>
                  <li>Formatos responsive y adaptativos</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Campañas Shopping</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Muestra tus productos con imágenes, precios y reseñas directamente en los resultados de búsqueda.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Feed de productos optimizado</li>
                  <li>Gestión de inventario automática</li>
                  <li>Campañas inteligentes con Machine Learning</li>
                  <li>Integración con Google Merchant Center</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold">Campañas en Redes Sociales</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Conecta con tu audiencia en sus plataformas favoritas con contenido nativo y targeting preciso.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Audiencias personalizadas y lookalike</li>
                  <li>Creatividades para cada formato</li>
                  <li>A/B testing de anuncios</li>
                  <li>Retargeting cross-platform</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestro Proceso de Gestión PPC</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-bold mb-2">Investigación</h3>
                <p className="text-gray-600 text-sm">Análisis de competencia, keywords y audiencias</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-bold mb-2">Configuración</h3>
                <p className="text-gray-600 text-sm">Setup de campañas, grupos y creatividades</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-bold mb-2">Lanzamiento</h3>
                <p className="text-gray-600 text-sm">Activación y monitoreo inicial</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="font-bold mb-2">Optimización</h3>
                <p className="text-gray-600 text-sm">Ajustes continuos basados en datos</p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">¿Por qué Elegir Nuestro Servicio PPC?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">✅ Certificaciones Oficiales</h3>
                <p className="text-gray-600 mb-6">
                  Nuestro equipo cuenta con certificaciones de Google Ads, Facebook Blueprint, 
                  LinkedIn Marketing y Microsoft Advertising.
                </p>
                
                <h3 className="text-xl font-bold mb-4">📊 Reportes Transparentes</h3>
                <p className="text-gray-600 mb-6">
                  Dashboards en tiempo real con métricas clave y reportes mensuales detallados.
                </p>
                
                <h3 className="text-xl font-bold mb-4">🎯 Targeting Avanzado</h3>
                <p className="text-gray-600">
                  Utilizamos audiencias personalizadas, lookalike audiences y comportamientos 
                  de compra para maximizar relevancia.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">⚡ Optimización Continua</h3>
                <p className="text-gray-600 mb-6">
                  Monitoreo diario y ajustes basados en rendimiento para mejorar constantemente 
                  el ROI de tus campañas.
                </p>
                
                <h3 className="text-xl font-bold mb-4">🔄 A/B Testing</h3>
                <p className="text-gray-600 mb-6">
                  Probamos diferentes creatividades, copies y audiencias para encontrar las 
                  combinaciones más efectivas.
                </p>
                
                <h3 className="text-xl font-bold mb-4">📈 Escalabilidad</h3>
                <p className="text-gray-600">
                  Estrategias diseñadas para escalar exitosamente cuando encuentres 
                  campañas rentables.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Resultados Promedio de Nuestros Clientes</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">+320%</div>
                  <p className="text-gray-600">Incremento en leads</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">-45%</div>
                  <p className="text-gray-600">Reducción en CPC</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.2x</div>
                  <p className="text-gray-600">Retorno de inversión publicitaria</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">+180%</div>
                  <p className="text-gray-600">Aumento en conversiones</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Listo para generar leads desde el primer día?</h2>
            <p className="text-xl mb-8">
              Empecemos con una auditoría gratuita de tus campañas actuales
            </p>
            <div className="space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Auditoría PPC Gratuita
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Hablar con un Experto
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PpcService;
