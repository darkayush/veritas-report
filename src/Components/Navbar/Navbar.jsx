import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState("");
  const [subMenu, setSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const showSubMenu = (hasChildren) => {
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenu(subMenu);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    setCurrentMenuTitle(menuTitle);
    setSubMenuActive(true);
  };

  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu.classList.remove("active");
      }, 300);
      setCurrentMenuTitle("");
      setSubMenuActive(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuActive) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuActive]);

  return (
    <header className="header">
      <div className="container">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <Link to="/"><img src="./home/v_logo.png" alt="companylogo" /></Link>
            </div>
          </div>

          {/* Menu Start */}
          <div className="header-item item-center">
            <div className={`menu-overlay ${menuActive ? "active" : ""}`} onClick={toggleMenu}></div>
            <nav className={`menu ${menuActive ? "active" : ""}`}>
              <div className="mobile-menu-head">
                <div className="go-back" onClick={hideSubMenu}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="current-menu-title">{currentMenuTitle}</div>
                <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
              </div>
              <ul
                className="menu-main flex gap-6" // Added gap between items
                onClick={(e) => {
                  if (!menuActive) return;
                  if (e.target.closest(".menu-item-has-children")) {
                    showSubMenu(e.target.closest(".menu-item-has-children"));
                  }
                }}
              >
                <li><Link to="/">Home</Link></li>

                <li className="menu-item-has-children">
                  <Link to="#">Corporate Overview <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu mega-menu mega-menu-column-2"> {/* Changed to 2 columns */}
                    <div className="list-item">
                      <ul>
                        <li><Link to="/">More About Veritas</Link></li>
                        <li><Link to="/">Providing Need Based Credit Solutions</Link></li>
                        <li><Link to="/">Geographic Footprint</Link></li>
                        <li><Link to="/">Financial Solutions</Link></li>
                        <li><Link to="/">Business Highlights</Link></li>
                        <li><Link to="/">MFinancial Year/ Categories</Link></li>
                        <li><Link to="/">Recognitions</Link></li>
                        <li><Link to="/">Corporate Information</Link></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <ul>
                        <li><Link to="/">Competitive Advantages</Link></li>
                        <li><Link to="/">Business Model</Link></li>
                        <li><Link to="/">Human Assets</Link></li>
                        <li><Link to="/">Corporate Social Responsibility (CSR)</Link></li>
                        <li><Link to="/">Chairman’s Message</Link></li>
                        <li><Link to="/">Managing Director and CEO’s Message</Link></li>
                        <li><Link to="/">Board of Directors</Link></li>
                        <li><Link to="/">Management Team and Core Strategy Group</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="menu-item-has-children">
                  <Link to="#">Statutory Reports <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="./" target="_blank">Board’s Report</Link></li>
                      <li><Link to="./" target="_blank">Appointment, Remuneration and Evaluation Policy</Link></li>
                      <li><Link to="./" target="_blank">Corporate Governance Report</Link></li>
                      <li><Link to="./" target="_blank">Management Discussion and Analysis</Link></li>
                      <li><Link to="./" target="_blank">Business Responsibility & Sustainability Report</Link></li>
                    </ul>
                  </div>
                </li>

                <li className="menu-item-has-children">
                  <Link to="#">Financial Statements <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="./" target="_blank">Independent Auditor’s Report</Link></li>
                      <li><Link to="./" target="_blank">Financial Statements</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Icons */}
          <div className="header-item item-right">
            <Link to="./docs/Veritas Finance Private Limited AR 2024-25.pdf" target="_blank">
              <img src="./home/pdf.svg" alt="" className="w-[50px]" />
            </Link>
            <div className="mobile-menu-trigger" onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
