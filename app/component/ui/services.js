// components/InfoBar.js
import { FaHeadset, FaMoneyBillWave, FaCreditCard, FaTruck, FaPhone } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
        <div className="mt-4 hidden gap-y-3 md:gap-y-0 md:flex items-center justify-center w-9/12 mx-auto">


          {/* Item 2 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2">
            <FaPhone className="text-green-500 text-xl md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[#AD7A2A]">0% EMI</span>
          </div>

          {/* Divider */}
          <div className="mx-4 border-l h-5 border-black hidden lg:grid"></div>


          {/* Item 1 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2">
            <FaHeadset className="text-green-500 text-xl md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[#AD7A2A]">24/7 Online Support</span>
          </div>

          {/* Divider */}
          <div className="mx-4 border-l h-5 border-black hidden lg:grid"></div>



          {/* Item 3 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2">
            <FaCreditCard className="text-green-500 text-xl md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[#AD7A2A]">No charge on card payment</span>
          </div>

          {/* Divider */}
          <div className="mx-4 border-l h-5 border-black hidden lg:grid"></div>

          {/* Item 4 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2">
            <FaTruck className="text-green-500 text-xl md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[#AD7A2A]">Cash on delivery in 64 districts</span>
          </div>
        </div>


        <div className=" lg:hidden grid grid-cols-2 gap-y-3 md:gap-y-0 gap-4 md:flex items-center justify-center w-[95%] mx-auto pb-1">


          {/* Item 2 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2 bg-white">
            <FaPhone className="bg-[#72BF44] h-12 w-3/12 p-2 text-[5px] md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[12px] w-9/12 text-gray-800 py-1">16810</span>
          </div>

          {/* Divider */}
          <div className="mx-4 border-l h-5 border-black hidden lg:grid"></div>

          


          {/* Item 1 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2 bg-white">
            <FaHeadset className="bg-[#72BF44] h-12 w-3/12 p-2 text-[30px] md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[12px] w-9/12 text-gray-800 py-1">24/7 Online Support</span>
          </div>

          {/* Divider */}
          <div className="mx-4 border-l h-5 border-black hidden lg:grid"></div>



          {/* Item 3 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2 bg-white">
            <FaCreditCard className="bg-[#72BF44] h-12 w-3/12 p-2 text-[40px] md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[12px] w-9/12 text-gray-800 py-1">No charge on card payment</span>
          </div>

          {/* Divider */}
          <div className="mx-4 border-l h-5 border-black hidden lg:grid"></div>

          {/* Item 4 */}
          <div className="flex md:flex-col lg:flex-row items-center space-x-2 bg-white">
            <FaTruck className="bg-[#72BF44] py-3 h-12 w-3/12 px-2 text-[43px] md:mb-3 lg:mb-0" />
            <span className="font-semibold text-[12px] w-9/12 text-gray-800 py-1">Cash on delivery in 64 districts</span>
          </div>
        </div>
    </div>
  );
};

export default Services;
