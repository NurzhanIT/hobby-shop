import { useNavigate } from "react-router-dom";
import hobbyshop from "../assets/hobbyshop.png";

const Header = () => {
  let nav = useNavigate();
  return (
    <div className="header">
      <div className="header_inner _container">
        <div className="shop_logo">
          <img src={hobbyshop} alt="" />
        </div>
        <div className="header_info">
          <div onClick={() => nav("about-us")} className="about_us">
            О магазине
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
