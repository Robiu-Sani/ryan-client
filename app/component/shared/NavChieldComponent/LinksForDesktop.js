import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

export default function LinksForDesktop({ NavItems }) {
  return (
    <nav className="hidden py-2 lg:flex gap-3 items-center justify-center shadow-2xl relative">
      <FaHome className="-mt-[2px]" />
      <div className="hidden lg:flex items-center space-x-4">
        {NavItems.map((item, index) => (
          <div key={index} className="group">
            {/* Navbar item */}
            <button className="text-[12px] font-semibold transition duration-200">
              {item.name.en}
            </button>

            {/* Submenu (dropdown) */}
            {item.children.length > 0 && (
              <div className="absolute  top-6 left-0 hidden group-hover:grid grid-cols-4 bg-[#CCCCCC] text-black p-4 rounded-lg shadow-lg mt-2 w-full z-50 gap-2">
                {item.children.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={`/category/${subItem.name.en
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="block group px-2 py-1 text-sm hover:bg-gray-200 w-full transition duration-200 group"
                  >
                    {subItem.name.en}
                    <div className="relative">
                      {subItem.children.length > 0 && (
                        <div className="absolute w-[200px] left-0 hidden group-hover:block grid-cols-1 bg-[#CCCCCC] text-black p-4 rounded-lg shadow-lg mt-2 z-50 gap-2">
                          {subItem.children.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`/category/${subItem.name.en
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className="block px-2 py-1 text-sm hover:bg-gray-200 w-full transition duration-200"
                            >
                              {subItem.name.en}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
