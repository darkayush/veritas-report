import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  return (
    <header className="header">
      <div className="container">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <Link to="/"><img src="./home/v_logo.png " alt="companylogo"/></Link>
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
              <ul className="menu-main" onClick={(e) => {
                if (!menuActive) return;
                if (e.target.closest(".menu-item-has-children")) {
                  showSubMenu(e.target.closest(".menu-item-has-children"));
                }
              }}>
                <li><Link to="/">Home</Link></li>
                {/* <li className="menu-item-has-children">
                  <Link to="#">New <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item text-center">
                      <Link to="#">
                        <img src="https://images.unsplash.com/photo-1571380401583-72ca84994796" alt="Fashion" />
                        <h4 className="title">Fashion</h4>
                      </Link>
                    </div>
                    <div className="list-item text-center">
                      <Link to="#">
                        <img src="https://images.unsplash.com/photo-1571380401583-72ca84994796" alt="Electronics" />
                        <h4 className="title">Electronics</h4>
                      </Link>
                    </div>
                    <div className="list-item text-center">
                      <Link to="#">
                        <img src="https://images.unsplash.com/photo-1571380401583-72ca84994796" alt="Mobiles" />
                        <h4 className="title">Mobiles</h4>
                      </Link>
                    </div>
                    <div className="list-item text-center">
                      <Link to="#">
                        <img src="https://images.unsplash.com/photo-1571380401583-72ca84994796" alt="Appliances" />
                        <h4 className="title">Appliances</h4>
                      </Link>
                    </div>
                  </div>
                </li> */}
                <li className="menu-item-has-children">
                  <Link to="#">Corporate Overview <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                      {/* <h4 className="title">Men's Fashion</h4> */}
                      <ul>
                        <li><Link to="/at-a-glance">More About Veritas</Link></li>
                        <li><Link to="/unlock-2.0">Unlock 2.0</Link></li>
                        <li><Link to="/hinduja-group">Hinduja Group</Link></li>
                        <li><Link to="/gulf-oil-international">Gulf Oil International</Link></li>
                        <li><Link to="/chaimans-message">Chairman’s Message</Link></li>
                        <li><Link to="/md-and-ceos-message">MD and CEO’s Message</Link></li>
                        <li><Link to="/corporate-identity">Corporate Identity</Link></li>
                        <li><Link to="/key-performance-indicators">Key Performance Indicators</Link></li>
                      </ul>
                      <h4 className="title">Accelerate</h4>
                      <ul>
                        <li><Link to="/market-overview">Market Overview</Link></li>
                        <li><Link to="/strategic-pathways-to-growth-opportunities">Strategic Pathways to Growth Opportunities</Link></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Premiumize</h4>
                      <ul>
                        <li><Link to="/superior-products-and-advanced-technology">Superior Products and Advanced Technology</Link></li>
                        <li><Link to="/enhancing-value">Enhancing Value: Future-focused Product Innovations</Link></li>
                      </ul>
                      <h4 className="title">Transform</h4>
                      <ul>
                        <li><Link to="/digital-transformation">Digital Transformation</Link></li>
                        <li><Link to="/e-mobility-transformation">e-Mobility Transformation</Link></li>
                        <li><Link to="/marketing-initiatives">Marketing Initiatives</Link></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Creating Shared Value for our Stakeholders</h4>
                      <ul>
                        <li><Link to="/customers">Customers</Link></li>
                        <li><Link to="/our-people">Our People</Link></li>
                        <li><Link to="/communities">Communities</Link></li>
                        <li><Link to="/sustainability">Sustainability</Link></li>
                        <li><Link to="/strategic-partnerships">Strategic Partnerships</Link></li>
                        <li><Link to="/board-of-directors">Board of Directors</Link></li>
                        <li><Link to="/leadership-team">Leadership Team</Link></li>
                        <li><Link to="/awards-and-recognition">Awards and Recognition</Link></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <img src="./home/pdf2.png" alt="Chair" />
                      <div className="website-link">
                      <p className="website">Website: <Link className="font-semibold" to="https://www.india.gulfoilltd.com" target="_blank">www.india.gulfoilltd.com</Link></p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Statutory Reports <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="./docs/MDA.pdf" target="_blank">Management Discussion and Analysis</Link></li>
                      <li><Link to="./docs/BR.pdf" target="_blank">Board’s Report</Link></li>
                      <li><Link to="./docs/CG.pdf" target="_blank">Corporate Governance Report</Link></li>
                      <li><Link to="./docs/BRSR.pdf" target="_blank">Business Responsibility & Sustainability Report</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Financial Statements <FontAwesomeIcon icon={faAngleDown} /></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="./docs/Standalone.pdf" target="_blank">Standalone</Link></li>
                      <li><Link to="./docs/Consolidated.pdf" target="_blank">Consolidated</Link></li>
                      <li><Link to="./docs/Notice.pdf" target="_blank">Notice of the 16  Annual General Meeting</Link></li>
                    </ul>
                  </div>
                </li>
                {/* <li><Link to="#">Contact</Link></li> */}
              </ul>
            </nav>
          </div>
          {/* Menu End */}
          <div className="header-item item-right">
            <Link to="./docs/Veritas Finance Private Limited AR 2024-25.pdf" target="_blank"><img src="./home/pdf.png" alt="" className="w-[50px]" /></Link>
            {/* <Link to="#"><FontAwesomeIcon icon={faSearch} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faHeart} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faShoppingCart} /></Link> */}
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
