// src/components/Services.js
import React from 'react';

const iconData = [
  {
    title: 'VISION',
    description: 'RemarkablyAI aims to revolutionize the retail industry by integrating Augmented Reality (AR) into the shopping experience.',

  },
  {
    title: 'MISSION',
    description: 'Equip retailers with a platform to enhance user engagement, save inventory, reduce returns, drive sales, and provide valuable insights into customer behavior.',
    svgPath: (
      <svg viewBox="0 0 64 64">
        {/* Add SVG paths here */}
      </svg>
    )
  },
  {
    title: 'PRODUCT',
    description: 'We offer a unique AR platform for Jewellery and watches, providing an immersive shopping experience that bridges the gap between online shopping and physical retail.',
    svgPath: (
      <svg viewBox="0 0 512 512">
        {/* Add SVG paths here */}
      </svg>
    )
  }
];

function Services() {
  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          {/* <h4 className="st-section-heading-title">SERVICES</h4> */}
          {/* <h2 className="st-section-heading-subtitle">SERVICES</h2> */}
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="row">
          {iconData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="st-iconbox st-style1">
                <div className="st-iconbox-icon">
                  {item.svgPath}
                </div>
                <h2 className="st-iconbox-title">{item.title}</h2>
                <div className="st-iconbox-text">{item.description}</div>
              </div>
              <div className="st-height-b30 st-height-lg-b30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
