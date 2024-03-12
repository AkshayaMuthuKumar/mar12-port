import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1709967938895.json';

const LottieAnimation = () => {
  const animationStyle = {
    height: 400,
    width: 500,
  };

  return <Lottie className='float-right' animationData={animationData} style={animationStyle} />;
};

export default LottieAnimation;
