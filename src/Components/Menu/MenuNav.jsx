import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function MenuNav(props) {
  return (
    <div className="nav-links" id={props.id}>
      <ul>
        <li className="hidden-item">
          <Link to="/">Page Acceuil</Link>
        </li>
        <li>
          <NavHashLink smooth to="/#A_propos_nous">
            A Propos Nous
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#Monnaies">
            Monnaies
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#Collections">
            Collections
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#Contact">
            Contacter
          </NavHashLink>
        </li>
        <li>
          <Link to="/E_boutique">E-Boutique</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuNav;
