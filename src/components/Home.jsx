import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import photo from "../assets/photo.jpg";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { ImTelegram } from "react-icons/im";

const Home = ({ t }) => {
  return (
    <div name="home" className="w-full h-screen flex md:flex-row flex-col px-4 items-center bg-[#0a192f]">
      <div className="flex-1 flex items-center justify-center h-full pt-20">
        <img className="md: h-96" src={photo} alt="avatar" />
      </div>
      <div className="flex-1 mt-10 mr-3">
      <p className="text-red-500">{t("text")}</p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#fff]">{t("name")}</h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">{t("junior")}</h2>
        <p className="text-[#8892b0] py-4 max-w-[1700px]">{t("info")}</p>
        <div className="mt-4 mb-4 text-3x1 flex md:hidden sm:items-center justify-start">
          <a href="https://github.com/Avngrss" target="blank">
            <IoLogoGithub style={{width: "60px", height: "60px", color: "#8892b0"}}/>
          </a>
          <a href="https://www.linkedin.com/in/yurii-sedow-193a46252/" target="blank">
            <IoLogoLinkedin style={{width: "60px", height: "60px", color: "#8892b0"}}/>
          </a>
          <a href="https://t.me/YuriiSedow" target="blank">
            <ImTelegram style={{width: "60px", height: "60px", color: "#8892b0"}}/>
          </a>
        </div>
        <div className="flex gap-5 sm:flex-wrap">
          <Link to="works" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              {t("work-btn")}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
