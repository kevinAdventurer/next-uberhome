import config from '../config/index.json';

const Footer = () => {
  const { footer } = config;
  const { firstLinks, secondLinks, firmSummary, contacts } = footer;

  return (
    <div className={`w-full p-10 flex text-white`} id="footer">
      <div
        className={`w-1/4 text-center text-5xl items-center flex flex-col cursor-pointer`}
      >
        <div>LINEで</div>
        <div className={`-mt-3`}>賃貸</div>
      </div>
      <div className={`w-1/2 flex px-12`}>
        <div className={`w-1/2 flex flex-col gap-y-2`}>
          {firstLinks.map((link, index) => (
            <a key={index} href={link.url} className={`text-sm`}>
              {link.title}
            </a>
          ))}
        </div>
        <div className={`w-1/2 flex flex-col gap-y-2`}>
          {secondLinks.map((link, index) => (
            <a key={index} href={link.url} className={`text-sm`}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className={`w-1/4`}>
        <div className="w-full flex flex-col gap-y-2">
          {firmSummary.map((record, index) => (
            <div key={index} className={`text-sm`}>
              {record.content}
            </div>
          ))}
        </div>
        <div className={`text-sm py-2`}>【お問い合わせ先】</div>
        <div className="w-full flex flex-col gap-y-2">
          {contacts.map((record, index) => (
            <div key={index} className={`text-sm`}>
              {record.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
