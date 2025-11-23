
import React, { useState, useEffect } from 'react';
import { Calculator, Sparkles, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setMounted(true);
  }, []);

  const handleStart = () => {
    setExiting(true);
    // Wait for exit animation to finish before unmounting
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4 transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className={`flex flex-col items-center transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Icon Container */}
        <div className="relative mb-8 group cursor-pointer" onClick={handleStart}>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-emerald-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="relative bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
             <Calculator size={80} className="text-white drop-shadow-md" />
             
             {/* Floating Elements */}
             <div className="absolute -top-3 -right-3 bg-slate-800 p-2 rounded-xl border border-slate-700 shadow-lg animate-bounce">
                <Sparkles size={24} className="text-yellow-400" />
             </div>
             <div className="absolute -bottom-2 -left-2 bg-slate-800 p-2 rounded-xl border border-slate-700 shadow-lg animate-pulse">
                <Brain size={20} className="text-emerald-400" />
             </div>
          </div>
        </div>

        {/* Branding */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center tracking-tight">
          MathGenius <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">AI</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-12 text-center max-w-md leading-relaxed">
          Advanced AI Solver • Scientific Calculator • Step-by-Step Learning
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 opacity-80">
           <span className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium flex items-center gap-1.5 shadow-sm">
             <CheckCircle2 size={14} className="text-indigo-500"/> OCR Recognition
           </span>
           <span className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium flex items-center gap-1.5 shadow-sm">
             <CheckCircle2 size={14} className="text-emerald-500"/> Gemini 3.0 Pro
           </span>
           <span className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium flex items-center gap-1.5 shadow-sm">
             <CheckCircle2 size={14} className="text-pink-500"/> Graphing
           </span>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleStart}
          className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl shadow-xl shadow-white/10 hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
        >
           <span className="text-lg">Open Application</span>
           <ArrowRight className="group-hover:translate-x-1 transition-transform" />
           <div className="absolute inset-0 rounded-2xl ring-2 ring-white/50 animate-pulse"></div>
        </button>

      </div>

      <div className="absolute bottom-6 text-slate-600 text-xs font-mono tracking-widest uppercase">
        Version 1.0.0
      </div>
    </div>
  );
};
