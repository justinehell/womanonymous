import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Burger(props) {
  const handleLogOut = () => {
    const ededfe = props.isHidden ? props.handleHidden : "";
    props.setIsLoggedIn(false);
    return ededfe;
  };

  return (
    <div className="header-layout">
      <div className="display-header">
        <div
          id="burger"
          className={props.isHidden ? "hidden" : ""}
          onClick={props.handleHidden}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h1>Baby Stop</h1>
        </div>
      </div>
      <div id="menu" className={props.isHidden ? "" : "hidden"}>
        <ul className="menu-list">
          <li onClick={props.isHidden ? props.handleHidden : null}>
            <Link to="/" title="cycle">
              Home
            </Link>
          </li>
          <li onClick={props.isHidden ? props.handleHidden : null}>
            <Link to="/blog" title="infos">
              Blog
            </Link>
          </li>
          <li onClick={handleLogOut}>
            <a href="/" title="log">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Burger;
