import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <>
      <div className={`main-hero mt-12`}>
        <img src="hero.jpg" className="hero-background" alt="hero" />
        <div className={`cta-panel absolute`}>
          <div className={`cta-main-panel md:w-[732px] sm:w-[500px] w-[265px] items-center flex`}>
            <img className={`absolute md:w-[105px] md:h-[105px] md:top-[-30px] md:right-[-30px] w-[62px] h-[62px] top-[-20px] right-[-20px]`} src="01.png" alt="01" />
            <div className={`w-full`}>
              <div className={`font-semibold md:text-[24px] sm:text-[20px] text-[15px] text-center mx-10`}>
                {mainHero.title}
              </div>
              <hr className="my-5 mx-8"></hr>
              <div
                className={`font-bold md:text-[39px] sm:text-[26px] text-[22px] text-center mx-8`}
              >
                <div>他サイトで見つけた気になるお部屋</div>
                <div className="md:-mt-4 sm:-mt-2 -mt-1">
                  仲介手数料{' '}
                  <span className={`text-color-third`}>
                    最大
                    <span className={`md:text-[60px] sm:text-[46px] text-[32px] font-bold relative`}>0</span>円
                  </span>{' '}
                  でお届け。
                </div>
              </div>
            </div>
          </div>
          <button
            className={`bg-color-green w-full rounded-full text-2xl font-bold text-center text-white mt-4 py-2 shadow-lg shine block`}
          >
            {mainHero.sendBtnTitle}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainHero;
