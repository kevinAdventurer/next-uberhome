import Slider, { Settings } from 'react-slick';
import WhyFeedback from './WhyFeedback';
import CustomPrevArrow from './CustomPrevArrow';
import CustomNextArrow from './CustomNextArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import config from '../config/index.json';

const Why = () => {
  const { why, company } = config;
  const {
    title,
    firstComment,
    whyInfoCard1,
    whyInfoCard2,
    secondComment,
    arrowImg,
    recommendTitle,
    feedbacks,
  } = why;

  const sliderSettings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={`py-12 text-black bg-color-grey`} id="why">
      <div
        className={`why-container mx-auto px-5 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
      >
        <div className={`w-full`}>
          <span className={`text-5xl font-bold`}>
            <span className="text-color-third">W</span>hy
          </span>
          <span className={`ml-4`}>仲介手数料が0円の理由</span>
        </div>
        <div className="why-title-div mx-auto">
          <div
            className={`text-center text-2xl py-10`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div
            className={`text-xl mb-4 text-justify`}
            dangerouslySetInnerHTML={{ __html: firstComment }}
          ></div>
        </div>
        <div className={`why-info-card shadow-md mb-12`}>
          <div className={`why-info-card-title rounded-t-[10px] py-3 md:text-[26px] sm:text-[22px] text-[18px]`}>
              {whyInfoCard1.title}
          </div>
          <div className="sm:block hidden py-10 px-2">
            <div className={`flex justify-center items-center gap-x-5`}>
              <div>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard1.leftImg}
                  alt={whyInfoCard1.leftImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard1.leftImgTitle}
                </div>
              </div>
              <img
                src={arrowImg}
                className={`opacity-20 rotate-180`}
                alt="RightArrow"
              />

              <img src="logo_sm.png" alt={company.name} width="136" />

              <img src={arrowImg} alt="LeftArrow" />
              <div>
                <img
                  src={whyInfoCard1.rightImg}
                  alt={whyInfoCard1.rightImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard1.rightImgTitle}
                </div>
              </div>
            </div>
            <div
              className={`text-center text-2xl font-bold`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard1.bottomTitle }}
            ></div>
          </div>
          <div className={`sm:hidden py-10`}>
            <div className={`flex justify-between px-6`}>
              <div className={`w-24`}>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard1.leftImg}
                  alt={whyInfoCard1.leftImgTitle}
                />
                <div className={`text-center text-[14px] font-bold mt-1`}>
                  {whyInfoCard1.leftImgTitle}
                </div>
              </div>
              <div className={`w-24`}>
                <img
                  src={whyInfoCard1.rightImg}
                  alt={whyInfoCard1.rightImgTitle}
                />
                <div className={`text-center text-[14px] font-bold mt-1`}>
                  {whyInfoCard1.rightImgTitle}
                </div>
              </div>
            </div>
            <div className={`flex justify-between`}>
              <div className={`w-20`}></div>
              <img src={arrowImg} alt="RightArrow" className={`opacity-20   rotate-[-135deg]`} width="40" />
              <div></div>
              <img src={arrowImg} alt="LeftArrow" className={`-rotate-45`} width="40" />
              <div className={`w-20`}></div>
            </div>
            <div className={`flex justify-center mt-4`}>
              <img src="logo.png" alt={company.name} width="160" />
            </div>
            <div
              className={`text-center text-xl font-bold mt-4`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard1.bottomTitle }}
            ></div>
          </div>
        </div>
        <div className={`why-info-card shadow-md mb-10`}>
          <div className={`why-info-card-title text-center bg-color-primary text-white font-bold rounded-t-[10px] py-3 md:text-[26px] sm:text-[22px] text-[18px]`}>
              {whyInfoCard2.title}
          </div>
          <div className={`sm:block hidden py-10 px-2`}>
            <div className={`flex justify-center items-center gap-x-5`}>
              <div>
                <img
                  src={whyInfoCard2.leftImg}
                  alt={whyInfoCard2.leftImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard2.leftImgTitle}
                </div>
              </div>
              <img src={arrowImg} alt="RightArrow" className={`rotate-180`} />

              <img src="logo_sm.png" alt={company.name} width="136" />
              
              <img src={arrowImg} className={`opacity-20`} alt="LeftArrow" />
              <div>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard2.rightImg}
                  alt={whyInfoCard2.rightImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard2.rightImgTitle}
                </div>
              </div>
            </div>
            <div
              className={`text-center text-2xl font-bold`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard2.bottomTitle }}
            ></div>
          </div>
          <div className={`sm:hidden py-10`}>
            <div className={`flex justify-between px-6`}>
              <div className={`w-24`}>
                <img
                  src={whyInfoCard2.leftImg}
                  alt={whyInfoCard2.leftImgTitle}
                />
                <div className={`text-center text-[14px] font-bold mt-1`}>
                  {whyInfoCard2.leftImgTitle}
                </div>
              </div>
              <div className={`w-24`}>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard2.rightImg}
                  alt={whyInfoCard2.rightImgTitle}
                />
                <div className={`text-center text-[14px] font-bold mt-1`}>
                  {whyInfoCard2.rightImgTitle}
                </div>
              </div>
            </div>
            <div className={`flex justify-between`}>
              <div className={`w-20`}></div>
              <img src={arrowImg} alt="RightArrow" className={`rotate-[-135deg]`} width="40" />
              <div></div>
              <img src={arrowImg} alt="LeftArrow" className={`opacity-20 -rotate-45`} width="40" />
              <div className={`w-20`}></div>
            </div>
            <div className={`flex justify-center mt-4`}>
              <img src="logo.png" alt={company.name} width="160" />
            </div>
            <div
              className={`text-center text-xl font-bold mt-4`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard2.bottomTitle }}
            ></div>
          </div>
        </div>
        <div
          className={`text-justify text-lg leading-8`}
          dangerouslySetInnerHTML={{ __html: secondComment }}
        ></div>
        <div className={`why-recommend-panel mt-12`}>
          <div className={`text-2xl text-center`}>
            <span className={`border-b-2 border-black font-bold px-4 py-2`}>
              {recommendTitle}
            </span>
          </div>
          {/* <div className={`w-full grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-10`}> */}
          <div className={`w-full mx-auto mt-10`}>
            <Slider {...sliderSettings}>
              {feedbacks.map((feedback, index) => (
                <WhyFeedback
                  key={index}
                  img={feedback.img}
                  comment={feedback.comment}
                  content={feedback.content}
                  bottomTip={feedback.bottomTip}
                ></WhyFeedback>
              ))}
            </Slider>
            {/* {feedbacks.map((feedback, index) => (
              <WhyFeedback
                key={index}
                img={feedback.img}
                comment={feedback.comment}
                content={feedback.content}
                bottomTip={feedback.bottomTip}
              ></WhyFeedback>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
