import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentMenuTitle, setCurrentMenuTitle] = useState("");
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Better mobile detection
  const checkIsMobile = () => {
    const isMobile = window.innerWidth <= 991;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    return isMobile || isTouchDevice;
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = checkIsMobile();
      setIsMobileDevice(mobile);
      
      // Close mobile menu when switching to desktop
      if (!mobile && menuActive) {
        setMenuActive(false);
        setActiveSubmenu(null);
        setCurrentMenuTitle("");
      }
    };

    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(prev => !prev);
    setActiveSubmenu(null);
    setCurrentMenuTitle("");
  };

  // Mobile me sirf click events handle karenge
  const handleMobileSubmenuClick = (title, key, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (isMobileDevice) {
      setCurrentMenuTitle(title);
      setActiveSubmenu(activeSubmenu === key ? null : key);
    }
  };

  // Desktop me sirf hover events handle karenge
  const handleDesktopSubmenuMouseEnter = (key) => {
    if (!isMobileDevice) {
      // Clear any pending close timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setActiveSubmenu(key);
    }
  };

  const handleDesktopSubmenuMouseLeave = () => {
    if (!isMobileDevice) {
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null);
      }, 150);
    }
  };

  const handleGoBack = () => {
    setActiveSubmenu(null);
    setCurrentMenuTitle("");
  };

  const handleLinkClick = () => {
    setMenuActive(false);
    setActiveSubmenu(null);
    setCurrentMenuTitle("");
    
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileDevice) {
      document.body.style.overflow = menuActive ? "hidden" : "unset";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuActive, isMobileDevice]);

  const isActiveRoute = (path) => location.pathname === path;

  const isSubmenuActive = (submenuKey) => {
    if (submenuKey === 'corporate') {
      return location.pathname.startsWith('/corporate-overview/');
    }
    return false;
  };

  // Handle outside clicks (desktop only)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isMobileDevice && navRef.current && !navRef.current.contains(e.target)) {
        setActiveSubmenu(null);
        setCurrentMenuTitle("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileDevice]);

  // Auto-close menu on route change
  useEffect(() => {
    handleLinkClick();
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="header" ref={navRef}>
      <div className="container">
        <div className="row v-center">
          {/* Logo */}
          <div className="header-item item-left">
            <div className="logo">
              <a href="https://www.veritasfin.in/" target="_blank" rel="noopener noreferrer">
                <img src="/home/v_logo.png" alt="Company logo" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className={`header-item item-center ${menuActive ? "active" : ""}`}>
            <nav className="menu" aria-label="Main menu">
              <div className="mobile-menu-head">
                <div className={`go-back ${activeSubmenu ? "block" : "hidden"}`} onClick={handleGoBack}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="current-menu-title">{currentMenuTitle || "Menu"}</div>
                <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
              </div>

              <ul className="menu-main">
                <li className={isActiveRoute('/') ? 'active' : ''}>
                  <Link to="/" onClick={handleLinkClick}>Home</Link>
                </li>

                {/* Corporate Overview */}
                <li 
                  className={`menu-item-has-children ${isSubmenuActive('corporate') ? 'active' : ''} ${activeSubmenu === 'corporate' ? 'submenu-open' : ''}`}
                  // Desktop me hover events sirf yahan lagenge
                  {...(!isMobileDevice && {
                    onMouseEnter: () => handleDesktopSubmenuMouseEnter("corporate"),
                    onMouseLeave: handleDesktopSubmenuMouseLeave
                  })}
                >
                  <button 
                    // Mobile me sirf click event
                    onClick={(e) => isMobileDevice ? handleMobileSubmenuClick("Corporate Overview", "corporate", e) : undefined}
                  >
                    Corporate Overview <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <div 
                    className={`sub-menu mega-menu mega-menu-column-2 ${activeSubmenu === "corporate" ? "active" : ""}`}
                    // Desktop me submenu ke liye hover events
                    {...(!isMobileDevice && {
                      onMouseEnter: () => {
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                          hoverTimeoutRef.current = null;
                        }
                      },
                      onMouseLeave: handleDesktopSubmenuMouseLeave
                    })}
                  >
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
                <li 
                  className={`menu-item-has-children ${activeSubmenu === 'reports' ? 'submenu-open' : ''}`}
                  {...(!isMobileDevice && {
                    onMouseEnter: () => handleDesktopSubmenuMouseEnter("reports"),
                    onMouseLeave: handleDesktopSubmenuMouseLeave
                  })}
                >
                  <button 
                    onClick={(e) => isMobileDevice ? handleMobileSubmenuClick("Statutory Reports", "reports", e) : undefined}
                  >
                    Statutory Reports <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <div 
                    className={`sub-menu single-column-menu ${activeSubmenu === "reports" ? "active" : ""}`}
                    {...(!isMobileDevice && {
                      onMouseEnter: () => {
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                          hoverTimeoutRef.current = null;
                        }
                      },
                      onMouseLeave: handleDesktopSubmenuMouseLeave
                    })}
                  >
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
                <li 
                  className={`menu-item-has-children ${activeSubmenu === 'financial' ? 'submenu-open' : ''}`}
                  {...(!isMobileDevice && {
                    onMouseEnter: () => handleDesktopSubmenuMouseEnter("financial"),
                    onMouseLeave: handleDesktopSubmenuMouseLeave
                  })}
                >
                  <button 
                    onClick={(e) => isMobileDevice ? handleMobileSubmenuClick("Financial Statements", "financial", e) : undefined}
                  >
                    Financial Statements <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <div 
                    className={`sub-menu single-column-menu ${activeSubmenu === "financial" ? "active" : ""}`}
                    {...(!isMobileDevice && {
                      onMouseEnter: () => {
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                          hoverTimeoutRef.current = null;
                        }
                      },
                      onMouseLeave: handleDesktopSubmenuMouseLeave
                    })}
                  >
                    <ul>
                      <li><a href="/docs/Independent_Auditor.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Independent Auditor</a></li>
                      <li><a href="/docs/Financial_Statements.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Financial Statements</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Section (Download Button + Mobile Trigger) */}
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