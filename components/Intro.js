import React from 'react';
import Emoji from '@/components/Emoji';

function Greeting() {
  return (
    <section className='greeting-section pt-10 pb-6 text-3xl text-center'>
      <div className='font-bold mb-4'>
        Hey <Emoji symbol='👋' label='waving-hand' />, you're welcome.
      </div>
      <div className='text-[14px] leading-[25px]'>
        Here's how the crypto market looks today. Here you have data for the top
        50 coins/tokens.
      </div>
    </section>
  );
}

export default Greeting;
