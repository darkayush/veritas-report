import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer bg-[#fef7ec] text-[#111111]">
            <div className="footer-content">
                {/* Logo Column */}
                <div className="logo-column">
                    <a 
                        href="https://www.veritasfin.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-logo-link"
                        aria-label="Visit Veritas Finance website"
                    >
                        <img 
                            className="footer-logo" 
                            src="/home/v_logo.png" 
                            alt="Veritas Finance Logo" 
                        />
                    </a>
                </div>

                {/* Company Info Column */}
                <div className="footer-info company-column">
                    <div className="company-details">
                        <h2 className="footer-business-name">
                            Veritas Finance Ltd
                        </h2>
                        <p className="footer-business-tagline">
                            Annual Report 2024-25
                        </p>
                        <div className="footer-links">
                            <a 
                                href="/docs/Veritas_Finance_Private_Limited_AR_2024-25.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Download Report
                            </a>
                            <span className="footer-separator">|</span>
                            <a 
                                href="https://www.veritasfin.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>

                {/* Developer Credit Column */}
                <div className="footer-info developer-column">
                    <div className="developer-credit">
                        <p className="developed-by-text">
                            Designed & Developed by
                        </p>
                        <a 
                            href="https://kalolwala.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="developer-link"
                            aria-label="Visit Kalolwala website"
                        >
                            <img 
                                className="developer-logo" 
                                src="/home/k&a logo.svg" 
                                alt="Kalolwala Logo" 
                            />
                            <span className="developer-name">Kalolwala & Associates</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="copyright-text">
                        © {currentYear} Veritas Finance Ltd. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#" className="footer-bottom-link">Privacy Policy</a>
                        <span className="footer-separator">|</span>
                        <a href="#" className="footer-bottom-link">Terms of Service</a>
                        <span className="footer-separator">|</span>
                        <a href="#" className="footer-bottom-link">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;