// app/components/TopCategories.js
"use client"; 
import { FaLaptop, FaMicrochip, FaDesktop, FaSpeaker, FaTv, FaCode, FaGamepad, FaPrint, FaCamera, FaVideo } from 'react-icons/fa';

export default function TopCategories() {
  const categories = [
    { label: 'Laptop', icon: <FaLaptop size={40} /> },
    { label: 'Processor', icon: <FaMicrochip size={40} /> },
    { label: 'AIO PC', icon: <FaDesktop size={40} /> },
    { label: 'Speaker', icon: <FaSpeaker size={40} /> },
    { label: 'Monitor', icon: <FaTv size={40} /> },
    { label: 'Software', icon: <FaCode size={40} /> },
    { label: 'Gaming', icon: <FaGamepad size={40} /> },
    { label: 'Printer', icon: <FaPrint size={40} /> },
    { label: 'GPU', icon: <FaVideo size={40} /> },
    { label: 'Camera', icon: <FaCamera size={40} /> },
  ];

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top Categories</h2>
        <a href="#" className="text-sm text-green-600 hover:underline">See all categories</a>
      </div>
      <div className="grid grid-cols-5 bg-red-400 gap-6">
        {categories?.map((category, index) => (
          <div key={index} className="grid grid-cols-5 md:flex flex-col items-center group">
            <div className="p-4 rounded-full bg-gray-100 group-hover:bg-green-200 transition duration-300">
              {/* {category.icon} */}
            </div>
            <span className="mt-2 text-sm font-medium group-hover:text-green-700 transition duration-300">
              {/* {category.label} */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
