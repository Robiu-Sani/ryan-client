"use client"

import { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { FiDownload, FiPrinter, FiShare2, FiX } from "react-icons/fi";

const PcBuilder = () => {

  const [items, setItems] = useState('Select Other Component');

  const infos = [
      {
          img:'https://www.ryans.com/storage/pc-builder-components/cpu-48x48_1686724838.png',
          title:"CPU"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/2310600_1686989058.png',
          title:"Motherboard"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/RAM_1686989592.png',
          title:"Ram"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/SSD-48x48_1686989668.png',
          title:"SSD"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/hard-disk_1686990181.png',
          title:"HDD"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/cpu_1686989918.png',
          title:"Casing"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/166802_1686989939.png',
          title:"Keyboard"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/Mouse_1686989966.png',
          title:"Mouse"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/2194087-200_1686989982.png',
          title:"Monitor"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/cooler-fan_1686990008.png',
          title:"CPU Cooler"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/gpu-48x48_1686990042.png',
          title:"Graphics Card"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/1470116_1686990072.png',
          title:"Power Supply"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/casing_fan_1686990102.png',
          title:"Casing Fan"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/ups_1686990117.png',
          title:"UPS"
      },
      {
          img:'https://www.ryans.com/storage/pc-builder-components/3137678_1686990169.png',
          title:"Optical Device"
      },
  ]

  const countryPhoneCodes = [
    "Access Control",
    "Accessories",
    "Action Camera",
    "Antivirus",
    "Barcode Scanner",
];


  const handleItemsChange = (e) => {
    const selectedCountry = e.target.value;
    setItems(selectedCountry);
  };
 

  return (
  <div className="bg-[#F2F2F2] text-black py-2">
    <div className="hidden md:flex md:flex-row flex-col items-center justify-between md:justify-between mb-5 my-5 bg-white shadow-sm px-40 py-3">
      <div className="text-black font-semibold border-2 border-black py-2 px-3">
          Total Tk 0
      </div>
      <div className="flex flex-col items-center gap-1 relative left-16 text-black mb-2 md:mb-0 text-center">
          <p className="md:text-2xl text-base font-bold">PC Builder</p>
          <p className="text-xs">Select Your Components</p>
      </div>
      <div className="flex space-x-4 text-gray-800">
      {/* Print Button */}
      <button className="flex flex-col items-center justify-center w-14 h-12 bg-white shadow-md rounded-lg hover:bg-gray-100">
        <FiPrinter className="text-2xl font-bold " />
        <span className="mt-1 text-[8px]">Print</span>
      </button>

      {/* Download Button */}
      <button className="flex flex-col items-center justify-center w-14 h-12 bg-white shadow-md rounded-lg hover:bg-gray-100">
        <FiDownload className="text-xl font-bold " />
        <span className="mt-1 text-[8px]">Download</span>
      </button>

      {/* Share Button */}
      <button className="flex flex-col items-center justify-center w-14 h-12 bg-white shadow-md rounded-lg hover:bg-gray-100">
        <FiShare2 className="text-xl font-bold " />
        <span className="mt-1 text-[8px]">Share</span>
      </button>

      {/* Clear All Button */}
      <button className="flex flex-col items-center justify-center w-14 h-12 bg-white shadow-md rounded-lg hover:bg-gray-100">
        <FiX className="text-xl font-bold" />
        <span className="mt-1 text-[8px]">Clear All</span>
      </button>
      </div>
    </div>


    <div className="flex md:hidden md:flex-row flex-col items-center justify-between md:justify-between mb-2 bg-white shadow-sm  py-2">
      
      <div className="flex flex-col items-center gap-1 justify-center text-black mb-2 md:mb-0 text-center">
          <p className="text-xl font-bold">PC Builder</p>
          <p className="text-xs">Select Your Components</p>
      </div>
    </div>
    <div className="flex md:hidden items-center justify-between md:justify-between mb-5 mt-2 bg-white shadow-sm px-2 py-1">
      <div className="text-black text-xs font-semibold border-2 border-black py-1 px-2">
          Total Tk 0
      </div>
      <div className="flex text-gray-800">
      {/* Print Button */}
      <button className="flex flex-col items-center justify-center w-12 h-12 ">
        <FiPrinter className="text-2xl font-bold " />
      </button>

      {/* Download Button */}
      <button className="flex flex-col items-center justify-center w-12 h-12 ">
        <FiDownload className="text-2xl font-bold " />
      </button>

      {/* Share Button */}
      <button className="flex flex-col items-center justify-center w-12 h-12 ">
        <FiShare2 className="text-2xl font-bold " />
      </button>

      {/* Clear All Button */}
      <button className="flex flex-col items-center justify-center w-12 h-12 ">
        <FiX className="text-2xl font-bold" />
      </button>
      </div>
    </div>


     <div>
     <div className=' md:w-9/12 mx-auto bg-white pb-10 border border-gray-300'>
            <div className='flex justify-between items-center gap-5 md:gap-0 bg-[#6F6F6F] text-white py-1 px-2 md:px-4'>
                <div className='flex items-center justify between text-sm font-bold gap-1 md:gap-3'>
                    <p className='text-xs md:text-base'>Your Build PC</p>
                    <p className='text-[#6F6F6F] bg-white text-center  md:p-2 border-2 border-[#C7C7C7] shadow-sm text-xs md:text-base'>Estimated Power Consumption 0W</p>
                </div>
                <div><FaSyncAlt className='md:mr-4'/></div>
            </div>

            {
                infos.map((info,index)=>(
                    <div key={index} className='flex justify-between items-center py-4 px-3 border-b-[1.5px] border-[#CCCCCC]'>
                <div className='flex items-center gap-2'>
                    <img src={info.img} className='w-[55px]'  alt="" />
                    <p className='font-bold text-xs md:text-base'>{info.title}</p>
                </div>
                <div className='border border-[#C7C7C7] rounded-full py-[6px] px-4 text-sm hover:bg-[#72BF44] hover:text-white transition-all'>Select</div>
            </div>
                ))
            }
            <div className='py-4 px-3 border-b-[1.5px] border-[#CCCCCC] flex items-center justify-between'>
            <select
                        className="w-4/12 px-4 py-1 border border-gray-400 rounded-md focus:outline-none"
                        value={items}
                        onChange={handleItemsChange}
                    >
                        {countryPhoneCodes.map((items) => (
                        <option key={items} value={items}>
                            {items}
                        </option>
                        ))}
                    </select>

                    <div className='border border-[#C7C7C7] rounded-full py-[6px] px-4 text-sm hover:bg-[#72BF44] hover:text-white transition-all'>Select</div>
            </div>
        </div>
     </div>
  </div>
  );
};

export default PcBuilder;
