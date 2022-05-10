import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import RenderFunc from '../components/misc/RenderFunc';
import useMediaQuery from '../hooks/useMediaQuery';
import { subscriber1, subscriber2, subscriber3 } from '../assets';
import { generateKey } from '../utils/_helpers';
import { cryptos } from '../data/data';

const Home = () => {
  const { width } = useMediaQuery();
  return (
    <RenderFunc>
      <section className="sm:flex py-12">
        <div className="py-5">
          <p>0% of trading commission</p>
          <h2 className="sm:text-4xl lg:text-6xl pt-4 pb-7 leading-8">
            Join the best cryptocurrency exchange hub
          </h2>
          <p className="leading-6 py-3 w-3/4">
            Trade with over 740 cryptocurrency and fiat currency pairs,
            including Bitcoin, Ethereum and BNB pairs.
          </p>
          <button className="py-2 mt-5 font-bold rounded bg-indigo-100 lg:w-1/2">
            START TRADING
          </button>
        </div>
        <div>
          <img
            src="https://muna.app/static/media/hero.35302111.svg"
            alt="coins"
            loading="lazy"
          />
        </div>
      </section>
      <section className="custom-full-width py-4">
        <div className="flex flex-row items-center overflow-x-scroll slide-show">
          {cryptos.map((coin) => (
            <div className="mx-2" key={generateKey(8)}>
              <img
                className="coin py-2"
                src={coin.img}
                alt="crypto"
                width="150"
                height="150"
              />
              <p className="text-center font-bold text-yellow-600">
                {coin.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12">
        <article className="md:flex">
          <div>
            <h3 className="py-2 xs:text-2xl md:text-3xl md:w-3/4 font-bold">
              Our best users are all over the world with wide coverage
            </h3>
            <p className="py-8 xs:text-2xl md:w-3/4 ">
              Our platform reaches all over the world, hereby we are trusted as
              the best platform for crypto trading.
            </p>
            <div className="lg:flex py-4">
              <div>
                <p className="xs:text-3xl md:text-4xl font-bold">20M+</p>
                <p className="py-1">People who have joined coinhub.</p>
              </div>
              <div>
                <p className="xs:text-3xl md:text-4xl font-bold">100M+</p>
                <p className="py-1">Famous people playing coinhub.</p>
              </div>
              <div>
                <p className="xstext-3xl md:text-4xl font-bold">50</p>
                <p className="py-1">Cooperation with big companies.</p>
              </div>
            </div>
          </div>
          <div></div>
        </article>
      </section>
      <section className="custom-full-width py-8">
        <h3 className="py-2 text-center text-2xl font-bold">
          We take care of our quality
        </h3>
        <p className="py-1 text-center">
          We provide best services to our users
        </p>
        <div
          className="md:flex mx-auto lg:flex-row xs:pt-3 lg:pt-8"
          style={{ width: width > 600 ? '85vw' : '80vw' }}
        >
          <div className="text-center">
            <AiTwotoneStar size="30" color="#407bff" />
            <p className="py-2 text-center font-bold md:text-2xl">
              Best Trading Platform
            </p>
            <p className="py-2 lg:w-3/4 m-auto ">
              Easy trading for beginners. No hidden commission
            </p>
          </div>
          <div className="text-center">
            <BsFillCheckCircleFill size="30" color="#407bff" />
            <p className="py-2 font-bold md:text-2xl">Trusted Security</p>
            <p className="py-2 lg:w-3/4 m-auto">
              Our platform is very secured. We use the best reliable and
              sustained technologies.
            </p>
          </div>
          <div className="text-center">
            <FaUsers size="30" color="#407bff" />
            <p className="py-2 font-bold md:text-2xl">Comfortable Ecosystem</p>
            <p className="py-2 lg:w-3/4 m-auto">
              We pair you with crypto traders all over the world.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <h4 className="sm:text-4xl font-bold lg:text-3xl text-center pt-4 pb-7 leading-8">
          Testimonials
        </h4>
        <div className="sm:flex py-4 justify-center">
          <div className="md:w-1/3 lg:w-1/4 shadow-md  rounded py-3 shadow-yellow-500/50">
            <p className="p-2 leading-6 font-normal text-sm">
              My name is Tolu. Since I started using Coinhub. I no longer get
              scared when making crypto transactions.
            </p>
            <div className="mt-2 flex items-center justify-center">
              <img
                src={subscriber3}
                alt="By Alexandru Zdrobau on unsplash.com"
                className="w-20 h-20 rounded-full ml-2"
                height="20"
                width="20"
              />
              <p className="pl-3 font-bold">Alexandru Zdrobau</p>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-1/4 shadow-md  rounded py-3 md:mx-3  shadow-yellow-500/50">
            <p className="p-2 leading-6 font-normal text-sm">
              Coinhub has connected me to different crypto traders all over the
              world. I no longer worry about selling my coins.
            </p>
            <div className="mt-2 flex items-center justify-center">
              <img
                src={subscriber1}
                alt="Nicolas-horn on unsplash.com"
                className="w-20 h-20 rounded-full block ml-2"
                height="20"
                width="20"
              />
              <p className="pl-3 font-bold">Nicolas Horn</p>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-1/4 shadow-md  rounded py-3 shadow-yellow-500/50">
            <p className="p-2 leading-6 font-normal text-sm">
              I can't stop thanking my friend. The platform stops me from worry
              about hidden commissions.
            </p>
            <div className="mt-2 flex items-center justify-center">
              <img
                src={subscriber2}
                alt="By christopher-campbell on unsplash.com"
                className="w-20 h-20 rounded-full ml-2"
                height="20"
                width="20"
              />
              <p className="pl-3 font-bold">Christopher Campbell</p>
            </div>
          </div>
        </div>
      </section>
    </RenderFunc>
  );
};

export default Home;
