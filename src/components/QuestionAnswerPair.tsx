import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type QuestionAnswerPairProps = {
  index: number;
  question: string;
  answer: string;
};

const QuestionAnswerPair: React.FC<QuestionAnswerPairProps> = ({
  index,
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-card w-full md:px-10 px-5`}>
      <div className={`md:flex hidden py-5`}>
        <div className={`faq-prefix-div question md:text-[24px] text-[22px] font-bold -mt-1`}>
          Q{index}
        </div>
        <div
          className={`faq-content-div text-xl text-justify font-bold`}
          dangerouslySetInnerHTML={{ __html: question }}
        ></div>
      </div>
      <div className={`md:hidden flex accordion-header py-5 cursor-pointer`} onClick={toggleAccordion}>
        <div className={`faq-prefix-div question md:text-[24px] text-[20px] font-bold md:-mt-1 mt-[-3px]`}>
          Q{index}
        </div>
        <div
          className={`faq-content-div md:text-[22px] text-[18px] text-justify font-bold`}
          dangerouslySetInnerHTML={{ __html: question }}
        ></div>
      </div>
      <div className={`md:flex hidden text-lg mt-3`}>
        <div className={`faq-prefix-div answer md:text-[24px] text-[22px] font-bold -mt-1`}>
          A
        </div>
        <div
          className={`faq-content-div pb-5 text-justify`}
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={`md:hidden flex text-lg mt-3`}
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <>
              <div className={`faq-prefix-div answer md:text-[24px] text-[20px] font-bold md:-mt-1 -mt-[5px]`}>
                A
              </div>
              <div
                className={`faq-content-div pb-5 text-justify leading-8 md:text-[20px] text-[18px]`}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></div>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionAnswerPair;
