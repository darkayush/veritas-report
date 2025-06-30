// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const [subMenuActive, setSubMenuActive] = useState(false);
//   const [currentMenuTitle, setCurrentMenuTitle] = useState("");
//   const [subMenu, setSubMenu] = useState(null);
// const [submenuKey, setSubmenuKey] = useState(null);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   const showSubMenu = (hasChildren) => {
//     const subMenu = hasChildren.querySelector(".sub-menu");
//     setSubMenu(subMenu);
//     subMenu.classList.add("active");
//     subMenu.style.animation = "slideLeft 0.5s ease forwards";
//     const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
//     setCurrentMenuTitle(menuTitle);
//     setSubMenuActive(true);
//   };

//   const hideSubMenu = () => {
//   if (subMenu) {
//     subMenu.style.animation = "slideRight 0.5s ease forwards";

//     setTimeout(() => {
//       subMenu.classList.remove("active");
//       setSubMenu(null); // Clear submenu reference
//     }, 300);

//     setCurrentMenuTitle("");
//     setSubMenuActive(false);
//   }
// };


//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 991 && menuActive) {
//         toggleMenu();
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [menuActive]);

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="row v-center">
//           <div className="header-item item-left">
//             <div className="logo">
//               <Link to="/"><img src="/home/v_logo.png" alt="companylogo" /></Link>
//             </div>
//           </div>

//           {/* Menu Start */}
//           <div className="header-item item-center">
//             <div className={`menu-overlay ${menuActive ? "active" : ""}`} onClick={toggleMenu}></div>
//             <nav className={`menu ${menuActive ? "active" : ""}`}>
//               <div className="mobile-menu-head">
//                 <div className="go-back block sm:hidden" onClick={hideSubMenu}>
//                   <FontAwesomeIcon icon={faAngleLeft} />
//                 </div>
//                 <div className="current-menu-title">{currentMenuTitle}</div>
//                 <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
//               </div>
//               <ul
//   className="menu-main flex flex-col sm:flex-row gap-4 sm:gap-6"
//   onClick={(e) => {
//     if (!menuActive) return;

//     const target = e.target.closest(".menu-item-has-children");

//     if (target && !e.target.closest(".go-back")) {
//       e.preventDefault(); // prevent default anchor
//       showSubMenu(target);
//     }
//   }}
// >

//                 <li><Link to="/">Home</Link></li>

//                 <li className="menu-item-has-children">
//   <Link to="#">Corporate Overview <FontAwesomeIcon icon={faAngleDown} /></Link>
//   <div className="sub-menu mega-menu mega-menu-column-2"> {/* Changed to 2 columns */}
//     <div className="list-item">
//       <ul>
//         <li><Link to="/corporate-overview/more-about-veritas">More About Veritas</Link></li>
//         <li><Link to="/corporate-overview/providing-need-based-credit-solutions">Providing Need Based Credit Solutions</Link></li>
//         <li><Link to="/corporate-overview/geographic-footprint">Geographic Footprint</Link></li>
//         <li><Link to="/corporate-overview/financial-solutions">Financial Solutions</Link></li>
//         <li><Link to="/corporate-overview/business-highlights">Business Highlights</Link></li>
//         <li><Link to="/corporate-overview/financial-year-categories">Financial Year/ Categories</Link></li>
//         <li><Link to="/corporate-overview/recognitions">Recognitions</Link></li>
//         <li><Link to="/corporate-overview/corporate-information">Corporate Information</Link></li>
//        <li><Link to="/corporate-overview/competitive-advantages">Competititve Advantages</Link></li>
      
    
   
       
//         <li><Link to="/corporate-overview/business-model">Business Model</Link></li>
//         <li><Link to="/corporate-overview/human-assets">Human Assets</Link></li>
//         <li><Link to="/corporate-overview/corporate-social-responsibility">Corporate Social Responsibility (CSR)</Link></li>
//         <li><Link to="/corporate-overview/chairmans-message">Chairman’s Message</Link></li>
//         <li><Link to="/corporate-overview/managing-director-ceo-message">Managing Director and CEO’s Message</Link></li>
//         <li><Link to="/corporate-overview/board-of-directors">Board of Directors</Link></li>
//         <li><Link to="/corporate-overview/executive-commitee">Executive Committee</Link></li>
//         <li><Link to="/corporate-overview/management-team-core-strategy-group">Management Team and Core Strategy Group</Link></li>
//          <li><Link to="/corporate-overview/life-at-veritas">Life at Veritas</Link></li>
//       </ul>
//     </div>
//   </div>
// </li>


//                <li className="menu-item-has-children">
//   <a href="#">Statutory Reports <FontAwesomeIcon icon={faAngleDown} /></a>
//   <div className="sub-menu single-column-menu">
//     <ul>
//       <li><a href="/docs/Board_Report.pdf" target="_blank" rel="noopener noreferrer">Board’s Report</a></li>
//       <li><a href="/docs/Appointment_Renumneration_and_Evaluation_Policy.pdf" target="_blank" rel="noopener noreferrer">Appointment, Remuneration and Evaluation Policy</a></li>
//       <li><a href="/docs/Corporate_Governance_Report.pdf" target="_blank" rel="noopener noreferrer">Corporate Governance Report</a></li>
//       <li><a href="/docs/Management_Discussion_Analysis.pdf" target="_blank" rel="noopener noreferrer">Management Discussion and Analysis</a></li>
//       <li><a href="/docs/Business_Responsibility_Sustainability_Report.pdf" target="_blank" rel="noopener noreferrer">Business Responsibility & Sustainability Report</a></li>
//     </ul>
//   </div>
// </li>

//                 <li className="menu-item-has-children">
//                   <Link to="#">Financial Statements <FontAwesomeIcon icon={faAngleDown} /></Link>
//                   <div className="sub-menu single-column-menu">
//                     <ul>
//                       <li><a href="/docs/Independent_Auditor.pdf" target="_blank" rel="noopener noreferrer">Independent Auditor</a></li>
//       <li><a href="/docs/Financial_Statements.pdf" target="_blank" rel="noopener noreferrer">Financial Statements</a></li>
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* Right Icons */}
//           <div className="header-item item-right">
//             <a href="/docs/Veritas_Finance_Private_Limited_AR_2024-25.pdf" target="_blank" rel="noopener noreferrer"> <img src="/home/pdf.svg" alt="" className="w-[50px]" /></a>
//             <div className="mobile-menu-trigger block sm:hidden" onClick={toggleMenu}>
//               <span></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentMenuTitle, setCurrentMenuTitle] = useState("");

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
    setActiveSubmenu(null);
    setCurrentMenuTitle("");
  };

  const handleSubmenuOpen = (title, key) => {
    setCurrentMenuTitle(title);
    setActiveSubmenu(key);
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
          <div className="header-item item-left ">
            <div className="logo">
              {/* <Link to="https://www.veritasfin.in/"><img src="/home/v_logo.png" alt="companylogo" /></Link> */}
          <a href="https://www.veritasfin.in/" target="_blank" rel="noopener noreferrer">
  <img src="/home/v_logo.png" alt="Company logo" />
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

              <ul className="menu-main flex flex-col sm:flex-row gap-4 sm:gap-6">
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>

                {/* Corporate Overview */}
                <li className="menu-item-has-children">
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
                          "competitive-advantages",
                          "business-model",
                          "human-assets",
                          "corporate-social-responsibility",
                          "chairmans-message",
                          "managing-director-ceo-message",
                          "board-of-directors",
                          "executive-commitee",
                          "management-team-core-strategy-group",
                          "life-at-veritas",
                        ].map((slug) => (
                          <li key={slug}>
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
                <li className="menu-item-has-children">
                  <button onClick={() => handleSubmenuOpen("Statutory Reports", "reports")}>
                    Statutory Reports <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <div className={`sub-menu single-column-menu ${activeSubmenu === "reports" ? "active" : ""}`}>
                    <ul>
                      {[
                        ["Board_Report", "Board’s Report"],
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
                <li className="menu-item-has-children">
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

          {/* Right side PDF icon */}
          <div className="header-item item-right">
            <a href="/docs/Veritas_Finance_Private_Limited_AR_2024-25.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/home/pdf.svg" alt="Download PDF" className="w-[50px]" />
            </a>
            <div className="mobile-menu-trigger block sm:hidden" onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
