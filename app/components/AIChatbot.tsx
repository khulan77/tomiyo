"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Zap, Minimize2 } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="mb-4 w-[360px] md:w-[400px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0D111A]/90 backdrop-blur-2xl shadow-[0_22px_70px_rgba(0,0,0,0.6)] flex flex-col"
          >
            {/* Header - Яг зураг дээрх AI Assistant стиль */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-5 flex items-center justify-between border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-[#161B22] rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0D111A] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-white tracking-tight">AI Lab Assistant</h3>
                  <p className="text-[10px] font-bold text-blue-400/80 tracking-[1.5px] uppercase">Neural Core Active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-5 custom-scrollbar">
              <div className="flex flex-col gap-2">
                <div className="max-w-[85%] bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tl-none p-4 shadow-sm">
                  <p className="text-[13px] leading-relaxed text-slate-200 font-light">
                    Hello researcher, I've finished analyzing the fluid dynamics data from your Physics Module 02 simulation. Would you like a breakdown of the turbulence patterns?
                  </p>
                </div>
                <span className="text-[10px] text-slate-600 ml-1 font-medium tracking-wide">16:05 • AI ASSISTANT</span>
              </div>

              {/* Хэрэглэгчийн сонголт (Option pills) */}
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-2 bg-[#161B22] border border-white/5 rounded-full text-[11px] text-blue-400 hover:border-blue-500/30 transition-all">
                  Yes, specifically the vorticity
                </button>
              </div>
            </div>

            {/* Input Area - Тэр "Inquire terminal" стиль */}
            <div className="p-4 bg-white/[0.02] border-t border-white/[0.05]">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Inquire terminal..." 
                  className="w-full bg-[#161B22]/50 border border-white/10 rounded-2xl pl-5 pr-12 py-4 text-[13px] text-white focus:outline-none focus:border-blue-500/40 transition-all placeholder:text-slate-600 font-light"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20 hover:scale-105 active:scale-95 transition-all">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button - Тэр жижигхэн хуурхан товчлуур */}
      {!isOpen && (
        <motion.button
          layoutId="chatbot-toggle"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center border border-blue-400/30 shadow-[0_10px_25px_rgba(37,99,235,0.3)] relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <Zap className="w-6 h-6 text-white fill-white group-hover:drop-shadow-[0_0_8px_white] transition-all" />
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#020408]" />
        </motion.button>
      )}
    </div>
  );
}