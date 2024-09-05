import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const ReviewSection = () => {
  const settings = {
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Time between slides in milliseconds
    infinite: true,
    speed: 600, // Transition speed in milliseconds
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    fade: false, // Use false to keep sliding animation, true would change it to fade
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
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
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">COMPANY</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="st-slider st-style1 st-reviews-wrap ">
          <Slider {...settings}>
            <div className="slick-slide-in">
              <div className="st-testimonial st-style1 " data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="st-testimonial-text">
                  <p>“RemarkablyAI aims to revolutionize the retail industry by integrating Augmented Reality (AR) into the shopping experience.”</p>
                  {/* <div className="st-quote"><img src="assets/img/icon/quote.png" alt="quote" /></div> */}
                </div>
                <div className="st-testimonial-info">
                  <div className="st-testimonial-meta">
                    <h4 className="st-testimonial-name">VISION</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-slide-in">
              <div className="st-testimonial st-style1" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="st-testimonial-text">
                  <p>“Equip retailers with a platform to enhance user engagement, save inventory, reduce return, drive sales, and provide valuable insights into customer behavior.”</p>
                  {/* <div className="st-quote"><img src="assets/img/icon/quote.png" alt="quote" /></div> */}
                </div>
                <div className="st-testimonial-info">
                  <div className="st-testimonial-meta">
                    <h4 className="st-testimonial-name">MISSION</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-slide-in">
              <div className="st-testimonial st-style1" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="st-testimonial-text">
                  <p>“We offer a unique AR platform for jewellery and watches, delivering an immersive shopping experience that bridges the gap between online and in-store shopping”</p>
                </div>
                <div className="st-testimonial-info">
                  <div className="st-testimonial-meta">
                    <h4 className="st-testimonial-name">PRODUCT</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-slide-in">
              <div className="st-testimonial st-style1" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="st-testimonial-text">
                  <p>“Our team comprises of experts in AR technology, committed to delivering a product that meets the needs of retailers.”</p>
                  {/* <div className="st-quote"><img src="assets/img/icon/quote.png" alt="quote" /></div> */}
                </div>
                <div className="st-testimonial-info">
                  <div className="st-testimonial-meta">
                    <h4 className="st-testimonial-name">TEAM</h4>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="pagination st-style1 st-flex st-hidden"></div>
          <div className="swipe-arrow st-style1 st-hidden">
            <div className="slick-arrow-left"><i className="fa fa-chevron-left"></i></div>
            <div className="slick-arrow-right"><i className="fa fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default ReviewSection;
