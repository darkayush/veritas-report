import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentMenuTitle, setCurrentMenuTitle] = useState("");
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
    setActiveSubmenu(null);
    setCurrentMenuTitle("");
  };

  const handleSubmenuOpen = (title, key) => {
    setCurrentMenuTitle(title);
    setActiveSubmenu(activeSubmenu === key ? null : key);
  };

  const handleGoBack = () => {
    setActiveSubmenu(null);
    setCurrentMenuTitle("");
  };

  const handleLinkClick = () => {
    // Auto-close menu and submenu on link click (especially on mobile)
    setMenuActive(false);
    setActiveSubmenu(null);
    setCurrentMenuTitle("");
  };

  // Function to check if current path matches the menu item
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // Function to check if current path is under a submenu
  const isSubmenuActive = (submenuKey) => {
    if (submenuKey === 'corporate') {
      return location.pathname.startsWith('/corporate-overview/');
    }
    return false;
  };

  // Handle clicks outside of navbar to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuActive(false);
        setActiveSubmenu(null);
        setCurrentMenuTitle("");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <header className="header" ref={navRef}>
      <div className="container">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <a href="https://www.veritasfin.in/" target="_blank" rel="noopener noreferrer">
                <img src="/home/v_logo.png" alt="Company logo"
                className="" />
              </a>
            </div>
          </div>

          <div className="header-item item-center">
            <div className={`menu-overlay ${menuActive ? "active" : ""}`} onClick={toggleMenu}></div>
            <nav className={`menu ${menuActive ? "active" : ""}`} aria-label="Main menu">
              <div className="mobile-menu-head sm:hidden">
                <div className={`go-back ${activeSubmenu ? "block" : "hidden"}`} onClick={handleGoBack}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="current-menu-title">{currentMenuTitle}</div>
                <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
              </div>

              <ul className="menu-main">
                <li className={isActiveRoute('/') ? 'active' : ''}>
                  <Link to="/" onClick={handleLinkClick}>Home</Link>
                </li>

                {/* Corporate Overview */}
                <li className={`menu-item-has-children ${isSubmenuActive('corporate') ? 'active' : ''} ${activeSubmenu === 'corporate' ? 'submenu-open' : ''}`}>
                  <button onClick={() => handleSubmenuOpen("Corporate Overview", "corporate")}>
                    Corporate Overview <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <div className={`sub-menu mega-menu mega-menu-column-2 ${activeSubmenu === "corporate" ? "active" : ""}`}>
                    <div className="list-item">
                      <ul>
                        {[
                          "more-about-veritas",
                          "providing-need-based-credit-solutions",
                          "geographic-footprint",
                          "financial-solutions",
                          "business-highlights",
                          "financial-year-categories",
                          "recognitions",
                          "corporate-information",
                          "10-glorious-years",
                          "competitive-advantages",
                          "business-model",
                          "human-assets",
                          "corporate-social-responsibility",
                          "chairmans-message",
                          "managing-director-ceo-message",
                          "board-of-directors",
                          "executive-commitee",
                          "management-team-core-strategy-group",
                        ].map((slug) => (
                          <li key={slug} className={isActiveRoute(`/corporate-overview/${slug}`) ? 'active' : ''}>
                            <Link to={`/corporate-overview/${slug}`} onClick={handleLinkClick}>
                              {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Statutory Reports */}
                <li className={`menu-item-has-children ${activeSubmenu === 'reports' ? 'submenu-open' : ''}`}>
                  <button onClick={() => handleSubmenuOpen("Statutory Reports", "reports")}>
                    Statutory Reports <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <div className={`sub-menu single-column-menu ${activeSubmenu === "reports" ? "active" : ""}`}>
                    <ul>
                      {[
                        ["Board_Report", "Board's Report"],
                        ["Appointment_Renumneration_and_Evaluation_Policy", "Appointment, Remuneration and Evaluation Policy"],
                        ["Corporate_Governance_Report", "Corporate Governance Report"],
                        ["Management_Discussion_Analysis", "Management Discussion and Analysis"],
                        ["Business_Responsibility_Sustainability_Report", "Business Responsibility & Sustainability Report"]
                      ].map(([file, label]) => (
                        <li key={file}>
                          <a href={`/docs/${file}.pdf`} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Financial Statements */}
                <li className={`menu-item-has-children ${activeSubmenu === 'financial' ? 'submenu-open' : ''}`}>
                  <button onClick={() => handleSubmenuOpen("Financial Statements", "financial")}>
                    Financial Statements <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <div className={`sub-menu single-column-menu ${activeSubmenu === "financial" ? "active" : ""}`}>
                    <ul>
                      <li><a href="/docs/Independent_Auditor.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Independent Auditor</a></li>
                      <li><a href="/docs/Financial_Statements.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Financial Statements</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right side Download Button */}
          <div className="header-item item-right">
            <a 
              href="/docs/Veritas_Finance_Private_Limited_AR_2024-25.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-btn"
            >
              <span className="download-text">Download Full Report</span>
              <img src="/home/pdf.svg" alt="PDF" className="pdf-icon" />
            </a>
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