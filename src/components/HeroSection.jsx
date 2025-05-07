import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Fondo con gradiente y overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cholchol-panorama.jpg" 
          alt="Vista panorámica de Cholchol" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/70"></div>
      </div>

      {/* Formas decorativas */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-10 transform -skew-y-3"></div>
      <div className="absolute -bottom-8 right-0 w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-300/20 blur-xl"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido textual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Municipalidad de <span className="text-yellow-400">Cholchol</span>
            </h1>
            <div className="h-1 w-20 bg-yellow-400 mt-4 mb-6"></div>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg">
              Trabajamos juntos para construir una comunidad más próspera, 
              inclusiva y sostenible para todos nuestros vecinos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/servicios" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium rounded-lg transform transition hover:-translate-y-1 hover:shadow-lg">
                Servicios Municipales
              </a>
              <a href="/tramites" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium rounded-lg backdrop-blur-sm transform transition hover:-translate-y-1">
                Trámites en Línea
              </a>
            </div>
          </motion.div>
          
          {/* Tarjetas informativas */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-4"
          >
            {[
              { 
                title: "Atención Ciudadana",
                description: "Lunes a Viernes de 8:30 a 14:00 hrs", 
                icon: "🏢"
              },
              { 
                title: "Emergencias Municipales",
                description: "(+56) 45 2 865 200", 
                icon: "📞"
              },
              { 
                title: "Próximos Eventos",
                description: "Consulta el calendario de actividades", 
                icon: "📅"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{card.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                    <p className="text-gray-200">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Banner de noticias */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-900/80 backdrop-blur-sm py-3 px-6 text-white z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-semibold">Últimas Noticias:</div>
          <div className="overflow-hidden whitespace-nowrap flex-1 ml-4">
            <div className="animate-marquee inline-block">
              📣 Nueva jornada de reciclaje este fin de semana — 
              🏥 Operativo de salud en sector rural — 
              🎭 Inauguración de centro cultural programada para el próximo mes
            </div>
          </div>
          <a href="/noticias" className="text-yellow-400 hover:underline whitespace-nowrap ml-4">
            Ver todas →
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

