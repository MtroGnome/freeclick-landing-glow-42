
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Mail, Globe, PenTool, BarChart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection: React.FC = () => {
  const services = [
    {
      title: "SEO Estratégico",
      description: "Mejora tu posicionamiento en buscadores y genera más tráfico orgánico con estrategias SEO basadas en datos.",
      icon: TrendingUp,
      color: "from-blue-400 to-blue-600",
      link: "/servicios/seo",
    },
    {
      title: "Marketing de Contenidos",
      description: "Crea contenido atractivo que involucre a tu audiencia y establezca tu marca como líder en la industria.",
      icon: PenTool,
      color: "from-cyan-400 to-cyan-600",
      link: "/servicios/marketing-contenidos",
    },
    {
      title: "Redes Sociales",
      description: "Construye una presencia social poderosa que conecte con tu audiencia y genere compromiso significativo.",
      icon: Share2,
      color: "from-purple-400 to-purple-600",
      link: "/servicios/redes-sociales",
    },
    {
      title: "Campañas de Email",
      description: "Diseña campañas de email dirigidas que nutran leads y conviertan prospectos en clientes leales.",
      icon: Mail,
      color: "from-red-400 to-red-600",
      link: "/servicios/email-marketing",
    },
    {
      title: "Publicidad PPC",
      description: "Maximiza tu ROI con campañas estratégicas de pago por clic que se dirijan a tus clientes ideales.",
      icon: Globe,
      color: "from-green-400 to-green-600",
      link: "/servicios/publicidad-ppc",
    },
    {
      title: "Analítica y Reportes",
      description: "Obtén insights accionables con analítica integral y reportes para refinar tu estrategia de marketing.",
      icon: BarChart,
      color: "from-orange-400 to-orange-500",
      link: "/servicios/analytics",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 reveal">NUESTROS SERVICIOS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            Soluciones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Marketing Integrales</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 reveal">
            Ofrecemos una suite completa de servicios de marketing digital diseñados para ayudar a tu negocio 
            a alcanzar nuevas alturas en el panorama digital.
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
              <Link to={service.link}>
                <Button 
                  variant="ghost" 
                  className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-0"
                >
                  Saber más &rarr;
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white px-8 py-6 rounded-lg">
            Explorar Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
