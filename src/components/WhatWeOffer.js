// WhatWeOffer.js
import React from 'react';
import '../Style/WhatWeOffer.css';
import img1 from './Img/0001.jpg';
import img2 from './Img/0002.jpg';
import img3 from './Img/0003.jpg';

const WhatWeOffer = () => {
    const services = [
        {
            title: "Design of construction objects",
            description: "Designing construction objects combines creativity and technology to create functional, safe, and aesthetically pleasing structures. The process focuses on planning and using advanced tools to ensure buildings meet modern standards and blend harmoniously with their environment.",
            imageUrl: img1 // Replace with actual image paths
        },
        {
            title: "Inspection of construction objects",
            description: "Inspection of construction objects ensures that structures meet safety, quality, and compliance standards. This process involves thorough evaluations at various stages to identify and address potential issues, ensuring the project's integrity and adherence to regulations.",
            imageUrl: img2
        },
        {
            title: "Building of construction objects",
            description: "Inspection of construction objects ensures that structures meet safety, quality, and compliance standards. This process involves thorough evaluations at various stages to identify and address potential issues, ensuring the project's integrity and adherence to regulations.",
            imageUrl: img3
        }
    ];

    return (
        <div className="what-we-offer">
            <div className="container">
                <div className="what-we-offer_title">
                    <h2>What We Offer</h2>
                </div>
                <div className="services">
                    {services.map((service, index) => (
                        <div key={index} className="service">
                            <img src={service.imageUrl} alt={service.title} loading="lazy"
                            />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default WhatWeOffer;
