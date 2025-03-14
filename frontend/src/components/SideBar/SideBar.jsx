import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

import { House, Bell, User, Boxes, LogOut } from "lucide-react";

const SideBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["logo"]}>
        <Boxes color="white" width={50} height={50} />
        <div className={styles["links-container"]}>
          <div>
            <House />
            <Link to={"/"}>Home</Link>
          </div>

          <div>
            <Bell />
            <Link>Notifications </Link>
          </div>

          <div>
            <User />
            <Link>Profile</Link>
          </div>
        </div>
      </div>

      <div className={styles["user-container"]}>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            alt="profile image"
            width={30}
            height={30}
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div className={styles["nick-container"]}>
          <span style={{ color: "white", fontWeight: "bold" }}>Name</span>
          <span>@username</span>
        </div>
        <div>
          <LogOut />
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
