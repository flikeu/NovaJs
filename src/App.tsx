type MyContextType = {
  themeSetting: boolean;
  appSideShow: boolean;
  setThemeSetting: (themeSetting: boolean) => void;
  setAppSideShow: (appSideShow: boolean) => void;
};
import "./App.scss";

import { Outlet } from "react-router-dom";
import { createContext, useState, useContext } from "react";
export const MyContext = createContext<MyContextType | undefined>(undefined);

import { AppSideBar } from "@/common_components/appSideBar";
import { AppTopBar } from "@/common_components/appTopBar";
import ThemeSetting from "@/common_components/themeSetting";
// import BottomLogo from "@/common_components/bottomLogo";
import { PrimeReactProvider } from "primereact/api";

function App() {
  const [themeSetting, setThemeSetting] = useState(false);
  const [appSideShow, setAppSideShow] = useState(true);

  return (
    <PrimeReactProvider>
      <MyContext.Provider
        value={{ themeSetting, setThemeSetting, appSideShow, setAppSideShow }}
      >
        <MyApp />
      </MyContext.Provider>
    </PrimeReactProvider>
  );
}

function MyApp() {
  const appSide = useContext(MyContext);

  if (appSide === undefined) {
    throw new Error("useContext must be used within a provider");
  }
  const { appSideShow } = appSide;
  return (
    <div className="webPage">
      <AppTopBar />
      <AppSideBar />
      <div
        className="appContext"
        style={{
          marginLeft: appSideShow ? "" : "0",
          padding: appSideShow ? "" : "7rem 2rem 2rem 2rem",
        }}
      >
        <Outlet></Outlet>
        {/*<BottomLogo />*/}
      </div>
      <ThemeSetting />
    </div>
  );
}

export default App;
