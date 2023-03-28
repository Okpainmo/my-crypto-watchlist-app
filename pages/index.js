import React, { useEffect } from 'react';
import CoinItem from '@/components/CoinItem';
import Intro from '@/components/Intro';
import Footer from '@/components/Footer';

function WatchPage({ coinsData }) {
  return (
    <main className='px-3 sm:px-8 w-full md:w-10/12 mx-auto md:mt-8'>
      <Intro />
      <section className='coins-list-section pt-4 sm:pt-8 mt-2'>
        <div className='table-header list-categories flex pb-3 border-b'>
          <div className='w-2/12 flex flex-row-reverse xl:w-[10%]'>
            <div className='w-1/2 font-bold montserrat text-center'>#</div>
          </div>
          <div className='w-2/12 text-center font-bold montserrat xl:w-[10%]'>
            Coin
          </div>
          <div className='w-[calc(25%_-_15px)] text-center font-bold montserrat xl:w-[10%]'>
            Price
          </div>
          <div className='w-[calc(16.66%_+_15px)] font-bold montserrat xl:w-[10%] text-center'>
            24h
          </div>
          <div className='hidden xl:inline-block text-center font-bold montserrat xl:w-[17%]'>
            Total vol
          </div>
          <div className='hidden xl:inline-block text-center font-bold montserrat xl:w-[18%]'>
            Mkt cap
          </div>
          <div className='w-3/12 text-center font-bold montserrat xl:w-[25%]'>
            Last 7 days
          </div>
        </div>
        {coinsData.map((coin) => {
          return <CoinItem coin={coin} key={coin.id} />;
        })}
      </section>
      <Footer />
    </main>
  );
}

export default WatchPage;

export async function getServerSideProps() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=true'
  );
  const coinsData = await response.json();

  return {
    props: {
      coinsData,
    },
  };
}
