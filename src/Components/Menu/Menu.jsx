import React from "react";

import { Link } from "react-router-dom";
import { Popover } from "@mui/material";
import "./Menu.css";
import MenuButton from "./MenuButton";
import MenuNav from "./MenuNav";
import UserNav from "./UserNav";

function Menu() {
  const [isOpen, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleButton = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!isOpen);
  };
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setOpen(false);
    });
    return window.removeEventListener("resize", () => {
      window.removeEventListener("resize");
    });
  });

  return (
    <>
      <div className="nav" id="header">
        <div className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src="./assets/logomusee.png" alt="logo" height="70px" />
            </Link>
          </div>

          <MenuNav id="row-nav" />
          <UserNav id="row-user">
            <div className="place-holder hidden-item"></div>
          </UserNav>
        </div>
      </div>
      <MenuButton isOpen={isOpen} toggle={toggleButton} />
      <Popover
        id="simple-popover"
        open={isOpen}
        anchorEl={anchorEl}
        onClose={toggleButton}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="menu-popup scroller"
      >
        <MenuNav id="column-nav" />
        <div id="column-user">
          <UserNav />
        </div>
      </Popover>
    </>
  );
}

export default Menu;
