import styles from "./index.module.scss";
import { MyContext } from "@/App.tsx";
import { useContext } from "react";

export const AppTopBar = () => {
  const appSide = useContext(MyContext);

  if (appSide === undefined) {
    throw new Error("useContext must be used within a provider");
  }
  const { appSideShow, setAppSideShow } = appSide;

  const changeAppSideBar = () => {
    if (appSideShow) {
      console.log("变false");
      setAppSideShow(false);
    } else {
      console.log("变true");
      setAppSideShow(true);
    }
  };
  return (
    <div className={styles.appTopBarShow}>
      <button onClick={changeAppSideBar} className={styles.button}>
        {appSideShow ? "true" : "false"}
      </button>
    </div>
  );
};

export default AppTopBar;
