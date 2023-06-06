import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import flagrussia from "../assets/flagrussia.png";
import flagengland from "../assets/flagvelikobritanii.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const ShowMenu = () => setOpenMenu(!openMenu);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200">
      <div className="flex items-center justify-between gap-4">
        <img height="30px" width="30px" src={flagrussia} alt="flagrussia" />
        <img height="30px" width="30px" src={flagengland} alt="flagengland" />
      </div>
      <div className="hidden md:flex rounded-bl-full bg-[#2F4F4F]">
        <ul className="hidden md:flex">
          <li className="hover:text-red-500">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="works" smooth={true} duration={500}>
              Works
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={ShowMenu} className="md:hidden z-50">
        {!openMenu ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!openMenu ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link onClick={ShowMenu} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={ShowMenu} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={ShowMenu} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={ShowMenu} to="works" smooth={true} duration={500}>
            Works
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a className="flex justify-between items-center w-full text-gray-200" href="https://www.linkedin.com/in/yurii-sedow-193a46252/" target="blank">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a className="flex justify-between items-center w-full text-gray-200" href="https://github.com/Avngrss" target="blank">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400">
            <a className="flex justify-between items-center w-full text-gray-200" href="https://t.me/YuriiSedow" target="blank">
              Telegramm <FaTelegram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
