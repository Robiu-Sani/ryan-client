"use client";

import React, { useEffect, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaHome, FaLongArrowAltRight } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { toast } from "react-toastify";

export default function CartCheckout({ handleCheckout, SelectedProduct }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(items);

    // Initialize quantities and checked items
    const initialQuantities = items.reduce((acc, _, index) => {
      acc[index] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);

    const initialCheckedItems = items.reduce((acc, item) => {
      acc[item._id] = false;
      return acc;
    }, {});
    setCheckedItems(initialCheckedItems);
  }, []);

  const handleQuantityChange = (index, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: Math.max(prevQuantities[index] + change, 1),
    }));
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevChecked) => {
      const newChecked = { ...prevChecked, [id]: !prevChecked[id] };
      setIsAllChecked(Object.values(newChecked).every(Boolean));
      return newChecked;
    });
  };

  const handleMasterCheckboxChange = () => {
    const newCheckedState = !isAllChecked;
    setCheckedItems(
      wishlistItems.reduce((acc, item) => {
        acc[item._id] = newCheckedState;
        return acc;
      }, {})
    );
    setIsAllChecked(newCheckedState);
  };

  const calculateSubtotal = () => {
    return wishlistItems.reduce((total, item, index) => {
      if (checkedItems[item._id]) {
        const itemPrice = item.prices.price * (quantities[index] || 1);
        return total + itemPrice;
      }
      return total;
    }, 0);
  };

  const removeWishlistItem = (id) => {
    const NewData = wishlistItems.filter((item) => item._id !== id);
    localStorage.setItem("wishlist", JSON.stringify(NewData));
    toast.success(`Item has been deleted from your Cart!`);
    setWishlistItems(NewData);
  };

  const handleRegularCheckout = () => {
    // Collect selected product and quantity data
    const selectedProductData = wishlistItems.filter(
      (item) => checkedItems[item._id]
    );
    const quantitiesData = selectedProductData.map((item, index) => ({
      productName: item.title.en,
      quantity: quantities[index],
    }));

    // Call the parent functions with selected products and quantities
    handleCheckout(true, calculateSubtotal());
    SelectedProduct(selectedProductData, quantitiesData);
  };

  return (
    <div>
      <div className="bg-[#F2F2F2] pt-3 pb-7 text-black">
        <div className=" px-4">
          <div className="flex justify-start items-center gap-2 bg-white px-3 py-1 border mb-4 text-xs md:text-base">
            <FaHome /> <FaLongArrowAltRight /> Cart
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-4/5">
              <div className="bg-white rounded-sm border border-gray-300 p-1">
                <div className="flex items-center justify-between text-base font-bold mb-4 bg-[#E9E9E9] py-2 px-2 md:px-3 w-full">
                  <p className="text-sm md:text-base">
                    You have ({wishlistItems.length}) items in your cart
                  </p>
                  <p className="text-[#72BF44] flex items-center text-sm md:text-base">
                    <BiSupport className=" md:text-lg" />
                    <span className="underline">Need Help?</span>
                  </p>
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-full flex justify-start items-start px-4">
                    <label className="flex justify-center items-center gap-3">
                      <input
                        className="w-3"
                        type="checkbox"
                        checked={isAllChecked}
                        onChange={handleMasterCheckboxChange}
                      />
                      Check All
                    </label>
                  </div>
                  <div className="w-full">
                    {wishlistItems.map((item, index) => (
                      <div
                        key={index}
                        className="w-full p-2 border-b flex items-center justify-between"
                      >
                        <div className="flex justify-center min-w-10 items-center">
                          <input
                            className="w-3 md:w-full"
                            type="checkbox"
                            checked={checkedItems[item._id] || false}
                            onChange={() => handleCheckboxChange(item._id)}
                          />
                        </div>
                        <div className="flex justify-center items-center">
                          <Image
                            className="h-16 min-w-16 mr-4"
                            src={item.image[0]}
                            alt={item.title.en}
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="flex flex-col w-full justify-center mx-3 items-start">
                          <h3 className="text-xl font-bold">{item.title.en}</h3>
                          <span className="py-3 text-xs font-normal">
                            Tk {item.prices.price}
                          </span>
                          <div className="flex items-center border-y border-gray-400">
                            <button
                              onClick={() => handleQuantityChange(index, -1)}
                              className="border-x border-gray-400 px-[10px] mr-2"
                            >
                              -
                            </button>
                            <span className="text-center w-8">
                              {quantities[index]}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(index, 1)}
                              className="border-x border-gray-400 px-2 ml-2"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div
                            onClick={() => removeWishlistItem(item._id)}
                            className="p-1 text-xs bg-[#cccccc] cursor-pointer"
                          >
                            <RiDeleteBin6Line className="text-xl" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white rounded-sm border border-gray-300 p-1">
                <h2 className="text-sm md:text-base font-bold mb-4 bg-[#E9E9E9] py-2 px-3 text-center md:text-left">
                  Price Details
                </h2>
                <div className="px-3">
                  <div className="flex justify-between mb-3 font-bold text-xs md:text-sm">
                    <span>Subtotal</span>
                    <span>Tk {calculateSubtotal()}</span>
                  </div>
                  <div className="flex justify-between mb-3 font-bold text-xs md:text-sm">
                    <span>Ecom Discount</span>
                    <span>Tk 0</span>
                  </div>
                  <div className="flex justify-between mb-3 font-bold text-xs md:text-sm">
                    <span>Total</span>
                    <span>Tk {calculateSubtotal()}</span>
                  </div>
                </div>
              </div>
              <button className="bg-black text-white text-xs font-bold py-2 px-4 mt-4 w-full">
                Continue Shopping
              </button>
              <button
                onClick={handleRegularCheckout}
                className="bg-[#72BF44] text-white text-xs font-bold py-2 px-4 mt-2 w-full"
              >
                Regular Checkout
              </button>
              <button className="bg-[#72BF44] text-white text-xs font-bold py-2 px-4 mt-2 w-full">
                Express Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
