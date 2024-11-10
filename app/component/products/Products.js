"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function Products() {
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/show`)
      .then((result) => setShowProducts(result.data))
      .catch((err) => console.error("Error fetching navbar items", err));
  }, []);

  return (
    <div className="py-2 px-3 md:px-10 lg:px-9 mt-4 mb-5 bg-gray-100">
      <div>
        <div className=" items-center justify-between">
          <div className="w-32 h-[4px] border-r-[15px] md:border-r-[20px] border-r-transparent border-b-[25px] md:border-b-[35px] border-b-black text-white relative">
            <p className="absolute top-[3px] left-[15px] text-base md:text-xl font-bold">
              Collections
            </p>
          </div>
        </div>
        <div className="h-[2px] w-full bg-black"></div>
        {/* <a href="#" className="text-orange-600 hover:underline">See all categories</a> */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-5">
        {showProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
