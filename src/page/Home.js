import React from 'react';
import Hero from "../components/Hero";
import MainServices from "../components/MainServices";
import FeaturedWork from "../components/FeaturedWork";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import WhatWeOffer from "../components/WhatWeOffer";
import AwesomeFacts from "../components/AwesomeFacts";
import Support from "../components/support";

function Home() {
    return (
        <>
            <Hero />
            <MainServices />
            <FeaturedWork />
            <div className="container_aw">
                <WhyChooseUs />
                <AboutUs />
            </div>
            <WhatWeOffer />
            <AwesomeFacts />
            <Support />
        </>
    );
}

export default Home;
