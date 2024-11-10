// app/page.js

import { FaHome, FaLongArrowAltRight } from "react-icons/fa";
import FavouriteCard from "./FavouriteCard";
import { FiPrinter, FiDownload, FiShare2, FiX } from 'react-icons/fi';


export default function Page() {
  const products = [
    {
      name: 'MacBook',
      description: 'Apple MacBook Pro (Late 2021) Apple M1 Pro',
      price: '299,000',
      offer: 'Save Tk 10,000 on online order',
      image: 'https://www.ryans.com/storage/products/small/dell-vostro-15-3530-intel-core-i3-1305u-8gb-ram-71726374426.webp', // Replace with actual image path
    },
    {
      name: 'Laser Printer',
      description: 'Pantum BP5100DN Single Function Mono Laser Printer',
      price: '24,000',
      offer: 'Save Tk 500 on online order',
      image: 'https://www.ryans.com/storage/products/small/dell-vostro-15-3530-intel-core-i3-1305u-8gb-ram-71726374426.webp', // Replace with actual image path
    },
    {
        name: 'MacBook',
        description: 'Apple MacBook Pro (Late 2021) Apple M1 Pro',
        price: '299,000',
        offer: 'Save Tk 10,000 on online order',
        image: 'https://www.ryans.com/storage/products/small/dell-vostro-15-3530-intel-core-i3-1305u-8gb-ram-71726374426.webp', // Replace with actual image path
      },
      {
        name: 'Laser Printer',
        description: 'Pantum BP5100DN Single Function Mono Laser Printer',
        price: '24,000',
        offer: 'Save Tk 500 on online order',
        image: 'https://www.ryans.com/storage/products/small/dell-vostro-15-3530-intel-core-i3-1305u-8gb-ram-71726374426.webp', // Replace with actual image path
      },
      {
        name: 'MacBook',
        description: 'Apple MacBook Pro (Late 2021) Apple M1 Pro',
        price: '299,000',
        offer: 'Save Tk 10,000 on online order',
        image: 'https://www.ryans.com/storage/products/small/dell-vostro-15-3530-intel-core-i3-1305u-8gb-ram-71726374426.webp', // Replace with actual image path
      },
  ];

  return (
   <div className="pt-3 pb-7 px-3 md:px-10 lg:px-9 mb-5 bg-[#F2F2F2]">

<div className="flex justify-start items-center gap-2 text-gray-800 bg-white px-3 py-1 border mb-4 text-xs md:text-base">
                        <FaHome /> <FaLongArrowAltRight /> Favourite
                    </div>

                    <div className="flex md:flex-row flex-col items-center justify-center md:justify-between mb-5">
                        <div className="flex items-center gap-1 text-gray-800 mb-2 md:mb-0">
                            <p className="md:text-2xl text-base font-bold">Favorites</p>
                            <p className="text-gray-500 font-bold text-xs">(1 Products found)</p>
                        </div>
                        <div className="flex space-x-4 text-gray-800">
      {/* Print Button */}
      <button className="flex flex-col items-center justify-center w-14 h-12 bg-white shadow-md rounded-lg hover:bg-gray-100">
        <FiPrinter className="text-xl font-bold " />
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
    <div>
        {/* <a href="#" className="text-orange-600 hover:underline">See all categories</a> */}
      </div>
     <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-5">
      
      {products?.map((product, index) => (
        <FavouriteCard key={index} product={product} />
      ))}
    </div>
   </div>
  );
}
