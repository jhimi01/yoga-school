import React, { useEffect, useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Home.css";
import Button from "../../component/Button";
import PopularClasess from "./PopularClasess";
import PopularInstructor from "./PopularInstructor";
import ExtraSection from "./ExtraSection";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import yoga from "../../../public/yoga (1).png";
import yoga2 from "../../../public/yoga3.png";
import flower from "../../../public/flower.png";
import flower2 from "../../../public/flower2.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Contact from "./Contact";
import CTA from "./CTA";
import Feature from "./Feature";



const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Make sure to only initialize once
  return (
    <>
      <div className="">
        <Helmet>
          <title>Home | DoYoga</title>
        </Helmet>
        <div className="mt-20 relative">
          <span className="absolute  opacity-25 -z-20 top-0 left-0">
            <img src={flower2} className="" />
          </span>
          <span className="absolute hidden lg:block opacity-25  top-40 right-0 -z-20">
            <img src={flower} alt="" />
          </span>

          <div className="md:flex justify-between overflow-hidden  md:pt-2 space-y-5">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
              className="h-[500px] hidden lg:block bg-rose-100 mx-auto md:rounded-se-[40%] md:w-1/2 w-full"
            >
              <img className="h-full mx-auto mb-auto" src={yoga} alt="" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500"
             className="text-center space-y-10 w-full md:w-[70%] pt-12">
              <h1
                className="flex-wrap flex items-center justify-center gap-1 text-5xl md:text-[60px] font-serif"
              >
                <span className="backdrop-filter px-3 backdrop-blur-lg">
                  Training
                </span>
                <span className="backdrop-filter px-3 backdrop-blur-lg">
                  Body
                </span>
                <span className="backdrop-filter px-3 backdrop-blur-lg">
                  and
                </span>
                <span className="backdrop-filter px-3 backdrop-blur-lg">
                  Mind
                </span>
                <span className="backdrop-filter px-3 backdrop-blur-lg">
                  Together
                </span>
              </h1>
              <p className="text-xl w-11/12 mx-auto">
                Explore yoga's transformative power with our expert classes.
                From beginner to advanced, our instructors guide you towards
                balance and strength. Join us for a harmonious union of mind,
                body, and spirit.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
              className="h-[600px] bg-green-50 md:rounded-ss-[40%] rounded-ss-full  lg:w-5/6 mx-auto w-full"
            >
              <img className="h-full object-cover" src={yoga2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 mx-auto w-full md:w-5/6">
        <ExtraSection />
      </div>

      <div className="my-20 ">
        <Feature />
      </div>
      <div className="my-20 ">
        <PopularClasess />
      </div>

      <div className="my-10">
        <PopularInstructor />
      </div>
      <div className="my-10">
        <Contact />
      </div>
      <div className="my-1">
        <CTA />
      </div>
    </>
  );
};

export default Home;