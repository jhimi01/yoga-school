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
        {/* <AwesomeSlider animation="cubeAnimation" className="slider-content">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/YZHLVkB/pexels-natalie-bond-3759660-1.jpg")',
              backgroundPosition: "100% 100%",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <Fade cascade>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-4/5">
                  <h4 className="subheading">Welcome to DoYoga</h4>
                  <h1 className="md:text-5xl text-3xl fontStyle mb-3">
                    Training Body and Mind Together
                  </h1>
                  <p className="mb-5 peraghrapStyle">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove.
                  </p>
                  <Button color="white">DoYoga</Button>
                </div>
              </div>
            </Fade>
          </div>

          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/fQcFDMw/pexels-kampus-production-6298301-1.jpg")',
              backgroundPosition: "100% 100%",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <Fade cascade>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-4/5">
                  <h4 className="subheading">Welcome to DoYoga</h4>
                  <h1 className="md:text-5xl text-3xl fontStyle">
                    Yoga Enhances Your Life
                  </h1>
                  <p className="mb-5 peraghrapStyle">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove.
                  </p>
                  <Button color="pink">DoYoga</Button>
                </div>
              </div>
            </Fade>
          </div>

          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/Gntztyf/pexels-chevanon-photography-317155-2.jpg")',
              backgroundPosition: "100% 100%",
            }}
          >
            <div className="hero-overlay bg-opacity-10"></div>
            <Fade cascade>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-4/5">
                  <h4 className="subheading">Welcome to DoYoga</h4>
                  <h1 className="md:text-5xl text-3xl fontStyle">
                    Providing the Calm You Need
                  </h1>
                  <p className="mb-5 peraghrapStyle">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove.
                  </p>
                  <Button color="#0071be">DoYoga</Button>
                </div>
              </div>
            </Fade>
          </div>

          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/jJGYL6D/pexels-savanna-goldring-5184327-1.jpg")',
              backgroundPosition: "100% 100%",
              objectFit: "cover",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <Fade cascade>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-4/5">
                  <h4 className="subheading">Welcome to DoYoga</h4>
                  <h1 className="md:text-5xl text-3xl fontStyle">
                    Have a Balance of Perfect Body and Calm Soul
                  </h1>
                  <p className="mb-5 peraghrapStyle">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove.
                  </p>
                  <Button color="#b5ad9f">DoYoga</Button>
                </div>
              </div>
            </Fade>
          </div>
        </AwesomeSlider> */}

        <div className="mt-20 relative">
          <span className="absolute  opacity-30 -z-20 top-0 left-0">
            <img src={flower2} className="" />
          </span>
          <span className="absolute hidden lg:block opacity-30  top-40 right-0 -z-20">
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
             className="text-center space-y-10 w-full md:w-4/5 pt-12">
              <h1
                style={{ letterSpacing: "3px" }}
                className="flex-wrap flex items-center justify-center gap-1 text-5xl md:text-[70px] font-serif"
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
        <ExtraSection></ExtraSection>
      </div>

      <div className="my-20 ">
        <PopularClasess></PopularClasess>
      </div>

      <div className="my-10">
        <PopularInstructor></PopularInstructor>
      </div>
    </>
  );
};

export default Home;
