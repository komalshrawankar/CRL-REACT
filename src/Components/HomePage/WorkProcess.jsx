import React from 'react';
import step1Icon from '../../assets/homepage/step1-1.png'; // Replace with actual image paths
import step2Icon from '../../assets/homepage/step2-2.png';
import step3Icon from '../../assets/homepage/step3-3.png';

const WorkProcess = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="text-lg font-semibold text-orange-600">Our work Process</div>
          <h2 className="text-3xl font-bold text-gray-900">We always follow the best ways of logistics</h2>
          <p className="text-lg text-gray-600 mt-4">
            Committed to using the most efficient and reliable logistics practices, ensuring timely and secure delivery for all our clients.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
           
            <img src={step1Icon} alt="Step 1"  />
            <h3 className="text-xl font-semibold">Step 1. Receive Packages</h3>
            <p className="text-sm text-gray-600 mt-2">
              Logisco Air freight service deliver to knowledge & opportunity to optimize. Logisco Air freight service deliver to knowledge and opportunity to optimize.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
           
            <img src={step2Icon} alt="Step 2" />
            <h3 className="text-xl font-semibold">Step 2. Transport Packages</h3>
            <p className="text-sm text-gray-600 mt-2">
              Logisco Air freight service deliver to knowledge & opportunity to optimize. Logisco Air freight service deliver to knowledge and opportunity to optimize.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            
            <img src={step3Icon} alt="Step 3" />
            <h3 className="text-xl font-semibold">Step 3. Deliver Packages</h3>
            <p className="text-sm text-gray-600 mt-2">
              Logisco Air freight service deliver to knowledge & opportunity to optimize. Logisco Air freight service deliver to knowledge and opportunity to optimize.
            </p>
          </div>
        </div>

        {/* Arrow connecting the steps */}
        <div className="flex justify-between items-center mt-12">
          <div className="w-1/4 border-t-4 border-dashed border-gray-300"></div>
          <div className="w-1/4 border-t-4 border-dashed border-gray-300"></div>
          <div className="w-1/4 border-t-4 border-dashed border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;