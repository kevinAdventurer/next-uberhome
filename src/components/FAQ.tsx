import React from 'react';

import config from '../config/index.json';
import QuestionAnswerPair from './QuestionAnswerPair';

const FAQ = () => {
  const { faq } = config;
  const { contents } = faq;
  return (
    <div className={`py-12 text-black`} id="faq">
      <div
        className={`why-container mx-auto px-5 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
      >
        <div className={`w-full`}>
          <span className={`text-5xl font-bold`}>
            <span className="text-color-third">F</span>AQ
          </span>
          <span className={`ml-4`}>よくある質問</span>
        </div>
        <div className={`faq-list-div sm:gap-y-10 gap-y-5 flex flex-col mt-12`}>
          {contents.map((content, index) => (
            <QuestionAnswerPair
              key={index}
              index={index + 1}
              question={content.question}
              answer={content.answer}
            ></QuestionAnswerPair>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
