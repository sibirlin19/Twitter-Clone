import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import RecomendationsBar from "../../components/RecomendationsBar";
import styles from "./LayOut.module.scss";

const LayOut = () => {
  return (
    <div className={styles["layout-container"]}>
      <div>
        <SideBar />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <RecomendationsBar />
      </div>
    </div>
  );
};

export default LayOut;
