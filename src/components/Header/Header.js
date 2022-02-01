import React from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">Sakamiti Tube</Link>
      </div>
      <div className={Style.item}>
        <form>
          <input type="text" placeholder="Search"></input>
        </form>
        <button type="submit">Q</button>
      </div>
    </div>
  );
};

export default Header;
