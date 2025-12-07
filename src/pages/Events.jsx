import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import { Terminal, Mic2, Cpu, Camera, Gamepad2, ArrowUpRight, Calendar, Zap, Layers, Music, Video, MapPin, Clock, Trophy, User, X, CheckCircle2 } from 'lucide-react';
import '../styles/Events.css'; 

const Events = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the modal

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedEvent]);

  // --- EXTENDED DATA STRUCTURE ---
  const allEvents = {
    // HEADLINERS
    1: { 
      id: 1, title: "HACKATHON", subtitle: "24H CODING SPRINT", date: "Jan 16-17", time: "10:00 AM Start", location: "Main Auditorium", 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
      icon: <Terminal size={32} />, category: "Flagship",
      description: "The ultimate test of endurance and logic. You have 24 hours to build a solution that changes the future. Free food, endless coffee, and glory await.",
      rules: ["Max 4 members per team.", "Bring your own laptops and chargers.", "AI tools allowed but must be disclosed.", "Code must be pushed to GitHub repository."],
      prize: "₹ 50,000",
      contact: [{ name: "Adithya", phone: "9876543210" }, { name: "Rahul", phone: "9123456780" }],
      regFee: "₹ 500 / Team"
    },
    2: { 
      id: 2, title: "BATTLE OF BANDS", subtitle: "LIVE MUSIC CLASH", date: "Jan 17", time: "06:00 PM", location: "Open Air Stage", 
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop", 
      icon: <Mic2 size={32} />, category: "Flagship",
      description: "Plug in and amplify. We are looking for the best college band in the state. 15 minutes to prove you own the stage.",
      rules: ["Time limit: 15 mins (including sound check).", "Original compositions get bonus points.", "Obscenity leads to disqualification."],
      prize: "₹ 30,000",
      contact: [{ name: "Sneha", phone: "8887776665" }],
      regFee: "₹ 1000 / Band"
    },
    // TECHNICAL
    101: { 
      id: 101, title: "Web Weavers", date: "Jan 16", time: "10:00 AM", location: "Computer Lab 2", 
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop", 
      icon: <Layers />, desc: "Craft the best UI/UX in 3 hours.", category: "Technical",
      description: "A frontend design challenge where aesthetics meet functionality. Replicate the given design or create a new one based on a theme.",
      rules: ["Individual participation.", "Internet access allowed for assets only.", "Submission format: HTML/CSS/JS zip."],
      prize: "₹ 5,000",
      contact: [{ name: "Arjun", phone: "7776665554" }],
      regFee: "₹ 150"
    },
    // ... Add similar detailed data for other IDs (102, 103, 104, 201, 202, etc.) ...
    // Placeholder for demo purposes:
    102: { id: 102, title: "Bug Bounty", subtitle:"Coding competition" ,date: "Jan 16", time: "2 PM", location: "Lab 3", image: "https://images.unsplash.com/photo-1614064641938-3eeb5218fe84?q=80&w=1974", icon: <Zap />, desc: "Find flaws, secure the bag.", prize: "₹ 3,000", rules: ["Find hidden flags."], contact: [{name: "Dev", phone: "123"}], regFee: "₹ 100" },
    103: { id: 103, title: "Robo Soccer", date: "Jan 17", time: "9 AM", location: "Quadrangle", image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=2070", icon: <Cpu />, desc: "Mechanical athletes.", prize: "₹ 8,000", rules: ["Bots < 5kg."], contact: [{name: "Manu", phone: "123"}], regFee: "₹ 300" },
    104: { id: 104, title: "Quiz Tech", date: "Jan 17", time: "11 AM", location: "Seminar Hall", image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070", icon: <Terminal />, desc: "IT Knowledge test.", prize: "₹ 4,000", rules: ["Teams of 2."], contact: [{name: "Riya", phone: "123"}], regFee: "₹ 200" },
    201: { id: 201, title: "Valorant", date: "Jan 16", time: "9 AM", location: "Gaming Zone", image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1933", icon: <Gamepad2 />, desc: "5v5 Shooter.", prize: "₹ 10,000", rules: ["Bring own peripherals."], contact: [{name: "Tom", phone: "123"}], regFee: "₹ 500" },
    202: { id: 202, title: "Shutter Up", date: "Jan 16", time: "All Day", location: "Campus", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964", icon: <Camera />, desc: "Photography.", prize: "₹ 4,000", rules: ["No editing."], contact: [{name: "Sam", phone: "123"}], regFee: "₹ 150" },
    203: { id: 203, title: "Spot Dance", date: "Jan 17", time: "10 AM", location: "Plaza", image: "https://images.unsplash.com/photo-1545959868-d65272a2948e?q=80&w=2071", icon: <Music />, desc: "Dance battle.", prize: "₹ 5,000", rules: ["3 mins max."], contact: [{name: "Lisa", phone: "123"}], regFee: "₹ 200" },
    204: { id: 204, title: "Short Film", date: "Jan 17", time: "2 PM", location: "AV Room", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059", icon: <Video />, desc: "Directing.", prize: "₹ 6,000", rules: ["Submit via drive."], contact: [{name: "Ben", phone: "123"}], regFee: "₹ 300" },
  };

  // Helper arrays for rendering the grid
  const techIds = [101, 102, 103, 104];
  const nonTechIds = [201, 202, 203, 204];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white pb-24 overflow-x-hidden">
      <Navbar />
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 pt-24">
        
        {/* --- HEADLINERS --- */}
        <div className="mb-8 flex items-center gap-2">
            <div className="w-1 h-8 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-gray-200">Main Protocols</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[allEvents[1], allEvents[2]].map((event) => (
            <div 
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="cyber-clip group relative h-[380px] bg-neutral-900 overflow-hidden cursor-pointer border border-transparent hover:border-red-600/50 transition-all duration-300"
            >
               {/* Same card content as previous response... */}
               <div className="absolute inset-0"><img src={event.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt=""/><div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div></div>
               <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start"><div className="bg-red-600 text-white p-3 rounded-sm">{event.icon}</div></div>
                  <div><h3 className="text-5xl font-black uppercase italic text-white mb-2">{event.title}</h3><p className="text-gray-400 text-sm tracking-widest">{event.subtitle}</p></div>
               </div>
            </div>
          ))}
        </div>

        {/* --- TABS --- */}
        <div className="sticky top-20 z-20 flex justify-center mb-16">
          <div className="inline-flex bg-black/80 backdrop-blur-xl border border-neutral-800 p-1 rounded-full shadow-2xl">
            {['technical', 'non-technical'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 relative overflow-hidden ${activeTab === tab ? 'text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]' : 'text-gray-500 hover:text-white'}`}>
                {activeTab === tab && <span className="absolute inset-0 bg-red-600 -z-10"></span>}
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {(activeTab === 'technical' ? techIds : nonTechIds).map((id) => {
            const event = allEvents[id];
            return (
              <div key={id} onClick={() => setSelectedEvent(event)} className="group relative h-[220px] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-red-500/50 transition-all duration-500 cursor-pointer">
                 {/* Same card content as previous response... */}
                 <div className="absolute inset-0"><img src={event.image} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700" alt=""/><div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div></div>
                 <div className="relative z-10 h-full p-8 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-4"><div className="p-3 bg-neutral-800/50 rounded-lg text-gray-400 group-hover:text-red-500 border border-white/5">{event.icon}</div><span className="font-mono text-xs text-red-500 bg-red-950/20 px-3 py-1 rounded-full border border-red-900/30">{event.date}</span></div>
                    <h3 className="text-3xl font-black uppercase italic tracking-tight text-white mb-2 group-hover:translate-x-2 transition-transform">{event.title}</h3>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"><div className="bg-red-600 p-2 rounded-full text-white"><ArrowUpRight size={20} /></div></div>
                 </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          EVENT DETAILS MODAL
      ========================================================= */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedEvent(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-[#0F0F0F] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-800 shadow-[0_0_50px_rgba(220,38,38,0.2)] animate-modalSlideIn custom-scrollbar">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-600 rounded-full text-white transition-colors border border-white/10"
            >
              <X size={24} />
            </button>

            {/* Banner Image */}
            <div className="relative h-64 md:h-80 w-full">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-red-500 bg-red-950/30 border border-red-900/50 rounded uppercase tracking-widest">
                  {selectedEvent.category || "Competition"}
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none mb-2">
                  {selectedEvent.title}
                </h2>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12 pt-0">
              
              {/* Left Column: Details & Rules (Span 2) */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-gray-200 mb-4 flex items-center gap-2">
                    <Terminal size={20} className="text-red-500"/> Briefing
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-gray-200 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-red-500"/> Rules & Regulations
                  </h3>
                  <ul className="space-y-3">
                    {selectedEvent.rules?.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Meta Data & Action (Span 1) */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Prize Pool Card */}
                <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/50 p-6 rounded-xl text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-600/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <h4 className="text-red-400 font-mono text-sm tracking-widest uppercase mb-2 relative z-10">Prize Pool</h4>
                  <div className="text-4xl md:text-5xl font-black text-white relative z-10">{selectedEvent.prize}</div>
                </div>

                {/* Info Card */}
                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 space-y-4">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Calendar className="text-red-500" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-mono">Date</p>
                      <p className="font-bold">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Clock className="text-red-500" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-mono">Time</p>
                      <p className="font-bold">{selectedEvent.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin className="text-red-500" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-mono">Location</p>
                      <p className="font-bold">{selectedEvent.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Trophy className="text-red-500" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-mono">Reg Fee</p>
                      <p className="font-bold">{selectedEvent.regFee}</p>
                    </div>
                  </div>
                </div>

                {/* Coordinators */}
                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                  <h4 className="text-sm font-mono text-gray-500 uppercase mb-4">Coordinators</h4>
                  <div className="space-y-3">
                    {selectedEvent.contact?.map((person, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400">
                          <User size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{person.name}</p>
                          <p className="text-xs text-red-500 font-mono">{person.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                  Register Now
                </button>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Events;