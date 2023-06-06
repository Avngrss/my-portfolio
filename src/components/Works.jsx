import React from "react";
import createx from "../assets/createx.png";
import ciprus from "../assets/ciprus.jpeg";
import gomel from "../assets/gomel.jpg";
import internetshop from "../assets/Internetshop.jpeg";
import sauna from "../assets/sauna.jpeg";
import zoov from "../assets/zoov.webp";
import reactcoffee from "../assets/Reactcoffee.jpg";
import reacticecream from "../assets/Reacticecream.png";
import reactlaptopshop from "../assets/Reactlaptopshop.png";

function Works() {
  return (
    <div name="works" className="w-full  pb-10 md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 text-gray-300">Works</p>
          <p className="py-6">//Check my some works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div style={{ backgroundImage: `url(${reactlaptopshop})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Laptop React App</span>
              <div className="text-2xl font-bold text-white tracking-wider text-center">React</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/laptop-shop-test/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/laptop-shop-test" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${createx})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Createx Web-site</span>
              <div className="text-2xl font-bold text-white tracking-wider text-center">HTML, SCSS, JS</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/Createx/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/Createx" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${ciprus})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Ciprus Web-site</span>
              <div className="text-2xl font-bold text-white tracking-wider text-center">HTML, SCSS, JS</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/AppartamentOnCiprus/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/AppartamentOnCiprus" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${reactcoffee})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Coffee React App</span>
              <div className="text-2xl font-bold text-white tracking-wider text-center">React</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/coffee-react-app/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/coffee-react-app" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${gomel})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-white tracking-wider text-center">FCGomel Web-site</div>
              <div className="text-2xl font-bold text-white tracking-wider text-center">HTML, SCSS, JS, Bootstrap</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/FCGomel/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/FCGomel" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${internetshop})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-white tracking-wider text-center">InternetShop Web-site</div>
              <div className="text-2xl font-bold text-white tracking-wider text-center">HTML, SCSS, JS</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/InternetShop/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/InternetShop" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${sauna})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-white tracking-wider text-center">Sauna Web-site</div>
              <div className="text-2xl font-bold text-white tracking-wider text-center">HTML, SCSS, JS</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/SaunaViza/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/SaunaViza" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${zoov})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-white tracking-wider text-center">Zoov Web-site</div>
              <div className="text-2xl font-bold text-white tracking-wider text-center">HTML, SCSS, JS</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/Zoov/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/Zoov" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${reacticecream})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl font-bold text-white tracking-wider text-center">JS ToDo App</div>
              <div className="text-2xl font-bold text-white tracking-wider text-center">JavaScript</div>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://avngrss.github.io/MyTodoJS/" target="blank">
                    Demo
                  </a>
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <a href="https://github.com/Avngrss/MyTodoJS" target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
