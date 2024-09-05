import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import earings1 from '../Assets/earings1.webp';
import earings2 from '../Assets/earings3.webp';
import girl5 from '../Assets/girl5.webp';
import Earings_gif from '../Assets/Earings_gif.gif';
import './Earings_view.css';

function Earings_view() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(screenWidth > 600);
    const videoRef = useRef(null);

    // Handle window resize
    const handleResize = () => setScreenWidth(window.innerWidth);



    useEffect(() => {

        const animate = () => {
            const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 1
            });

            // Default animation parameters
            let earings1Params = {};
            let earings2Params = {};

            if (screenWidth > 1200) {
                // Animations for screens above 1200px
                earings1Params = { x: 665, y: -30, width: '10%' };
                earings2Params = { x: 390, y: -30, width: '10%' };
            } else if (screenWidth > 1000) {
                // Animations for screens between 1000px and 1200px
                earings1Params = { x: 560, y: -25, width: '20%' };
                earings2Params = { x: 320, y: -15, width: '20%' };
            } else if (screenWidth > 768) {
                // Animations for screens between 768px and 1000px
                earings1Params = { x: 410, y: -20, width: '20%' };
                earings2Params = { x: 240, y: -13, width: '20%' };
            } else if (screenWidth > 600) {
                // Animations for screens between 600px and 768px
                earings1Params = { x: 307, y: -10, width: '20%' };
                earings2Params = { x: 180, y: -7, width: '20%' };
            } else {
                // Animations for screens below 600px
                earings1Params = { x: 120, y: 0, width: '10%' };
                earings2Params = { x: 120, y: 0, width: '10%' };
            }

            // Set up animation timeline
            timeline
                .to('#earings1', {
                    ...earings1Params,
                    duration: 1
                })
                .to('#earings1', {
                    x: 0,
                    y: 0,
                    scale: 1,
                    width: '70%',
                    duration: 1,
                    ease: 'back.inOut',
                    delay: 1.5,
                    onComplete: () => {
                        gsap.to('#earings2', {
                            duration: 1,
                            ease: 'back.inOut',
                            overwrite: 'auto'
                        });
                    }
                })
                .to('#earings2', {
                    ...earings2Params,
                    duration: 1
                })
                .to('#earings2', {
                    x: 0,
                    y: 0,
                    scale: 1,
                    width: '70%',
                    duration: 1,
                    ease: 'back.inOut',
                    delay: 1.5,
                    onComplete: () => {
                        gsap.to('#earings1', {
                            duration: 1,
                            ease: 'back.inOut',
                            overwrite: 'auto'
                        });
                    }
                });
        };

        animate(); // Set initial styles
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);

    return (
        <section id='earings_view'>
            <div className="container Earrings1">
                <div className="row" style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh' }}>
                    <div className="left-four" style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '100%' }}>
                        <div className="card-row" style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                            <div className="card1" style={{ position: 'relative', width: '50%' }}>
                                <img id='earings1' src={earings1} alt="earings" />
                            </div>
                            <div className="card1" style={{ position: 'relative', width: '50%' }}>
                                <img id='earings2' src={earings2} alt="earings" />
                            </div>
                        </div>
                    </div>
                    <div className="right-four" style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={girl5} alt="Girl" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>


            <div className="container Earrings2">
                <div className="row" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <img id='product14'
                        className="img-fluid"
                        src={Earings_gif}
                        alt="Description"
                    />

                </div>
            </div>

        </section>


    );
}

export default Earings_view;
