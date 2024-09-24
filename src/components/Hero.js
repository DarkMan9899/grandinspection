import React, { useEffect, useState } from 'react';
import "../Style/Hero.css";

function Hero(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        '/HomSlider/01.jpg',
        '/HomSlider/02.webp',
        '/HomSlider/03.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
                setIsAnimating(false);
            }, 1000);

        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div
            className={`hero_fon ${isAnimating ? 'fade-out' : ''}`}
            style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        >
            <div className={`content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                <h1 className={`animate-text ${isAnimating ? 'fade-out' : ''}`}>
                    Welcome to Grand Inspection
                </h1>
                <p className={`animate-text ${isAnimating ? 'fade-out' : ''}`}>
                    Latest Ideas with Skilled Solutions
                </p>
                <a href="/aboutus" className={`animate-button button ${isAnimating ? 'fade-out' : ''}`}>
                    About Us
                </a>
            </div>
        </div>
    );
}

export default Hero;