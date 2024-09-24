import React from 'react';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/MyTeamPage.css"
import Slider from "react-slick";
import img1 from "../components/Img/Myteam/Anna.png";
import img2 from "../components/Img/Myteam/Grigor.png";
import img3 from "../components/Img/Myteam/Aram.png";
import img4 from "../components/Img/Myteam/Nerses.png";


const galleryMyTeam = [
    {url: img1, alt: "img1", name: "Anna Apoyan", description: "Director"},
    {url: img2, alt: "img7", name: "Grigor Babayan", description: "Technical director"},
    {url: img3, alt: "img3", name: "Aram Avagyan", description: "Designer-engineer"},
    {url: img4, alt: "img4", name: "Nerses Andreasyan", description: "Engineer-builder"},
];

Slider.propTypes = {
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    responsive: PropTypes.arrayOf(PropTypes.object),
    arrows: PropTypes.bool,
    slidesToScroll: PropTypes.number,
    slidesToShow: PropTypes.number,
    speed: PropTypes.number,
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    children: PropTypes.node
};

function MyTeamPage(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false
            }
        }, {
            breakpoint: 768, settings: {
                slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false,
            }
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false,
            }
        }]
    };


    return (
        <div className="blog-posts my-team-container">
            <div className="container">
                <div className="My_Team_title">
                    <p>Our Team</p>
                </div>
                <Slider {...settings}>
                    {galleryMyTeam.map((item, index) => (
                        <div className="post_my_team" key={index}>
                            <img loading="lazy" src={item.url} alt={item.alt}/>
                            <div className="post-details">
                                <p>{item.name}</p>
                                <span>{item.description}</span>
                            </div>
                        </div>))}
                </Slider>
            </div>
        </div>);
}

export default MyTeamPage;
