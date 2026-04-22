"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Beaker, GraduationCap, Microscope, User } from "lucide-react";

// Илүү урт, гүн гүнзгий эшлэлүүд
const scientistData = [
  {
    quote: "A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness.",
    author: "Albert Einstein",
    role: "Theoretical Physicist",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=200&h=200", // Жишээ зураг
  },
  {
    quote: "The first principle is that you must not fool yourself and you are the easiest person to fool. Science is a way of trying not to fool yourself. I would rather have questions that can't be answered than answers that can't be questioned.",
    author: "Richard Feynman",
    role: "Quantum Physicist",
    image: "https://images.unsplash.com/photo-1532187875605-7fe3b0b713bf?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special. The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    author: "Stephen Hawking",
    role: "Cosmologist",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=200&h=200",
  }
];

const stats = [
  { label: "Нийт Томьёо", value: "1,240+", icon: GraduationCap },
  { label: "Симуляци", value: "850+", icon: Beaker },
  { label: "Дата Багц", value: "12.4k", icon: Microscope },
];

export default function Scientist() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Refresh хийх үед санамсаргүй нэгийг сонгох
    const randomIndex = Math.floor(Math.random() * scientistData.length);
    setData(scientistData[randomIndex]);
  }, []);

  if (!data) return null;

  return (
    <section className="mt-20 border-t border-white/5 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-stretch">
        
        {/* ЗҮҮН ТАЛ: Эрдэмтний мэдээлэл болон Урт эшлэл */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-10 rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-2xl flex flex-col md:flex-row gap-10 overflow-hidden group"
        >
          {/* Чимэглэлийн неон гэрэл */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10 group-hover:bg-blue-600/20 transition-all" />

          {/* Эрдэмтний зураг болон Нэр */}
          <div className="flex flex-col items-center text-center space-y-4 min-w-[180px]">
             <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20" />
                {/* Зургийн хэсэг - Хэрэв бодит зураг байхгүй бол икон харуулна */}
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-white/10 relative z-10">
                   <img src={data.image} alt={data.author} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
             </div>
             <div>
                <h4 className="text-white font-bold text-lg tracking-tight">{data.author}</h4>
                <p className="text-blue-400/60 text-[10px] font-bold uppercase tracking-[2px] mt-1">{data.role}</p>
             </div>
          </div>

          {/* Эшлэл */}
          <div className="relative flex-1 flex flex-col justify-center">
            <Quote className="absolute -top-4 -left-4 w-10 h-10 text-white/5" />
            <p className="text-lg md:text-xl font-light italic text-slate-300 leading-relaxed relative z-10">
              "{data.quote}"
            </p>
          </div>
        </motion.div>

        {/* БАРУУН ТАЛ: Статистик */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-[28px] bg-[#0A0D14]/60 border border-white/[0.03] flex items-center gap-6 group hover:border-blue-500/30 transition-all"
            >
              <div className="p-4 rounded-2xl bg-blue-500/5 text-blue-400 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[2px] mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}