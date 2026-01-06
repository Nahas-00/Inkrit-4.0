import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Shield, Zap, Cpu, ExternalLink, Crown } from 'lucide-react';
import '../styles/Sponsors.css';

const Sponsor = () => {
  const primarySponsor = {
    name: "Edinwood International School",
    role: "Co-Powered By",
    logo: "https://placehold.co/800x400/0a0a0a/cc0000?text=EDINWOOD+INTERNATIONAL",
    icon: <Crown size={40} />, // Unique icon for prominence
    tagline: "Shaping Tomorrow's Leaders Today"
  };

  const secondarySponsors = [
    {
      name: "Bridgeon",
      role: "Hackathon Sponsor",
      logo: "https://placehold.co/600x300/0a0a0a/cc0000?text=BRIDGEON",
      icon: <Cpu size={28} />,
      tagline: "Building Careers"
    },
    {
      name: "Redbull",
      role: "Refreshing Partner",
      logo: "https://placehold.co/600x300/0a0a0a/cc0000?text=RED+BULL",
      icon: <Zap size={28} />,
      tagline: "Gives You Wings"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600">
      <Navbar />
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-900/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full"></div>
      </div>

      <main className="relative z-10 pt-32 px-6">
        <section className="text-center mb-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-red-600"></div>
            <span className="text-red-500 font-mono tracking-[0.5em] text-xs uppercase font-bold">Strategic Alliances</span>
            <div className="h-[1px] w-16 bg-red-600"></div>
          </div>
          <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter">
            THE <span className="text-red-600">ELITE</span>
          </h1>
        </section>

        {/* --- PRIMARY SPONSOR: EDINWOOD (Hero Position) --- */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="group relative bg-[#0a0a0a] border-2 border-red-600/30 rounded-3xl overflow-hidden transition-all duration-700 hover:border-red-600 hover:shadow-[0_0_60px_rgba(220,38,38,0.25)]">
            
            {/* Animated Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-600/10 rounded-lg text-red-600 animate-pulse">
                    {primarySponsor.icon}
                  </div>
                  <span className="text-red-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
                    {primarySponsor.role}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                  {primarySponsor.name}
                </h2>
                
                <p className="text-neutral-500 font-mono text-sm max-w-sm">
                  // {primarySponsor.tagline} <br />
                  // KEY_PARTNER_EST_2026
                </p>

                <div className="pt-4">
                   <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 group-hover:text-white transition-colors">
                     Explore Partner <ExternalLink size={14} />
                   </button>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="relative aspect-[16/9] bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={primarySponsor.logo} 
                    alt={primarySponsor.name} 
                    className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECONDARY SPONSORS (Grid Below) --- */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {secondarySponsors.map((sponsor, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-red-600/40 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-red-500/70 font-mono text-[10px] uppercase tracking-widest block mb-1">
                    {sponsor.role}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-neutral-300">
                    {sponsor.name}
                  </h3>
                </div>
                <div className="text-neutral-700 group-hover:text-red-600 transition-colors">
                  {sponsor.icon}
                </div>
              </div>

              <div className="aspect-video bg-black/40 rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
                 <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                 />
              </div>
            </div>
          ))}
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="text-center pb-32">
          <Link to='/contact'>
            <button className="relative px-12 py-4 bg-transparent border border-red-600 text-red-600 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 skew-x-[-10deg]">
              Become An Ally
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Sponsor;
