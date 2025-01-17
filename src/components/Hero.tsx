import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout } from 'lucide-react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden leaf-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-forest/90 to-forest/70">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                rotate: 360,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {i % 2 === 0 ? 
                <Leaf className="text-sage" size={20 + Math.random() * 40} /> :
                <Sprout className="text-sage" size={20 + Math.random() * 40} />
              }
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-wheat"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Zalka MARE
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-sage">
              Agricultural Specialist & Sustainability Expert
            </h2>
            <p className="text-xl text-wheat-50">
              Cultivating sustainable solutions for tomorrow's agriculture
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="src/images/WhatsApp Image 2025-01-07 at 12.51.10.jpeg"
                alt="Sarah Anderson"
                className="rounded-full w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-4 border-sage opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Button = () => {
  return (
    <StyledWrapper>
      <button className="Documents-btn">
        <span className="folderContainer">
          <svg className="fileBack" width={146} height={113} viewBox="0 0 146 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z" fill="url(#paint0_linear_117_4)" />
            <defs>
              <linearGradient id="paint0_linear_117_4" x1={0} y1={0} x2="72.93" y2="95.4804" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8F88C2" />
                <stop offset={1} stopColor="#5C52A2" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="filePage" width={88} height={99} viewBox="0 0 88 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={88} height={99} fill="url(#paint0_linear_117_6)" />
            <defs>
              <linearGradient id="paint0_linear_117_6" x1={0} y1={0} x2={81} y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset={1} stopColor="#686868" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="fileFront" width={160} height={79} viewBox="0 0 160 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z" fill="url(#paint0_linear_117_5)" />
            <defs>
              <linearGradient id="paint0_linear_117_5" x1="38.7619" y1="8.71323" x2="66.9106" y2="82.8317" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C3BBFF" />
                <stop offset={1} stopColor="#51469A" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <p className="text">Documents</p>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Documents-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    height: 45px;
    border: none;
    padding: 0px 15px;
    border-radius: 5px;
    background-color: rgb(49, 49, 83);
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .folderContainer {
    width: 40px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }
  .fileBack {
    z-index: 1;
    width: 80%;
    height: auto;
  }
  .filePage {
    width: 50%;
    height: auto;
    position: absolute;
    z-index: 2;
    transition: all 0.3s ease-out;
  }
  .fileFront {
    width: 85%;
    height: auto;
    position: absolute;
    z-index: 3;
    opacity: 0.95;
    transform-origin: bottom;
    transition: all 0.3s ease-out;
  }
  .text {
    color: white;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .Documents-btn:hover .filePage {
    transform: translateY(-5px);
  }
  .Documents-btn:hover {
    background-color: rgb(58, 58, 94);
  }
  .Documents-btn:active {
    transform: scale(0.95);
  }
  .Documents-btn:hover .fileFront {
    transform: rotateX(30deg);
  }`;
export default Hero;