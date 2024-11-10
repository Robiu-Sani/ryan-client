"use client";
import { FaHome } from "react-icons/fa";
import CompareCard from "../component/Compare/CompareCard";
import { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [compareList, setCompareList] = useState([]);

  // Load compare list from local storage on component mount
  useEffect(() => {
    const storedCompareList = JSON.parse(localStorage.getItem("compare")) || [];
    setCompareList(storedCompareList);
  }, []);

  // Clear all products from compare list
  const handleClearAll = () => {
    localStorage.removeItem("compare");
    setCompareList([]);
  };

  // Example products data
  const products = [
    {
      brand: "Twinmos",
      model: "Twinmos AlphaPro 512GB",
      type: "Internal SSD",
      storage: "512GB",
      formFactor: "M.2 2280",
      interfaceMode: "NVMe",
      regularPrice: 5210,
      specialPrice: 4800,
      productID: "04.02.048.72",
      image:
        "https://www.ryans.com/storage/products/small/dell-vostro-15-3530-intel-core-i3-1305u-8gb-ram-71726374426.webp",
    },
    {
      brand: "Twinmos",
      model: "Twinmos AlphaPro 1TB",
      type: "Internal SSD",
      storage: "1TB",
      formFactor: "M.2 2280",
      interfaceMode: "NVMe",
      regularPrice: 9500,
      specialPrice: 9000,
      productID: "04.02.048.73",
      image:
        "https://www.ryans.com/storage/products/small/dell-vostro-15-3530-intel-core-i3-1305u-8gb-ram-71726374426.webp",
    },
    // Add more products as needed
  ];

  const buttonClass =
    "px-2 py-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white";

  return (
    <div>
      <div className="bg-[#F2F2F2] pt-3 pb-7 text-black">
        <div className="px-3">
          <div className="flex justify-start items-center gap-3 bg-white px-3 py-1 border mb-4 text-xs md:text-base">
            <FaHome /> Compare
          </div>

          <div className="grid grid-cols-4 gap-0 md:grid-cols-2 sm:grid-cols-1">
            {/* Left Section */}
            <div className="border bg-white">
              <div className="px-4 py-20 flex flex-col items-center space-y-3">
                <div className="flex items-center gap-3">
                  <button className={buttonClass} onClick={handleClearAll}>
                    Clear All
                  </button>
                  <button className={buttonClass}>Print</button>
                </div>
                <div className="text-2xl font-bold">Product Comparison</div>
                <p className="text-gray-600 text-sm">
                  ({compareList.length} Product Selected)
                </p>
              </div>
            </div>

            {/* Middle Section - Product Cards */}
            <div className="col-span-2 border flex flex-wrap items-center justify-center gap-4 p-4">
              {compareList.length > 0 ? (
                compareList.map((item, index) => (
                  <CompareCard item={item} key={index} />
                ))
              ) : (
                <p className="text-gray-500">
                  No products selected for comparison.
                </p>
              )}
            </div>

            {/* Right Section */}
            <div className="border p-4">
              <p className="text-center">Additional Information or Actions</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full border">
              <tbody>
                <tr>
                  <th className="p-2 border text-left">Brand</th>
                  {products.map((product, index) => (
                    <td key={index} className="p-2 border">
                      {product.brand}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border text-left">Model</th>
                  {products.map((product, index) => (
                    <td key={index} className="p-2 border">
                      {product.model}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border text-left">Type</th>
                  {products.map((product, index) => (
                    <td key={index} className="p-2 border">
                      {product.type}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border text-left">Storage</th>
                  {products.map((product, index) => (
                    <td key={index} className="p-2 border">
                      {product.storage}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border text-left">Form Factor</th>
                  {products.map((product, index) => (
                    <td key={index} className="p-2 border">
                      {product.formFactor}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border text-left">Interface Mode</th>
                  {products.map((product, index) => (
                    <td key={index} className="p-2 border">
                      {product.interfaceMode}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border text-left">Regular Price</th>
                  {products.map((product, index) => (
                    <td key={index} className="p-2 border">
                      {product.regularPrice} ৳
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border text-left">Special Price</th>
                  {products.map((product, index) => (
                    <td
                      key={index}
                      className="p-2 border text-red-500 font-bold"
                    >
                      {product.specialPrice} ৳
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
