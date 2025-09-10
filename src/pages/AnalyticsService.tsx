import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, TrendingUp, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AnalyticsService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-6">
              <BarChart3 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Analytics & Reportes</h1>
              <p className="text-xl text-white/90">
                Convierte datos en decisiones estratégicas que impulsan el crecimiento
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
            <h2 className="text-3xl font-bold mb-6">El Poder de los Datos en Marketing Digital</h2>
            <p className="text-lg text-gray-600 mb-6">
              En el marketing digital, los datos son tu brújula hacia el éxito. Sin medición 
              adecuada, es imposible saber qué estrategias funcionan, cuáles necesitan ajustes 
              y dónde invertir tu presupuesto para obtener el mejor ROI.
            </p>
            <p className="text-lg text-gray-600">
              En Hydra Marketing, transformamos números en insights accionables. Configuramos 
              sistemas de tracking completos, creamos dashboards personalizados y proporcionamos 
              reportes que realmente ayudan a tomar decisiones estratégicas.
            </p>
          </section>

          {/* Why Analytics Matter */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-8">¿Por qué son Cruciales los Analytics?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                  <p className="text-gray-600">De empresas no miden ROI correctamente</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
                  <p className="text-gray-600">Mejor rendimiento con analytics</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">67%</div>
                  <p className="text-gray-600">Reducción en desperdicio publicitario</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">+150%</div>
                  <p className="text-gray-600">Mejora en toma de decisiones</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de Analytics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Configuración de Tracking</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Implementamos sistemas de medición completos en todos tus canales digitales.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Google Analytics 4 (GA4)</li>
                  <li>Google Tag Manager</li>
                  <li>Facebook Pixel</li>
                  <li>Conversions tracking</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">Dashboards Personalizados</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Creamos dashboards que muestran las métricas que realmente importan para tu negocio.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Google Data Studio</li>
                  <li>Tableau</li>
                  <li>Power BI</li>
                  <li>Dashboards en tiempo real</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">Análisis de Rendimiento</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Analizamos profundamente el comportamiento de usuarios y el rendimiento de campañas.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Customer journey mapping</li>
                  <li>Attribution modeling</li>
                  <li>Cohort analysis</li>
                  <li>Funnel optimization</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold">Reportes Ejecutivos</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Reportes claros y accionables diseñados para diferentes niveles de la organización.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Reportes mensuales</li>
                  <li>KPI tracking</li>
                  <li>Insights accionables</li>
                  <li>Recomendaciones estratégicas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Herramientas que Utilizamos</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="Google Analytics" className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Google Analytics</h3>
                <p className="text-gray-600 text-sm">Análisis completo del comportamiento web</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="Data Studio" className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Google Data Studio</h3>
                <p className="text-gray-600 text-sm">Dashboards visuales y reportes automáticos</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="Tag Manager" className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Google Tag Manager</h3>
                <p className="text-gray-600 text-sm">Gestión centralizada de códigos de tracking</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="Search Console" className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Search Console</h3>
                <p className="text-gray-600 text-sm">Monitoreo de rendimiento SEO</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="Hotjar" className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Hotjar</h3>
                <p className="text-gray-600 text-sm">Heatmaps y grabaciones de sesiones</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="Facebook Analytics" className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Meta Business</h3>
                <p className="text-gray-600 text-sm">Analytics de redes sociales</p>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Métricas Clave que Monitoreamos</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-600">📊 Métricas de Tráfico</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sesiones y usuarios únicos</li>
                  <li>• Fuentes de tráfico</li>
                  <li>• Páginas más visitadas</li>
                  <li>• Tiempo en sitio</li>
                  <li>• Tasa de rebote</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">🎯 Métricas de Conversión</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tasa de conversión por canal</li>
                  <li>• Costo por adquisición (CPA)</li>
                  <li>• Lifetime Value (LTV)</li>
                  <li>• ROI por campaña</li>
                  <li>• Revenue attribution</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-600">📈 Métricas de Engagement</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Páginas por sesión</li>
                  <li>• Scroll depth</li>
                  <li>• Clicks en CTAs</li>
                  <li>• Interacciones sociales</li>
                  <li>• Email engagement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-600">💰 Métricas de Negocio</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Revenue total</li>
                  <li>• Average order value</li>
                  <li>• Customer retention rate</li>
                  <li>• Monthly recurring revenue</li>
                  <li>• Profit margins por canal</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestro Proceso de Implementación</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Auditoría Inicial</h3>
                  <p className="text-gray-600">
                    Revisamos tu configuración actual de analytics, identificamos gaps y oportunidades de mejora.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Configuración de Tracking</h3>
                  <p className="text-gray-600">
                    Implementamos códigos de seguimiento, configuramos eventos y goals según tus objetivos de negocio.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Creación de Dashboards</h3>
                  <p className="text-gray-600">
                    Diseñamos dashboards personalizados que muestran las métricas más importantes para tu negocio.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reportes y Optimización</h3>
                  <p className="text-gray-600">
                    Proporcionamos reportes regulares con insights accionables y recomendaciones de optimización.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Beneficios de Nuestro Servicio</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">+200%</div>
                  <p className="text-gray-600">Mejora en toma de decisiones</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">-40%</div>
                  <p className="text-gray-600">Reducción en desperdicio publicitario</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">+150%</div>
                  <p className="text-gray-600">Incremento en ROI</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                  <p className="text-gray-600">Ahorro en tiempo de reportes</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-green-600 to-green-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Listo para tomar decisiones basadas en datos?</h2>
            <p className="text-xl mb-8">
              Comencemos con una auditoría gratuita de tu configuración actual de analytics
            </p>
            <div className="space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Auditoría Analytics Gratuita
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
                  Hablar con un Especialista
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsService;
