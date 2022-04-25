import React from "react";
import {
  AddShoppingCart,
  LoginRounded,
  LogoutRounded,
  PersonAddAltRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import "./Menu.css";
import AuthContext from "Services/AuthContext";
function UserNav({ id, children }) {
  const navigate = useNavigate();

  const { user, logOut } = React.useContext(AuthContext);
  return (
    <div className="nav-user" id={id}>
      {user ? (
        <>
          <IconButton
            style={{ height: "46px", width: "46px", margin: "auto" }}
            aria-label="Panier"
          >
            <AddShoppingCart />
          </IconButton>
          <button
            className="auth-btn login-btn"
            onClick={() => {
              logOut();
            }}
          >
            <span>Déconnexion</span>
            <i className="ico">
              <LogoutRounded />
            </i>
          </button>
        </>
      ) : (
        <>
          <button
            className="auth-btn login-btn"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            <span>Connexion</span>
            <i className="ico">
              <LoginRounded />
            </i>
          </button>

          <button
            className="auth-btn signup-btn"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            <span>S'inscrire</span>
            <i className="ico">
              <PersonAddAltRounded />
            </i>
          </button>
        </>
      )}
      {children}
    </div>
  );
}

export default UserNav;
