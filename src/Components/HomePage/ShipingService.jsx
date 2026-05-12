import React, { useEffect, useRef } from "react";

// IMAGES
import img1 from "../../assets/Sliders/21.png";
import img2 from "../../assets/Sliders/22.png";
import img3 from "../../assets/Sliders/23.png";
import img4 from "../../assets/Sliders/24.png";
import img5 from "../../assets/Sliders/25.png";
import img6 from "../../assets/Sliders/26.png";
import img7 from "../../assets/Sliders/27.png";
import img8 from "../../assets/Sliders/28.png";

// ICONS (ADD YOUR FIGMA ICONS HERE)
import icon1 from "../../assets/Sliders/icon1.png";
import icon2 from "../../assets/Sliders/icon2.png";
import icon3 from "../../assets/Sliders/icon3.png";
import icon4 from "../../assets/Sliders/icon1.png";
import icon5 from "../../assets/Sliders/icon2.png";
import icon6 from "../../assets/Sliders/icon3.png";
import icon7 from "../../assets/Sliders/icon1.png";
import icon8 from "../../assets/Sliders/icon2.png";

const services = [
  {
    img: img1,
    icon: icon1,
    title: "Domestic Shifting",
    desc: "Domestic shifting involves shifting goods from one place to another city.",
  },
  {
    img: img2,
    icon: icon2,
    title: "Household Shifting",
    desc: "Shifting of all household items like glass items, paintings, and more.",
  },
  {
    img: img3,
    icon: icon3,
    title: "Office Shifting",
    desc: "We provide complete office relocation services from start to end.",
  },
  {
    img: img4,
    icon: icon1,
    title: "Car Shifting",
    desc: "Safe and secure car transportation across cities.",
  },
  {
    img: img5,
    icon: icon2,
    title: "Corporate Shifting",
    desc: "Professional corporate relocation services with minimal downtime.",
  },
  {
    img: img6,
    icon: icon3,
    title: "International Shifting",
    desc: "Seamless international relocation with full support.",
  },
  {
    img: img7,
    icon: icon1,
    title: "Storage Facility",
    desc: "Secure storage facilities for your belongings.",
  },
  {
    img: img8,
    icon: icon2,
    title: "Bulk Shifting",
    desc: "Efficient bulk goods shifting services.",
  },
];

const ShipingService = () => {
  const sliderRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (!slider) return;

      scrollAmount += 0.5; // smooth slow scroll
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(slide, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="text-sm text-gray-700">Shipping Services</span>
          </div>

          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            What we Offer
          </h2>

          {/* DESC */}
          <p className="text-gray-500 text-sm max-w-md mb-6">
            Comprehensive logistics solutions for seamless and efficient
            business management.
          </p>

          {/* COUNTER */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <button className="w-8 h-8 rounded-full border flex items-center justify-center">
              ←
            </button>
            <span>1 / 2</span>
          </div>

        </div>

        {/* RIGHT SLIDER */}
        <div className="overflow-hidden relative">

          {/* FADE EDGES */}
          <div className="absolute left-0 top-0 h-full w-16  z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16  z-10"></div>

          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-hidden"
          >
            {[...services, ...services].map((item, i) => (
              <div
                key={i}
                className="min-w-[240px] bg-white   overflow-hidden relative hover:-translate-y-1 transition duration-300"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-32 object-cover"
                  />

                  {/* ORANGE ICON */}
                  <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 
                  rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-8 pb-4 px-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-500 leading-snug">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default ShipingService;