'use client';

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Zap, Layers, Settings, Wrench, Shield, Clock } from 'lucide-react';

export default function SteelEngraveSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Gravare Laser',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mulțumim! Vom lua legătura cu tine în cel mai scurt timp.');
    setFormData({ name: '', email: '', phone: '', service: 'Gravare Laser', message: '' });
  };

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Gravare Laser",
      description: "Gravare de precizie pe metal cu tehnologie laser de ultimă generație pentru personalizări complexe și detalii fine"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Decupare CNC Tablă",
      description: "Tăiere precisă a tablei metalice cu CNC pentru forme complexe și toleranțe stricte"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Frezare Router CNC",
      description: "Prelucrare 3D și 2D a metalelor pentru piese cu geometrii complexe"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Prelucrare prin Aschiere",
      description: "Frezare și strunjire de precizie pentru componente mecanice exigente"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sudură Profesională",
      description: "Sudură de finețe și în masă pentru asamblări robuste și durabile"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Livrare Rapidă",
      description: "Termene flexibile și execuție rapidă pentru proiecte urgente"
    }
  ];

  const sectors = [
    "Automotive",
    "Construcții",
    "Mobilier Design",
    "Decorațiuni",
    "Industrie",
    "Prototipare"
  ];

  const projects = [
    { 
      category: "Automotive", 
      title: "Componente Auto Personalizate",
      description: "Piese de precizie pentru industria auto"
    },
    { 
      category: "Mobilier", 
      title: "Structuri Metalice Design",
      description: "Elemente decorative pentru mobilier premium"
    },
    { 
      category: "Industrie", 
      title: "Componente Industriale",
      description: "Piese complexe pentru echipamente industriale"
    },
    { 
      category: "Decorațiuni", 
      title: "Panouri Decorative",
      description: "Design modern pentru spații comerciale"
    },
    { 
      category: "Construcții", 
      title: "Elemente Arhitecturale",
      description: "Soluții metalice pentru proiecte de construcții"
    },
    { 
      category: "Prototipare", 
      title: "Prototipuri Rapide",
      description: "De la concept la produs finit"
    }
  ];

  const process = [
    { step: "01", title: "Consultare", desc: "Discutăm cerințele proiectului tău" },
    { step: "02", title: "Design", desc: "Optimizăm designul pentru fabricație" },
    { step: "03", title: "Producție", desc: "Fabricăm cu echipamente de ultimă generație" },
    { step: "04", title: "Control Calitate", desc: "Verificăm fiecare detaliu" },
    { step: "05", title: "Livrare", desc: "Livrăm rapid și în siguranță" }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                SteelEngrave
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#servicii" className="hover:text-orange-500 transition">Servicii</a>
              <a href="#sectoare" className="hover:text-orange-500 transition">Sectoare</a>
              <a href="#portofoliu" className="hover:text-orange-500 transition">Portofoliu</a>
              <a href="#proces" className="hover:text-orange-500 transition">Proces</a>
              <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+40741234567" className="flex items-center space-x-2 text-sm hover:text-orange-500 transition">
                <Phone className="w-4 h-4" />
                <span>+40 741 234 567</span>
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-800 border-t border-zinc-700">
            <div className="px-4 py-3 space-y-3">
              <a href="#servicii" className="block hover:text-orange-500">Servicii</a>
              <a href="#sectoare" className="block hover:text-orange-500">Sectoare</a>
              <a href="#portofoliu" className="block hover:text-orange-500">Portofoliu</a>
              <a href="#proces" className="block hover:text-orange-500">Proces</a>
              <a href="#contact" className="block hover:text-orange-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-zinc-900 to-red-600/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Confecții Metalice
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  De Precizie
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8">
                Transformăm viziunea ta în realitate prin tehnologie avansată CNC, gravare laser și sudură profesională. De la prototip la serie mică și medie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition group"
                >
                  Solicită Ofertă
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </a>
                <a 
                  href="https://wa.me/40741234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-500/10 transition"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp Direct
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-500">10+</div>
                  <div className="text-sm text-zinc-400">Ani experiență</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-zinc-400">Proiecte finalizate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">99%</div>
                  <div className="text-sm text-zinc-400">Clienți mulțumiți</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Settings className="w-32 h-32 text-orange-500/20 mx-auto mb-4" />
                    <p className="text-zinc-500 text-sm">Imagini echipamente și lucrări</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 px-4 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Servicii Complete de Prelucrare</h2>
            <p className="text-xl text-zinc-400">Soluții profesionale pentru fiecare etapă a proiectului tău</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-zinc-900 p-8 rounded-xl border border-zinc-700 hover:border-orange-500 transition group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectoare" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sectoare Deservite</h2>
            <p className="text-xl text-zinc-400">Experiență în multiple industrii</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-orange-500/10 hover:border-orange-500 border border-zinc-700 transition cursor-pointer"
              >
                <span className="font-semibold">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portofoliu" className="py-20 px-4 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portofoliu Proiecte</h2>
            <p className="text-xl text-zinc-400">Exemple din lucrările noastre recente</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition group"
              >
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <Layers className="w-16 h-16 text-orange-500/20" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-orange-500 font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cum Lucrăm</h2>
            <p className="text-xl text-zinc-400">Proces simplu și transparent</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Gata să Începem?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactează-ne astăzi pentru o consultație gratuită și o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-zinc-100 transition"
            >
              Solicită Ofertă Gratuită
            </a>
            <a 
              href="https://wa.me/40741234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Phone className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contactează-ne</h2>
            <p className="text-xl text-zinc-400">Suntem aici să te ajutăm</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Trimite-ne un Mesaj</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nume Complet</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Serviciul Dorit</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option>Gravare Laser</option>
                    <option>Decupare CNC</option>
                    <option>Frezare Router CNC</option>
                    <option>Prelucrare prin Aschiere</option>
                    <option>Sudură</option>
                    <option>Altele</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mesaj</label>
                  <textarea 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-500"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition"
                >
                  Trimite Mesajul
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Informații de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <a href="tel:+40741234567" className="text-zinc-400 hover:text-orange-500">
                      +40 741 234 567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:contact@steelengrave.ro" className="text-zinc-400 hover:text-orange-500">
                      contact@steelengrave.ro
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <div className="font-semibold">Adresă</div>
                    <p className="text-zinc-400">
                      Oltenița, Călărași, România
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-zinc-800 rounded-xl border border-zinc-700">
                <h4 className="font-bold mb-3">Program de Lucru</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Luni - Vineri:</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Sâmbătă:</span>
                    <span className="font-semibold">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Duminică:</span>
                    <span className="font-semibold">Închis</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
                <h4 className="font-bold mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-orange-500" />
                  De Ce Să Ne Alegi
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>✓ Echipamente CNC de ultimă generație</li>
                  <li>✓ Toleranțe de precizie sub 0.1mm</li>
                  <li>✓ Livrare rapidă în toată România</li>
                  <li>✓ Consultanță tehnică gratuită</li>
                  <li>✓ Prețuri competitive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-zinc-400">
          <p>&copy; 2025 SteelEngrave. Toate drepturile rezervate.</p>
          <p className="mt-2 text-sm">Confecții metalice de precizie | Oltenița, România</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/40741234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 group"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
          Contactează-ne pe WhatsApp
        </span>
      </a>
    </div>
  );
}