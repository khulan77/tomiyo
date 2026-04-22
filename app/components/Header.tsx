"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Bell, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navItems = ["Mathematics", "Physics", "Chemistry", "Geometry"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#020408]/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* 1. Лого ба Цэс */}
        <div className="flex items-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Zap className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="hidden text-sm font-bold tracking-[2px] text-white lg:block uppercase">
              Science Hub
            </span>
          </motion.div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[13px] font-medium text-slate-400 transition-colors hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* 2. Хайлт, Мэдэгдэл, Профайл (Чиний хүссэн хэсэг) */}
        <div className="flex items-center gap-4">
          
          {/* Хайлт хэсэг - Minimalist Style */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Inquire formula..."
              className="h-10 w-64 rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 text-xs text-slate-300 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.05]"
            />
          </div>

          <div className="flex items-center gap-2 ml-2">
            {/* Мэдэгдэл */}
            <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-[#020408]" />
            </Button>

            {/* Профайл эсвэл Login */}
            <div className="ml-2 flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="hidden text-right lg:block">
                <p className="text-[12px] font-bold text-white leading-tight">Developer Hulan</p>
                <p className="text-[10px] text-blue-400 font-medium uppercase tracking-wider">Pro Researcher</p>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative h-10 w-10 cursor-pointer overflow-hidden rounded-xl border border-white/20 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 p-[1px]"
              >
                {/* Энд профайл зураг орно, одоогоор placeholder icon */}
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0D111A]">
                  <User className="h-5 w-5 text-slate-300" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}