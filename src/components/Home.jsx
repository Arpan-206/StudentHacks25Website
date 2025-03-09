import { clipPath } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Home = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("March 6, 2025 11:28:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="Home" className="h-screen text-gray-100 flex flex-col items-center justify-center text-center overflow-x-hidden">
      <h1 className="font-title text-4xl text-primary font-bold mb-6">Student Hack 2025</h1>
      <p className="text-lg mb-4">Location: Nancy Rothwell</p>
 
      <div className="flex flex-wrap text-center text-xl">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={unit}
              className={`px-4 py-2 md:px-6 md:py-3 flex flex-col ${
                index !== 0 ? "border-l-2 border-primary pl-4" : ""
              }`}
            >
              <span className="block text-2xl md:text-4xl font-bold">{value}</span>
              <span className="text-xs md:text-sm uppercase">{unit}</span>
            </div>
          ))}
        </div>


      <button 
        className="mt-6 bg-transparent backdrop-blur-sm outline-2 outline-secondary text-accent2 py-2 px-6 rounded-full hover:bg-neutral-900 transition duration-300"
        onClick={() => console.log('Apply Now clicked')}
      >
        Apply Now
      </button>

      <div className="flex gap-4 mt-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="text-gray-400 hover:text-white transition" size={32} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-400 hover:text-white transition" size={32} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 hover:text-white transition" size={32} />
        </a>
        <a href="mailto:" target="_blank" rel="noopener noreferrer">
          <MdMail className="text-gray-400 hover:text-white transition" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Home;