import { createRoot } from "react-dom/client";
import "./main.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Provider } from "react-redux";
import store from "./store";
//类似vue的路由模式
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router";

import { Router } from "./router";

createRoot(document.getElementById("root")!).render(
  //类似vue的路由模式
  // <RouterProvider router={router}></RouterProvider>,
  <Provider store={store}>
    <Router />
  </Provider>,
);
