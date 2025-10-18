import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/BackgroundGrid.css';

const facultyCoordinators = [
  {
    name: "Dr. Joseph Deril",
    title: "Head of Department",
    email: "anjali.sharma@example.com",
    phone: "+918281656561",
    imageUrl: "https://via.placeholder.com/150/FF003C/0A0A0A?text=FACULTY"
  },
  {
    name: "Prof. Selin M",
    title: "Associate Professor",
    email: "raj.verma@example.com",
    phone: "+919446791297",
    imageUrl: "https://via.placeholder.com/150/FF003C/0A0A0A?text=FACULTY"
  }
];

const studentCoordinators = [
  {
    name: "Muhammad Nahas P S",
    title: "Event Organizer",
    email: "nahas1021@gmail.com",
    phone: "+917736038034",
    imageUrl: "https://via.placeholder.com/150/FF003C/0A0A0A?text=STUDENT"
  },
  {
    name: "Amir Ali Abdullha",
    title: "Event Organizer",
    email: "priya.singh@example.com",
    phone: "+918590013475",
    imageUrl: "https://via.placeholder.com/150/FF003C/0A0A0A?text=STUDENT"
  },
];

// --- Reusable Coordinator Card Component ---
const CoordinatorCard = ({ name, title, email, phone, imageUrl }) => (
  <div className="bg-theme-card border border-theme-border p-6 text-center overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_25px_theme-glow] hover:border-theme-red [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,0_100%)]">
    <img src={imageUrl} alt={`Photo of ${name}`} className="w-32 h-32 mx-auto rounded-full border-4 border-theme-red object-cover mb-4 shadow-[0_0_15px_theme-glow]" />
    <h3 className="font-orbitron text-xl text-white mb-1">{name}</h3>
    <p className="text-gray-400 text-sm mb-4">{title}</p>
    <div className="flex justify-center items-center gap-6 text-xl text-gray-300">
      <a href={`mailto:${email}`} aria-label="Email" className="hover:text-theme-red hover:drop-shadow-[0_0_8px_theme-glow] transition-all">
        <HiOutlineMail />
      </a>
      <a href={`tel:${phone}`} aria-label="Phone" className="hover:text-theme-red hover:drop-shadow-[0_0_8px_theme-glow] transition-all">
        <FiPhone />
      </a>
    </div>
  </div>
);

// --- Section Title Component ---
const SectionTitle = ({ children }) => (
  <div className="text-center mb-8">
    <h3 className="font-orbitron text-white text-3xl inline-block border-b-2 border-theme-red pb-2">
      {children}
    </h3>
  </div>
);


const Contact = () => {
  return (
    <section id="contact" className="bg-theme-black font-roboto text-gray-200 py-16">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="background-grid border border-theme-border shadow-[0_0_30px_theme-glow] p-8">

          {/* Main Header */}
          <h2 className="font-orbitron text-4xl md:text-5xl text-center text-theme-red uppercase tracking-widest mb-12 animate-text-flicker">
            Get In Touch
          </h2>

          {/* Coordinators */}
          <SectionTitle>Faculty Coordinators</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {facultyCoordinators.map((coord, index) => <CoordinatorCard key={index} {...coord} />)}
          </div>

          <SectionTitle>Student Coordinators</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {studentCoordinators.map((coord, index) => <CoordinatorCard key={index} {...coord} />)}
          </div>

          {/* Map and Socials Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Map */}
            <div className="lg:col-span-2">
              <SectionTitle>Find Us Here</SectionTitle>
              <div className="border-2 border-theme-red p-1.5 shadow-[0_0_20px_theme-glow]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.583832765369!2d76.3524358748956!3d10.052899490059535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c7a05051c59%3A0x8a2386221c322495!2sMES%20College%20Marampally!5e0!3m2!1sen!2sin!4v1668881234567!5m2!1sen!2sin"
                  className="w-full h-96 border-0"
                  style={{ filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <p className="text-center mt-4 text-lg">MES College Marampally, Kerala 683105</p>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center">
              <SectionTitle>Follow Us</SectionTitle>
              <div className="flex flex-row lg:flex-col gap-6">
                <a href="#" aria-label="Instagram" className="text-4xl p-4 border-2 border-theme-border hover:bg-theme-red hover:text-theme-black hover:border-theme-red hover:shadow-[0_0_20px_theme-glow] hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="mailto:inkrit.fest@example.com" aria-label="Email" className="text-4xl p-4 border-2 border-theme-border hover:bg-theme-red hover:text-theme-black hover:border-theme-red hover:shadow-[0_0_20px_theme-glow] hover:scale-110 hover:-rotate-6 transition-all duration-300">
                  <HiOutlineMail />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;