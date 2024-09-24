import React, { useState } from 'react';
import '../Style/AboutUs.css';
import img1 from './Img/1.jpg';
import img2 from './Img/S3.gif';
import img3 from './Img/S5.jpg';
import img4 from './Img/S6.jpg';

const images = [
    { url: img1, alt: "img1" },
    { url: img2, alt: "img2" },
    { url: img3, alt: "img3" },
    { url: img4, alt: "img4" },

];

const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="about-us">
            <h2>ABOUT US</h2>
            <div className="main-image">
                <img src={images[currentIndex].url} alt={images[currentIndex].alt} />
                <div className="arrow_about arrow_about-left" onClick={handlePrev}><i
                    className="fa-solid fa-chevron-left"></i></div>
                <div className="arrow_about arrow_about-right" onClick={handleNext}><i
                    className="fa-solid fa-chevron-right"></i></div>
            </div>
            <div className="thumbnail-images">
                {images.map((image, index) => (
                    <img
                        loading="lazy"
                        key={index}
                        src={image.url}
                        alt={`Thumbnail ${index}`}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
