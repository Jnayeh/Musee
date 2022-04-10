import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
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
          <IconButton className="hidden-icon">
            <CloseRounded />
          </IconButton>
          <button className="auth-btn">
            <span>Connexion</span>
            <i className="ico">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                aria-hidden="true"
                viewBox=" 0 0 24 24 "
                data-testid="LoginRoundedIcon"
              >
                <path d="M10.3 7.7c-0.39.39-0.39 1.01 0 1.4l1.9 1.9H3c-0.55 0-1 0.45-1 1s.45 1 1 1h9.2l-1.9 1.9c-0.39.39-0.39 1.01 0 1.4.39.39 1.01.39 1.4 0l3.59-3.59c.39-0.39.39-1.02 0-1.41L11.7 7.7a.9839.9839 0 0 0-1.4 0zM20 19h-7c-0.55 0-1 0.45-1 1s.45 1 1 1h7c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2h-7c-0.55 0-1 0.45-1 1s.45 1 1 1h7v14z"></path>
              </svg>
            </i>
          </button>

          <button className="auth-btn signup-btn">
            <span>S'inscrire</span>
            <i className="ico">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonAddAltRoundedIcon"
              >
                <path d="M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm11-3V7c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2z"></path>
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
