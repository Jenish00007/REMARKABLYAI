// FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
    const featuresData = {
        heading: "Transform Your Jewellery Experience",
        paragraph1: "Revolutionizing Jewellery shopping with immersive AR technology.",
        paragraph2: "From virtual try-ons to real-time interactions, our platform offers a comprehensive suite of tools to manage every aspect of your jewellery shopping experience.",
        buttonText: "Contact Us",
        cards: [
            {
                title: "Bring Your Dream Jewellery to Life",
                description: "Our state-of-the-art virtual try-on technology lets you experiment with different styles and find the perfect piece that complements your unique look. See how our Jewellery would look on you from the comfort of your home, no matter where you are in the world.",
                imgSrc: "assets/img/portfolio/product8.webp",
                alt: "Automated Reports",
            },
            {
                title: "Revolutionizing Jewellery Shopping with AR",
                description: "Forget the limitations of traditional Jewellery shopping. With our innovative AR technology, you can experience Jewellery like never before. See how our pieces would move and interact with your body in real-time.",
                imgSrc: "assets/img/portfolio/product9.webp",
                alt: "Realtime analytics",
            },
            // {
            //     title: "Jewellery Designed to Flatter You",
            //     description: "We believe that Jewellery should be an extension of your personal style. That's why we use cutting-edge 3D modeling and artificial intelligence to create pieces that flatter your unique features and personality.",
            //     imgSrc: "assets/img/summary.jpeg",
            //     alt: "Funnel optimization",
            // },
            {
                title: "The Future of Jewellery is Here",
                description: "At REMARKABLY AI, we're passionate about pushing the boundaries of Jewellery design. We're constantly innovating and developing new technologies to create a more immersive and personalized shopping experience for our customers.",
                imgSrc: "assets/img/portfolio/product11.webp",
                alt: "User journey",
            },
        ],
    };

    return (
        <section className="features-section py-5">
            <div className="container text-center">
                <h2 className="mb-4 feature_title" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 'bold' }}>
                    {featuresData.heading}
                </h2>
                <p className="mb-4" style={{ fontFamily: 'Noto Sans, sans-serif', color: '#333333' }}>
                    {featuresData.paragraph1}
                </p>
                <p className="mb-4" style={{ fontFamily: 'Noto Sans, sans-serif', color: '#333333' }}>
                    {featuresData.paragraph2}
                </p>

                <div className="st-hero-btn">
                    <a href="#contact" className="st-btn st-style1 st-color1 st-smooth-move">{featuresData.buttonText}</a>
                </div>
                <div className="row mt-5 ">
                    {featuresData.cards.map((card, index) => (
                        <div key={index} className="col-md-4 mb-4 ">
                            <div className="card shadow-lg border-0 rounded-3">
                                <img style={{width:'100%',height:'auto'}} src={card.imgSrc} alt={card.alt} className="card-img-top" />
                                <div className="card-body feature-card">
                                    <h4 className="card-title" style={{ fontFamily: 'Noto Sans, sans-serif', color: '#333333' }}>
                                        {card.title}
                                    </h4>
                                    <p className="card-text" style={{ fontFamily: 'Noto Sans, sans-serif', color: '#333333' }}>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
