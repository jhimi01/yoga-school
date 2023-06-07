import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './Home.css'
import Button from '../../component/Button';

const Home = () => {
  return (
      <AwesomeSlider animation="cubeAnimation" className='slider-content'>


<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/fQcFDMw/pexels-kampus-production-6298301-1.jpg")', backgroundPosition: '100% 100%' }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <Button color="pink">DoYoga</Button>
    </div>
  </div>
</div>
        
<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/Gntztyf/pexels-chevanon-photography-317155-2.jpg")', backgroundPosition: '100% 100%' }}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button color="#0071be">DoYoga</Button>
    </div>
  </div>
</div>
         
<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/9Z2rp4P/pexels-shu-lei-13849284-1.jpg")', backgroundPosition: '100% 100%' }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button color="white">DoYoga</Button>
    </div>
  </div>
</div>
          
<div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/jJGYL6D/pexels-savanna-goldring-5184327-1.jpg")', backgroundPosition: '100% 100%', objectFit:'cover' }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button color="#b5ad9f">DoYoga</Button>
    </div>
  </div>
</div>
      </AwesomeSlider>
 
  );
};

export default Home;
