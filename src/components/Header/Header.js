import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Style from "./Header.module.scss";
import { Store } from "../../store/index";

const Header = () => {
  const [term, setTerm] = useState("");
  const { globalState, setGlobalState } = useContext(Store);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalState({ type: "SET_TERM", payload: { term } });
    history.push(`/search?query=${term}`);
  };

  useEffect(() => {
    setTerm(globalState.term);
  }, []);

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">Sakamiti Tube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            value={term}
          ></input>
          <button type="submit">SEARCH</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
