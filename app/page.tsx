"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Sidebar from "./components/Sidebar";
import AIChatbot from "./components/AIChatbot";
import Scientist from "./components/Scientist";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#020408] text-white overflow-hidden">
      {/* 1. Зүүн талын Sidebar - Gemini стиль */}
      <Sidebar />

      {/* 2. Баруун талын үндсэн хэсэг */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        
        {/* Арын фонны бүдэг Glow эффект (Зөвхөн контент хэсэгт харагдана) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

        {/* Header - Дээд талдаа тогтмол */}
        <Header />

        {/* Үндсэн контент scroll болдог хэсэг */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Контентыг голлуулж, хангалттай зай авч өгнө */}
          <div className="max-w-[1200px] mx-auto p-8">
            <div className="flex flex-col gap-24">
              
              {/* Hero хэсэг - Маш том, хүчирхэг */}
              <section>
                <Hero />
                {/* <Scientist/> */}
              </section>

              {/* Subjects хэсэг - Core Disciplines */}
              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <h2 className="text-[10px] font-bold tracking-[4px] text-blue-500/60 uppercase whitespace-nowrap">
                    Research Disciplines
                  </h2>
                  <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/20 to-transparent" />
                </div>
                
                {/* Энд Subjects картнууд full-width-ээрээ харагдана */}
                <Subjects />
              </section>

            </div>
          </div>
        </main>
      </div>

      {/* Popup AI Chatbot товчлуур - Баруун доод буланд */}
      <AIChatbot />
    </div>
  );
}