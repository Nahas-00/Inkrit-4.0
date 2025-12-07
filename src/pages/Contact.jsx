import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import Footer from '../components/Footer';
import Profile from '../assets/no-profile.jpg';
import nahas from '../assets/profile/nahas.png';
import Navbar from '../components/Navbar';
import '../styles/Contact.css'; 

const facultyCoordinators = [
  { name: "Dr. Joseph Deril", title: "Head of Department, C.S.", email: "a@a.com", phone: "+918281656561", imageUrl: Profile },
  { name: "Ms. Selin M", title: "Assistant Professor", email: "a@a.com", phone: "+919446791297", imageUrl: Profile }
];

const studentCoordinators = [
  { name: "Muhammad Nahas P S", title: "Event Organizer", email: "nahas1021@gmail.com", phone: "++917736038034", imageUrl:nahas},
  { name: "Amir Ali Abdullha", title: "Event Organizer", email: "a@a.com", phone: "+918590013475", imageUrl:Profile },
];


const Contact = () => {
  return (
    <>
    <section id="contact" className="contact-section">
      <Navbar />
      <div className="contact-container">
        <h2 className="main-title">Get In Touch</h2>

        <h3 className="sub-section-title">Faculty Coordinators</h3>
        <div className="coordinators-grid">
          {facultyCoordinators.map((coord, index) => (
            <div key={index} className="coordinator-card">
              <img src={coord.imageUrl} alt={`Photo of ${coord.name}`} className="coordinator-img" />
              <h3>{coord.name}</h3>
              <p>{coord.title}</p>
              <div className="contact-links">
                <a href={`mailto:${coord.email}`} aria-label="Email"><HiOutlineMail /></a>
                <a href={`tel:${coord.phone}`} aria-label="Phone"><FiPhone /></a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="sub-section-title">Student Coordinators</h3>
        <div className="coordinators-grid">
          {studentCoordinators.map((coord, index) => (
            <div key={index} className="coordinator-card">
              <img src={coord.imageUrl} alt={`Photo of ${coord.name}`} className="coordinator-img" />
              <h3>{coord.name}</h3>
              <p>{coord.title}</p>
              <div className="contact-links">
                <a href={`mailto:${coord.email}`} aria-label="Email"><HiOutlineMail /></a>
                <a href={`tel:${coord.phone}`} aria-label="Phone"><FiPhone /></a>
              </div>
            </div>
          ))}
        </div>

        <div className="location-socials-grid">
          <div className="map-container">
            <h3 className="sub-section-title">Find Us Here</h3>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.907838749337!2d76.40887947479509!3d10.106629590004303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d7aa98fd715%3A0x7616023cb1e13e74!2sMES%20College%20Marampally!5e0!3m2!1sen!2sin!4v1760801025393!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <p className="address">MES College Marampally, Kerala 683105</p>
          </div>

          <div className="socials-container">
            <h3 className="sub-section-title">Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/inkritfest/" target='_blank' aria-label="Instagram"><FaInstagram /></a>
              <a href="mailto:inkrit4.0@gmail.com" aria-label="Email"><HiOutlineMail /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
};

export default Contact;