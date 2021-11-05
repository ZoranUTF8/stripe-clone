import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubemenu, closeSubmenu } = useGlobalContext();

  //? open submenu
  const displaySubmenu = (evt) => {
    const page = evt.target.textContent;
    //? get hover location
    const tempBtn = evt.target.getBoundingClientRect();
    //? get button middle location
    const center = (tempBtn.left + tempBtn.right) / 2;
    //? get bottom so we can lift the submenu 3 px up
    const bottom = tempBtn.bottom - 3;
    //? send the location to the context page
    openSubemenu(page, { center, bottom });
  };
  //? close subemenu
  const handleCloseSubmenu = (evt) => {
    if (!evt.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <>
      <nav className="nav" onMouseOver={handleCloseSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="stripe image" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
