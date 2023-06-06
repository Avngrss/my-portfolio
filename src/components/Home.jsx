import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-500">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fff]">Yurii Sedow</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Junior Frontend Devoloper</h2>
        <p className="text-[#8892b0] py-4 max-w-[1700px]">i'm learning JavaScript and React.I develop the skills that needs a front-end developer.I want to find a job with the opportunity to further develop and learn something new in this area.</p>
        <div>
          <Link to="works" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              View Works
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
