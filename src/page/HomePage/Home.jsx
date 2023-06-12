import React, { useEffect, useRef } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './Home.css'
import Button from '../../component/Button';
import PopularClasess from './PopularClasess';
import PopularInstructor from './PopularInstructor';
import ExtraSection from './ExtraSection';
import { Fade } from 'react-awesome-reveal';
// Import the CSS module for customizing the AwesomeSlider
// import styles from './AwesomeSlider.module.css';

const Home = () => {
  return (
     <>
       <div>
       <AwesomeSlider
      animation="cubeAnimation"
      className="slider-content"
      >

<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/YZHLVkB/pexels-natalie-bond-3759660-1.jpg")', backgroundPosition: '100% 100%' }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <Fade cascade>
  <div  className="hero-content text-center text-neutral-content">
    <div className="w-4/5">
    <h4 className='subheading'>Welcome to Yogabest</h4>
      <h1 className="md:text-5xl text-3xl fontStyle mb-3">Training Body and Mind Together</h1>
      <p className="mb-5 peraghrapStyle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      <Button color="white">DoYoga</Button>
    </div>
  </div>
  </Fade>

</div>

<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/fQcFDMw/pexels-kampus-production-6298301-1.jpg")', backgroundPosition: '100% 100%' }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <Fade cascade>
<div className="hero-content text-center text-neutral-content">
    <div className="w-4/5">
    <h4 className='subheading'>Welcome to Yogabest</h4>
      <h1 className="md:text-5xl text-3xl fontStyle">Yoga Enhances Your Life</h1>
      <p className="mb-5 peraghrapStyle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
    <Button color="pink">DoYoga</Button>
    </div>
  </div>
</Fade>
</div>


        
<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/Gntztyf/pexels-chevanon-photography-317155-2.jpg")', backgroundPosition: '100% 100%' }}>
  <div className="hero-overlay bg-opacity-10"></div>
<Fade cascade>
<div className="hero-content text-center text-neutral-content">
    <div className="w-4/5">
    <h4 className='subheading'>Welcome to Yogabest</h4>
      <h1 className="md:text-5xl text-3xl fontStyle">Providing the Calm You Need</h1>
      <p className="mb-5 peraghrapStyle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      <Button color="#0071be">DoYoga</Button>
    </div>
  </div>
</Fade>


</div>

<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/jJGYL6D/pexels-savanna-goldring-5184327-1.jpg")', backgroundPosition: '100% 100%', objectFit:'cover' }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <Fade cascade>
        <div className="hero-content text-center text-neutral-content">
    <div className="w-4/5">
    <h4 className='subheading'>Welcome to Yogabest</h4>
      <h1 className="md:text-5xl text-3xl fontStyle">Have a Balance of Perfect Body and Calm Soul</h1>
      <p className="mb-5 peraghrapStyle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      <Button color="#b5ad9f">DoYoga</Button>
    </div>
  </div>
  </Fade>  

</div>
      </AwesomeSlider>
       </div>

       <div className='mt-28 mx-auto w-full md:w-5/6'>
        <ExtraSection></ExtraSection>
       </div>

<div className='my-20 '>
    
<PopularClasess></PopularClasess>
 
</div>

<div className='my-10'>
    
<PopularInstructor></PopularInstructor>
 
</div>
     </>
  );
};

export default Home;
