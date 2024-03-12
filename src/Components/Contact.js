import React from 'react';
import '../styles/navbar.css';


const Contact = () => (
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
<div className="navbar flex flex-col items-center">
    <div className=" sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-6 text-teal-500">Get In Touch</h2>


      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700">Your Name</label>
          <input type="text" id="name" name="name" className="input-style" placeholder="John Doe" required />
        </div>


        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700">Your Email</label>
          <input type="email" id="email" name="email" className="input-style" placeholder="john@example.com" required />
        </div>


        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700">Your Message</label>
          <textarea id="message" name="message" rows="4" className="input-style" placeholder="How can we assist you?" required></textarea>
        </div>


        <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300">Send Message</button>
      </form>


     
    </div>


    <div className="mt-8 text-white text-center animate-fade-in">
  <p>No – 11, 1st Floor, 3rd Street, K K Nagar, Madurai, Tamil Nadu, India</p>
  <p>+91 63690 70815</p>
  <p>info@fiveytech.com</p>
</div>


<footer className=" text-white flex flex-col items-center">
<br/>

        <hr className=" w-2/3 border-gray-300" /> 
        <br/>
        <p className='animate-fade-in'>Copyright © 2023 Five Y Technologies. All Rights Reserved</p>
      </footer>
  </div>
  </>
);

export default Contact;