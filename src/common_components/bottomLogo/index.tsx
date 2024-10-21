import "./index.scss";
import logo_dark from "@/assets/logo-dark.svg";
export const BottomLogo = () => {
  return (
    <div className="bottomLogo">
      <img src={logo_dark} alt="" />
      <p>by flikeu</p>
    </div>
  );
};

export default BottomLogo;
