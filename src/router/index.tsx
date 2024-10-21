import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App.tsx";
import { Login } from "@/pages/login";
import { Register } from "@/pages/register";
import { Index } from "@/pages/index";
import { Goods } from "@/pages/goods";
import { GoodsDetail } from "@/pages/goods/goodsDetail";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route element={<Navigate to={"/index"} />}></Route>
          <Route path="index" element={<Index />}></Route>
          <Route path="goods" element={<Goods />}></Route>
          <Route path="goods/:params?" element={<GoodsDetail />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
