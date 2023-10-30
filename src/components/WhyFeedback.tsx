import React from 'react';

type WhyFeedbackProps = {
  img: string;
  comment: string;
  content: string;
  bottomTip: string;
};

const WhyFeedback: React.FC<WhyFeedbackProps> = ({
  img,
  comment,
  content,
  bottomTip,
}) => {
  return (
    <div className={`why-feedback-card bg-white text-black border p-5 md:mx-2 mx-auto md:max-w-none max-w-[420px]`}>
      <div className={`flex items-center`}>
        <img
          className={`why-feedback-card-avatar mr-5`}
          width="85"
          height="85"
          src={img}
          alt="avatar"
        />
        <div className={`why-feedback-card-comment flex items-center`}>
          {comment}
        </div>
      </div>
      <div className={`why-feedback-card-content text-justify mt-4 p-4`}>
        {content}
      </div>
      <div className={`text-sm mt-3`}>{bottomTip}</div>
    </div>
  );
};

export default WhyFeedback;
