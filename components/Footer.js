import React from 'react';
import Emoji from './Emoji';

function Footer() {
  return (
    <footer className='text-center text-[14px] mt-20 mb-16 leading-[30px]'>
      Built with so much <Emoji symbol='❤️' label='love/heart' /> by <br /> (Me)
      <br />
      <div className='text-[12px]'>
        API by{' '}
        <a
          target='_blank'
          className=' text-red-400'
          href='https://coingecko.com'
        >
          Coingecko
        </a>{' '}
      </div>
    </footer>
  );
}

export default Footer;
