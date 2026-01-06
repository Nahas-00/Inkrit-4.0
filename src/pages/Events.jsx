import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import { Terminal, Mic2, Cpu, Camera, Gamepad2, ArrowUpRight, Calendar, Zap, Layers, Music, Video, MapPin, Clock, Trophy, User, X, CheckCircle2 } from 'lucide-react';
import '../styles/Events.css'; 
import dance from '../assets/dance.jpg';

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
      id: 1, title: "HACKATHON", subtitle: "24H CODING SPRINT", date: "Jan 16-17", time: "10:00 AM Start", location: "Silver Jubilee Hall", 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
      icon: <Terminal size={32} />, category: "Flagship",
      description: "The ultimate test of endurance and logic. You have 24 hours to build a solution that changes the future. Free food, endless coffee, and glory await.",
      rules: ["Team should be of 2-4 members.", "Bring your own laptops and chargers.", "Participants will be given a set of problem statements from which they are required to select one statement and build a hardware/ software prototype.", "Hackaton will be conducted in two rounds where in the first round participants should submit an abstract on their product and for the second round the participants are required to submit their final product along with a presentation","WIFI and Restroom Facilities will be provided."," Participants are required to submit the abstract and an evaluation will be conducted .","Only the first 20 registered teams will be accepted. Please register early to secure your spot."],
      prize: "₹ 20,000",
      contact: [{ name: "Safa", phone: "9895344188" }, { name: "Nadiya", phone: "9207511320" }],
      regFee: "₹ 500 / Team",regLink:"https://docs.google.com/forms/d/e/1FAIpQLSdz1KBS0OH5XYzlbkeJ4UMt8jCBYWU5A_t0mv5_KrlEeYpx-w/viewform?usp=header"
    },
    2: { 
      id: 2, title: "BATTLE OF BANDS", subtitle: "LIVE MUSIC CLASH", date: "Jan 17", time: "02:00 PM", location: "Auditorium", 
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop", 
      icon: <Mic2 size={32} />, category: "Flagship",
      description: "Plug in and amplify. We are looking for the best college band in the state. 20 minutes to prove you own the stage.",
      rules: ["Time limit: 20 mins (including sound check).", "Original compositions get bonus points.", "Registration closes on 15th Jan 2026","Obscenity leads to disqualification.","Only first 4 Registered teams will be selected.","Atleast 3 teams from 3 different college should be registered in order to conduct the program otherwise event will be cancelled.","Participants must carry their own equipments."],
      prize: "₹ 20,000",
      contact: [{ name: "Fawas", phone: "9447462129" },{ name: "Vinayak" , phone: "7994010860"}],
      regFee: "₹ 400 / Band",regLink:"https://docs.google.com/forms/d/e/1FAIpQLSe9s60bC9usXydpoei_kTgTHxkxRtpa_4v-wn1gedc2DN5H5g/viewform?usp=publish-editor"
    },
    3: { 
      id: 2, title: "EXPO", subtitle: "LIVE Exhibition", date: "Jan 16", time: "11:00 AM", location: "Auditorium", 
      image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2070&auto=format&fit=crop", 
      icon: <Mic2 size={32} />, category: "Flagship",
      description: "Put your technical skills to the ultimate test in our Tech Innovation Challenge, where creativity meets cutting-edge engineering. Compete against the brightest minds to solve real-world problems and pitch your groundbreaking prototypes to a panel of industry experts. The top-performing teams will walk away with prestigious prizes and the opportunity to turn their vision into a reality.",
      rules: [ "Exhibition Hours: 11:00 AM to 5:00 PM (Teams must remain at their booths for the duration , break will be provided).", "Team size: Minimum 2 and maximum 5 members per group.", "Registration closes on 15th Jan 2026.", "Maximum Capacity: Only the first 30 registered groups will be accepted.", "Atleast 3 teams from 3 different colleges should be registered in order to conduct the program otherwise event will be cancelled.", "Original innovations and hardware prototypes get bonus points.", "Plagiarism, safety violations, or unethical behavior leads to disqualification.", "Participants must carry their own equipment, including laptops, power strips, and display materials.", ],
      prize: "₹ 10,000",
      contact: [{ name: "Febin", phone: "6238311020" },{ name: "Abhishek" , phone: "8137050925"}],
      regFee: "Free",regLink:"https://docs.google.com/forms/d/e/1FAIpQLSfhKc3_b4md6qlfyUtBbXFVN_8saALoRbcClcNKSkdpn6K3Vw/viewform?usp=sharing&ouid=110650268376936787230"
    },
    // TECHNICAL
    101: { 
      id: 101, title: "Css Battle", date: "Jan 16", time: "2:00 PM", location: "Msc Lab", 
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop", 
      icon: <Layers />, desc: "Craft the best UI/UX in 3 hours.", category: "Technical",
      description: "A frontend design challenge where aesthetics meet functionality. Replicate the given design or create a new one based on a theme.",
      rules: ["Individual or group of two can participate.", "Use only HTML and CSS (no libraries or frameworks).", "Devices and tools will be provided by organizers.","There will be 3 round each with eliminations.","Judges decesions will be final."],
      prize: "₹ 5,000",
      contact: [{ name: "Nahas", phone: "7736038034" }, { name: "Anzalna", phone: "9072189390" }],
      regFee: "₹ 200",regLink:"https://forms.gle/zDvsrcQuApqcWt5W7"
    },
    
    102: { id: 102, title: "Debugging",date: "Jan 16", time: "10:30 AM", location: "BCA Lab", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", icon: <Zap />, description: "Find flaws, secure the bag.Fight asgainst time to fix the bugs", prize: "₹ 5,000", rules: ["Individuals or teams of up to two can participate.","The competition will be conducted in 2 rounds.","Electronic gadgets, including laptops, are not allowed inside the competition venue.","Questions are only from C and Cpp.","Any misbehave or cheating will lead to disqaulification of the team.","Judges decesions will be final",], contact: [{name: "Aysha", phone: "6282112238"} ,{ name: "Ann grace" , phone:"7736672724"}], regFee: "₹ 200",regLink:"https://docs.google.com/forms/d/e/1FAIpQLSfJYoUUvSiiOBhmfJjtWDZl8fimYkgtjnM_rEZzsIF_3lhaFw/viewform?usp=header" },
    103: { id: 103, title: "Escape Room", date: "Jan 16", time: "2:00 PM", location: "BCA Lab", image: "https://images.unsplash.com/photo-1624357676666-4cca3b657627?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D", icon: <Cpu />, description: "The door is locked, and the source code is broken. To escape, you must solve a trail of cryptic crosswords and hidden logic puzzles that lead deep into the terminal. Success requires more than just a sharp mind—it requires the ability to read, write, and debug your way to freedom. 20 slots. One exit. Can you patch the system before time runs out?.", prize: "₹ 5,000", rules: ["Individuals or teams of up to two can participate.","The Escape Room Competition will be conducted in multiple rounds.","Participants must crack codes and solve puzzles to uncover hidden hints.","Participants should have a basic programming skills (C,Cpp,..)","Devices and resources for the competition will be provided.","Alloted time will be 2-3 hours.","The team that uncovers all hints and escapes first wins the competition.","The second prize will be awarded to the team with the second-fastest escape time."], contact: [{name: "Akhil", phone: "8848250279"},{ name: "Ameen",phone: "9778252117"}], regFee: "₹ 200",regLink:"https://forms.gle/GjQwHabAxWhScw2U7" },
    201: { id: 201, title: "E-Football", date: "Jan 16", time: "2 PM", location: "AV Room", image: "https://www.sportspro.com/wp-content/uploads/2024/10/eFootball-HOZ.jpg", icon: <Gamepad2 />, description: "Play .", prize: "₹ 1,500", rules: ["The tournament is held individually (1v1), which means players will compete against each other one-on-one.","All players compete in a knockout format , where each player is eliminated after losing a single match.","The total match time is 6 minutes.","Player condition will be random.","Maximum 32 players allowed."], contact: [{name: "Sabeeh", phone: "8921674664"}], regFee: "₹ 50",regLink:"https://docs.google.com/forms/d/e/1FAIpQLSd1mmivr74gSjOLkp0EdEoCBD1qLqKdez2QVAAXgGz9NPcFOA/viewform?usp=header" },
    202: { id: 202, title: "Treasure Hunt", date: "Jan 16", time: "10:45 Am", location: "Campus", image: "https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", icon: <Camera />, description:"Race against time, outsmart the competition, and hunt down the prize! It’s not just a game; it’s a battle of wits. The hunt is on!", prize: "₹ 5,000", rules: ["A team of 2-4 members can participate for the event.","Elimination Round will be present.","Event is limited to 25 teams.","2-4 members are allowed in a team","Judges decesion will be final","The one who solves all the clue gets the prize and tthere is no runner up."], contact: [{name:"Sahad", phone:"9495089363"},{name: "Priya", phone: "7907739503"}], regFee: "₹ 400",regLink:"https://docs.google.com/forms/d/e/1FAIpQLSd1UFrdmlQLISuYez8DqGwcCxA7boe44nZNx_csqZHaDcgt9w/viewform?usp=dialog" },
    203: { id: 203, title: "Spot Dance", date: "Jan 17", time: "10 AM", location: "Plaza", image: dance , icon: <Music />, description: "The Stage is Set. The Spotlight Awaits. Witness the ultimate fusion of athleticism and artistry!From explosive power moves to breathtaking technical precision, experience the passion and grit of performers who have spent days preparing for this single moment.", prize: "₹ 5,000", rules: ["Registration fee: ₹100 per participant (non-refundable)","Participants must report at the venue between 8:30 AM and 9:30 AM at the registration counter.","Round 1 – Freestyle Round: Participants must perform their own choreography. The audio track must be submitted to the coordinator in advance (MP3 format). No change of song will be allowed on the event day.","Round 2 – Prop Round: Props will be provided by the coordinator on the spot. The song will be played twice — first time for listening and choreography, second time for performance.","Round 3 – Mashup Round (Final): Mashup music will be provided by the coordinator. The song will be played twice — first time for listening and choreography, second time for performance.","Time limits must be strictly followed. Exceeding the limit may lead to point deduction or disqualification.","Any form of misbehaviour or malpractice will result in disqualification.","Participants are responsible for their own safety during the performance.","Any damage to college property must be compensated by the participant.","Judging will be based on creativity, adaptability, expressions, energy, transitions, and stage presence.","Judges’ decisions are final and binding."], contact: [{name: "Vismaya", phone: "9539280934"}], regFee: "₹ 200" ,regLink:"https://docs.google.com/forms/d/e/1FAIpQLSexrs4qwNBeG2KJ5mYwqkdY0hcEcSU0REJ46i4E6ZdmYiHAbA/viewform?usp=dialog"},
    204: { id: 204, title: "5's Football", date: "Jan 16", time: "10:30 Am", location: "College Ground", image: "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", icon: <Video />, desc: "Directing.", prize: "₹ 5,000", rules: ["Each team must consist of 5 players on the field.","Teams can have 2 substitute, making a total of 7 players.","Each match will last for 10 Minutes","Matches will begin promptly as per the schedule. Teams arriving late by more than 5 minutes will forfeit the match.","Tied matches go to a penalty shootout (3 kicks per team, followed by sudden death if needed)"], contact: [{name: "Aromal", phone: "7012629742"}], regFee: "₹ 350" ,regLink:"https://forms.gle/1e5ju3Wi6yrUwbio7"},
  };

  // Helper arrays for rendering the grid
  const techIds = [101, 102, 103,];
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
          {[allEvents[1], allEvents[2],allEvents[3]].map((event) => (
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
                <a
                  href={selectedEvent.regLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
                >
                  Register Now
                </a>


              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Events;
