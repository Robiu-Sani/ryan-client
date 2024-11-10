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

export default function ProductCard({ product }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const images = product?.image;

  // Default large image (initially showing the first one)
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleAddToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productExists = wishlist.find((item) => item._id === product._id);

    if (!productExists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success(`${product.title.en} has been added to your Cart!`);
    } else {
      toast.error(`${product.title.en} is already in your Cart.`);
    }
  };

  const handleAddToCompareList = () => {
    let compare = JSON.parse(localStorage.getItem("compare")) || [];
    const productExists = compare.find((item) => item.id === product.id);

    if (!productExists) {
      compare.push(product);
      localStorage.setItem("compare", JSON.stringify(compare));
      toast.success(`${product.name} has been added to compare successfully`);
    } else {
      return toast.error(`${product.name} is already in your compare.`);
    }
  };

  // Limit the description to 30 words
  const getShortDescription = (text) => {
    const words = text.split(" ");
    return words.length > 13 ? words.slice(0, 13).join(" ") + "..." : text;
  };

  const rating = 3;
  const totalStars = 5;

  return (
    <div className="group relative border cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300 ">
      {/* Image Section */}
      <div className="overflow-hidden">
        <Link href={`/product-details/${product._id}`} className="">
          <Image
            src={product?.image[0]}
            alt={product?.title.en}
            width={150}
            height={170}
            className="w-full h-44 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </Link>

        {/* Icons - initially hidden, shows on hover */}
        <div className="absolute flex flex-col top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Tooltip
            showArrow
            content="Add to Cart"
            className="text-black bg-white"
          >
            <button
              onClick={handleAddToWishlist}
              className="bg-white h-7 w-7 text-black rounded-full shadow hover:bg-[#666] hover:text-white"
            >
              <FaCartPlus className=" text-base w-fit mx-auto" />
            </button>
          </Tooltip>
          <Tooltip
            showArrow
            content="Add to Compare"
            className="text-black bg-white"
          >
            <button
              onClick={handleAddToCompareList}
              className="bg-white h-7 w-7 text-black rounded-full shadow hover:bg-[#666] hover:text-white"
            >
              <GoArrowSwitch className=" text-base w-fit mx-auto" />
            </button>
          </Tooltip>
          <Tooltip
            showArrow
            content="Add to Favourite"
            className="text-black bg-white"
          >
            <button className="bg-white h-7 w-7 text-black mx-auto rounded-full shadow hover:bg-[#666] hover:text-white">
              <FaHeart className=" text-base w-fit mx-auto" />
            </button>
          </Tooltip>
          <Tooltip
            showArrow
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
      <Link href={`/product-details/${product._id}`} className="">
        <div className="p-2 text-center">
          <h3 className=" text-slate-900 font-semibold">{product?.title.en}</h3>
          <p className="text-[14px] text-gray-600">
            {getShortDescription(product?.description.en.slice(0, 25))}...
          </p>
          <div className="mt-2 font-bold text-slate-900">
            Tk {product?.prices.price}
          </div>
          <p className="text-xs font-semibold text-purple-700">
            {product?.prices.discount}
          </p>
        </div>
      </Link>

      <Modal
        className="fixed z-[1000] top-[52px] md:top-0 rounded-none"
        isOpen={isOpen}
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-[95%] mx-auto h-full md:w-[85%] lg:w-[75%] xl:w-[70%]">
          {(onClose) => (
            <>
              {/* Close button */}
              <div className="absolute z-40 top-2 right-2">
                <button
                  onClick={onClose}
                  className="text-black bg-white rounded-full py-1 px-2 hover:bg-gray-300 transition duration-200"
                >
                  ✕
                </button>
              </div>

              {/* Modal body */}
              <ModalBody className="text-black mx-auto pb-20 pt-5 md:pb-5 md:pt-5 overflow-y-auto h-full md:h-[calc(100vh-30px)]">
                <div className="flex lg:flex-row flex-col justify-center mx-auto">
                  {/* Other modal content */}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
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
    marginBottom: "10px",
  },
  largeImage: {
    height: "100%",
    objectFit: "cover",
  },
  thumbnail: {
    cursor: "pointer",
    objectFit: "cover",
    border: "1px solid #ddd",
  },
  star: {
    fontSize: "20px",
    color: "#73BF43",
  },
};
