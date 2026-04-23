"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScientificBackground from "./ScientificBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#020617] selection:bg-blue-500/30">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <ScientificBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      <div className="container mx-auto p-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:justify-between">
        
        {/* ЗҮҮН ТАЛ: CONTENT */}
        <motion.div 
          className="flex-1 space-y-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-2xl mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span className="text-[10px] font-black tracking-[4px] text-blue-400 uppercase">
              Terminal Alpha-7 Active
            </span>
          </div>

        <h1 className="text-[45px] lg:text-[85px] font-extrabold tracking-tighter leading-[0.9] text-white">
  MASTER THE <br />
  <span className="relative inline-block mt-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]">
    Universe.
    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 blur-[1px]" />
  </span>
</h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed border-l-2 border-blue-600/30 pl-8"
          >
            Шинжлэх ухааны хамгийн нарийн төвөгтэй томьёо, туршилтуудыг дижитал орчинд 
            бодитоор мэдэр. Бид мэдлэгийн хязгаарыг хамтдаа тэлнэ.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-8 pt-4"
          >
            <Button className="h-16 px-12 bg-white text-black hover:bg-blue-50 transition-all rounded-[20px] font-black text-sm uppercase tracking-widest flex items-center gap-3 group shadow-2xl">
              Explore Now 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <button className="flex items-center gap-4 text-slate-400 font-bold hover:text-white transition-all group">
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all">
                <Microscope className="w-5 h-5" />
              </div>
              <span className="text-sm tracking-widest uppercase">Documentation</span>
            </button>
          </motion.div>
        </motion.div>

        {/* БАРУУН ТАЛ: ЗУРГИЙГ УУСГАЖ БАЙРЛУУЛАХ ХЭСЭГ */}
        <motion.div 
          className="relative flex-1 w-full max-w-[600px] aspect-square lg:aspect-auto lg:h-[600px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Зургийн ардах гэрэлтэлт (Glow effect) */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
          
          {/* Зургийн хүрээ (Glassmorphism Container) */}
          <div className="relative w-full h-full p-4 lg:p-8 flex items-center justify-center">
            <div className="relative w-full h-full rounded-[40px] lg:rounded-[60px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl group">
              
              {/* Зургийг уусгах Mask Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#020617]/20 via-transparent to-[#020617]/20" />

              {/* Үндсэн зураг */}
              <motion.img 
                src="screen.png" 
                alt="Visualization" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                animate={{
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
              />

              {/* Зургийн дээрх шинжлэх ухааны Overlay элемент */}
              <div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md">
                <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">Visualizing Data...</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}