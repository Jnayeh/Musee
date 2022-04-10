import { LoginRounded, PersonAddAltRounded } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="nav" id="header">
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src="./assets/logomusee.png" alt="logo" height="70px" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/A_propos_nous">A Propos Nous</Link>
            </li>
            <li>
              <Link to="/Collections">Collections</Link>
            </li>
            <li>
              <Link to="/Monnaies">Monnaies</Link>
            </li>
            <li>
              <Link to="/Cadeaux">Cadeaux</Link>
            </li>
            <li>
              <Link to="/E_boutique">E-Boutique</Link>
            </li>
          </ul>
        </div>
        <div className="nav-user">
          <button className="auth-btn login-btn">
            <span>Connexion</span>
            <i className="ico">
              <LoginRounded />
            </i>
          </button>

          <button className="auth-btn signup-btn">
            <span>S'inscrire</span>
            <i className="ico">
              <PersonAddAltRounded />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
