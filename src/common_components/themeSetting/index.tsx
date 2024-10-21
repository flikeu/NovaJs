import styles from "./index.module.scss";

import { useContext } from "react";
import { MyContext } from "@/App.tsx";

import { Sidebar } from "primereact/sidebar";

export const ThemeSetting = () => {
  const themeSet = useContext(MyContext);

  if (themeSet === undefined) {
    throw new Error("useContext must be used within a provider");
  }

  const { themeSetting, setThemeSetting } = themeSet;

  return (
    <div className="themeSetting">
      <button
        onClick={() => {
          // dispatch(themeSettingShowAbleTrue());
          setThemeSetting(true);
        }}
        className={styles.button}
      >
        <i
          className="pi pi-cog"
          style={{ fontSize: "1.2rem", color: "white" }}
        />
      </button>
      <Sidebar
        visible={themeSetting}
        position="right"
        onHide={() => setThemeSetting(false)}
      ></Sidebar>
    </div>
  );
};

export default ThemeSetting;
