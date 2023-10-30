import React from 'react';

type AboutStepProps = {
  index: number;
  title: string;
  content: string;
  img: string;
};

const AboutStep: React.FC<AboutStepProps> = ({ index, title, content, img }) => {
  return (
    <div className={`about-step-card lg:mx-0 mx-auto`}>
      <div className="about-step-card-img relative">
        <button className={`block absolute top-[10px] left-[10px] text-white bg-color-green rounded-[5px] text-[12px] px-3 py-[3px] shine shadow-md cursor-default`}>ステップ {index}</button>
        <img src={img} alt="img" className="mx-auto" />
      </div>
      <div className="about-step-card-title justify-center py-2">{title}</div>
      <div className="about-step-card-content justify-center flex items-center">
        <div
          className={`leading-8 px-4`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default AboutStep;
