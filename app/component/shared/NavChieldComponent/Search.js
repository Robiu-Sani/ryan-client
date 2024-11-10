import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({ search }) {
  return (
    <div>
      {search && (
        <div className="lg:hidden flex items-center w-11/12 mx-auto py-2">
          <input
            type="text"
            placeholder="Enter Your Keyword..."
            className="px-4 py-1 h-10 w-full rounded-l-lg focus:outline-none outline-none text-black focus:ring-2 "
          />
          <button className="bg-[#72BF44] text-white px-4 py-1 h-10 rounded-r-md hover:bg-[#72BF44] transition duration-200">
            <FaSearch />
          </button>
        </div>
      )}
    </div>
  );
}
