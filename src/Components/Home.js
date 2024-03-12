import React from 'react';
import LottieAnimation from './animate';
import '../styles/navbar.css';

// import bg from '../assets/bgk.jpg';


const Home = () => (
  <>
    <style>
      {`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}
    </style>
    <div className="navbar flex flex-col sm:flex-row items-center justify-center min-h-screen overflow-hidden relative animate-fade-in">


      {/* Left side with animation */}
      <div className="w-full sm:w-7/12 mb-4 sm:mb-0">
        <LottieAnimation />
      </div>


      {/* Right side with project information */}
      <div className="w-full sm:w-5/12 text-white p-6 sm:p-8 sm:flex-col-reverse sm:items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Innovative Solutions for a Digital World</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Welcome to Five Y Technologies! We are a leading software firm located in the vibrant city of Madurai. With a dynamic team of 28 adept developers and testers, we specialize in crafting innovative solutions for a digital world. Our blend of youthful energy and seasoned expertise ensures that we deliver groundbreaking solutions tailored to our clients' unique requirements.
        </p>
        <p className="mt-4 text-sm">
          For deeper insights, explore our website at <a href="https://fiveytech.com/" className="text-blue-200" target="_blank" rel="noopener noreferrer">https://fiveytech.com</a>.
        </p>
        <div className="mt-8 flex items-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Get Started</button>
        </div>
      </div>
    </div>
  </>
);


export default Home;