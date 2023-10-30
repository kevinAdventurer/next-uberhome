import { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import config from '../config/index.json';

const SendRoom = () => {
  const { sendRoom } = config;
  const {
    title,
    subtitle,
    leftSmallTitle,
    leftComment,
    leftBottomTip,
    rightGuideImg,
    lineTab,
  } = sendRoom;
  const { guides } = lineTab;

  const [property1, setProperty1] = useState('');
  const [property2, setProperty2] = useState('');
  const [property3, setProperty3] = useState('');
  // const [bmedsmd, setBmedsmd] = useState('いますぐ');
  const [errors, setErrors] = useState({
    property1: '',
    property2: '',
    property3: '',
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = { property1: '',property2: '',property3: '', };
    if (!property1) {
      validationErrors.property1 = '物件1は必須';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', { property1 });
      // You can perform additional logic here, such as making an API call
    }
  };

  return (
    <div id="sendroom">
      <hr className={`border-3 h-`} />
      <div
        className={`sendroom-container mx-auto px-5 py-12 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full text-black`}
      >
        <div className={`w-full text-center`}>
          <span
            className={`border-b-2 border-black font-bold text-2xl px-3 py-2`}
          >
            {title}
          </span>
        </div>
        <div className={`text-sm text-center mt-8`}>{subtitle}</div>
        <div className={'phone-guide-panel w-full flex mt-10'}>
          <div className={`w-1/2 px-5`}>
            <div
              className={`phone-guide-left-title w-full py-2 xl:text-xl lg:text-lg text-center text-white`}
            >
              {leftSmallTitle}
            </div>
            <div
              className={`phone-guide-left-comment w-full p-5 mt-2 text-lg text-justify`}
            >
              <div>{leftComment}</div>
              <div className={`font-bold text-md`}>{leftBottomTip}</div>
            </div>
          </div>
          <div className={`w-1/2 px-5 items-center flex`}>
            <img src={rightGuideImg} alt="phoneURL" className={`w-full`} />
          </div>
        </div>
        <div className={`mt-12 py-12`}>
          <Tabs
            className={`react-tabs sendroom-tabs`}
            selectedTabClassName={`active`}
          >
            <TabList className={`react-tabs__tab-list flex`}>
              <Tab
                className={`react-tabs__tab sendroom-tab text-center text-2xl font-bold py-2 w-1/2`}
              >
                メールで送る
              </Tab>
              <Tab
                className={`react-tabs__tab sendroom-tab text-center text-2xl font-bold py-2 w-1/2`}
              >
                LINEで送る
              </Tab>
            </TabList>
            <TabPanel
              className={`sendroom-tab-panel react-tabs__tab-panel p-5`}
            >
              <form
                onSubmit={handleSubmit}
                className={`sendroom-form px-10 py-10`}
              >
                <div>
                  <div className={`text-xl font-bold`}>気になる物件を入力</div>
                  <div className={`mt-5`}>
                    <label
                      htmlFor="property1"
                      className={`sendroom-form-label font-bold block required`}
                    >
                      物件1
                    </label>
                    <input
                      type="text"
                      id="property1"
                      value={property1}
                      className={`sendroom-form-input`}
                      placeholder={`URL を入力してください`}
                      onChange={(e) => setProperty1(e.target.value)}
                    />
                    {errors.property1 && (
                      <span className="text-red-500">{errors.property1}</span>
                    )}
                  </div>
                  <div className={`mt-5`}>
                    <label
                      htmlFor="property2"
                      className={`sendroom-form-label font-bold block`}
                    >
                      物件2
                    </label>
                    <input
                      type="text"
                      id="property2"
                      value={property2}
                      className={`sendroom-form-input`}
                      placeholder={`URL を入力してください`}
                      onChange={(e) => setProperty2(e.target.value)}
                    />
                    {errors.property2 && (
                      <span className="text-red-500">{errors.property2}</span>
                    )}
                  </div>
                  <div className={`mt-5`}>
                    <label
                      htmlFor="property3"
                      className={`sendroom-form-label font-bold block`}
                    >
                      物件3
                    </label>
                    <input
                      type="text"
                      id="property3"
                      value={property3}
                      className={`sendroom-form-input`}
                      placeholder={`URL を入力してください`}
                      onChange={(e) => setProperty3(e.target.value)}
                    />
                    {errors.property3 && (
                      <span className="text-red-500">{errors.property3}</span>
                    )}
                  </div>
                </div>
                <div>
                  <div className={`text-xl font-bold mt-12`}>
                    入居希望日を入力
                  </div>
                  <div className={`flex justify-start w-full mt-5`}>
                    <label className={`flex items-center cursor-pointer w-1/3`}>
                      <input
                        type="radio"
                        value="いますぐ"
                        name="bmedsmd"
                        // onChange={(e) => setBmedsmd(e.target.value)}
                      />
                      <span className={`text-md ml-5`}>いますぐ</span>
                    </label>
                    <label className={`flex items-center cursor-pointer w-1/3`}>
                      <input
                        type="radio"
                        value="1ヶ月以内"
                        name="bmedsmd"
                        // onChange={(e) => setBmedsmd(e.target.value)}
                      />
                      <span className={`text-md ml-5`}>1ヶ月以内</span>
                    </label>
                    <label className={`flex items-center cursor-pointer w-1/3`}>
                      <input
                        type="radio"
                        value="2ヶ月以内"
                        name="bmedsmd"
                        // onChange={(e) => setBmedsmd(e.target.value)}
                      />
                      <span className={`text-md ml-5`}>2ヶ月以内</span>
                    </label>
                  </div>
                  <div className={`text-sm text-gray-500 py-3`}>
                    それ以降の方は期日が近づきましたらお送りください。
                  </div>
                </div>
                <div>
                  <div className={`text-xl font-bold mt-12`}>連絡先を入力</div>
                  <div className={`mt-5`}>
                    <label
                      htmlFor="property1"
                      className={`sendroom-form-label font-bold block required`}
                    >
                      お名前
                    </label>
                    <input
                      type="text"
                      id="property1"
                      value={property1}
                      className={`sendroom-form-input`}
                      placeholder={`例）ウーバー 太郎`}
                      onChange={(e) => setProperty1(e.target.value)}
                    />
                    {errors.property1 && (
                      <span className="text-red-500">{errors.property1}</span>
                    )}
                  </div>
                  <div className={`mt-5`}>
                    <label
                      htmlFor="property2"
                      className={`sendroom-form-label font-bold block`}
                    >
                      電話番号
                    </label>
                    <input
                      type="text"
                      id="property2"
                      value={property2}
                      className={`sendroom-form-input`}
                      placeholder={`例）08012345678`}
                      onChange={(e) => setProperty2(e.target.value)}
                    />
                    {errors.property2 && (
                      <span className="text-red-500">{errors.property2}</span>
                    )}
                  </div>
                  <div className={`mt-5`}>
                    <label
                      htmlFor="property3"
                      className={`sendroom-form-label font-bold block required`}
                    >
                      メールアドレス
                    </label>
                    <input
                      type="text"
                      id="property3"
                      value={property3}
                      className={`sendroom-form-input`}
                      placeholder={`例）sample@uberhome.jp`}
                      onChange={(e) => setProperty3(e.target.value)}
                    />
                    {errors.property3 && (
                      <span className="text-red-500">{errors.property3}</span>
                    )}
                  </div>
                  <div className={`text-sm text-gray-500 py-3`}>
                    メール受信制限をされている方はsupport@uberhome.infoからのメール受信を許可してください。
                    <br />
                    Gmail等フリーのWEBメールをご利用の場合、「迷惑メールフォルダ」等、受信フォルダとは異なるフォルダに自動的に振り分けられてしまう可能性がございますので、ご注意ください。
                  </div>
                  <div className={`mt-5`}>
                    <label
                      htmlFor="property3"
                      className={`sendroom-form-label font-bold block required`}
                    >
                      お問い合わせ内容（ある場合）
                    </label>
                    <textarea
                      id="property3"
                      value={property3}
                      className={`sendroom-form-textarea mt-3`}
                      rows={4}
                      placeholder={`例）空いていれば申込みしたいです。`}
                      onChange={(e) => setProperty3(e.target.value)}
                    ></textarea>
                    {errors.property3 && (
                      <span className="text-red-500">{errors.property3}</span>
                    )}
                  </div>
                </div>
                <div className={`justify-center flex py-5`}>
                  <label className={`flex items-center cursor-pointer`}>
                    <input type="checkbox" value="2ヶ月以内" />
                    <span className={`text-md ml-5`}>
                      利用規約とプライバシーポリシーに同意する
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className={`btn-sendroom-form-submit shadow-md text-2xl font-bold w-full text-white py-3`}
                >
                  送る
                </button>
              </form>
            </TabPanel>
            <TabPanel
              className={`sendroom-tab-panel react-tabs__tab-panel p-5`}
            >
              <div className={`p-10`}>
                <div className={`flex w-full`}>
                  <div className={`lg:w-3/5 w-1/2`}>
                    <div
                      className={`lg:text-2xl text-xl text-justify`}
                      dangerouslySetInnerHTML={{
                        __html: lineTab.leftTopComment,
                      }}
                    ></div>
                    <div
                      className={`lg:text-2xl text-xl text-justify font-bold mt-5`}
                      dangerouslySetInnerHTML={{
                        __html: lineTab.leftBottomComment,
                      }}
                    ></div>
                  </div>
                  <div className={`pl-10 lg:w-2/5 w-1/2`}>
                    <img
                      className={`w-full`}
                      src={lineTab.rightImg}
                      alt="LineChat"
                    />
                  </div>
                </div>
                <div className={`flex items-center mt-5`}>
                  <img src={lineTab.lineBtnImg} alt="LINEBTN" />
                  <span className={`text-2xl font-bold ml-8`}>
                    {lineTab.lineBtnRightComment}
                  </span>
                </div>
                <div className={`line-guide-panel w-full px-12 py-8 mt-10`}>
                  <div className={`text-center font-bold text-xl`}>
                    {guides.title}
                  </div>
                  <div className={`flex-row gap-y-5 mt-5`}>
                    {guides.contents.map((content, index) => (
                      <div
                        key={index}
                        className={`text-lg leading-10 text-justify`}
                      >
                        {index + 1}. {content.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SendRoom;
