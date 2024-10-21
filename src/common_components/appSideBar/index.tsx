import styles from "./index.module.scss";
import { MyContext } from "@/App.tsx";
import { useContext } from "react";

export const AppSideBar = () => {
  const appSide = useContext(MyContext);

  if (appSide === undefined) {
    throw new Error("useContext must be used within a provider");
  }
  const { appSideShow } = appSide;
  return (
    <div
      className={styles.appSideBar}
      style={{ transform: appSideShow ? "" : "translateX(-300rem)" }}
    ></div>
  );
};
