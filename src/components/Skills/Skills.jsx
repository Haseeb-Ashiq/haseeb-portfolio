// src/components/Skills/Skills.jsx
import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [selected,setSelected]=useState(SkillsInfo[0].title)
  return (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#F97316] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    <div className="h-[10vh] w-full pt-5 pb-5 flex flex-row justify-start items-center gap-2">
      {
        SkillsInfo.map((catagory) => (
          <>
            <div onClick={()=>setSelected(catagory.title)} className={`h-full w-full cursor-pointer ${catagory.title==selected ? ' text-white' : 'text-white' }  border border-white rounded-3xl flex justify-center items-center`} style={{
              background: `${catagory.title==selected ? 'linear-gradient(90deg, #F97316, #F97316)' :'' }`,
              boxShadow: `${catagory.title==selected ? '0 0 2px #F97316, 0 0 2px #F97316, 0 0 40px #F97316' : ''}`,
            }}>{catagory.title}</div>
          </>
        ))
      }
    </div>
    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => category.title == selected && (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 md:w-full sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border-none border-white 
          shadow-[0_0_20px_1px_rgba(249,115,22,.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            // tiltMaxAngleX={20}
            // tiltMaxAngleY={20}
            // perspective={1000}
            // scale={1.05}
            // transitionSpeed={1000}
            // gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Skills;
