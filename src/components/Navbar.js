import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Navbar.css';
import logo from "./Img/grand.png"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const openSocialMedia = (url) => {
        window.open(url, '_blank');
    };

    return (
        <nav className={`navbar ${navbar ? 'scrolled' : ''}`}>
            <div className="top_navbar_fon">
                <div className="top_navbar container">
                    <ul className="social-media">
                        <li onClick={() => openSocialMedia('/#')}>
                            <i className="fa fa-twitter"></i>
                        </li>
                        <li onClick={() => openSocialMedia('https://www.facebook.com/profile.php?id=100057675750274')}>
                            <i className="fa-brands fa-facebook-f"></i>
                        </li>
                        <li onClick={() => openSocialMedia('/#')}>
                            <i className="fa fa-google-plus"></i>
                        </li>
                    </ul>
                    <div className="contact-info">
                        <ul>
                            <li><i className="fa fa-phone"></i> +374 94322432</li>
                            <li><i className="fa fa-envelope"></i> info@grandinspection.am</li>
                            <li><i className="fa fa-clock-o"></i> Mon-Fri: 9:00 - 18:00</li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className=" navbar_fon ">
                <div className="navbar_cont section container_navbar container">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="logo"/>
                    </Link>
                    <div className={`navbar_menu ${menuOpen ? 'open' : ''}`}>
                        <Link to="/" className={getLinkClass('/')} onClick={() => {
                            closeMenu();
                            scrollToTop();
                        }}>HOME</Link>
                        <Link to="/aboutus" className={getLinkClass('/about us')} onClick={() => {
                            closeMenu();
                            scrollToTop();
                        }}>ABOUT US</Link>
                        <Link to="/expansion" className={getLinkClass('/expansion')} onClick={() => {
                            closeMenu();
                            scrollToTop();
                        }}>EXPANSION PROJECTS</Link>
                        <Link to="/contact" className={getLinkClass('/contact')} onClick={() => {
                            closeMenu();
                            scrollToTop();
                        }}>CONTACT</Link>
                        <Link to="/myteam" className={getLinkClass('/myteam')} onClick={() => {
                            closeMenu();
                            scrollToTop();
                        }}>OUR TEAM</Link>
                    </div>


                    <div className="navbar_right">
                        <button className="navbar_toggle" onClick={handleMenuToggle}>
                            {menuOpen ? '✖' : '☰'}
                        </button>
                    </div>
                </div>

            </nav>
        </nav>
    );
};

export default Navbar;
