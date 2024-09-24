import React from 'react';
import '../Style/ContactPage.css';
import  logo from "../components/Img/grand.png"

const ContactPage = () => {

    const openSocialMedia = (url) => {
        window.open(url, '_blank');
    };
    return (
        <>
            <div className="contact_page">
               <p>Contact Us</p>
            </div>
            <div className="container cont_container">
                <div className="contact-info">
                    <div className="contact-item">
                        <img src={logo} alt="Company Logo" className="c_icon_l"/>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt c_icon"></i>
                        <p>Yerevan, Kanaker 13 street 32/1</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope c_icon"></i>
                        <p>info@grandinspection.am</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone c_icon"></i>
                        <p>+374 94322432</p>
                    </div>

                    <div className="contact-item" onClick={() => openSocialMedia('https://www.facebook.com/profile.php?id=100057675750274')}>
                        <i className="fa-brands fa-facebook-f c_icon icon_fb"></i>
                        <p className="icon_fb">Grand Inspection Facebook</p>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.674010205909!2d44.51994981529307!3d40.18119197939374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041c4fca5f5f0bb%3A0x4c9c5269a82b2cf7!2sKanaker%2C%20Yerevan!5e0!3m2!1sen!2s!4v1691696366792!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </>

    );
};

export default ContactPage;
