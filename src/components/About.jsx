import React from "react";
import cv from "../assets/cv.pdf";
import { HiArrowNarrowRight } from "react-icons/hi";

function About({ t }) {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              {t("About")}
            </p>
          </div>
          <div>
            <p className="ml-4">
              <span className="font-bold">{t("location")}</span>
            </p>
            <p className="ml-4">
              <span className="font-bold">{t("education")}</span>
            </p>
            <p className="ml-4">
              <span className="font-bold">{t("speciality")}</span>
            </p>
            <p className="ml-4">
              <span className="font-bold">{t("courses")}</span>
            </p>
            <p className="ml-4">
              <span className="font-bold">{t("language")}</span>
            </p>
          </div>
          <div className="mx-4">
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
    </div>
  );
}

export default About;
