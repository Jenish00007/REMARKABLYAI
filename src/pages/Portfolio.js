import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the data for the portfolio items
const data = [
    { image: 'assets/img/portfolio/product1.webp', alt: 'Earrings', title: 'Earrings', link: '#contact' },
    { image: 'assets/img/portfolio/product2.webp', alt: 'Necklaces', title: 'Necklaces', link: '#contact' },
    { image: 'assets/img/portfolio/product3.webp', alt: 'Bracelets', title: 'Bracelets', link: '#contact' },
    { image: 'assets/img/portfolio/product14.webp', alt: 'Nose Pin', title: 'Nose Pin', link: '#contact' },
    { image: 'assets/img/portfolio/product4.webp', alt: 'Ring', title: 'Ring', link: '#contact' },
    { image: 'assets/img/portfolio/product5.webp', alt: 'Watch', title: 'Watch', link: '#contact' },
    // { image: 'assets/img/portfolio/product6.webp', alt: 'Chain', title: 'Chain', link: '' },
    // { image: 'assets/img/portfolio/product7.webp', alt: 'Bracelets', title: 'Bracelets', link: '' },
    { image: 'assets/img/portfolio/product10.webp', alt: 'Ring', title: 'Ring', link: '#contact' },
    { image: 'assets/img/portfolio/product13.webp', alt: '', title: 'grillz braces', link: '#contact' },
];

function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1500, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="portfolio">
            <div className="st-height-b100 st-height-lg-b80"></div>
            <div className="container">
                <div className="st-section-heading st-style1">
                    <h4 className="st-section-heading-title">PRODUCTS</h4>
                </div>
                <div className="st-height-b25 st-height-lg-b25"></div>
            </div>
            <div className="container">
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="">
                            <div  className="st-portfolio-single st-style1 st-lightgallery">
                                <div  className="st-portfolio-item">
                                    <a href={item.link} className="st-portfolio st-zoom st-lightbox-item">
                                        <div className="st-portfolio-img st-zoom-in">
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                        <div className="st-portfolio-item-hover">
                                            <i className="fas fa-plus-circle"></i>
                                            <h5>{item.title}</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
        </section>
    );
}

export default Portfolio;
