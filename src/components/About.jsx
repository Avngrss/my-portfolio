import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">About</p>
          </div>
          <div>
            <p className="ml-4">
              <span className="font-bold">NAME:</span> Sedow Yurii
            </p>
            <p className="ml-4">
              <span className="font-bold">LOCATION:</span> Gomel, Republick of Belarus
            </p>
            <p className="ml-4">
              <span className="font-bold">DATA OF BIRTH:</span> 25.06.1994
            </p>
            <p className="ml-4">
              <span className="font-bold">EDUCATION:</span> 2014-2018 Gomel State University of Franziska Scarina.
            </p>
            <p className="ml-4">
              <span className="font-bold">SPECIALITY:</span> IT ingeener
            </p>
            <p className="ml-4">
              <span className="font-bold">COURSES:</span> Development web websites using HTML, CSS and JavaScript to IT-Academy.
            </p>
            <p className="ml-4">
              <span className="font-bold">LANGUAGE:</span> Russia, English (B1)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
