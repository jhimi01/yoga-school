import React from 'react';
import ShareTitle from '../../component/ShareTitle';

const ExtraSection = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
      <div className='h-[700px]'>
        <img className=' w-full h-full' src="https://i.ibb.co/W0qVBqc/pexels-roman-odintsov-8018922.jpg" alt="" />
      </div>

      <div className='p-8 md:p-16'>
        <ShareTitle subheading={`Relish in Nature's Natural Gift`} mainTitle={'LIFE IN DIVINE YOGA'}></ShareTitle>
        <h3 className='italic text-xl '>"I am standing on my own altar, The Poses are my prayers"</h3>
        <p className='my-5 text-gray-500 text-xl'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

        <div className='bg-gray-100 rounded-md p-8'>
          <h4 className='text-2xl font-semibold mb-4'>About</h4>
          <p className='text-gray-500' style={{letterSpacing:'1.5px'}}>
          It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being. Although classical yoga also includes other elements, yoga as practiced in the United States typically emphasizes physical postures (asanas), breathing techniques (pranayama), and meditation (dyana).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
