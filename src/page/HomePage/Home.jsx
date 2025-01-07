import React, { useEffect, useRef } from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Home.css";
import PopularClasess from "./PopularClasess";
import PopularInstructor from "./PopularInstructor";
import ExtraSection from "./ExtraSection";
import { Helmet } from "react-helmet";
import icon1 from "../../../public/icons/icon1.jpg";
import icon2 from "../../../public/icons/icon2.jpg";
import icon3 from "../../../public/icons/icon3.jpg";
import tearing5 from "../../../public/tearing5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Contact";
import CTA from "./CTA";
import Feature from "./Feature";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const benefits = [
    {
      img: icon3,
      title: "Healthy Life Style",
      desc: "Embrace a balanced routine with yoga to improve physical fitness, mental clarity, and overall well-being.",
    },
    {
      img: icon1,
      title: "Feel Happy & Active",
      desc: "Boost your mood and energy levels by staying active and connected with your mind and body.",
    },
    {
      img: icon2,
      title: "Sleep Better",
      desc: "Reduce stress and calm your mind to enjoy deeper, more restful sleep every night.",
    },
    {
      img: icon1,
      title: "Energetic",
      desc: "Rejuvenate your body and mind with yoga practices that leave you feeling refreshed and vibrant throughout the day.",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>Home | DoYoga</title>
      </Helmet>
      {/* banner section */}
      <div
        className="banner-section relative mx-auto"
        style={{
          backgroundImage: `url(${"https://www.dabur.com/Blogs/Detoxification/What%20is%20Yoga%201020x450_0.jpg"})`, // Use the imported image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          className="banner-content absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#1b1b1be3] to-[rgba(21, 21, 21, 0)]  flex items-center h-full text-white md:w-[60%] mr-auto px-3 md:px-14"
        >
          <div className="space-y-3 text-center">
            <h3 className="text-center">Welcome to DoYoga</h3>
            <h1 className="text-5xl text-center capitalize font-serif">
              develope your body, mind and spirit!
            </h1>
            <p> Find your inner peace through our online yoga classes</p>
            <button className="border  px-4 py-2 rounded-ss-2xl rounded-br-2xl hover:bg-white hover:text-slate-900 font-semibold">
              Get a class
            </button>
          </div>
        </div>
      </div>

      {/* tearing paper */}
      <div className="relative pb-36">
        {/* Image */}
        <img
          src={tearing5}
          className="-mt-14 hidden md:block absolute top-0 left-0 w-full h-auto"
        />

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pt-36">
          <div className="md:px-20 px-5 md:pb-0 pb-5 pt-12 space-y-7 bg-base-100">
            <h1 className="text-xl capitalize font-semibold mb-5 text-center md:px-4">
              yoga has countless benifits
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-5">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="text-justify md:text-center "
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  // data-aos-duration="800"
                >
                  <img
                    src={item?.img}
                    alt="icon"
                    className="w-14 h-14 md:mx-auto rounded-full"
                  />
                  <h2 className="font-semibold my-2">{item?.title}</h2>
                  <p>{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-56 mx-auto w-full md:w-5/6">
        <ExtraSection />
      </div>

      <div className="my-20 ">
        <PopularClasess />
      </div>

      <div className="my-10">
        <PopularInstructor />
      </div>
      <div className="my-20 ">
        <Feature />
      </div>
      <div className="my-10">
        <Contact />
      </div>
      <div className="my-1">
        <CTA />
      </div>
    </div>
  );
};

export default Home;
