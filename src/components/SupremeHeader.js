import insta from "../assets/igs.png";
import face from "../assets/fbs.png";
import oks from "../assets/oks.png";
import vk from "../assets/vksi.png";
const SupremeHeader = () => {
  return (
    <div className="supremeheader">
      <div className="supremeheader_inner _container">
        <div className="social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="insta"
            rel="noreferrer"
          >
            <img src={insta} alt="insta" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="facebook"
            rel="noreferrer"
          >
            <img src={face} alt="facebook" />
          </a>
          <a
            href="https://ok.ru/"
            target="_blank"
            rel="noreferrer"
            className="oks"
          >
            <img src={oks} alt="одноклассники" />
          </a>
          <a
            href="https://vk.com/"
            target="_blank"
            rel="noreferrer"
            className="vk"
          >
            <img src={vk} alt="vk" />
          </a>
        </div>
        <div className="abilities">
          <div className="user_page">Личный кабинет</div>
        </div>
      </div>
    </div>
  );
};
export default SupremeHeader;
