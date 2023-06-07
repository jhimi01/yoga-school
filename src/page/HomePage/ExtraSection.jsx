import React from 'react';
import ShareTitle from '../../component/ShareTitle';

const ExtraSection = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <div><img src="https://i.ibb.co/W0qVBqc/pexels-roman-odintsov-8018922.jpg" alt="" /></div>
            <div>
                <ShareTitle subheading={`Reslish in Nature's Natural Gift`} mainTitle={'LIFE IN DIVINE YOGA'}></ShareTitle>
                <h3 className='italic text-xl text-gray-800'>"I am standing on my own altar, The Poses are my prayers"</h3>
                <p className='mb-5 text-gray-500 text-xl'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
        </div>
    );
};

export default ExtraSection;