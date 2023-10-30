/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ServiceSummaryCard from './ServiceSummaryCard';

import config from '../config/index.json';

const Service = () => {
  const { service } = config;
  const { summary, comments, toClients } = service;

  return (
    <div id="service">
      <div className={`service-summary w-full`}>
        <div
          className={`service-summary-container mx-auto 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
        >
          <div className={`px-5 pt-10`}>
            <div className={`w-full`}>
              <span className={`text-5xl font-bold`}>
                <span className={`text-color-third`}>S</span>ervice
              </span>
              <span className={`ml-4`}>サービス概要</span>
            </div>
          </div>
          <div className={`w-full pb-10`}>
            {summary.map((record, index) => (
              <ServiceSummaryCard
                key={index}
                index={index}
                title={record.title}
                comment={record.comment}
                bottomComment={record.bottomComment}
                img={record.img}
              ></ServiceSummaryCard>
            ))}
          </div>
        </div>
      </div>
      <div className={`service-comments w-full text-black py-10`}>
        <div className={`service-comments-container mx-auto 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}>
          <div className={`text-[26px] py-2 underline flex justify-center tracking-wider px-3`}>
            <img src={`service_comments_title.png`} alt={comments.comment1} />
          </div>
          <div className={`grid sm:grid-cols-2 grid-cols-1 mt-10`}>
            <div className={``}>
              <img src={`service5.jpg`} alt={comments.comment1} />
            </div>
            <div className={`text-[18px] py-3 px-4 sm:mt-0 mt-5`}>
              <div className={`text-justify`}>{comments.comment2}</div>
              <div className={`text-justify mt-2`}>{comments.comment3}</div>
            </div>
          </div>
          <div className={`rounded-[10px] bg-white text-justify sm:p-6 p-4 sm:mx-0 mx-2 mt-5`}>
            <div className={`text-[18px]`}>{comments.comment4}</div>
            <div className={`text-[18px] mt-2`}>{comments.comment5}</div>
          </div>
          <div className={`rounded-[10px] bg-white text-justify font-bold sm:p-6 p-4 sm:mx-0 mx-2 mt-5`}>
            <div className={`text-[18px]`}>{comments.comment6}</div>
            <div className={`text-[18px] mt-2`}>{comments.comment7}</div>
          </div>
        </div>
      </div>
      <div className={`w-full flex md:flex-row flex-col`}>
        <div className={`md:w-1/2 w-full md:h-[660px]`}>
          <img className={`md:block hidden object-cover object-center w-full h-full`} src={`service6.jpg`} alt="service"/>
          <img className={`md:hidden block object-cover object-center w-full`} src={`service6_sm.jpg`} alt="service" />
        </div>
        <div className={`md:w-1/2 w-full text-black md:flex md:justify-center md:items-center`}>
          <div className={`md:w-[520px] md:max-w-[95%] md:p-0 px-5 py-7`}>
            <div className={`text-[40px] font-bold md:text-justify text-center`}><span className={`text-color-third`}>T</span>o customers <span className={`text-[14px] font-normal`}>お客様へ</span></div>
            <div className={`text-justify lg:text-[18px] text-[16px] lg:leading-8 leading-7`}>
              {toClients.comments.map((comment, index) => (
                <div key={index} className={`text-justify mt-5`} dangerouslySetInnerHTML={{ __html: comment }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
