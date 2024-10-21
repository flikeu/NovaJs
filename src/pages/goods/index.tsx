import "./index.scss";
import { useNavigate } from "react-router-dom";
export function Goods() {
  const navigate = useNavigate();
  const goDetailPage = () => {
    navigate("/goods/98");
  };
  const goDetailPage2 = () => {
    navigate("/goods/userId=11--productId=20");
  };
  return (
    <div className="goodsPage">
      <button>我是GoodsPage</button>
      <br />
      <button onClick={goDetailPage}>去详情页面---id</button>
      <br />
      <button onClick={goDetailPage2}>
        去详情页面---:category--:productId
      </button>
    </div>
  );
}
