import React from 'react';
import "../Style/EXPANSION_PROJECTS.css";
import w2 from "../../src/components/Img/W2.jpg";
import w1 from "../components/Img/W1.jpg"
import w3 from "../components/Img/W3.jpg"
import w4 from "../components/Img/W4.jpg"

function EXPANSION_PROJECTS(props) {
    return (<>
        <div className="EXPANSION_PROJECTS">
            <h1>EXPANSION PROJECTS</h1>
        </div>
        <div className="container">
            <div className="titl_img">
                <img src={w1} alt={w1} loading="lazy"/>
                <div className="titl_img_text">
                    <div>
                        <h2 className="title_img_title">Residential, public, and industrial building projects</h2>
                    </div>
                    <p>At Grand Inspection, we specialize in delivering high-quality building projects across
                        residential, public, and industrial sectors. With a commitment to excellence and
                        innovation,
                        our
                        experienced team ensures that each project meets the unique needs and standards of our
                        clients.
                        From the comfort and elegance of residential homes to the functionality and efficiency
                        of
                        public
                        and industrial buildings, we pride ourselves on creating spaces that enhance lives and
                        communities. Trust us to bring your vision to life with unparalleled craftsmanship and
                        dedication.</p>
                </div>
            </div>
            <div className="titl_img">
                <div className="titl_img_text">
                    <div>
                        <h2 className="title_img_title">Heating, gas supply, and ventilation projects</h2>
                    </div>
                    <p>
                        At Grand Inspection, we provide comprehensive solutions for heating, gas supply, and
                        ventilation projects. Our skilled professionals are dedicated to ensuring optimal performance
                        and safety in every system we design and install. Whether it's a residential, commercial, or
                        industrial setting, we deliver reliable and efficient services that meet the highest standards.
                        From modern heating systems to secure gas supply installations and effective ventilation
                        solutions, we create environments that are comfortable, safe, and energy-efficient. Trust us to
                        handle your project with expertise and precision.</p>
                </div>
                <img src={w2} alt={w2} loading="lazy"
                />
            </div>
            <div className="titl_img">
                <img src={w3} alt={w3} loading="lazy"
                />
                <div className="titl_img_text">
                    <div>
                        <h2 className="title_img_title">Water supply and drainage projects</h2>
                    </div>
                    <p>At Grand Inspection, we specialize in delivering reliable and efficient water supply and
                        drainage solutions. Our experienced team is dedicated to designing and implementing systems that
                        ensure clean water delivery and effective wastewater management for residential, commercial, and
                        industrial projects. With a focus on sustainability and innovation, we provide customized
                        solutions that meet the highest standards of quality and safety. Trust [Your Company Name] for
                        your water supply and drainage needs, and experience excellence in every project.</p>
                </div>
            </div>
            <div className="titl_img">
                <div className="titl_img_text">
                    <div>
                        <h2 className="title_img_title">Transportation routes.</h2>
                    </div>
                    <p>At Grand Inspection, we offer top-tier image generation services tailored to your specific
                        needs. Whether you require visuals for marketing campaigns, educational materials, or creative
                        projects, our team excels in producing high-quality images on any topic. Using advanced
                        technology and artistic expertise, we deliver captivating visuals that effectively communicate
                        your message and enhance your content. Trust us to provide stunning, custom-generated images
                        that align perfectly with your vision and goals.</p>
                </div>
                <img src={w4} alt={w4} loading="lazy"
                />
            </div>
        </div>
    </>);
}

export default EXPANSION_PROJECTS;
