import React from 'react';

type ServiceSummaryCardProps = {
  index: number;
  title: string;
  comment: string;
  bottomComment: string;
  img: string;
};

const ServiceSummaryCard: React.FC<ServiceSummaryCardProps> = ({ index, title, comment, bottomComment, img }) => {
  return (
    <div className={`service-summary-card shadow-lg bg-white rounded-[10px] text-black mt-10 md:mx-auto mx-5 md:w-3/4`}>
      <div className={`sm:text-[24px] text-[21px] text-center py-3 text-white bg-color-primary rounded-t-[10px]`}>{title}</div>
      <div className={`grid sm:grid-cols-2 grid-cols-1 sm:p-7 p-5`}>
        <div className={(index%2 == 1) ? `justify-center items-center` : 'md:hidden flex justify-center items-center'}>
          <img src={img} alt={title} />
        </div>
        <div className={`text-justify lg:text-[20px] md:text-[18px] text-[20px] sm:mt-0 mt-2`}>
          <div className={``} dangerouslySetInnerHTML={{ __html: comment }}></div>
          <div className={`font-bold mt-2`} dangerouslySetInnerHTML={{ __html: bottomComment }}></div>
        </div>
        <div className={(index%2 == 0) ? `md:flex hidden justify-center items-center` : 'hidden justify-center items-center'}>
          <img src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSummaryCard;
