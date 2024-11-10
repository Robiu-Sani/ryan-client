import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Sidebar({
  wishlistItems,
  toggleSidebar,
  isSidebarOpen,
  removeWishlistItem,
}) {
  const getShortDescription = (text) => {
    const words = text.split(" ");
    return words.length > 13 ? words.slice(0, 13).join(" ") + "..." : text;
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full overflow-y-auto bg-white shadow-lg transform ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 w-72 md:w-96 z-[1000]`}
    >
      {/* Sidebar header */}
      <div className="flex justify-between items-center p-4 bg-[#CCCCCC] text-black">
        <h2 className="text-base font-semibold flex items-center gap-1">
          <FaCartArrowDown />
          Cart ({wishlistItems.length})
        </h2>
        <button onClick={toggleSidebar} className="text-xl font-bold">
          &times;
        </button>
      </div>

      {/* Cart content */}
      <div className="py-4 px-2">
        {wishlistItems.length === 0 ? (
          <p className="text-gray-900">Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item, index) => (
            //  <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
            //    <div>
            //      <h3 className="text-lg font-semibold">{item.name}</h3>
            //      <p className="text-sm text-gray-500">Price: Tk {item.price}</p>
            //    </div>
            //    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            //  </div>

            <div
              class="flex items-center mb-4 border-b border-black pb-4"
              key={index}
            >
              <Image
                class="h-[72px] w-[72px] object-contain mr-4"
                src={item.image[0]}
                alt="Product"
                width={72}
                height={72}
              />
              <div class="flex-1">
                <h2 class="text-xs leading-loose text-black font-bold">
                  {getShortDescription(item.description.en)}
                </h2>
                <span class="text-black text-xs font-bold">
                  Tk {item.prices.price} X 1
                </span>
              </div>
              <button
                onClick={() => removeWishlistItem(item._id)}
                class="text-gray-600 hover:text-red-500"
              >
                <RiDeleteBin6Line className="text-blue-500 hover:text-blue-600 text-lg" />
              </button>
            </div>
          ))
        )}

        <div className="text-center absolute bottom-2 w-full">
          <div className="border-t border-gray-400 text-black py-2 font-semibold">
            Sub Total:{" "}
            {wishlistItems.reduce(
              (total, item) => total + item.prices.price,
              0
            )}
          </div>

          <Link href={"/cart"}>
            <div className="bg-black text-white font-semibold py-2 text-xs">
              View Cart
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
