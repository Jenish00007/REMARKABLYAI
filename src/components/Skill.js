import React from 'react';

function Skill() {
    return (
        <section className="st-dark-bg">
            <div className="st-height-b100 st-height-lg-b80"></div>
            {/* <div className="container">
                <div className="st-section-heading st-style1">
                    <h4 className="st-section-heading-title">MY SKILLS</h4>
                </div>
                <div className="st-height-b25 st-height-lg-b25"></div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <div className="st-about-img-wrap">
                            <img className=""
                                src='assets/img/summary.webp'
                                alt="About Us"
                            />
                        </div>
                        <div className="st-height-b0 st-height-lg-b30"></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="">
                            <div className="st-vertical-middle-in">
                                <div className="st-text-block st-style1">
                                    {/* <h2 className="st-text-block-title"> Welcome to RemarkablyAI</h2> */}
                                    <h4 className="">SUMMARY </h4>
                                    <div className="st-text-block-text">
                                        <p>At REMARKABLYAI, we are the alchemists of augmented reality
                                            in the Jewellery industry. We conjure immersive experiences that
                                            transcend the ordinary, inviting customers to explore and adorn
                                            themselves in digital realms of beauty. Our technology isn't just
                                            a tool, it's a catalyst for growth, empowering jewellers to enchant
                                            and engage their audience like never before. We're sculpting a
                                            future where every gem sparkles brighter in the digital sphere.
                                            As our CEO often says, "In the world of Jewellery, true magic lies
                                            in reimagining the possible"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
