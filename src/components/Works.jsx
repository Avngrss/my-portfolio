/* eslint-disable array-callback-return */
import React from "react";

import { Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import createx from "../assets/createx.png";
import ciprus from "../assets/ciprus.jpeg";
import gomel from "../assets/gomel.jpg";
import internetshop from "../assets/Internetshop.jpeg";
import sauna from "../assets/sauna.jpeg";
import zoov from "../assets/zoov.webp";
import reactcoffee from "../assets/Reactcoffee.jpg";
import reacticecream from "../assets/Reacticecream.png";
import reactlaptopshop from "../assets/Reactlaptopshop.png";

function Works({ t }) {
  const works = [
    {img: reactlaptopshop, title: "LaptopShopTest", git__link: "https://avngrss.github.io/laptop-shop-test/", code__link: "https://github.com/Avngrss/laptop-shop-test"},
    {img: createx, title: "Createx", git__link: "https://avngrss.github.io/Createx/", code__link: "https://github.com/Avngrss/Createx"},
    {img: ciprus, title: "AppartamentOnCiprus", git__link: "https://avngrss.github.io/AppartamentOnCiprus/", code__link: "https://github.com/Avngrss/AppartamentOnCiprus"},
    {img: reactcoffee, title: "CoffeeReactApp", git__link: "https://avngrss.github.io/coffee-react-app/", code__link: "https://github.com/Avngrss/coffee-react-app"},
    {img: gomel, title: "FCGomel", git__link: "https://avngrss.github.io/FCGomel/", code__link: "https://github.com/Avngrss/FCGomel"},
    {img: internetshop, title: "InternetShop", git__link: "https://avngrss.github.io/InternetShop/", code__link: "https://github.com/Avngrss/InternetShop"},
    {img: sauna, title: "SaunaViza", git__link: "https://avngrss.github.io/SaunaViza/", code__link: "https://github.com/Avngrss/SaunaViza"},
    {img: zoov, title: "Zoov", git__link: "https://avngrss.github.io/Zoov/", code__link: "https://github.com/Avngrss/Zoov"},
    {img: reacticecream, title: "TodoJs", git__link: "ttps://avngrss.github.io/MyTodoJS/", code__link: "https://github.com/Avngrss/MyTodoJS"},
  ];
  return (
    <div name="works" className="w-full  pb-10 pt-10 text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">{t("Works")}</p>
          <p className="py-6">{t("infoworks")}</p>
        </div>
        <div className="lg: 2/3 w-full">
        <Swiper 
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            620: {
              slidesPerView: 2,
            },
            425: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            }
          }}
          pagination={{ clickable: true }}
        >
          {
            works.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-[#293a77] rounded-xl">
                  <img src={item.img} alt="createx" className="rounded-lg" style={{width: "100%", height: "180px"}}/>
                  <h3 className="text-xl my-4">{item.title}</h3>
                  <div>
                    <a href={item.code__link} className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Github</a>
                    <a href={item.git__link} className="text-cyan-600 bg-gray-800 px-2 py-1 ml-2 inline-block">{t("demo")}</a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }         
        </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Works;
