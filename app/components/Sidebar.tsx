"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Menu, LayoutDashboard, Calculator, Atom, 
  Beaker, Shapes, MessageSquare, Plus, Settings, ShieldCheck 
} from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn-ийн utility функц

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Calculator, label: "Mathematics" },
    { icon: Atom, label: "Physics" },
    { icon: Beaker, label: "Chemistry" },
    { icon: Shapes, label: "Geometry" },
    { icon: MessageSquare, label: "AI Lab Assistant" },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isExpanded ? 280 : 80 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex h-screen flex-col border-r border-white/[0.05] bg-[#05070A] pt-6 overflow-hidden"
    >
      {/* 1. Toggle Button & Logo */}
      <div className="mb-10 px-5 flex items-center gap-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-white/5 rounded-xl text-slate-400 transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* 3. Navigation Items */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item, idx) => (
          <motion.div
            key={idx}
            className={cn(
              "group flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-all",
              item.active ? "bg-blue-600/10 text-blue-400" : "text-slate-500 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn("h-5 w-5 shrink-0", item.active && "text-blue-400")} />
            {isExpanded && (
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-[13px] font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
            
            {/* Tooltip for collapsed state (Optional) */}
            {!isExpanded && (
               <div className="absolute left-16 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {item.label}
               </div>
            )}
          </motion.div>
        ))}
      </nav>

      {/* 4. Bottom Actions */}
      <div className="p-4 border-t border-white/[0.05] space-y-1">
        <SidebarAction icon={Settings} label="System Status" isExpanded={isExpanded} />
        <SidebarAction icon={ShieldCheck} label="Security" isExpanded={isExpanded} />
      </div>
    </motion.aside>
  );
}

function SidebarAction({ icon: Icon, label, isExpanded }: any) {
  return (
    <div className="flex items-center gap-4 px-3 py-3 text-slate-600 hover:text-slate-300 cursor-pointer rounded-xl transition-colors">
      <Icon className="h-4 w-4 shrink-0" />
      {isExpanded && <span className="text-[11px] font-bold uppercase tracking-widest">{label}</span>}
    </div>
  );
}
