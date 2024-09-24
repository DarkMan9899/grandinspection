import React from 'react';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Support.css"
import Slider from "react-slick";
import img1 from './Img/Gorcynkerner/306269754_406740514926967_6749679938158810338_n.jpg';
import img2 from './Img/Gorcynkerner/ena-cover.jpg';
import img3 from './Img/Gorcynkerner/OHM-energy.png';
import img4 from './Img/Gorcynkerner/photo_2024-07-30_22-36-04.jpg';

const gallery = [{url: img1, alt: "img1"}, {url: img2, alt: "img2"}, {url: img3, alt: "img3"}, {
    url: img4,
    alt: "img4"
}, ];

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

function Suport(props) {
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


    return (<div className="Our_Partners su-team-container">

        <div className="container_Our_Partners">
            <div className="Our_Partners_FW_title">
                <p>Our Partners</p>
            </div>
            <Slider {...settings}>
                {gallery.map((item, index) => (<div className="Our_Partners—post " key={index}>
                    <img loading="lazy" src={item.url} alt={item.alt} />
                </div>))}
            </Slider>
        </div>

    </div>);
}

export default Suport;
