"use client";
import { motion } from "framer-motion";
import { Calculator, Atom, Beaker, Shapes, ArrowUpRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScientificBackground from "./ScientificBackground"; 

const subjects = [
  { 
    title: "Mathematics", 
    desc: "Master the abstract structures of the universe through advanced computational modeling and pure logic.", 
    icon: Calculator, 
    image: "/math.png", 
    color: "from-blue-600/30 to-cyan-500/10",
    accent: "text-blue-400",
    stats: "CORE INTELLIGENCE",
    progress: "92%"
  },
  { 
    title: "Physics", 
    desc: "Explore quantum mechanics, universal physical laws, and the complex systems governing reality.", 
    icon: Atom, 
    image: "/pizik.png",
    color: "from-purple-600/30 to-pink-500/10",
    accent: "text-purple-400",
    stats: "QUANTUM FIELD",
    progress: "65%"
  },
  { 
    title: "Geometry", 
    desc: "Deep structural analysis of spatial relationships, axiomatic systems, and topological forms.", 
    icon: Shapes, 
    image: "/geometr.png",
    color: "from-amber-500/30 to-orange-600/10",
    accent: "text-amber-400",
    stats: "SPATIAL LOGIC",
    progress: "78%"
  },
  { 
    title: "Chemistry", 
    desc: "Advanced molecular synthesis, atomic bonding, and the future of material science.", 
    icon: Beaker, 
    image: "/himi.png",
    color: "from-emerald-600/30 to-teal-500/10",
    accent: "text-emerald-400",
    stats: "MOLECULAR SYNC",
    progress: "84%"
  }
];

export default function Subjects() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#020617] py-24 px-6 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <ScientificBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-5" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-white text-sm font-black tracking-[8px] uppercase opacity-40">Knowledge Base</h2>
          <p className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">Choose Your Discipline</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
          {subjects.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group relative w-full p-10 rounded-[48px] bg-[#0A0D14]/40 border border-white/5 backdrop-blur-3xl overflow-hidden flex flex-col justify-between min-h-[520px] transition-all duration-500 hover:bg-[#0F1420]/60 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]`}
            >
              {/* --- ЗУРАГ ОРОХ ХЭСЭГ (Visual Illustration) --- */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-bl ${s.color} to-transparent opacity-20 z-10`} />
                <motion.img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-full object-contain opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 p-8"
                  style={{
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
                  }}
                />
              </div>

              <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${s.color} blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />
              
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-5 rounded-[24px] bg-white/5 border border-white/10 ${s.accent} transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-xl`}>
                    <s.icon className="w-8 h-8" />
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                     <span className="text-[10px] font-black tracking-[3px] opacity-50 text-white uppercase">{s.stats}</span>
                  </div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-[280px]">
                  {s.desc}
                </p>
              </div>

              <div className="space-y-8 relative z-20">
                {/* Progress-ийг авч хаяад оронд нь статус болон Launch товчийг үлдээв */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Button className="h-14 px-8 bg-white text-black hover:bg-blue-50 transition-all rounded-[22px] font-black text-[11px] uppercase tracking-[2px] flex items-center gap-2 group/btn shadow-lg">
                      Launch
                      <Zap className="w-4 h-4 fill-current group-hover/btn:animate-bounce" />
                    </Button>
                    <Button variant="ghost" className="h-14 px-6 text-white/40 hover:text-white hover:bg-white/5 rounded-[22px] text-[10px] font-bold uppercase tracking-[2px]">
                      Details
                    </Button>
                  </div>
                  
                  <div className={`p-4 rounded-full border border-white/5 text-slate-500 group-hover:${s.accent} group-hover:border-current transition-all duration-500 cursor-pointer`}>
                     <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}