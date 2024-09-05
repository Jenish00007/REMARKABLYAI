import React from 'react';
import Approach_pic1 from '../Assets/product3.webp';
import Approach_pic2 from '../Assets/product1.webp';
import hip_hop_gif from '../Assets/hip_hop_gif.gif';
const BusinessModel = () => {
  return (
    <section id="business-model" className="st-business-model-wrap">
      {/* <div className="st-height-b100 st-height-lg-b80"></div> */}
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title" >Our Approach</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="st-text-block st-style1">
              <div className="st-text-block-text">

                <div
                  className="row st-business-section hover-animate animate__animated animate__fadeIn animate__delay-1s background_color"
                  style={{
                    border: '1px solid #ffffff',
                    padding: '15px',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    transition: 'transform 0.3s, background-color 0.3s',
                  }}
                >
                  <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img  id='Approach_pic1'
                      src={Approach_pic1}
                      alt="Solution Illustration"
                      style={{
                        width: '60%',
                        height: 'auto',
                        maxWidth: '100%',
                        display: 'block',
                        margin: '0 auto',
                      }}
                    />
                     {/* <img style={{width:'100%',height:'100%'}} id='hip_hop_gif'
                                    className="img-fluid"
                                    src={hip_hop_gif}
                                    alt="Description"
                                /> */}
                  </div>
                  <div className='col-lg-8 mt-4'>

                    <h5>
                      <strong>
                        <i className="fas fa-search" style={{ color: '#ffd700' }}></i> RESEARCH
                      </strong>
                    </h5>
                    <h6>Market Trends Analysis:</h6>
                    <p>
                      We’ve thoroughly analyzed market trends and evaluated existing AR solutions to ensure our platform stands out.
                    </p>
                    <h6>Evaluation of Existing AR Solutions:</h6>
                    <p>
                    We evaluated the current AR products to see what they offer, their strengths and weaknesses to enhance our solution.
                    </p>
                    <h6>Ensuring Your Platform Stands Out:</h6>
                    <p>
                    Our evaluation has led us to an industry fit resolution to enhance user experience.
                    </p>

                  </div>
                </div>
                <div
                  className="st-business-section hover-animate animate__animated animate__fadeIn animate__delay-2s background_color"
                  style={{
                    border: '1px solid #ffffff',
                    padding: '15px',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    transition: 'transform 0.3s, background-color 0.3s',
                  }}
                >
                  <h5>
                    <strong>
                      <i className="fas fa-comments" style={{ color: '#ffd700' }}></i> CUSTOMER FEEDBACK
                    </strong>
                  </h5>
                  <p>
                    Out of 15% of unhappy customers, over 10% complained that the product they received did not match what they saw online. Additionally, some faced issues with product availability in stores. The above insight leads us to an understanding of customer challenges while making an online purchase and during a store visit.
                  </p>
                </div>
                <div
                  className="row st-business-section hover-animate animate__animated animate__fadeIn animate__delay-3s background_color"
                  style={{
                    border: '1px solid #ffffff',
                    padding: '15px',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    transition: 'transform 0.3s, background-color 0.3s',
                  }}
                >
                  <div className='col-lg-8 '>

             
                  <h5>
                    <strong>
                      <i className="fas fa-pencil-ruler" style={{ color: '#ffd700' }}></i> DESIGN IMPROVEMENTS
                    </strong>
                  </h5>
                  <h6>Accurate Product Dimensions:</h6>
                  <p>
                    Based on this valuable feedback, we’ve made significant improvements to our AR platform to ensure more accurate product dimensions and a satisfying user experience.
                  </p>
                  <h6>Enhanced User Experience:</h6>
                  <p>
                  We’ve refined the overall AR experience to make it more satisfying, addressing issues like user interface design, ease of navigation, and functionality.
                  </p>
                  <p>These changes aim to better align the virtual product experience with reality and improve overall user satisfaction.</p>
                  </div>
                  <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img
                      src={Approach_pic2}
                      alt="Solution Illustration"
                      style={{
                        width: '60%',
                        height: 'auto',
                        maxWidth: '100%',
                        display: 'block',
                        margin: '0 auto',
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
