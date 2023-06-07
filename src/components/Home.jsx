import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import cv from "../assets/CV.pdf";

const Home = ({ t }) => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-500">{t("text")}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fff]">{t("name")}</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">{t("junior")}</h2>
        <p className="text-[#8892b0] py-4 max-w-[1700px]">{t("info")}</p>
        <div className="flex gap-5 sm:flex-wrap">
          <Link to="works" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              {t("work-btn")}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
          <a href={cv} download="cv">
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              {t("download")}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
