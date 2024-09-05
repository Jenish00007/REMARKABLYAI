import React from 'react';
import mobile_pic1 from '../Assets/mobile_pic1.webp';

const SolutionSection = () => {
  return (
    <section id="solution" className="st-solution-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div style={{
        border: '1px solid #fafafa',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '10px',
        transition: 'transform 0.3s, background-color 0.3s',
      }} className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">SOLUTION</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
        <div className="row Solution_container">
          {/* Image Column */}
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <img
              src={mobile_pic1}
              alt="Solution Illustration"
              style={{
                width: '70%',
                height: 'auto',
                maxWidth: '100%',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>
          {/* Content Column */}
          <div className="col-lg-8 mt-4">
            <div className="st-text-block st-style1">
              <div className="st-text-block-text">
                <h5><strong>CLOSE THE GAP</strong></h5>
                <p>RemarkablyAI’s AR platform fills a crucial void in retail, offering unmatched benefits that redefine how Jewellery and watches are presented and sold.</p>
                <h5><strong>TARGET AUDIENCE</strong></h5>
                <p>16-29 years old, a demographic that demands cutting-edge, immersive shopping experiences.</p>
                <h5><strong>COST SAVINGS</strong></h5>
                <p>Our smart analytics helps you in increased user engagement, cutting costs for retailers, even saving try on time, calculated inventory and reduced is returns.</p>
                <h5><strong>EASY TO USE</strong></h5>
                <p>Our intuitive and user-friendly AR platform equips businesses with the tools they need to seamlessly integrate augmented reality into their retail strategies, enhancing customer satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
