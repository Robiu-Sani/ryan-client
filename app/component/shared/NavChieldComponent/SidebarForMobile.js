import Link from "next/link";
import React from "react";
import { FaHome, FaPlus } from "react-icons/fa";

export default function SidebarForMobile({
  isSidebarOpenMobile,
  toggleSidebarMobile,
  NavItems,
}) {
  return (
    <div
      className={`fixed top-0  left-0 h-full bg-black text-white shadow-lg transform ${
        isSidebarOpenMobile ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 w-80 z-[1000]`}
    >
      <div className="flex justify-end items-center p-4 bg-black text-white px-4 ">
        <button
          onClick={toggleSidebarMobile}
          className="text-2xl font-semibold"
        >
          ✕
        </button>
      </div>
      <FaHome className="m-2 text-white -mt-5"></FaHome>
      <div className="h-screen px-2 overflow-y-scroll">
        {NavItems.map((item, idx) => (
          <details
            key={idx}
            className="border-t-[1px] border-gray-3 py-2 text-xs px-2 w-full"
          >
            {/* The summary tag is clickable and toggles the expand/collapse */}
            <summary className="flex justify-between items-center  cursor-pointer">
              <Link
                href={`/${item.name.en}`}
                className="te00xt-sm font-medium "
              >
                {item.name.en}
              </Link>
              <FaPlus />
            </summary>

            {/* The details content */}
            {item.children.length > 0 && (
              <div className="mt-1 px-3">
                <div className="flex flex-col gap-1">
                  {item.children.map((subitem, idx) => (
                    <Link
                      href={`/${subitem.name.en
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      key={idx}
                      className="py-1 text-xs text-left hover:bg-gray-200"
                    >
                      {subitem.name.en}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </details>
        ))}

        {/* Details (Expandable section) */}
      </div>
    </div>
  );
}
