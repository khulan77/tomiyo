"use client";
import { motion } from "framer-motion";
import { Calculator, Atom, Beaker, Shapes, ArrowUpRight } from "lucide-react";

const subjects = [
  { 
    title: "Mathematics", 
    desc: "Complex analysis & multi-dimensional topology.", 
    icon: Calculator, 
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20"
  },
  { 
    title: "Physics", 
    desc: "Quantum mechanics & relativistic simulations.", 
    icon: Atom, 
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/20"
  },
  { 
    title: "Chemistry", 
    desc: "Molecular dynamics & catalytic optimization.", 
    icon: Beaker, 
    color: "from-emerald-500 to-teal-400",
    glow: "shadow-emerald-500/20"
  },
  { 
    title: "Geometry", 
    desc: "Computational geometry & spatial algorithms.", 
    icon: Shapes, 
    color: "from-orange-500 to-yellow-500",
    glow: "shadow-orange-500/20"
  },
];

export default function Subjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {subjects.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="group relative p-8 rounded-[32px] bg-[#0A0D14]/40 border border-white/[0.05] hover:border-white/10 transition-all cursor-pointer overflow-hidden backdrop-blur-sm"
        >
          {/* Арын фонны бүдэг гэрэлтэлт */}
          <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity`} />
          
          <div className="flex justify-between items-start mb-8">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${s.color} bg-opacity-10 shadow-lg ${s.glow}`}>
              <s.icon className="w-6 h-6 text-white" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
            {s.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
            {s.desc}
          </p>
          
          {/* Картны доод талын жижиг "Detail" зураас */}
          <div className="mt-8 h-1 w-12 bg-white/5 rounded-full group-hover:w-full group-hover:bg-blue-500/30 transition-all duration-500" />
        </motion.div>
      ))}
    </div>
  );
}