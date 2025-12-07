import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { Shield, Zap, Cpu, Globe, Radio, ExternalLink } from 'lucide-react';
import '../styles/Sponsors.css';

const Sponsor = () => {
  const associateBrands = ["sample", "Example", "Coming", "Soon", "Abroad"];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600">
      <Navbar />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-red-600/5 blur-[120px] rounded-full"></div>
      </div>

      <main className="relative z-10 pt-32 px-6">
        {/* --- HEADER --- */}
        <section className="text-center mb-32">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-red-600"></div>
            <span className="text-red-500 font-mono tracking-[0.4em] text-xs uppercase">Core Backbone</span>
            <div className="h-[1px] w-12 bg-red-600"></div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-4">
            OUR <span className="text-red-600 glitch-reveal">ALLIES</span>
          </h1>
          <p className="text-neutral-500 font-mono text-sm max-w-lg mx-auto leading-relaxed">
            [ACCESS_GRANTED] // SHAPING THE FUTURE THROUGH STRATEGIC PARTNERSHIPS
          </p>
        </section>

        {/* --- TITLE SPONSOR (The Monolith) --- */}
        <section className="max-w-6xl mx-auto mb-40">
          <div className="monolith-card relative group p-1 w-full rounded-2xl overflow-hidden">
             {/* Rotating gradient border on hover */}
            <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#EF4444_50%,#E2E8F0_100%)] opacity-0 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative bg-[#0A0A0A] rounded-2xl p-12 flex flex-col items-center">
              <span className="text-red-500 text-[10px] font-bold tracking-[0.5em] mb-12 uppercase border border-red-950 px-4 py-1 rounded-full">
                Global Title Sponsor
              </span>
              
              <div className="h-32 md:h-48 flex items-center justify-center">
                {/* Logo Placeholder */}
                <h2 className="text-6xl md:text-8xl font-black text-white/90 tracking-tighter sponsor-logo">QUANTUM <span className="text-red-600">X</span></h2>
              </div>

              <div className="mt-12 flex gap-8 text-neutral-600 font-mono text-xs uppercase">
                <span>Est. 2024</span>
                <span>//</span>
                <span>Innovating Infinity</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- POWERED BY TIER (Asymmetric Cards) --- */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
           {['Powered By', 'Co-Powered By'].map((label, idx) => (
             <div key={idx} className="glass-panel relative p-10 rounded-3xl overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <Shield className="text-red-600" size={40} />
               </div>
               <span className="text-red-500 font-mono text-xs mb-8 block tracking-widest">{label}</span>
               <div className="h-20 flex items-center mb-8">
                  <h3 className="text-4xl font-black sponsor-logo">LOGO_SPACE</h3>
               </div>
               <div className="flex justify-between items-center border-t border-white/5 pt-6">
                 <span className="text-neutral-500 text-[10px] uppercase font-mono tracking-widest">Verification: Active</span>
                 <ExternalLink size={14} className="text-neutral-600" />
               </div>
             </div>
           ))}
        </section>

        {/* --- DOMAIN PARTNERS (Hackathon, Band, etc.) --- */}
        <section className="max-w-6xl mx-auto mb-40">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-center mb-16 text-neutral-500 flex items-center justify-center gap-6">
            <Zap size={20}/> Domain Guardians <Zap size={20}/>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Code Catalyst', icon: <Cpu /> },
              { label: 'Audio Engine', icon: <Radio /> },
              { label: 'Visionary Partner', icon: <Globe /> },
              { label: 'Security Lead', icon: <Shield /> }
            ].map((spon, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-xl hover:border-red-600/50 transition-all cursor-crosshair text-center">
                <div className="text-red-600 mb-4 flex justify-center">{spon.icon}</div>
                <h4 className="text-xs font-mono tracking-tighter text-neutral-400 group-hover:text-white mb-6 uppercase">{spon.label}</h4>
                <div className="font-black text-xl sponsor-logo">BRAND</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- THE INFINITE STREAM (Smaller Partners) --- */}
        <section className="bg-black/80 py-12 border-y border-white/5 mb-20 relative overflow-hidden">
           <div className="scroller-inner text-neutral-600">
             {[...associateBrands, ...associateBrands].map((brand, i) => (
               <div key={i} className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-2 h-2 bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                 <span className="text-2xl font-black italic tracking-widest hover:text-white transition-colors">{brand}</span>
               </div>
             ))}
           </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="text-center pb-32">
          <h5 className="text-neutral-500 font-mono text-sm mb-6 uppercase tracking-[0.3em]">Join the network?</h5>
          <Link to='/contact'>
            <button className="relative px-8 py-3 bg-red-600 text-black font-black uppercase tracking-widest skew-x-[-12deg] hover:bg-white hover:text-red-600 transition-all duration-300 shadow-[10px_10px_0px_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none">
              Forge Connection
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Sponsor;