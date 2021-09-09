import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={"nav " + (visible && "nav__black")}>
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          className="nav__logo"
          alt=""
        ></img>
        <img
          onClick={() => history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="nav__avatar"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
