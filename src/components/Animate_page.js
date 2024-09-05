import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AnimatedPage.css'; // Import CSS file
import hero2 from '../Assets/hero2.webp';
import girl3 from '../Assets/girl3.webp';
import girl10 from '../Assets/girl10.webp';
import Navbar from './Navbar';
import model1 from '../Assets/model1.webp';
import product14 from '../Assets/product14.webp';
import hip_hop_gif from '../Assets/hip_hop_gif.gif';
import Earings_view from './Earings_view';
import Product_view from './Product_view';
import Review from './Review';
import Skill from './Skill';
import MarketStatus from './Market_status';
import BusinessModel from './Business_model';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeaturesSection';
import Request_Demo from './Request_Demo';
import Footer from './Footer';



gsap.registerPlugin(ScrollTrigger);


const AnimatedPage = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [modelParams, setModelParams] = useState({
        position: 'absolute',
        top: '28%',
        left: '16%',
        width: '20%',
        height: '38%',
        zIndex: 2
    });


    const featuresData = {
        heading: "Our Features",
        paragraph1: "From the big picture to every tiny detail, we got you covered.",
        paragraph2: "Manage all client interactions, proposals, invoices, support tickets, tasks, project overviews, credit notes, reminders, subscriptions, and orders.",
        buttonText: "Contact Us",
        cards: [
            {
                title: "Automated Reports",
                description: "Automate efficiently and manage accounts on one platform.",
                imgSrc: "assets/imgs/page/homepage1/automated_reports.html",
                alt: "Automated Reports",
            },
            {
                title: "Realtime analytics",
                description: "Access all accounting data in one place.",
                imgSrc: "assets/imgs/page/homepage1/real_timeanalytics.html",
                alt: "Realtime analytics",
            },
            {
                title: "Funnel optimization",
                description: "Unify your data with our revolutionary accounting software.",
                imgSrc: "assets/imgs/page/homepage1/funnel_optimization.html",
                alt: "Funnel optimization",
            },
            {
                title: "User journey",
                description: "A better way to handle accounting is here.",
                imgSrc: "assets/imgs/page/homepage1/user_journey.html",
                alt: "User journey",
            },
        ],
    };

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {

        let Point1Params1, Point2Params2, back_Top1Params1, back_Top2Params2

        if (screenWidth > 1800) {
            // Animations for screens above 1800
            setModelParams({ position: 'absolute', top: '32%', left: '16.6%', width: '18%', height: '35%', zIndex: 2 });
            Point1Params1 = { top: '129.5%', left: '57%', width: '15%', height: '30%', };
            Point2Params2 = { top: '208.4%', left: '25.9%', width: '15%', height: '30%', };
            back_Top1Params1 = { top: '38%', left: '16.6%', width: '18%', height: '35%', };
            back_Top2Params2 = { top: '52%', right: '28%', width: '20%', height: '30%', };
        } else
            if (screenWidth > 1750) {
                // Animations for screens above 1750
                setModelParams({ position: 'absolute', top: '33%', left: '16.6%', width: '18%', height: '35%', zIndex: 2 });
                Point1Params1 = { top: '129.5%', left: '57%', width: '16%', height: '30%', };
                Point2Params2 = { top: '208.4%', left: '24.8%', width: '16%', height: '30%', };
                back_Top1Params1 = { top: '38%', left: '16.6%', width: '18%', height: '35%', };
                back_Top2Params2 = { top: '52%', right: '28%', width: '20%', height: '30%', };
            } else
                if (screenWidth > 1700) {
                    // Animations for screens above 1700
                    setModelParams({ position: 'absolute', top: '34%', left: '16.6%', width: '18%', height: '35%', zIndex: 2 });
                    Point1Params1 = { top: '130.5%', left: '57.4%', width: '16%', height: '30%', };
                    Point2Params2 = { top: '209%', left: '24.3%', width: '16%', height: '30%', };
                    back_Top1Params1 = { top: '38%', left: '16.6%', width: '18%', height: '35%', };
                    back_Top2Params2 = { top: '52%', right: '27.2%', width: '20%', height: '30%', };
                } else
                    if (screenWidth > 1650) {
                        // Animations for screens above 1650
                        setModelParams({ position: 'absolute', top: '34%', left: '16.6%', width: '18%', height: '35%', zIndex: 2 });
                        Point1Params1 = { top: '130.5%', left: '58%', width: '16%', height: '28%', };
                        Point2Params2 = { top: '209%', left: '23.7%', width: '16%', height: '30%', };
                        back_Top1Params1 = { top: '38%', left: '16.6%', width: '18%', height: '35%', };
                        back_Top2Params2 = { top: '52%', right: '26.8%', width: '20%', height: '30%', };
                    } else
                        if (screenWidth > 1600) {
                            // Animations for screens above 1600
                            setModelParams({ position: 'absolute', top: '34%', left: '16.6%', width: '18%', height: '35%', zIndex: 2 });
                            Point1Params1 = { top: '130.5%', left: '58.5%', width: '16%', height: '28%', };
                            Point2Params2 = { top: '209%', left: '22.3%', width: '18%', height: '30%', };
                            back_Top1Params1 = { top: '38%', left: '16.6%', width: '18%', height: '35%', };
                            back_Top2Params2 = { top: '52%', right: '25%', width: '23%', height: '30%', };
                        } else
                            if (screenWidth > 1550) {
                                // Animations for screens above 1550
                                setModelParams({ position: 'absolute', top: '39%', left: '16.6%', width: '18%', height: '30%', zIndex: 2 });
                                Point1Params1 = { top: '130.5%', left: '59%', width: '16%', height: '28%', };
                                Point2Params2 = { top: '209%', left: '21.5%', width: '18%', height: '30%', };
                                back_Top1Params1 = { top: '38%', left: '16.6%', width: '18%', height: '30%', };
                                back_Top2Params2 = { top: '52%', right: '24.5%', width: '23%', height: '30%', };
                            } else
                                if (screenWidth > 1500) {
                                    // Animations for screens above 1500px
                                    setModelParams({ position: 'absolute', top: '39%', left: '16.6%', width: '18%', height: '30%', zIndex: 2 });
                                    Point1Params1 = { top: '130.5%', left: '59.5%', width: '16%', height: '28%', };
                                    Point2Params2 = { top: '209.8%', left: '20.8%', width: '18%', height: '28%', };
                                    back_Top1Params1 = { top: '38%', left: '16.6%', width: '18%', height: '30%', };
                                    back_Top2Params2 = { top: '52%', right: '24%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1450) {
                                    // Animations for screens above 1450
                                    setModelParams({ position: 'absolute', top: '39%', left: '17.5%', width: '15%', height: '25%', zIndex: 2 });
                                    Point1Params1 = { top: '131%', left: '60%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '20.3%', width: '18%', height: '28%', };
                                    back_Top1Params1 = { top: '38%', left: '17.5%', width: '15%', height: '25%', };
                                    back_Top2Params2 = { top: '52%', right: '24%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1400) {
                                    // Animations for screens above 1400
                                    setModelParams({ position: 'absolute', top: '39%', left: '17.5%', width: '15%', height: '25%', zIndex: 2 });
                                    Point1Params1 = { top: '131%', left: '60.5%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '19.5%', width: '18%', height: '28%', };
                                    back_Top1Params1 = { top: '38%', left: '17.5%', width: '15%', height: '25%', };
                                    back_Top2Params2 = { top: '52%', right: '24%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1350) {
                                    // Animations for screens above 1350
                                    setModelParams({ position: 'absolute', top: '39%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '130%', left: '61%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '18.5%', width: '18%', height: '25%', };
                                    back_Top1Params1 = { top: '38%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '24%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1300) {
                                    // Animations for screens above 1300
                                    setModelParams({ position: 'absolute', top: '39%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '130%', left: '62%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '18%', width: '18%', height: '25%', };
                                    back_Top1Params1 = { top: '38%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '26.5%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1250) {
                                    // Animations for screens above 1250
                                    setModelParams({ position: 'absolute', top: '39%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '130%', left: '62.5%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '17%', width: '18%', height: '25%', };
                                    back_Top1Params1 = { top: '38%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '25%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1200) {
                                    // Animations for screens above 1200
                                    setModelParams({ position: 'absolute', top: '39%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '130%', left: '63.2%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '15.8%', width: '18%', height: '25%', };
                                    back_Top1Params1 = { top: '38%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '23.5%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1150) {
                                    // Animations for screens above 1150
                                    setModelParams({ position: 'absolute', top: '39%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '129%', left: '60.5%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '17%', width: '22%', height: '25%', };
                                    back_Top1Params1 = { top: '38%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '23.5%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1100) {
                                    // Animations for screens above 1100
                                    setModelParams({ position: 'absolute', top: '39%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '129%', left: '61.2%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '15.5%', width: '22%', height: '25%', };
                                    back_Top1Params1 = { top: '36%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '24%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1050) {
                                    // Animations for screens above 1050
                                    setModelParams({ position: 'absolute', top: '33%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '129%', left: '62%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '14.5%', width: '22%', height: '25%', };
                                    back_Top1Params1 = { top: '34%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '24%', width: '23%', height: '30%', };
                                } else if (screenWidth > 1000) {
                                    // Animations for screens above 1000px
                                    setModelParams({ position: 'absolute', top: '33%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '129%', left: '63%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '210%', left: '13%', width: '22%', height: '25%', };
                                    back_Top1Params1 = { top: '34%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '23%', width: '23%', height: '30%', };
                                } else if (screenWidth > 950) {
                                    // Animations for screens above 950
                                    setModelParams({ position: 'absolute', top: '33%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '121.5%', left: '59%', width: '16%', height: '25%', };
                                    Point2Params2 = { top: '184%', left: '22%', width: '16%', height: '25%', };
                                    back_Top1Params1 = { top: '34%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '23%', width: '23%', height: '30%', };
                                } else if (screenWidth > 900) {
                                    // Animations for screens above 900px
                                    setModelParams({ position: 'absolute', top: '33%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '122%', left: '59.5%', width: '17%', height: '25%', };
                                    Point2Params2 = { top: '184%', left: '21%', width: '16%', height: '25%', };
                                    back_Top1Params1 = { top: '32%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '50%', right: '23%', width: '23%', height: '30%', };
                                }
                                else if (screenWidth > 850) {
                                    // Animations for screens above 850
                                    setModelParams({ position: 'absolute', top: '31%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '122%', left: '61%', width: '17%', height: '25%', };
                                    Point2Params2 = { top: '184%', left: '19%', width: '16%', height: '25%', };
                                    back_Top1Params1 = { top: '32%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '50%', right: '24%', width: '23%', height: '30%', };
                                } else if (screenWidth > 800) {
                                    // Animations for screens above 800
                                    setModelParams({ position: 'absolute', top: '31%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '121%', left: '61%', width: '20%', height: '30%', };
                                    Point2Params2 = { top: '182%', left: '16%', width: '20%', height: '30%', };
                                    back_Top1Params1 = { top: '32%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '50%', right: '24%', width: '23%', height: '30%', };
                                }

                                else if (screenWidth > 768) {
                                    // Animations for screens above 750
                                    setModelParams({ position: 'absolute', top: '31%', left: '19%', width: '12%', height: '20%', zIndex: 2 });
                                    Point1Params1 = { top: '129%', left: '61%', width: '20%', height: '30%', };
                                    Point2Params2 = { top: '212.7%', left: '12%', width: '25%', height: '30%', };
                                    back_Top1Params1 = { top: '30%', left: '19%', width: '12%', height: '20%', };
                                    back_Top2Params2 = { top: '52%', right: '24%', width: '23%', height: '30%', };
                                }
                               



        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 95%",
                end: "70% 70%",
                scrub: true,
                width: '22%',
                height: '30%',
                onLeaveBack: () => {
                    gsap.set("#model", { ...back_Top1Params1 });
                },
                // markers: true,
            }
        });

        tl.to("#model", {
            ...Point1Params1
        }, 'orange');

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "0% 95%",
                end: "20% 50%",
                scrub: true,
                onLeaveBack: () => {
                    gsap.set("#model", { ...back_Top2Params2 });
                },
                // markers: true,
            }
        });

        tl2.to("#model", {
            ...Point2Params2
        }, 'ca');
    }, []);


    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                alignItems: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                position: 'relative',

            }} id='home_top' className="one st-hero-wrap background_color">
                <div className='hero_container'>
                    <div className="row">
                        <img style={{ ...modelParams }} id="model" src={model1} alt="" />
                        <img style={{ height: '50%', width: '50%' }} id='hero_img' src={hero2} alt="Hero" />
                        <div className="col-md-6 mb-12 lg-12 d-flex justify-content-center align-items-center hero_container">
                            <div >
                                <h2 className='fs-5 col-lg-10 col-sm-12'>REVOLUTIONIZING RETAIL WITH AUGMENTED REALITY</h2>
                                <p>
                                    Discover cutting-edge tools designed to create and share realistic 3D content and augmented reality experiences. Enhance e-commerce and digital marketing strategies to captivate audiences and increase sales.
                                </p>
                                <div className='st-single-contact-info1'>

                                    <img style={{ height: 70, width: 70 }} src="assets/img/logo.png" alt="Davis" />
                                    <h3>REMARKABLY AI</h3>
                                </div>
                                <div style={{padding:7}} className="st-hero-btn ">
                                    <a href="#contact" className="st-btn st-style1 st-color1 st-smooth-move">Request Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="two">

                <section id="benefits" className="st-about-wrap py-5">
                    <div className="container">
                        <div className="st-section-heading st-style1">
                            <h4 className="st-section-heading-title">PRODUCT BENEFITS</h4>
                        </div>
                        <div className="row">
                            {/* Text Column */}
                            <div className="col-md-6 mb-0 d-flex justify-content-center align-items-center">
                                <div className="text-start text-md-start">
                                    <h2  style={{ fontSize: '1.75rem', fontWeight: 'bold' }} className="st-text-block-title">Why Choose Us?</h2>
                                    <ul className="st-benefits-list">
                                        <li>Efficient & hassle-free Virtual Try-on.</li>
                                        <li>Smart analytics on customer interactions.</li>
                                        <li>Enabling retailers to optimize stock.</li>
                                        <li>Enhance their inventory.</li>
                                        <li>Tailor marketing strategies.</li>
                                        <li>Reduced Returns.</li>
                                        <li>Increase User Engagement.</li>
                                    </ul>

                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="col-md-6 mb-0 d-flex justify-content-center align-items-center">
                                <img id='girl1'
                                    className="img-fluid"
                                    src={girl3}
                                    alt="Description"
                                />
                                 <img id='product14'
                                    className="img-fluid"
                                    src={product14}
                                    alt="Description"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <section id="about" className="st-about-wrap three" >
                {/* <div style={{ height: '100px' }}></div> */}
                <div className='container'>
                    <div className="st-section-heading st-style1">
                        <h4 className="st-section-heading-title">ABOUT US</h4>
                    </div>

                    <div className="row">

                        {/* Image Column */}
                        <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
                            <img id='girl1'
                                className="img-fluid"
                                src={girl10}
                                alt="Description"
                            />
                            <img style={{width:'100%',height:'100%'}} id='product14'
                                    className="img-fluid"
                                    src={hip_hop_gif}
                                    alt="Description"
                                />
                                
                        </div>
                        {/* Text Column */}
                        <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
                            <div className="text-start text-md-start">
                                <div className="st-testimonial st-style1" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                    <div className="st-testimonial-text">
                                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Welcome to RemarkablyAI</h2>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Augmented Reality</h4>
                                        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                            We're redefining retail with augmented reality (AR) for Jewellery and Wrist Watches. Our innovative platform bridges virtual and physical worlds, enhancing customer engagement and driving sales. Join us in revolutionizing the retail experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div style={{ height: '30px' }}></div> */}
            </section>

            <Earings_view />
            <FeaturesSection />  
            <Request_Demo />
            <Skill />
            <SolutionSection />
            <Product_view />
            <Portfolio />
            <MarketStatus />
            <BusinessModel />
            <Review />
            <Contact />
            <Footer/>
            </ >
    );
};

export default AnimatedPage;
