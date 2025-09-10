import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EmailMarketingService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-6">
              <Mail className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Email Marketing</h1>
              <p className="text-xl text-white/90">
                Convierte prospectos en clientes leales a través del email
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
            <h2 className="text-3xl font-bold mb-6">El Poder del Email Marketing</h2>
            <p className="text-lg text-gray-600 mb-6">
              El email marketing sigue siendo uno de los canales de marketing digital con mayor ROI. 
              Por cada $1 invertido, puedes esperar un retorno promedio de $42. Pero no se trata solo 
              de enviar emails masivos, sino de crear comunicaciones personalizadas y relevantes.
            </p>
            <p className="text-lg text-gray-600">
              En Hydra Marketing, diseñamos campañas de email marketing que nutren leads, mantienen 
              a los clientes comprometidos y generan ventas recurrentes a través de mensajes 
              estratégicamente diseñados.
            </p>
          </section>

          {/* ROI Stats */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-8">¿Por qué el Email Marketing Funciona?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">$42</div>
                  <p className="text-gray-600">ROI por cada $1 invertido</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">99%</div>
                  <p className="text-gray-600">De personas revisan su email diariamente</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">4.2x</div>
                  <p className="text-gray-600">Más efectivo que redes sociales</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de Email Marketing</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold">Segmentación Avanzada</h3>
                </div>
                <p className="text-gray-600">
                  Dividimos tu lista de suscriptores en segmentos específicos para enviar 
                  mensajes más relevantes y personalizados.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Mail className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold">Diseño de Campañas</h3>
                </div>
                <p className="text-gray-600">
                  Creamos templates atractivos y responsivos que se ven perfectos en 
                  cualquier dispositivo y cliente de email.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold">Automatización</h3>
                </div>
                <p className="text-gray-600">
                  Configuramos secuencias automatizadas que nutren leads y guían a los 
                  suscriptores a través del customer journey.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Lista Building</h3>
                </div>
                <p className="text-gray-600">
                  Implementamos estrategias para hacer crecer tu lista de suscriptores 
                  con leads de alta calidad.
                </p>
              </div>
            </div>
          </section>

          {/* Campaign Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tipos de Campañas que Creamos</h2>
            
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-red-600 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🎯 Campañas de Bienvenida</h3>
                <p className="text-gray-600">
                  Secuencias automatizadas que introducen tu marca y productos a nuevos suscriptores.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-orange-600 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">📧 Newsletters</h3>
                <p className="text-gray-600">
                  Comunicaciones regulares que mantienen a tu audiencia informada y comprometida.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-yellow-600 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🛒 Campañas Promocionales</h3>
                <p className="text-gray-600">
                  Emails diseñados para impulsar ventas con ofertas especiales y descuentos.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-green-600 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🔄 Re-engagement</h3>
                <p className="text-gray-600">
                  Estrategias para reactivar suscriptores inactivos y recuperar su interés.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">🛒 Carrito Abandonado</h3>
                <p className="text-gray-600">
                  Secuencias automatizadas para recuperar ventas perdidas por carritos abandonados.
                </p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestro Proceso</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-bold mb-2">Estrategia</h3>
                <p className="text-gray-600 text-sm">Definimos objetivos y audiencias</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-bold mb-2">Diseño</h3>
                <p className="text-gray-600 text-sm">Creamos templates y contenido</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-bold mb-2">Implementación</h3>
                <p className="text-gray-600 text-sm">Configuramos y lanzamos campañas</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="font-bold mb-2">Optimización</h3>
                <p className="text-gray-600 text-sm">Analizamos y mejoramos resultados</p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Resultados que Obtienes</h2>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">+45%</div>
                  <p className="text-gray-600">Tasa de apertura promedio</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">+25%</div>
                  <p className="text-gray-600">Click-through rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">+180%</div>
                  <p className="text-gray-600">Incremento en ventas</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">-60%</div>
                  <p className="text-gray-600">Reducción en costo por lead</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-red-600 to-red-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Listo para maximizar tu ROI con email marketing?</h2>
            <p className="text-xl mb-8">
              Comencemos a crear campañas que conviertan prospectos en clientes leales
            </p>
            <div className="space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Auditoría de Email Gratuita
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
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

export default EmailMarketingService;
