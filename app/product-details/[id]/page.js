"use client";

import { Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaLongArrowAltRight,
  FaMoneyBill,
  FaRegHeart,
  FaSitemap,
  FaTruck,
} from "react-icons/fa";
import ShareButtons from "../../component/shared/Sharebutton";
import ReactImageMagnify from "react-image-magnify";
import axios from "axios";
import Image from "next/image";

const Page = ({ params }) => {
  const [isModalOpen, setIsModalOpen] = useState(1);
  const [showProducts, setShowProducts] = useState([]);
  const [product, setProduct] = useState(null);

  const { id } = params;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/show`)
      .then((result) => {
        setShowProducts(result.data);
        const matchedProduct = result.data.find((item) => item._id === id);
        setProduct(matchedProduct);
        setSelectedImage(matchedProduct?.image[0]);
      })
      .catch((err) => console.error("Error fetching products", err));
  }, [id]);

  // Ensure we only proceed when product data is available
  const images = product?.image || [];
  const [selectedImage, setSelectedImage] = useState();

  const rating = 5;
  const totalStars = 5;
  const [showTooltip, setShowTooltip] = useState(false);

  const productUrl = product?.image[0];
  const productTitle = product?.title?.en;

  if (!product) {
    return <div>Loading...</div>; // Show loading message until product is fetched
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-black py-4 lg:px-6 px-4">
      {/* Breadcrumb Section */}
      <div className="flex justify-start items-center gap-2 bg-white px-3 py-1 border rounded">
        <FaHome /> <FaLongArrowAltRight /> <p>Laptop</p> <FaLongArrowAltRight />{" "}
        <p> Asus</p> <FaLongArrowAltRight /> Asus Zen
      </div>

      <div className="flex lg:flex-row flex-col justify-between my-3">
        {/* Image Gallery Section */}
        <div className="lg:w-[49.5%] w-full bg-white flex flex-col lg:flex-row items-start px-3">
          <div className="small-images lg:w-[20%] w-full py-3 flex flex-row lg:flex-col items-center gap-3 overflow-x-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className={`rounded-sm p-[6px] lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] ${
                  selectedImage === image ? "" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  width={60}
                  height={60}
                  className={`${
                    selectedImage === image ? "" : "opacity-45"
                  } rounded lg:w-[85px] lg:h-[85px] w-[60px] h-[60px]`}
                />
              </div>
            ))}
          </div>
          <div className="flex lg:w-[90%] h-[50vh] w-full justify-center items-center my-4">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "product image",
                  isFluidWidth: true,
                  src: selectedImage,
                  style: { height: "500px" },
                  imageClassName: "large-image",
                },
                largeImage: {
                  src: selectedImage,
                  width: 450,
                  height: 800,
                },
              }}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:w-[49.5%] w-full bg-white p-3">
          <h2 className="text-base font-semibold text-gray-800 max-w-[90%]">
            {product?.description?.en}
          </h2>
          <p className="text-sm my-3">Product Id: 101.04.754.15</p>
          <div className="bg-[#F2F2F2] p-2 w-[200px]">
            <p className="text-sm">Special Price</p>
            <p className="text-base font-semibold text-gray-900">Tk 11,000</p>
          </div>
          <Tooltip
            placement="top"
            showArrow
            className="bg-black/90 text-gray-100"
            content="Discount on Special price E-commerce order only"
          >
            <p className="text-blue-500 font-semibold text-sm">
              Save Tk 10,000 on online order
            </p>
          </Tooltip>

          {/* Price Section */}
          <div className="mb-4 mt-3">
            <p className="text-sm text-gray-900">Regular Price:</p>
            <p className="text-[19px] text-gray-900 mt-[2px]"> Tk 324,420</p>
            <span
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="emi-price text-gray-900 text-[13px] font-semibold"
            >
              EMI TK 995
            </span>
            {showTooltip && (
              <div className="tooltip-content">
                <h4>Monthly Installment (EMI)</h4>
                <ul className="border-x border-t border-white">
                  <li className="border-b border-white">
                    BDT 995 for 12 months
                  </li>
                  <li className="border-b border-white">
                    BDT 1,327 for 9 months
                  </li>
                  <li className="border-b border-white">
                    BDT 1,990 for 6 months
                  </li>
                  <li className="border-b border-white">
                    BDT 3,980 for 3 months
                  </li>
                </ul>
                <span className="note">Note: Only available in Branches</span>
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="px-3 bg-[#72BF44] font-semibold text-white py-[3px]">
            Check Availability
          </button>

          {/* Quick Overview */}
          <div className="mt-6">
            <h3 className="text-base font-semibold text-gray-800">
              Quick Overview
            </h3>
            <ul className="mt-2 ml-4 text-xs text-gray-700 space-y-[3px] list-disc">
              <li>
                <span className="font-semibold">Processor Type:</span> Apple M1
              </li>
              <li>
                <span className="font-semibold">Generation:</span> M Series
              </li>
              <li>
                <span className="font-semibold">Display Size (Inch):</span> 14.2
              </li>
              <li>
                <span className="font-semibold">RAM:</span> 32GB
              </li>
              <li>
                <span className="font-semibold">Storage:</span> 1TB SSD
              </li>
              <li>
                <span className="font-semibold">Graphics Memory:</span> Shared
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-start items-center lg:flex-row flex-col gap-2 my-2">
            <button className="px-3 bg-[#72BF44] font-semibold text-white py-[2px] rounded-sm">
              Add to cart
            </button>
            <button className="px-3 bg-[#F2F2F2] font-semibold text-gray-900 py-[2px] rounded-sm">
              Compare
            </button>
            <button className="px-3 bg-[#F2F2F2] font-semibold text-gray-900 py-[4px] rounded-sm">
              <FaRegHeart />
            </button>
          </div>

          {/* Info Buttons */}
          <div className="flex lg:flex-row flex-col justify-start items-center gap-2 text-sm text-gray-700">
            <div className="bg-[#F2F2F2] flex items-center gap-2 px-2 py-2 rounded-sm">
              <FaTruck /> Shipping & Charge
            </div>
            <div className="bg-[#F2F2F2] flex items-center gap-2 px-2 py-2 rounded-sm">
              <FaSitemap /> Order Procedure
            </div>
            <div className="bg-[#F2F2F2] flex items-center gap-2 px-2 py-2 rounded-sm">
              <FaMoneyBill /> Payments Options
            </div>
          </div>
        </div>
      </div>

      {/* Sharing Section */}
      <div className="my-4">
        <ShareButtons url={`https://example.com/products/${id}`} />
      </div>
    </div>
  );
};

export default Page;
