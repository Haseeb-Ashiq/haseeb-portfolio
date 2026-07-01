import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/bio-pic.jpeg';

const About = () => {
  const [select,setSelected]=React.useState('')
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Muhammad Haseeb Ahmad
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#F97316] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Software Developer',
                'ML Engineer',
                'DevOps Engineer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#FF6B00]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Skilled MERN Stack Developer with 3+ years of professional
            experience delivering scalable, high-performance web applications.
            Proficient in MongoDB, Express.js, React.js, and Node.js, with hands-
            on expertise in TypeScript, Redis, BullMQ, Microservices, GraphQL,
            Docker, and AWS EC2. Adept at collaborating across the full
            software development lifecycle — from requirements gathering to
            production deployment. Passionate about writing clean, maintainable
            code and driving innovation through modern technologies including
            Generative AI integration.
          </p>
          {/* Resume Button */}
          <a
            // href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #F97316, #F97316)',
              boxShadow: '0 0 2px #F97316, 0 0 2px #F97316, 0 0 40px #F97316',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#F97316] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="mhaseeb"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(249,115,22,.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
