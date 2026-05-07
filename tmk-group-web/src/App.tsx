/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, Zap, HeartPulse, ShieldCheck, Globe, Scale, 
  Landmark, MapPin, Phone, Mail, Clock, ChevronRight, 
  Menu, X, Landmark as Building, ArrowRight, ExternalLink
} from 'lucide-react';
import { Language, navItems, content } from './constants';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'th' : 'en');

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-dark/10 py-4' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs tracking-tighter">TMK</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-serif leading-none tracking-tight">TMK GROUP</span>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-60 font-bold block mt-0.5">Thaimongkol Rice Mill</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 text-[11px] font-semibold uppercase tracking-[0.15em]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    {item.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-3 text-[10px] font-bold border-l pl-8 border-brand-dark/20 hover:text-brand-primary transition-colors"
            >
              <span className={lang === 'en' ? 'text-brand-primary' : 'opacity-40'}>EN</span>
              <span className="opacity-20 italic">|</span>
              <span className={lang === 'th' ? 'text-brand-primary' : 'opacity-40'}>TH</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-28 px-12 flex flex-col gap-8 md:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-3xl font-normal font-serif text-brand-dark text-left border-b border-brand-dark/10 pb-4 flex justify-between items-center"
              >
                {item.label[lang]}
                <ChevronRight className="text-brand-primary" size={24} />
              </button>
            ))}
            <button 
              onClick={toggleLang}
              className="mt-4 flex items-center gap-3 text-brand-primary font-bold uppercase tracking-widest text-sm"
            >
              <Globe size={20} />
              {lang === 'en' ? 'Switch to THAI' : 'Switch to ENGLISH'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[600px] bg-brand-decor rounded-l-[150px] hidden lg:block opacity-60"></div>
          <div className="absolute right-20 top-[15%] w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute left-20 bottom-[10%] w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 mb-8 border border-brand-primary text-brand-primary text-[10px] font-bold uppercase tracking-[0.25em] rounded-full">
              Sustainable Global Trading
            </span>
            <h1 className="text-5xl md:text-7xl font-normal font-serif leading-[1.05] text-brand-dark mb-8">
              {lang === 'en' ? (
                <>Empowering <span className="italic text-brand-primary">Sustainable</span> <br/>Growth Across Asia</>
              ) : (
                <>ขับเคลื่อน <span className="italic text-brand-primary">การเติบโต</span> <br/>อย่างยั่งยืนในเอเชีย</>
              )}
            </h1>
            <p className="text-xl text-brand-dark/70 mb-10 leading-relaxed font-light">
              {content.hero.subtitle[lang]}
            </p>
            <div className="flex flex-wrap gap-6 mt-12">
              <button 
                onClick={() => scrollTo('#businesses')}
                className="px-10 py-5 bg-brand-dark text-brand-bg text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/10"
              >
                {content.hero.cta1[lang]}
              </button>
              <button 
                onClick={() => scrollTo('#contact')}
                className="px-10 py-5 border border-brand-dark text-brand-dark text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full hover:bg-brand-dark hover:text-white transition-all"
              >
                {content.hero.cta2[lang]}
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
             <div className="relative z-10 rounded-[100px] overflow-hidden border-[15px] border-white shadow-[0_40px_80px_-20px_rgba(27,48,34,0.15)] ring-1 ring-brand-dark/5">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
                  alt="Sustainable Nature" 
                  className="w-full aspect-[4/5] object-cover scale-105"
                  referrerPolicy="no-referrer"
                />
             </div>
             {/* Decorative grid inspired by theme */}
             <div className="absolute -right-12 -bottom-12 w-64 h-80 bg-brand-decor rounded-[80px] -z-10 transform rotate-12"></div>
             <div className="absolute -left-12 top-20 w-32 h-32 border-2 border-brand-primary/20 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2">
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{content.about.title[lang]}</span>
              <h2 className="text-4xl md:text-6xl font-normal font-serif mb-10 text-brand-dark leading-[1.1]">
                {content.about.legacyTitle[lang]}
              </h2>
              <p className="text-brand-dark/70 text-xl leading-relaxed mb-12 font-light">
                {content.about.legacyText[lang]}
              </p>
              
              <div className="bg-brand-decor/50 p-10 rounded-[40px] border-l-8 border-brand-primary">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-primary flex items-center gap-2">
                  <ShieldCheck size={18} />
                  {content.about.visionTitle[lang]}
                </h3>
                <p className="text-brand-dark text-2xl font-serif italic font-light leading-snug">
                  "{content.about.visionText[lang]}"
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 lg:mt-0">
              <h3 className="col-span-full text-[10px] font-bold mb-4 uppercase tracking-[0.3em] text-brand-dark/30 underline decoration-brand-primary/30 underline-offset-8 decoration-2">{content.about.missionTitle[lang]}</h3>
              {content.about.missions.map((m, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-brand-bg rounded-[30px] border border-brand-dark/5 hover:border-brand-primary transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-brand-primary group-hover:scale-[10]"></div>
                  <div className="relative z-10 transition-colors group-hover:text-white">
                    <m.icon className="text-brand-primary mb-6 transition-colors group-hover:text-white" size={32} strokeWidth={1.5} />
                    <p className="font-bold text-sm tracking-wide leading-relaxed">
                      {m.text[lang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Middle Bar Inspired by theme */}
      <section className="px-12 py-16 bg-brand-dark text-white flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-4 underline decoration-brand-secondary/30 underline-offset-4 decoration-2">Strategic Sectors</h3>
          <p className="text-2xl font-serif italic text-brand-bg/90 mt-2" style={{ fontFamily: 'Georgia, serif' }}>Focused on tomorrow's essentials.</p>
        </div>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          <div className="border-l border-white/10 pl-8 h-full flex flex-col justify-center">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Agriculture</h4>
            <p className="text-[10px] opacity-40 uppercase tracking-[0.1em]">Premium Fertilizers & Bio-stimulants</p>
          </div>
          <div className="border-l border-white/10 pl-8 h-full flex flex-col justify-center">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Sustainability</h4>
            <p className="text-[10px] opacity-40 uppercase tracking-[0.1em]">Bio-ethanol & ISCC Consulting</p>
          </div>
          <div className="border-l border-white/10 pl-8 h-full flex flex-col justify-center">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Healthcare</h4>
            <p className="text-[10px] opacity-40 uppercase tracking-[0.1em]">Japanese Medical Innovation</p>
          </div>
        </div>
      </section>

      {/* Businesses Section */}
      <section id="businesses" className="py-32 bg-brand-bg px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20 border-b border-brand-dark/10 pb-10">
            <h2 className="text-4xl md:text-6xl font-normal font-serif italic text-brand-dark">{content.businesses.title[lang]}</h2>
            <div className="hidden md:block text-[10px] uppercase font-bold tracking-[0.3em] text-brand-primary">Innovation Paths</div>
          </div>
          
          <div className="flex flex-col gap-40">
            {content.businesses.units.map((unit, idx) => (
              <div key={unit.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                <motion.div 
                  className="lg:w-1/2 w-full"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative rounded-[80px] overflow-hidden aspect-[16/10] shadow-2xl group border-8 border-white ring-1 ring-brand-dark/5">
                    <img 
                      src={unit.image} 
                      alt={unit.title[lang]} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-brand-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block underline decoration-brand-primary/20 underline-offset-8 decoration-2">{unit.title[lang]}</span>
                  <h3 className="text-3xl md:text-4xl font-serif italic mb-8 text-brand-dark">{unit.subtitle[lang]}</h3>
                  <p className="text-brand-dark/70 text-lg mb-10 leading-relaxed font-light">
                    {unit.description[lang]}
                  </p>
                  
                  {'brands' in unit && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                      {unit.brands.map((b, i) => (
                        <div key={i} className="bg-white p-6 rounded-[25px] border border-brand-dark/5 shadow-sm hover:shadow-md transition-shadow">
                          <span className="font-serif italic text-brand-primary text-xl block mb-2">{b.name}</span>
                          <span className="text-xs uppercase tracking-wider text-brand-dark/50 leading-relaxed font-bold">{b.desc[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {'points' in unit && (
                    <ul className="mb-10 space-y-5">
                      {unit.points.map((p, i) => (
                        <li key={i} className="flex gap-4 items-start text-brand-dark/80">
                          <div className="mt-2 w-2 h-2 rounded-full border border-brand-primary shrink-0 transition-all group-hover:w-4 group-hover:bg-brand-primary"></div>
                          <span className="text-sm font-medium leading-relaxed">{p[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {'advantage' in unit && (
                    <div className="flex items-center gap-5 p-6 bg-brand-decor rounded-[30px] border border-brand-dark/5">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                        <ShieldCheck size={24} />
                      </div>
                      <p className="text-[10px] font-bold text-brand-dark/80 uppercase tracking-[0.15em] leading-relaxed">
                        {unit.advantage[lang]}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="partnership" className="py-32 bg-[#1B3022] text-white overflow-hidden relative px-12">
        {/* Background decorative circles */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#4F772D] rounded-full opacity-10"></div>
        <div className="absolute top-[20%] -right-20 w-80 h-100 border-2 border-white/5 rounded-full rotate-12"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-secondary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Our Advantage</span>
              <h2 className="text-4xl md:text-6xl font-normal font-serif italic">{content.whyUs.title[lang]}</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest font-bold text-right hidden md:block">
              Strategic synergy for global impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {content.whyUs.reasons.map((r, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[50px] border border-white/10 hover:bg-white/10 transition-all hover:translate-y-[-10px] duration-500"
              >
                <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/20">
                  <r.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif italic mb-4 text-brand-bg">{r.title[lang]}</h4>
                <p className="text-white/50 text-[11px] uppercase tracking-widest leading-loose font-bold">
                  {r.text[lang]}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <button 
              onClick={() => scrollTo('#contact')}
              className="bg-white text-brand-dark px-12 py-6 rounded-full font-extrabold text-[11px] uppercase tracking-[0.3em] hover:bg-brand-secondary hover:text-white transition-all hover:scale-105 flex items-center gap-4 mx-auto"
            >
              Collaborate With Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block leading-none">{content.contact.title[lang]}</span>
              <h2 className="text-4xl md:text-5xl font-normal font-serif mb-12 text-brand-dark italic leading-tight">TMK <span className="text-brand-primary underline decoration-brand-primary/20 decoration-4 underline-offset-8">Thaimongkol</span> Rice Mill</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-12">
                   <div className="group">
                    <h5 className="text-[10px] font-bold mb-4 uppercase tracking-[0.25em] text-brand-primary border-b border-brand-primary/10 pb-2 inline-block">Headquarters</h5>
                    <p className="text-brand-dark/70 text-sm leading-loose mt-4 font-medium italic">{content.contact.address[lang]}</p>
                   </div>
                   
                   <div className="group">
                    <h5 className="text-[10px] font-bold mb-4 uppercase tracking-[0.25em] text-brand-primary border-b border-brand-primary/10 pb-2 inline-block">Inquiries</h5>
                    <p className="text-brand-dark font-serif italic text-2xl mt-4">{content.contact.phone}</p>
                    <p className="text-brand-dark/50 text-xs font-bold uppercase tracking-widest mt-2">{content.contact.email}</p>
                   </div>
                </div>

                <div className="space-y-12">
                   <div className="group">
                    <h5 className="text-[10px] font-bold mb-4 uppercase tracking-[0.25em] text-brand-primary border-b border-brand-primary/10 pb-2 inline-block">Working Hours</h5>
                    <p className="text-brand-dark/70 text-sm leading-loose mt-4 font-medium italic">{content.contact.hours[lang]}</p>
                   </div>
                   
                   <div className="pt-4 flex gap-4">
                      <div className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark/40 hover:text-brand-primary hover:border-brand-primary hover:bg-brand-bg transition-all cursor-pointer">
                        <span className="text-[9px] font-bold font-serif italic">FB</span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark/40 hover:text-brand-primary hover:border-brand-primary hover:bg-brand-bg transition-all cursor-pointer">
                        <span className="text-[9px] font-bold font-serif italic">LI</span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark/40 hover:text-brand-primary hover:border-brand-primary hover:bg-brand-bg transition-all cursor-pointer">
                        <span className="text-[9px] font-bold font-serif italic">IG</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-bg rounded-[60px] p-12 ring-1 ring-brand-dark/5 shadow-2xl shadow-brand-dark/5">
              <h4 className="text-2xl font-serif italic mb-8 text-brand-dark">Send a Message</h4>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] px-1">Full Name</label>
                    <input type="text" className="bg-white border-0 border-b border-brand-dark/10 focus:border-brand-primary focus:ring-0 px-1 py-3 text-sm font-serif italic placeholder:text-brand-dark/10 transition-all outline-none" placeholder="Enter your name" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] px-1">Email Address</label>
                    <input type="email" className="bg-white border-0 border-b border-brand-dark/10 focus:border-brand-primary focus:ring-0 px-1 py-3 text-sm font-serif italic placeholder:text-brand-dark/10 transition-all outline-none" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] px-1">Nature of Inquiry</label>
                  <select className="bg-transparent border-0 border-b border-brand-dark/10 focus:border-brand-primary focus:ring-0 px-1 py-3 text-sm font-serif italic cursor-pointer outline-none appearance-none">
                    <option>Agricultural Solutions</option>
                    <option>Sustainable Energy</option>
                    <option>Healthcare Innovations</option>
                    <option>Strategic Partnership</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] px-1">Your message</label>
                    <textarea className="bg-white/50 border- brand-dark/10 focus:border-brand-primary focus:ring-0 rounded-[20px] px-4 py-4 text-sm font-medium min-h-[140px] placeholder:text-brand-dark/10 outline-none transition-all ring-1 ring-brand-dark/5" placeholder="How can we help your business?"></textarea>
                </div>
                <button 
                  className="w-full bg-brand-dark text-brand-bg py-6 rounded-full font-extrabold text-[11px] uppercase tracking-[0.3em] hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/10 active:scale-95"
                >
                  Confirm Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-decor/50 text-brand-dark/50 py-16 px-12 border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-brand-dark rounded-full flex items-center justify-center text-brand-bg font-bold text-xl tracking-tighter">TMK</div>
               <div className="flex flex-col">
                <span className="font-bold text-brand-dark text-2xl font-serif italic leading-none">TMK GROUP</span>
                <span className="text-[9px] uppercase font-bold tracking-[0.35em] text-brand-primary mt-1">Global Strategic Synergy</span>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-12 text-[10px] font-bold uppercase tracking-[0.3em]">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => scrollTo(item.href)} className="hover:text-brand-primary transition-colors">{item.label[lang]}</button>
              ))}
            </div>
            
            <div className="text-[11px] italic font-serif max-w-[200px] text-right">
              Linking world-class innovation with Asian regional growth.
            </div>
          </div>
          
          <div className="pt-12 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
            <p>© 2026 TMK Thaimongkol Rice Mill Co., Ltd. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <button className="hover:text-brand-dark transition-colors">Privacy Charter</button>
              <button className="hover:text-brand-dark transition-colors">Global Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

