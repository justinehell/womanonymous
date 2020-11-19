import React from "react";
import "../App.css";

function Burger(props) {
  const handleLogOut = () => {
    const ededfe = props.isHidden ? props.handleHidden : "";
    props.setIsLoggedIn(false);
    return ededfe;
  };

  return (
    <div className="header-layout">
      <div
        id="burger"
        className={props.isHidden ? "hidden" : ""}
        onClick={props.handleHidden}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="menu" className={props.isHidden ? "" : "hidden"}>
        <ul className="menu-list">
          <li onClick={props.isHidden ? props.handleHidden : ""}>
            <a href="#" title="cycle">
              Cycle
            </a>
          </li>
          <li onClick={props.isHidden ? props.handleHidden : ""}>
            <a href="#" title="infos">
              Blog
            </a>
          </li>
          <li onClick={handleLogOut}>
            <a href="#" title="log">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Burger;
