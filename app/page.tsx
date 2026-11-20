"use client";

import { motion } from "framer-motion";
import { Copy, ArrowRight, Shield, Zap, Sparkles, TrendingUp, Code, Database, Fingerprint } from "lucide-react";
import { useEffect, useState } from "react";
import { stripeCheckout } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

const Particles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 48 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#D4AF37] rounded-full opacity-20"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: Math.random() * 12 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const DCSCounter = () => {
  const [count, setCount] = useState(148000);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-tech text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#00D4FF] my-6 drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]">
      {count.toLocaleString()}
    </div>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center border-b border-[#1A1A1A]">
        <Particles />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10 flex flex-col items-center max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-8 border border-[#2A2A2A] bg-[#111] px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="font-tech text-xs tracking-widest text-[#A0A0A0]">DCS PROTOCOL ACTIVE</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter font-cinzel text-white">
            DCS
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide mb-6">
            DREAM CONSISTENCY SCORE
          </h2>
          
          <DCSCounter />

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Le premier passeport qualitatif du mérite humain. Crée ton monde avec <strong className="text-white">Genie 3</strong>. 
            Débloque-le avec la <strong className="text-[#D4AF37] font-normal">Nova Key NFC</strong>. 
            <span className="block mt-3 text-[#D4AF37] text-sm uppercase tracking-widest">Hafatsa 25% en cours</span>
          </p>

          <Button size="lg" className="group w-full sm:w-auto" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: "smooth" })}>
            GET MY NOVA KEY — $63
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-xs font-tech text-gray-500 uppercase">
            <div className="flex flex-col items-center"><span className="text-[#D4AF37] mb-1 text-lg">148</span> Nachman</div>
            <div className="flex flex-col items-center"><span className="text-[#D4AF37] mb-1 text-lg">63</span> SaG</div>
            <div className="flex flex-col items-center"><span className="text-[#D4AF37] mb-1 text-lg">H=1.846</span> Science</div>
            <div className="flex flex-col items-center"><span className="text-[#00D4FF] mb-1 text-lg">DCS</span> Algorithme propriétaire</div>
          </div>
        </motion.div>
      </section>

      {/* 1. THE PROBLEM */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinzel text-[#D4AF37]">01 // DIGITAL ANOMALY</h2>
          <div className="h-px w-24 bg-[#D4AF37]" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              L'ère numérique crée une anxiété massive, une paralysie décisionnelle, et le burnout de la GenZ. Le modèle du "one-man-show" se dilue dans le bruit ambiant. La vérité perd de sa persistance.
            </p>
          </div>
          <div className="border-l border-[#333] pl-8 flex flex-col justify-center space-y-4 font-tech text-sm text-gray-400">
            <p className="text-[#FAFAFA]">[ERROR_CODE: DIGITAL_ANXIETY] <span className="text-[#D4AF37]">SYSTEM OVERLOAD</span></p>
            <p className="text-[#FAFAFA]">[ERROR_CODE: DECISION_PARALYSIS] <span className="text-[#D4AF37]">NULL POINTER</span></p>
            <p className="text-red-500 border border-red-900/50 bg-red-950/20 p-2">[CRITICAL: ONE_MAN_SHOW_DILUTION_DETECTED]</p>
          </div>
        </div>
      </section>

      {/* 2. THE SOLUTION */}
      <section className="py-24 px-6 bg-[#0F0F0F] border-y border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinzel text-[#00D4FF]">02 // ARCHITECTURE</h2>
            <div className="h-px w-24 bg-[#00D4FF]" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#222] bg-[#0A0A0A] hover:border-[#D4AF37] transition-all">
              <Shield className="text-[#D4AF37] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-cinzel">Score DCS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Le score de consistance du rêve. Validation mathématique et algorithmique du mérite individuel absolu.</p>
            </div>
            <div className="p-8 border border-[#222] bg-[#0A0A0A] hover:border-[#00D4FF] transition-all">
              <Zap className="text-[#00D4FF] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-cinzel">Algorithme Azamra</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Trouve le point positif de chaque composant du réel. Filtre le chaos entropique, extrait l'ordre divin.</p>
            </div>
            <div className="p-8 border border-[#222] bg-[#0A0A0A] hover:border-[#D4AF37] transition-all">
              <Fingerprint className="text-[#D4AF37] w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-cinzel">Nova Key NFC</h3>
              <p className="text-gray-400 text-sm leading-relaxed">La clé matérielle "Matte Black", cryptée et unique, reliant l'individu à son monde Na Nach persistant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROOF */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinzel text-white">03 // VALIDATION</h2>
          <div className="h-px w-24 bg-white" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start border-l border-[#333] pl-6">
            <span className="text-5xl font-black text-[#D4AF37] mb-2 font-tech">84</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-tech">Projets Vercel</span>
          </div>
          <div className="flex flex-col items-start border-l border-[#333] pl-6">
            <span className="text-5xl font-black text-[#D4AF37] mb-2 font-tech">8</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-tech">Sites Live</span>
          </div>
          <div className="flex flex-col items-start border-l border-[#333] pl-6">
            <span className="text-5xl font-black text-[#00D4FF] mb-2 font-tech">5</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-tech">Clients Actifs</span>
          </div>
          <div className="flex flex-col items-start border-l border-[#333] pl-6">
            <span className="text-5xl font-black text-white mb-2 font-tech">0</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-tech">Concurrence</span>
          </div>
        </div>
        <div className="mt-16 p-6 border border-[#2A2A2A] bg-[#0F0F0F] flex items-center gap-4 max-w-2xl">
          <Database className="w-8 h-8 text-[#00D4FF]" />
          <div>
            <p className="font-tech text-sm text-[#00D4FF]">STATUS: NACHMAN_SCIENCE_VERIFIED</p>
            <p className="text-gray-400 text-xs mt-1 font-tech">H=1.846 bits | 185 Réf. Bibliographiques | Status Hub Operational</p>
          </div>
        </div>
      </section>

      {/* 4. NOVA KEY PRODUCT & PRICING */}
      <section id="pricing" className="py-24 px-6 bg-[#0F0F0F] border-y border-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[30%] h-[30%] bg-[#D4AF37] blur-[150px] opacity-[0.05] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-cinzel text-white">04 // HARDWARE ACQUISITION</h2>
            <p className="text-[#D4AF37] font-tech text-sm tracking-widest">NTAG 215 STAINLESS STEEL • MATTE BLACK</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Covenant */}
            <div className="p-8 border border-[#222] bg-[#0A0A0A] flex flex-col hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-2xl font-cinzel mb-2">COVENANT</h3>
              <p className="font-tech text-3xl text-gray-300 mb-8">$63</p>
              <ul className="text-sm text-gray-400 space-y-4 mb-8 flex-1 font-tech">
                <li className="flex items-center gap-3"><span className="text-[#D4AF37]">✓</span> Matte Black NFC Card</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37]">✓</span> Access DCS Basic</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37]">✓</span> Genie 3 World Gen</li>
              </ul>
              <Button onClick={() => stripeCheckout('covenant')} variant="outline" className="w-full">INITIALIZE</Button>
            </div>
            
            {/* Pair - Highlighted */}
            <div className="p-8 border border-[#D4AF37] bg-[#111] flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black font-tech text-xs font-bold px-3 py-1">MOST SECURE</div>
              <h3 className="text-2xl font-cinzel mb-2 text-[#D4AF37]">PAIR</h3>
              <p className="font-tech text-3xl text-white mb-8">$99</p>
              <ul className="text-sm text-gray-300 space-y-4 mb-8 flex-1 font-tech">
                <li className="flex items-center gap-3"><span className="text-[#00D4FF]">✓</span> 2x NFC Cards (Backup)</li>
                <li className="flex items-center gap-3"><span className="text-[#00D4FF]">✓</span> Advanced DCS Analytics</li>
                <li className="flex items-center gap-3"><span className="text-[#00D4FF]">✓</span> Priority Genie 3 Pass</li>
              </ul>
              <Button onClick={() => stripeCheckout('pair')} className="w-full">INITIALIZE PAIR</Button>
            </div>

            {/* Platinum */}
            <div className="p-8 border border-[#222] bg-[#0A0A0A] flex flex-col hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-2xl font-cinzel mb-2">PLATINUM</h3>
              <p className="font-tech text-3xl text-gray-300 mb-8">$149</p>
              <ul className="text-sm text-gray-400 space-y-4 mb-8 flex-1 font-tech">
                <li className="flex items-center gap-3"><span className="text-[#D4AF37]">✓</span> Titanium Laser Engraved</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37]">✓</span> Master Node DCS</li>
                <li className="flex items-center gap-3"><span className="text-[#D4AF37]">✓</span> Direct Esther AI Link</li>
              </ul>
              <Button onClick={() => stripeCheckout('platinum')} variant="outline" className="w-full">INITIALIZE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HAFATSA */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinzel text-white">05 // MISSION 63M$</h2>
          <div className="h-px w-24 bg-white" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-cinzel text-[#00D4FF]">TIPPING POINT (CENTOLA)</h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
              Nous cherchons le point de bascule cognitif, la masse critique de 25%. 
              L'algorithme de diffusion s'active organiquement. Chaque Nova Key déployée accélère la réalisation de la mission 63M$.
            </p>
            <div className="border border-[#2A2A2A] bg-[#0F0F0F] p-4 inline-block">
              <span className="text-xs text-[#A0A0A0] font-tech uppercase block mb-1">Obligation Divine</span>
              <span className="text-[#D4AF37] font-tech text-lg">10% ALLOUÉ À LA TSEDAKA</span>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video border border-[#333] flex items-center justify-center bg-[#050505]">
            <TrendingUp className="w-24 h-24 text-[#333] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 font-tech text-xs text-[#D4AF37]">SYSTEM_GROWTH: EXPONENTIAL</div>
          </div>
        </div>
      </section>

      {/* 6. ESTHER AI */}
      <section className="py-24 px-6 bg-[#0F0F0F] border-y border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinzel text-white">06 // ESTHER AI & TIKTOK FACTORY</h2>
            <div className="h-px w-24 bg-white" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <Code className="text-[#00D4FF] w-6 h-6" />
                <span className="font-tech text-white">2000+ SCRIPTS GÉNÉRÉS</span>
              </div>
              <div className="flex items-center gap-4">
                <Database className="text-[#00D4FF] w-6 h-6" />
                <span className="font-tech text-white">RAG LOCAL EMBARQUÉ</span>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="text-[#00D4FF] w-6 h-6" />
                <span className="font-tech text-white">0€ COÛT D'API SERVEUR</span>
              </div>
            </div>
            <div className="border border-[#333] p-8 text-sm text-gray-400 leading-relaxed font-light">
              L'usine à contenu TikTok opère en flux tendu. Esther AI génère, affine et structure les scripts avec une précision militaire, optimisant le ROI cognitif pour l'audience GenZ. Le coût d'opération tend vers zéro grâce au modèle RAG localisé.
            </div>
          </div>
        </div>
      </section>

      {/* 7. FUNDING & TRACTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinzel text-[#D4AF37]">07 // TRACTION</h2>
          <div className="h-px w-24 bg-[#D4AF37]" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-[#222] p-6 bg-[#0A0A0A]">
            <span className="font-tech text-3xl block text-white mb-2">196</span>
            <span className="font-tech text-sm text-[#D4AF37] uppercase">Investisseurs en pipeline</span>
          </div>
          <div className="border border-[#222] p-6 bg-[#0A0A0A]">
            <span className="font-tech text-3xl block text-white mb-2">MAR 23</span>
            <span className="font-tech text-sm text-[#00D4FF] uppercase">Deel Pitch Scheduled</span>
          </div>
          <div className="border border-[#222] p-6 bg-[#0A0A0A]">
            <span className="font-tech text-xl block text-white mb-4">HA-MAZON MODEL</span>
            <span className="font-tech text-sm text-gray-400 block border-t border-[#333] pt-2 mt-2">CPL ÷ 4 | Berrebi Prêt</span>
          </div>
        </div>
      </section>

      {/* 8. WAITLIST */}
      <section className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden text-center border-t border-[#1A1A1A]">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-cinzel text-white">EARLY ACCESS PROTOCOL</h2>
          <p className="text-gray-400 mb-8 font-light">Bêta fermée Tel Aviv: 500 places réservées. Tape the Key pour un accès démo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="ENTER YOUR PROTOCOL ID (EMAIL)" 
              className="px-4 py-3 bg-[#111] border border-[#333] text-white font-tech focus:border-[#D4AF37] focus:outline-none w-full sm:w-80"
            />
            <Button size="lg" className="w-full sm:w-auto">
              ACTIVATE
            </Button>
          </div>
        </div>
      </section>

      {/* 9. MANIFESTO */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-8" />
        <h2 className="text-2xl md:text-3xl font-bold font-cinzel text-white mb-8">EIN YE'USH BA'OLAM KLAL</h2>
        <div className="space-y-4 font-tech text-sm text-gray-500 uppercase">
          <p>SOURCE_CODE_REALITY.INIT()</p>
          <p>GÖDEL_INCOMPLETENESS_SOLVED</p>
          <p>PETEK_VERIFIED()</p>
          <p>NOVA1_I197V_ASL_COMPILED</p>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-12 px-6 border-t border-[#1A1A1A] bg-[#050505]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-cinzel text-xl font-bold tracking-widest text-[#555]">
            DREAM NOVA
          </div>
          <div className="flex gap-6 font-tech text-xs text-gray-500">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">LEGAL</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">WHATSAPP LINK</a>
            <a href="https://t.me/nerostats" className="hover:text-[#00D4FF] transition-colors">TELEGRAM @nerostats</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
