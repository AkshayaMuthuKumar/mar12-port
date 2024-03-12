import React, { useRef, useEffect, useState } from 'react';
import '../styles/navbar.css'
import animeAppointment from '../assets/appointment.json';
import animeRegistration from '../assets/registration.json';
import animeBilling from '../assets/billing.json';
import lottie from 'lottie-web'; // Import lottie library
import { color } from 'framer-motion';

function Products() {
    const sliderRef = useRef(null);
    const registrationRef = useRef(null);
    const appointmentRef = useRef(null);
    const billingRef = useRef(null);

    const [animationsLoaded, setAnimationsLoaded] = useState(false);
    const [registrationLoaded, setRegistrationLoaded] = useState(false);
    const [billingLoaded, setBillingLoaded] = useState(false);
    const [appointmentLoaded, setAppointmentLoaded] = useState(false);

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        if (!animationsLoaded) {
            if (!registrationLoaded && registrationRef.current) {
                lottie.loadAnimation({
                    container: registrationRef.current,
                    animationData: animeRegistration,
                    loop: true,
                    autoplay: true,
                });
                setRegistrationLoaded(true);
            }

            if (!appointmentLoaded && appointmentRef.current) {
                lottie.loadAnimation({
                    container: appointmentRef.current,
                    animationData: animeAppointment,
                    loop: true,
                    autoplay: true,
                });
                setAppointmentLoaded(true);
            }

            if (!billingLoaded && billingRef.current) {
                lottie.loadAnimation({
                    container: billingRef.current,
                    animationData: animeBilling,
                    loop: true,
                    autoplay: true,
                });
                setBillingLoaded(true);
            }

            setAnimationsLoaded(true);
        }
    }, [animationsLoaded]);

    return (
        <div className='navbar h-screen '>
            <style>
                {`
                .slider-container {
                    width: 100%; /* Adjust the width as needed */
                    margin: 0 auto;
                    overflow: hidden;
                    position: relative; /* Required for absolute positioning */
                }
                
                .slider {
                    display: flex;
                    transition: transform 0.5s ease;
                    margin-top: 150px;
                }
                
                .slider-item {
                    flex: 0 0 auto;
                    width: 440px; /* Adjust the width of each item */
                    height: 480px; /* Adjust the width of each item */
                    padding: 10px;
                    background-color:rgb(1, 6, 27);
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    margin-right: 10px;
                }
                
                .slider-nav {
                    position: absolute; /* Position the navigation buttons */
                    left: 0;
                    right: 0;
                    text-align: center;
                }
                
                .prev,
                .next {
                    padding: 5px 10px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-right: 10px;
                }
                
                .prev:hover,
                .next:hover {
                    background-color: #0056b3;
                }
                `}
            </style>

            <div className="slider-container">
                <div className="slider">
                <div className="slider-item" ref={registrationRef}>
                        <h1 style={{color : "white", fontSize: "32px", textAlign: "center"}}>REGISTRATION</h1>
                    </div>
                <div className="slider-item" ref={appointmentRef}>
                        <h1 style={{color : "white", fontSize: "32px", textAlign: "center"}}>APPOINTMENT</h1>
                    </div>
                    <div className="slider-item" ref={billingRef}>
                        <h1 style={{color : "white", fontSize: "32px", textAlign: "center"}}>BILLING</h1>
                    </div>                    
                    <div className="slider-item">Outpatient</div>
                    <div className="slider-item">Doctor</div>
                    <div className="slider-item">Pharmacy Billing</div>
                    <div className="slider-item">Pharmacy Purchase</div>
                    <div className="slider-item">Pharmacy Stock</div>
                    <div className="slider-item">Chatbot</div>
                </div>
            </div>
            <div className="slider-nav mt-[10px]">
                <button className="prev" onClick={handlePrevClick}>Prev</button>
                <button className="next" onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
}

export default Products;
