import "./index.scss";
export function GoodsDetail() {
  const paramsString: string = "?param1=value1&param2=value2";
  const searchParams: URLSearchParams = new URLSearchParams(paramsString);
  console.log(searchParams.get("param1"));
  console.log(searchParams.get("param2"));
  return (
    <div className="goodsDetailPage">
      <br />

      <br />
    </div>
  );
}
