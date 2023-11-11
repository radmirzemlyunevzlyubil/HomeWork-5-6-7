import React from "react";
import "./header.scss";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className="header">
        <Link to="/">
          <div className="logo">Movie App</div>
        </Link>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </section>
  );
};

export default Header;
