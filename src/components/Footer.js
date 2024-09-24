import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container foot_c">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <div className="footer-line"></div>

                    <div className="footer-logo">CONSTRUCTION</div>
                    <p>
                        Building isn’t just a job. At the Construction Company, it is our passion. With every project we undertake, we set the bar high and provide the best people in the industry, with a true love of what we do to make our Customers’ vision a reality.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <div className="footer-line"></div>
                    <p><strong>Address:</strong> Yerevan, Kanaker 13 street 32/1</p>
                    <p><strong>Phone:</strong> +374 94322432</p>
                    <p><strong>E-mail:</strong> info@grandinspection.am</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100057675750274"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-vk"></i></a>
                    </div>
            </div>

            </div>
        </footer>
    );
};

export default Footer;
