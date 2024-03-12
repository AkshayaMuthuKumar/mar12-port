import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

function DelayedTransition({ show, delay, children, className }) {
  const [delayedShow, setDelayedShow] = useState(false);

  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        setDelayedShow(true);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [show, delay]);

  return (
    <Transition
      show={show && delayedShow}
      enter="transition ease-out duration-500 transform"
      enterFrom="translate-y-full opacity-0"
      enterTo="translate-y-0 opacity-100"
      className={className}
    >
      {children}
    </Transition>
  );
}

function Services() {
  const [showFirstColumn, setShowFirstColumn] = useState(false);
  const [showSecondColumn, setShowSecondColumn] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setShowFirstColumn(true);
    setShowSecondColumn(true);
    setShowCards(true);
  }, []);

  return (
    <div className="container-fluid h-screen flex flex-col justify-center items-center animate-fadeIn  p-2" style={{ backgroundColor: 'rgb(1, 6, 27)' }}>
      {/* First Row */}
      <div className="w-full h-3/4 flex justify-between gap-4 p-2" style={{ backgroundColor: 'rgb(1, 6, 27)' }}>
        {/* First Column */}
        <Transition
          show={showFirstColumn}
          enter="transition ease-out duration-500 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          className="w-3/5 h-full text-white flex items-center"
          style={{ backgroundColor: 'rgb(1, 6, 27)',filter:'drop-shadow(0px 0px 10px rgba(255, 255, 255 ,0.2)' }}
        >
          Hospital Management Systems (HMS) are crucial software solutions in today's healthcare landscape, offering comprehensive automation for administrative, clinical, and financial processes within healthcare facilities. They streamline operations from patient registration to billing and inventory management, playing a pivotal role in modern healthcare settings.
          <br />
          HMS is essential for optimizing resource utilization, enhancing patient outcomes, and ensuring regulatory compliance. By improving efficiency, reducing errors, and providing timely access to medical services, HMS elevates the patient experience while enabling data-driven decision-making and fostering continuous improvement in healthcare delivery.
          <br />
          In an era of increasing demands and evolving healthcare models, HMS serves as a cornerstone for operational excellence, revenue maximization, and patient-centric care. Its role in driving innovation, collaboration, and transformation across the healthcare ecosystem continues to grow, making it indispensable for healthcare organizations striving to meet the challenges of today and tomorrow.
        </Transition>

        {/* Second Column */}
        <Transition
          show={showSecondColumn}
          enter="transition ease-out duration-500 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          className="w-2/5 h-full bg-[rgb(1, 6, 27)] flex justify-center items-center"
          style={{ backgroundColor: 'rgb(1, 6, 27)',filter:'drop-shadow(0px 0px 10px rgba(255, 255, 255 ,0.2)' }}
        >
          <h2 className="text-white text-4xl font-bold">Second Column</h2>
        </Transition>
      </div>
      {/* Second Row */}
      <div className="w-full h-1/4 flex justify-between mt-8 gap-4 p-2" style={{ backgroundColor: 'rgb(1, 6, 27)' }}>
        {/* Card 1 */}
        <DelayedTransition show={showCards} delay={200} className="w-1/5">
          <div className="h-full flex justify-center items-center" style={{ backgroundColor: 'rgb(1, 6, 27)',filter:'drop-shadow(0px 0px 10px rgba(255, 255, 255 ,0.2)' }}>
            <h2 className="text-white text-4xl font-bold">Card 1</h2>
          </div>
        </DelayedTransition>
        {/* Card 2 */}
        <DelayedTransition show={showCards} delay={400} className="w-1/5">
          <div className="h-full  flex justify-center items-center" style={{ backgroundColor: 'rgb(1, 6, 27)',filter:'drop-shadow(0px 0px 10px rgba(255, 255, 255 ,0.2)' }}>
            <h2 className="text-white text-4xl font-bold">Card 2</h2>
          </div>
        </DelayedTransition>
        {/* Card 3 */}
        <DelayedTransition show={showCards} delay={600} className="w-1/5">
          <div className="h-full  flex justify-center items-center" style={{ backgroundColor: 'rgb(1, 6, 27)' ,filter:'drop-shadow(0px 0px 10px rgba(255, 255, 255 ,0.2)'}}>
            <h2 className="text-white text-4xl font-bold">Card 3</h2>
          </div>
        </DelayedTransition>
        {/* Card 4 */}
        <DelayedTransition show={showCards} delay={800} className="w-1/5">
          <div className="h-full  flex justify-center items-center" style={{ backgroundColor: 'rgb(1, 6, 27)',filter:'drop-shadow(0px 0px 10px rgba(255, 255, 255 ,0.2)' }} >
            <h2 className="text-white text-4xl font-bold">Card 4</h2>
          </div>
        </DelayedTransition>
        {/* Card 5 */}
        <DelayedTransition show={showCards} delay={1000} className="w-1/5 " s>
          <div className="h-full  flex justify-center border-white items-center" style={{ backgroundColor: 'rgb(1, 6, 27)',filter:'drop-shadow(0px 0px 10px rgba(255, 255, 255 ,0.2)' }}>
            <h2 className="text-white text-4xl font-bold">Card 5</h2>
          </div>
        </DelayedTransition>
      </div>
    </div>
  );
}

export default Services;