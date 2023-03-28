import Image from 'next/image';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function CoinItem({ coin }) {
  const {
    id,
    symbol,
    current_price,
    image,
    name,
    price_change_percentage_24h,
    market_cap_rank,
    sparkline_in_7d,
    total_volume,
    market_cap,
  } = coin;

  return (
    <section className='py-3 border-b flex '>
      <div className='flex items-center w-1/12 xl:w-[5%]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='currentColor'
          className='bi bi-star'
          viewBox='0 0 16 16'
        >
          <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
        </svg>
      </div>
      <div className='w-1/12 xl:w-[5%] flex justify-center items-center'>
        {market_cap_rank}
      </div>
      <div className='coin w-2/12 xl:w-[10%] flex flex-col justify-center text-center'>
        <div className='xsm:w-[50px] mx-auto'>
          <div className='w-[25px] h-[25px] relative mx-auto z-10'>
            <Image src={image} alt={`${name} logo`} fill />
          </div>
          <span className='pt-[5px]'>{symbol}</span>
        </div>
      </div>
      <div className='price w-[calc(25%_-_15px)] xl:w-[10%] flex justify-center items-center text-[13.5px]'>
        ${`${current_price.toLocaleString()}`}
      </div>
      <div
        className={`last-24-hours w-[calc(16.66%_+_15px)] xl:w-[10%] flex justify-center items-center text-[13.5px] ${
          price_change_percentage_24h > 0
            ? 'gain-alert-color'
            : 'loss-alert-color'
        }`}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className='hidden xl:flex xl:w-[17%] items-center justify-center'>
        {total_volume.toLocaleString()}
      </div>
      <div className='hidden xl:flex xl:w-[18%] items-center justify-center'>
        {market_cap.toLocaleString()}
      </div>
      <div className='last-7-days w-3/12 xl:w-[25%] flex flex-row-reverse'>
        <Sparklines data={sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
        </Sparklines>
      </div>
    </section>
  );
}

export default CoinItem;
