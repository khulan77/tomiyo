"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ScientificBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]">
      {/* 1. Бүүдгэр гэрлийн тусгалууд (Muted Glow Orbs) */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-indigo-950/10 blur-[140px] rounded-full"
      />

      {/* 2. Нарийн зураасан тойргууд (Fine Minimalist Orbits) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="softOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0" />
            <stop offset="50%" stopColor="#334155" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Тойргуудыг маш нарийн (0.3) бөгөөд бүүдгэр болгов */}
        {[220, 320, 450].map((r, i) => (
          <motion.circle
            key={i}
            cx="500" cy="500" r={r}
            stroke="url(#softOrbit)"
            strokeWidth="0.3"
            fill="none"
            strokeDasharray={i === 1 ? "4 12" : "8 16"}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          />
        ))}

        {/* Жижиг дата цэгүүд - Гэрэлтэлтийг нь багасгав */}
        <motion.circle 
          cx="500" cy="180" r="1.5" fill="#475569" 
          className="origin-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="180" cy="500" r="1" fill="#334155" 
          className="origin-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.4)_0%,#020617_80%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
    </div>
  );
}