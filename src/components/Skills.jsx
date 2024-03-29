import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/JavaScript.png";
import scss from "../assets/scss.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";


function Skills({ t }) {
  return (
    <div name="skills" className="w-full h-screen pb-10 bg-[#0a192f] px-4 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">{t("Skills")}</p>
          <p className="py-4">{t("list")}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="html" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="css" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={js} alt="js" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={scss} alt="scss" />
            <p className="my-4">SCSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react" />
            <p className="my-4">React(basic)</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="github" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={bootstrap} alt="bootstrap" />
            <p className="my-4">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
