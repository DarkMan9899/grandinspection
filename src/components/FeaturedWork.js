import React from 'react';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/FeaturedWorkl.css"
import Slider from "react-slick";  // Assuming you're using react-slick for the slider
import img1 from "../components/Img/slider/11.jpg";
import img2 from "../components/Img/slider/12.jpg";
import img3 from "../components/Img/slider/133.jpg";
import img4 from "../components/Img/slider/14.jpg";
import img5 from "../components/Img/slider/15.jpg";
import img6 from "../components/Img/slider/16.jpg";
import img7 from "../components/Img/slider/17.jpg";
import img8 from "../components/Img/slider/18.webp";
import img9 from "../components/Img/slider/19.jpg";
import img10 from "../components/Img/slider/20.webp";
import img11 from "../components/Img/slider/21.jpg";



const gallery = [
    {url: img1, alt: "img1"},
    {url: img2, alt: "img7"},
    {url: img3, alt: "img3"},
    {url: img4, alt: "img4"},
    {url: img5, alt: "img5"},
    {url: img6, alt: "img6"},
    {url: img7, alt: "img2"},
    {url: img8, alt: "img2"},
    {url: img9, alt: "img2"},
    {url: img10, alt: "img2"},
    {url: img11, alt: "img2"},

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

function Fwslider(props) {
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


    return (<div className="gallery_posts fe-team-container">

        <div className="container">
            <div className="FW_title">
                <p>FEATURED WORK</p>
            </div>
            <Slider {...settings}>
                {gallery.map((item, index) => (<div className="post" key={index}>
                    <img loading="lazy" src={item.url} alt={item.alt}/>
                </div>))}
            </Slider>
        </div>

    </div>);
}

export default Fwslider;
