"use client";
import { motion } from "framer-motion";
import { ArrowRight, Binary } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  // Зураг дээрх алдартай томьёонуудын цуглуулга
  const formulas = [
    { text: "E=mc^2", x: "20%", y: "45%", size: "text-4xl", delay: 0, glow: "shadow-blue-500/50" },
    { text: "\\int f(x)dx", x: "10%", y: "20%", size: "text-xl", delay: 0.5, glow: "shadow-cyan-500/30" },
    { text: "\\nabla \\times B = 0", x: "70%", y: "25%", size: "text-xl", delay: 1, glow: "shadow-blue-400/40" },
    { text: "H\\psi = E\\psi", x: "65%", y: "55%", size: "text-lg", delay: 1.5, glow: "shadow-indigo-500/30" },
    { text: "\\Delta p \\Delta x \\ge \\frac{h}{4\\pi}", x: "30%", y: "75%", size: "text-lg", delay: 2, glow: "shadow-purple-500/30" },
    { text: "\\sin(x)", x: "40%", y: "15%", size: "text-md", delay: 2.5, glow: "shadow-blue-300/20" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#020408]">
      {/* Арын фонны эффектүүд */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full -z-10" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* ЗҮҮН ТАЛ: Текст контент */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[3px] text-blue-400 uppercase">
              Terminal Alpha-7 Active
            </span>
          </div>

          <h1 className="text-[56px] md:text-[88px] font-extrabold tracking-tighter leading-[0.9] text-white mb-8">
            The Future of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic pr-4">
              Discovery
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12">
            Welcome to the Research Core. Engage with advanced simulations across 
            fundamental STEM disciplines to push the boundaries of collective knowledge.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Button className="h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all flex items-center gap-3 group">
              Start Exploration 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-16 px-10 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 font-medium">
              View Archive
            </Button>
          </div>
        </motion.div>

        {/* БАРУУН ТАЛ: Зураг дээрх 3D Томьёоны дүрслэл (Яг хэвээрээ) */}
        <div className="relative flex-1 w-full h-[500px] lg:h-[600px] flex justify-center items-center">
          
          {/* Төв дэх гэрэлтсэн цэнхэр мананцар (Atmosphere) */}
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />

          {/* Холбогч нарийн шугамууд (SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            <motion.circle 
              cx="50%" cy="50%" r="180" 
              stroke="url(#grad)" strokeWidth="0.5" fill="none"
              strokeDasharray="5,10"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Томьёонууд (Floating Formulas) */}
          {formulas.map((formula, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [0.95, 1.05, 0.95],
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                delay: formula.delay,
                ease: "easeInOut" 
              }}
              className={`absolute font-serif font-medium text-blue-100 ${formula.size} cursor-default select-none`}
              style={{ top: formula.y, left: formula.x }}
            >
              <span className={`drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]`}>
                {formula.text}
              </span>
            </motion.div>
          ))}

          {/* Төв дэх хамгийн том $E=mc^2$ */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="z-20 text-[64px] font-serif font-bold text-white drop-shadow-[0_0_35px_rgba(59,130,246,1)]"
          >
            $E=mc^2$
          </motion.div>

        </div>
      </div>
    </section>
  );
}