import styles from "./index.module.scss";
import { MyContext } from "@/App.tsx";
import { useContext } from "react";
import classnames from "classnames";
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
      <i
        className={classnames("pi pi-align-left", styles.pi_caret_right)}
        onClick={changeAppSideBar}
      ></i>
    </div>
  );
};

export default AppTopBar;
