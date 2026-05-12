import React from 'react';
import { Link } from 'react-router-dom';  // For navigation
import icon1 from '../../assets/homepage/c1.png';  // Replace with actual image paths
import icon2 from '../../assets/homepage/c2.png';
import icon3 from '../../assets/homepage/c3.png';
import contactImage from '../../assets/homepage/contact.png'; // Replace with actual image path

const LogisticsSection = () => {
  return (
    <div className="logistics-wrapper">
      {/* Logistics Steps Section */}
      <section className="logistics-section py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: Circle with images */}
            <div className="relative flex justify-center items-center">
              <div className="grey-circle">
                {/* Grey circle background */}
              </div>
              <div className="black-border">
                <div className="white-circle cir-1">
                  <img src={icon1} alt="Global Logistics Operation" />
                </div>
                <div className="white-circle cir-2">
                  <img src={icon2} alt="Modern Warehousing Technique" />
                </div>
                <div className="white-circle cir-3">
                  <img src={icon3} alt="International Transportation" />
                </div>
              </div>
            </div>

            {/* Right side: Text content */}
            <div className="design-text">
              <div className="text-1 mb-4">
                <h3 className="text-xl font-semibold">Global Logistics Operation</h3>
                <p className="text-sm text-gray-600">Giving consultancy for every financial projection report and analysis for existing projects.</p>
              </div>

              <div className="text-2 mb-4">
                <h3 className="text-xl font-semibold">Modern Warehousing Technique</h3>
                <p className="text-sm text-gray-600">Giving consultancy for every financial projection report and analysis for existing projects.</p>
              </div>

              <div className="text-3">
                <h3 className="text-xl font-semibold">International Transportation</h3>
                <p className="text-sm text-gray-600">Expert financial project consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section mt-16 py-16 px-4 md:px-8  text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto p-8 rounded-3xl shadow-lg bg-[#FF8A00]">
            {/* Left side text */}
            <div className="con-1 text-center md:text-left md:w-1/2">
              <h1 className="text-3xl font-bold mb-4">We ensure safe transportation & delivery</h1>
              <p className="text-lg mb-4">"Reliable and secure services that guarantee timely delivery, protecting your cargo throughout its journey across all transport modes."</p>
            </div>

            {/* Right side image */}
            <div className="con-2 mb-6 md:mb-0 md:w-1/4">
              <img src={contactImage} alt="Contact Image" className="w-full h-full rounded-lg " />
            </div>

            {/* Right side button */}
            <div className="contact-info text-center md:text-left md:w-1/4">
              <a href="tel:+91-74993-58403" className="contact-button inline-block bg-white text-orange-600 py-3 px-6 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition duration-300">
                Call Us: +91 74993 58403
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsSection;