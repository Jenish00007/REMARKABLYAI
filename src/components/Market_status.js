import React, { useEffect } from 'react';
import gsap from 'gsap';
import 'animate.css'; // Import Animate.css for animations

const MarketStatus = () => {
  // useEffect(() => {
  //   // GSAP animations for the market status containers
  //   gsap.fromTo(
  //     '.market_status_container_right',
  //     { x: '-200%', opacity: 0 },
  //     {
  //       x: '5%',
  //       opacity: 1,
  //       duration: 1,
  //       stagger: 0.3,
  //       ease: 'power2.out'
  //     }
  //   );

  //   // GSAP animations for column positions
  //   gsap.fromTo(
  //     '.market_status_container',
  //     { x: '0%' },
  //     {
  //       x: '30%',
  //       duration: 1,
  //       ease: 'power2.out',
  //       stagger: 0.3,
  //       scrollTrigger: {
  //         trigger: '.col-lg-6',
  //         start: 'top bottom',
  //         end: 'bottom top',
  //         scrub: true
  //       }
  //     }
  //   );
  // }, []);

  return (
    <section id="market-status" className="st-market-status-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title animate__animated animate__fadeIn animate__delay-1s" style={{ color: '#ffd700' }}>
            MARKET STATUS
          </h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="market_status_container st-text-block st-style1 hover-animate animate__animated animate__fadeIn animate__delay-2s"
              style={{
                border: '1px solid #fafafa',
                padding: '20px',
                marginBottom: '20px',
                borderRadius: '10px',
                transition: 'transform 0.3s, background-color 0.3s',
              }}
            >
              <h5>
                <strong>
                  <i className="fas fa-gem" style={{ color: '#ffd700' }}></i> REMARKABLYAI
                </strong>
              </h5>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>The AR was built with industry experts' insights.</li>
                <li>Our AR is capable of performing on all Jewellery categories, including nosepins.</li>
                <li>We have solved the back side of the ring, providing complete visuals of the product.</li>
                <li>Unlike other AR solutions, we offer both 2D and 3D visuals, enabling users to make informed decisions.</li>
                <li>Our product is priced nearly 50% lower than other AR solutions on the market.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 market_status_container_right">
            <div
              className="market_status_container st-text-block st-style1 hover-animate animate__animated animate__fadeIn animate__delay-3s"
              style={{
                border: '1px solid #ffffff',
                padding: '20px',
                marginBottom: '20px',
                borderRadius: '10px',
                transition: 'transform 0.3s, background-color 0.3s',
              }}
            >
              <h5>
                <strong>
                  <i className="fas fa-exclamation-triangle" style={{ color: '#ffd700' }}></i> WHAT MARKET HAS
                </strong>
              </h5>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Lack of Jewellery industry knowledge.</li>
                <li>Missing Jewellery categories like nosepins.</li>
                <li>Limited features like the back side of the ring.</li>
                <li>Unrealistic visuals that fail to solve the problem.</li>
                <li>Products are more expensive.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStatus;
