// app/components/ProductCard.js
"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { FaHeart, FaSyncAlt, FaEye, FaCartPlus, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { GoArrowSwitch } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import { PiStarThin } from "react-icons/pi";
import Image from "next/image";

export default function FavouriteCard({ product }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const images = [
    "/images/mac.jpg", // Small images array
    "/images/mac1.png",
    "/images/mac2.jpg",
    "/images/mac3.jpg",
  ];

  // Default large image (initially showing the first one)
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleAddToWishlist = () => {
    // Get the current wishlist from local storage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if the product already exists in the wishlist
    const productExists = wishlist.find((item) => item.id === product.id);

    if (!productExists) {
      // Add product to wishlist
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success(`${product.name} has been added to your Cart!`);
    } else {
      toast.success(`${product.name} is already in your Cart.`);
    }
  };

  const rating = 3;
  const totalStars = 5;

  return (
    <div className="group relative border cursor-pointer flex md:grid bg-white p-2 md:p-0 md:pb-10 overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      {/* Image Section */}
      <div className="overflow-hidden w-4/12 md:w-full">
        <Link href={"/product-details"} className="">
          <Image
            src={product?.image}
            alt={product?.name}
            width={150}
            height={100}
            className="w-full h-32 md:h-44 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </Link>

        {/* Icons - initially hidden, shows on hover */}
        <div className="absolute flex flex-col top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* <Tooltip showArrow={true} content="Add to Cart" className='text-black bg-white'>  
            <button onClick={handleAddToWishlist} className="bg-white h-7 w-7 text-black rounded-full shadow hover:bg-[#666] hover:text-white">
            <FaCartPlus className=" text-base w-fit mx-auto" />
          </button>
          </Tooltip>  */}
          <Tooltip
            showArrow={true}
            content="Add to Compare"
            className="text-black bg-white"
          >
            <button className="bg-white h-7 w-7 text-black rounded-full shadow hover:bg-[#666] hover:text-white">
              <GoArrowSwitch className=" text-base w-fit mx-auto" />
            </button>
          </Tooltip>
          <Tooltip
            showArrow={true}
            content="Add to Favourite"
            className="text-black bg-white"
          >
            <button className="bg-white h-7 w-7 text-red-600 mx-auto rounded-full shadow hover:bg-[#666] ">
              <FaHeart className=" text-base w-fit mx-auto" />
            </button>
          </Tooltip>
          <Tooltip
            showArrow={true}
            content="Quick View"
            className="text-black bg-white"
          >
            <button
              onClick={onOpen}
              className="bg-white h-7 w-7 text-black rounded-full shadow hover:bg-[#666] hover:text-white"
            >
              <FaEye className=" text-lg w-fit mx-auto" />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Product Info Section */}
      <Link href={"/product-details"} className="w-8/12 md:w-full ">
        <div className="p-2 text-left md:text-center relative">
          <h3 className=" text-slate-900 font-semibold text-sm">
            {product.name}
          </h3>
          {/* <p className="text-[14px] text-gray-600">{product.description}</p> */}
          <div className="mt-2 font-bold text-slate-900 text-sm md:text-base">
            Tk {product.price}
          </div>
          <p className="text-xs font-semibold text-purple-700">
            {product.offer}
          </p>
        </div>
      </Link>

      <Modal
        className="relative top-14 md:top-10 rounded-none"
        isOpen={isOpen}
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-full h-full md:w-[85%] lg:w-[75%] xl:w-[70%]">
          {(onClose) => (
            <>
              {/* Add a close button */}
              <div className="absolute z-40 top-2 right-2">
                <button
                  onClick={onClose}
                  className="text-black bg-white rounded-full py-1 px-2 hover:bg-gray-300 transition duration-200"
                >
                  ✕
                </button>
              </div>

              {/* ModalBody allowing scroll */}
              <ModalBody className="text-black py-10 overflow-y-auto h-[calc(100vh-50px)]">
                <div className="flex lg:flex-row flex-col justify-center">
                  <div
                    className="lg:w-[50%] relative w-full image-gallery-container py-5 items-center"
                    style={styles.container}
                  >
                    <div className="relative flex gap-5">
                      {/* Small images (thumbnails) */}
                      <div
                        className="small-images w-[20%]"
                        style={styles.smallImagesContainer}
                      >
                        {images.map((image, index) => (
                          <Image
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="rounded-none"
                            onClick={() => setSelectedImage(image)}
                            style={styles.thumbnail}
                            width={50}
                            height={50}
                          />
                        ))}
                      </div>

                      <div
                        className="large-image w-[95%]"
                        style={styles.largeImageContainer}
                      >
                        <Image
                          src={selectedImage}
                          alt="Selected"
                          className=""
                          width={50}
                          height={50}
                          style={styles.largeImage}
                        />
                      </div>
                      <p className="absolute bottom-[-45px] text-[9px] w-[87%]">
                        N.B. Image may differ with actual products layout,
                        color, size & dimension. No claim will be accepted for
                        image mismatch.
                      </p>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="lg:w-[50%] w-full mt-10 md:mt-0 md:p-3">
                    <h2 className="text-[20px] font-semibold text-gray-800 max-w-[90%]">
                      Dell Vostro 15 3530 Intel Core i3 1305U 8GB RAM, 512GB SSD
                      15.6 Inch FHD Display Titan Grey Laptop
                    </h2>
                    <div className="flex justify-start items-center gap-2">
                      <div className="flex justify-start items-center gap-1">
                        {[...Array(totalStars)].map((star, index) => {
                          return (
                            <span
                              key={index}
                              className="my-3"
                              style={styles.star}
                            >
                              {index < rating ? (
                                <FaStar className="text-sm" />
                              ) : (
                                <PiStarThin className="text-sm" />
                              )}
                            </span>
                          );
                        })}
                      </div>
                      <div className="text-xs text-gray-400">3 reviews</div>
                    </div>
                    <p className="text-sm mb-1 text-gray-700">
                      Product Id: 101.04.754.15
                    </p>
                    <div className="bg-[#F2F2F2] p-2 w-[200px]">
                      <p className="text-sm">Special Price</p>
                      <p className="text-[20px] font-semibold text-gray-900">
                        Tk 11,000
                      </p>
                    </div>
                    <Tooltip
                      placement="top"
                      showArrow={true}
                      className="bg-black/90 text-gray-100"
                      content="Discount on Special price E-commerce order only"
                    >
                      <p className="text-blue-500 font-semibold text-sm mb-3 mt-1">
                        Save Tk 10,000 on online order
                      </p>
                    </Tooltip>

                    {/* Price Section */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-900">Regular Price:</p>
                      <p className="text-[19px] text-gray-900 mt-[2px]">
                        {" "}
                        Tk 324,420
                      </p>
                      <p className="text-gray-900 text-[13px] font-semibold">
                        EMI: Tk 27,035
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="px-3 bg-[#72BF44] hover:bg-green-600 text-[16px] font-bold text-white py-1">
                      Add to Cart
                    </button>

                    {/* Quick Overview */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold">Quick Overview</h3>
                      <ul className="mt-2 ml-4 text-[14px] space-y-[3px] list-disc">
                        <li>
                          <span className="font-semibold">Processor Type:</span>{" "}
                          Apple M1
                        </li>
                        <li>
                          <span className="font-semibold">Generation:</span> M
                          Series
                        </li>
                        <li>
                          <span className="font-semibold">
                            Display Size (Inch):
                          </span>{" "}
                          14.2
                        </li>
                        <li>
                          <span className="font-semibold">RAM:</span> 32GB
                        </li>
                        <li>
                          <span className="font-semibold">Storage:</span> 1TB
                          SSD
                        </li>
                        <li>
                          <span className="font-semibold">
                            Graphics Memory:
                          </span>{" "}
                          Shared
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="flex md:hidden items-center w-[65%] mx-auto  gap-2 absolute bottom-3 right-[-5px]">
        <div
          onClick={handleAddToWishlist}
          className="bg-[#72BF44] text-sm font-bold py-1 px-2"
        >
          Add to Cart
        </div>
        <Tooltip
          showArrow={true}
          content="Add to Compare"
          className="text-black bg-[#f2f2f2]"
        >
          <button className="bg-[#f2f2f2] h-7 w-7 text-black rounded-md shadow hover:bg-[#666] hover:text-white">
            <GoArrowSwitch className=" text-base w-fit mx-auto" />
          </button>
        </Tooltip>
        <Tooltip
          showArrow={true}
          content="Add to Favourite"
          className="text-black bg-[#f2f2f2]"
        >
          <button className="bg-[#f2f2f2] h-7 w-7 text-red-600 rounded-md shadow hover:bg-[#666] ">
            <FaHeart className=" text-base w-fit mx-auto" />
          </button>
        </Tooltip>
        <Tooltip
          showArrow={true}
          content="Quick View"
          className="text-black bg-[#f2f2f2]"
        >
          <button
            onClick={onOpen}
            className="bg-[#f2f2f2] h-7 w-7 text-black rounded-md shadow hover:bg-[#666] hover:text-white"
          >
            <FaEye className=" text-lg w-fit mx-auto" />
          </button>
        </Tooltip>
      </div>

      <div
        onClick={handleAddToWishlist}
        className="bg-[#cccccc] hidden md:grid absolute bottom-[-1px] mt-5 w-full text-center text-black font-bold text-sm py-2"
      >
        Add to Cart
      </div>
    </div>
  );
}

// Inline styles for the component
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
  },
  largeImageContainer: {
    width: "280px",
    height: "280px",
    marginBottom: "10px",
  },
  largeImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  smallImagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  thumbnail: {
    width: "60px",
    height: "60px",
    cursor: "pointer",
    objectFit: "cover",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },

  star: {
    fontSize: "20px", // You can adjust the size of the stars here
    color: "#73BF43", // Gold color for filled stars
  },
};
