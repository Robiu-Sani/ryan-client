import React from "react";
import { FaHome } from "react-icons/fa";
import CompleteProfile from "./CompleteProfile";
import UpdatePassword from "./UpdatePassword";

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="flex mt-2 justify-start items-center gap-2 bg-white px-3 py-1 border mb-4 text-xs md:text-base">
        <FaHome /> Update Info
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {" "}
        <CompleteProfile /> <UpdatePassword />{" "}
      </div>
    </div>
  );
}
